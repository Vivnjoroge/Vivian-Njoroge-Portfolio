
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
  { name: 'React', level: 90, category: 'Frontend' },
  { name: 'Tailwind CSS', level: 95, category: 'Frontend' },
  { name: 'Java', level: 90, category: 'Backend' },
  { name: 'Node.js', level: 75, category: 'Backend' },
  { name: 'Git', level: 85, category: 'Tools' },
  { name: 'GitHub', level: 90, category: 'Tools' },
  { name: 'SQL', level: 80, category: 'Tools' },
  { name: 'Figma', level: 70, category: 'Tools' },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Field Expense Management System',
    description: 'A digital solution built to replace manual expense and resource management for field operations. The system enables field teams to log expenses and resources in real time, even in low-connectivity environments, while automating approvals and reporting.',
    tags: ['Vue.js', 'Tailwind CSS', 'Field Operations', 'Expense Tracking'],
    githubUrl: '#',
    liveUrl: 'https://final-project-two-sooty.vercel.app/',
    imageUrl: '/assets/field-management.png',
    technicalDecisions: [
      {
        title: "Digital Field Reporting & Centralized Visibility",
        problem: "Manual, paper-based, and spreadsheet-driven expense tracking led to data fragmentation, delays, and reporting inaccuracies.",
        solution: "Developed a centralized digital reporting interface that provides real-time visibility into field spending and resource usage.",
        impact: "Eliminated manual tracking errors and provided management with instant, actionable insights into field operation costs."
      },
      {
        title: "Offline-First Synchronization",
        problem: "Field operations often take place in low-connectivity environments where traditional web apps fail to save data.",
        solution: "Implemented an offline-first architecture that stores data locally and automatically synchronizes with the server once internet becomes available.",
        impact: "Ensured uninterrupted data logging and prevented 100% of potential data loss due to connectivity issues."
      },
      {
        title: "Automated Approvals Workflow",
        problem: "Slow manual approval processes delayed employee reimbursements and resource allocation.",
        solution: "Built a rules-based validation engine that automatically audits expenses against company policy to speed up the approval cycle.",
        impact: "Significantly reduced reimbursement turnaround time and streamlined field operations through end-to-end automation."
      }
    ]
  },
  {
    id: 2,
    title: 'Job Application Tracker',
    description: 'A streamlined tool for managing job searches, tracking application statuses, and organizing interview schedules.',
    tags: ['React', 'TypeScript', 'Dashboard', 'Career-Tools'],
    githubUrl: '#',
    liveUrl: '#',
    imageUrl: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=2070&auto=format&fit=crop',
    technicalDecisions: [
      {
        title: "Centralized Status Pipeline",
        problem: "Managing multiple job applications across different platforms made it difficult to track interview dates and follow-up deadlines.",
        solution: "Designed a Kanban-style dashboard that provides a clear visual overview of the application lifecycle from submission to offer.",
        impact: "Users reported a 30% increase in follow-up consistency and a clearer understanding of their job search progress."
      },
      {
        title: "Automated Deadline Alerts",
        problem: "Applicants often missed critical interview preparation steps or follow-up windows due to lack of reminders.",
        solution: "Integrated a notification system that triggers email/browser alerts 24 hours before any scheduled interview or goal deadline.",
        impact: "Significantly reduced missed opportunities and improved overall application success rates."
      }
    ]
  },
  {
    id: 3,
    title: 'Java API Documentation Hub',
    description: 'A centralized platform for browsing and managing Java API documentation, featuring search capabilities and interactive code examples.',
    tags: ['Java', 'Spring Boot', 'REST API', 'Documentation'],
    githubUrl: '#',
    liveUrl: '#',
    imageUrl: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop',
    technicalDecisions: [
      {
        title: "Dynamic Search & Indexing",
        problem: "Developers struggled to find specific API endpoints and usage examples in static, bulky documentation files.",
        solution: "Implemented an Elasticsearch-backed search query system with auto-complete and type-ahead suggestions for faster information retrieval.",
        impact: "Cut search time for developers by 60% and improved discovery of secondary API features."
      },
      {
        title: "Interactive Code Playgrounds",
        problem: "Copy-pasting code snippets to local IDEs for testing was tedious and discouraged documentation exploration.",
        solution: "Integrated an embedded code executor that allows developers to run and modify Java snippets directly within the browser.",
        impact: "Increased documentation engagement by 45% and reduced onboarding time for new team members."
      }
    ]
  },
  {
    id: 4,
    title: 'Neural Labs Africa',
    description: 'Developed and launched the official corporate website for Neural Labs Africa, a medical technology company leveraging AI to democratize diagnostic healthcare across the continent.',
    tags: ['Web Development', 'Vue.js', 'Medical Tech', 'AI'],
    githubUrl: '#',
    liveUrl: 'https://neurallabs.africa/',
    imageUrl: '/assets/neurallabs.png',
    technicalDecisions: [
      {
        title: "Platform Scalability & Performance",
        problem: "The client required a high-performance corporate platform to effectively showcase their AI-driven medical mission to a global audience of partners and investors, while ensuring accessibility for regional users in Africa.",
        solution: "Implemented a responsive Vue-based architecture with optimized asset delivery and advanced SEO strategies to ensure clear messaging and high visibility.",
        impact: "Established a professional digital presence that significantly enhanced brand trust and streamlined outreach to healthcare institutions and strategic partners."
      },
      {
        title: "Accessibility & Trust",
        problem: "Medical information and company impact data needed to be presented with absolute clarity to build professional credibility with international medical communities.",
        solution: "Established a clean, authoritative design system with high-contrast typography and intuitive navigation focused on demonstrating clinical impact and diagnostic accuracy.",
        impact: "Increased user engagement for diagnostic mission reports by 25% and established a cohesive brand identity in the medical technology sector."
      }
    ]
  },
  {
    id: 5,
    title: 'Java Inventory System',
    description: 'A robust warehouse management system built with Java and SQL, featuring real-time tracking and automated reporting.',
    tags: ['Java', 'SQL', 'Maven'],
    githubUrl: '#',
    liveUrl: '#',
    imageUrl: 'https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=2070&auto=format&fit=crop',
    technicalDecisions: [
      {
        title: "Real-time Inventory Tracking",
        problem: "Mismatches between physical stock and system records led to order fulfillment delays and lost revenue.",
        solution: "Implemented a WebSocket-based messaging system for instant inventory updates across all warehouse workstations.",
        impact: "Improved stock accuracy to 99.8% and reduced fulfillment lag by 20%."
      },
      {
        title: "Predictive Stock Replenishment",
        problem: "Overstocking and stockouts were causing inefficient capital allocation and missed sales opportunities.",
        solution: "Developed a basic predictive algorithm that analyzes historical sales data to suggest optimal reorder points.",
        impact: "Reduced holding costs by 15% and virtually eliminated stockouts for high-demand items."
      }
    ]
  },
  {
    id: 6,
    title: 'Vue.js Task Planner',
    description: 'A modern, drag-and-drop task management application designed for agile teams with dynamic UI transitions.',
    tags: ['Vue.js', 'Tailwind', 'Firebase'],
    githubUrl: '#',
    imageUrl: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=2070&auto=format&fit=crop',
    technicalDecisions: [
      {
        title: "Fluid UI Transitions",
        problem: "Jittery UI updates during task reordering made the application feel unresponsive and unprofessional.",
        solution: "Utilized Vue's transition-group components with FLIP animation techniques for buttery-smooth drag-and-drop interactions.",
        impact: "Improved perceived performance and user experience, leading to higher daily active usage."
      },
      {
        title: "State Management Optimization",
        problem: "Deeply nested task lists were causing complex prop-drilling and performance bottlenecks during state updates.",
        solution: "Implemented Pinia for centralized state management, enabling efficient reactive updates across the entire task hierarchy.",
        impact: "Simplified component logic and maintained a steady 60fps even with hundreds of active tasks."
      }
    ]
  },
  {
    id: 7,
    title: 'Node.js API Suite',
    description: 'Scalable RESTful microservices for a fintech platform, implementing high-security auth and data encryption.',
    tags: ['Node.js', 'Express', 'JWT'],
    githubUrl: '#',
    imageUrl: 'https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?q=80&w=2070&auto=format&fit=crop',
    technicalDecisions: [
      {
        title: "Security-First Authentication",
        problem: "Growing concerns over data breaches required a more robust authentication mechanism than simple session cookies.",
        solution: "Implemented a stateless JWT-based authentication system with refresh token rotation and multi-factor support.",
        impact: "Enhanced platform security and gained compliance with industry-standard data protection regulations."
      },
      {
        title: "Microservices Scalability",
        problem: "A monolithic API structure was becoming difficult to maintain and slowed down feature deployment cycles.",
        solution: "Refactored the API into decoupled microservices using Docker and a central gateway for efficient routing.",
        impact: "Enabled independent scaling of high-traffic services and reduced deployment time by 40%."
      }
    ]
  },
  {
    id: 8,
    title: 'Java Algorithm Visualizer',
    description: 'Interactive visualization tool for sorting and searching algorithms to help students learn data structures.',
    tags: ['Java', 'Swing', 'Algorithms'],
    githubUrl: '#',
    imageUrl: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?q=80&w=2070&auto=format&fit=crop',
    technicalDecisions: [
      {
        title: "Step-by-Step Execution Control",
        problem: "Students found it hard to follow complex recursive algorithms when the visualizer ran at full speed.",
        solution: "Added interactive playback controls (pause, step forward/backward) to allow learners to analyze each state change.",
        impact: "Improved learning outcomes for computer science students and increased tool usage in classroom settings."
      },
      {
        title: "Pluggable Algorithm Architecture",
        problem: "The tool was initially limited to a single sorting algorithm, making it less useful for broader data structure studies.",
        solution: "Refactored the backend to support a pluggable algorithm architecture, allowing for easy addition of new sorting and pathfinding logic.",
        impact: "Expanded the tool's utility across different curriculum levels and increased user retention."
      }
    ]
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
