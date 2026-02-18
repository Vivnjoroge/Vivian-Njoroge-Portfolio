
import React, { useEffect, useRef } from 'react';

const ParticlesBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: Particle[] = [];
    let animationFrameId: number;

    const mouse = {
      x: null as number | null,
      y: null as number | null,
      radius: 100, // Reduced hover radius for subtler interaction
      isClicked: false,
    };

    const handleMouseMove = (event: MouseEvent) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    };

    const handleMouseDown = () => {
      mouse.isClicked = true;
      if (mouse.x !== null && mouse.y !== null) {
        const clickRadius = 250; // Slightly reduced pop radius
        particles.forEach(p => {
          const dx = mouse.x! - p.x;
          const dy = mouse.y! - p.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < clickRadius) {
            p.markedForDeletion = true;
          }
        });
      }
      setTimeout(() => { mouse.isClicked = false; }, 100);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);

    class Particle {
      x: number;
      y: number;
      directionX: number;
      directionY: number;
      size: number;
      color: string;
      opacity: number;
      markedForDeletion: boolean;

      constructor(x: number, y: number, directionX: number, directionY: number, size: number, color: string) {
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
        this.color = color;
        this.opacity = 1;
        this.markedForDeletion = false;
      }

      draw() {
        if (!ctx || this.opacity <= 0) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        // Apply opacity to the existing color string
        const colorWithOpacity = this.color.replace(/[\d.]+\)$/g, `${(this.opacity * 0.4).toFixed(2)})`);
        ctx.fillStyle = colorWithOpacity;
        ctx.fill();
      }

      update() {
        if (!canvas) return;
        
        // Handle wall collisions
        if (this.x > canvas.width || this.x < 0) this.directionX = -this.directionX;
        if (this.y > canvas.height || this.y < 0) this.directionY = -this.directionY;

        // Hover Disappearance Logic
        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < mouse.radius) {
            this.opacity -= 0.1;
          }
        }

        if (this.opacity <= 0) {
          this.markedForDeletion = true;
        }

        this.x += this.directionX;
        this.y += this.directionY;
        this.draw();
      }
    }

    const createParticle = () => {
      const size = Math.random() * 1.5 + 0.5; // Smaller, more minimal particles
      const x = Math.random() * (canvas.width - size * 2) + size;
      const y = Math.random() * (canvas.height - size * 2) + size;
      const directionX = (Math.random() * 0.3) - 0.15; // Slower, calmer movement
      const directionY = (Math.random() * 0.3) - 0.15;
      const color = Math.random() > 0.5 ? 'rgba(59, 130, 246, 0.4)' : 'rgba(34, 211, 238, 0.4)';
      return new Particle(x, y, directionX, directionY, size, color);
    };

    const init = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particles = [];
      // Significant reduction in density (from 7000 to 22000 divisor)
      const numberOfParticles = (canvas.width * canvas.height) / 22000;
      for (let i = 0; i < numberOfParticles; i++) {
        particles.push(createParticle());
      }
    };

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles = particles.filter(p => !p.markedForDeletion);
      
      const targetCount = (canvas.width * canvas.height) / 22000;
      if (particles.length < targetCount * 0.9) {
        particles.push(createParticle());
      }

      particles.forEach((p) => p.update());
      connect();
    };

    const connect = () => {
      if (!ctx || !canvas) return;
      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x;
          const dy = particles[a].y - particles[b].y;
          const distance = dx * dx + dy * dy;

          if (distance < 140 * 140) {
            const avgOpacity = (particles[a].opacity + particles[b].opacity) / 2;
            const distOpacity = 1 - distance / (140 * 140);
            // Much fainter connection lines
            const finalOpacity = distOpacity * 0.1 * avgOpacity;
            
            if (finalOpacity > 0.005) {
              ctx.strokeStyle = `rgba(148, 163, 184, ${finalOpacity})`;
              ctx.lineWidth = 0.5;
              ctx.beginPath();
              ctx.moveTo(particles[a].x, particles[a].y);
              ctx.lineTo(particles[b].x, particles[b].y);
              ctx.stroke();
            }
          }
        }
      }
    };

    window.addEventListener('resize', init);
    init();
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', init);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0, backgroundColor: 'transparent' }}
    />
  );
};

export default ParticlesBackground;
