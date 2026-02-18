
import React from 'react';
import { Project, Skill, NavItem } from './types';
import { Github, Linkedin, Mail, Code2, Database, Wrench, MessageCircle } from 'lucide-react';

export const COLORS = {
  navy: '#0F172A',
  electricBlue: '#3B82F6',
  softCyan: '#22D3EE',
  lightGray: '#F8FAFC',
  charcoal: '#1E293B',
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact', href: '/contact' },
];

export const SKILLS: Skill[] = [
  { name: 'HTML', level: 95, category: 'Frontend' },
  { name: 'CSS', level: 90, category: 'Frontend' },
  { name: 'JavaScript', level: 85, category: 'Frontend' },
  { name: 'Vue.js', level: 80, category: 'Frontend' },
  { name: 'Java', level: 90, category: 'Backend' },
  { name: 'Node.js', level: 75, category: 'Backend' },
  { name: 'Python', level: 80, category: 'Backend' },
  { name: 'Git', level: 85, category: 'Tools' },
  { name: 'GitHub', level: 90, category: 'Tools' },
  { name: 'SQL', level: 80, category: 'Tools' },
  { name: 'Figma', level: 70, category: 'Tools' },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Java Inventory System',
    description: 'A robust warehouse management system built with Java and SQL, featuring real-time tracking and automated reporting.',
    tags: ['Java', 'SQL', 'Maven'],
    githubUrl: '#',
    liveUrl: '#',
    imageUrl: './img/inventory.jpg'
  },
  {
    id: 2,
    title: 'Vue.js Task Planner',
    description: 'A modern, drag-and-drop task management application designed for agile teams with dynamic UI transitions.',
    tags: ['Vue.js', 'Tailwind', 'Firebase'],
    githubUrl: '#',
    imageUrl: './img/task-planner.jpg'
  },
  {
    id: 3,
    title: 'Node.js API Suite',
    description: 'Scalable RESTful microservices for a fintech platform, implementing high-security auth and data encryption.',
    tags: ['Node.js', 'Express', 'JWT'],
    githubUrl: '#',
    imageUrl: './img/api-suite.jpg'
  },
  {
    id: 4,
    title: 'Java Algorithm Visualizer',
    description: 'Interactive visualization tool for sorting and searching algorithms to help students learn data structures.',
    tags: ['Java', 'Swing', 'Algorithms'],
    githubUrl: '#',
    imageUrl: './img/visualizer.jpg'
  }
];

export const SOCIAL_LINKS = [
  { 
    icon: <MessageCircle size={24} />, 
    href: 'https://wa.me/254793773861', 
    label: 'WhatsApp', 
    color: '#25D366',
    description: '+254 793 773 861'
  },
  { 
    icon: <Linkedin size={24} />, 
    href: 'https://www.linkedin.com/in/viviannjoroge5/', 
    label: 'LinkedIn', 
    color: '#0077B5',
    description: 'Professional Profile'
  },
  { 
    icon: <Mail size={24} />, 
    href: 'mailto:viviannjoroge91@gmail.com', 
    label: 'Email', 
    color: '#EA4335',
    description: 'viviannjoroge91@gmail.com'
  }
];

export const CATEGORY_ICONS = {
  Frontend: <Code2 className="text-blue-400" size={24} />,
  Backend: <Database className="text-cyan-400" size={24} />,
  Tools: <Wrench className="text-indigo-400" size={24} />,
};
