import { useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useScrollAnimation(sectionRef);

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack online shop with authentication, payment integration, and real-time inventory management.',
      tech: ['React', 'Node.js', 'Stripe', 'MongoDB'],
      image: '/placeholder-project-1.jpg',
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Portfolio Website',
      description: 'This very site! Ultra-modern animated portfolio with AAA-level visuals and smooth interactions.',
      tech: ['Next.js', 'shadcn/ui', 'Anime.js', 'Tailwind'],
      image: '/placeholder-project-2.jpg',
      liveUrl: '#',
      githubUrl: 'https://github.com/vijay2git',
    },
    {
      title: 'AI Chatbot',
      description: 'Real-time conversational AI with natural language processing and context-aware responses.',
      tech: ['React', 'Socket.io', 'OpenAI', 'Express'],
      image: '/placeholder-project-3.jpg',
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Task Management App',
      description: 'Collaborative project management tool with real-time updates and team collaboration features.',
      tech: ['React', 'Firebase', 'TypeScript', 'Material-UI'],
      image: '/placeholder-project-4.jpg',
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Weather Dashboard',
      description: 'Beautiful weather app with forecasts, maps, and location-based recommendations.',
      tech: ['Next.js', 'OpenWeather API', 'Recharts', 'Tailwind'],
      image: '/placeholder-project-5.jpg',
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Social Media Analytics',
      description: 'Analytics dashboard for tracking social media metrics and engagement across platforms.',
      tech: ['React', 'D3.js', 'Node.js', 'PostgreSQL'],
      image: '/placeholder-project-6.jpg',
      liveUrl: '#',
      githubUrl: '#',
    },
  ];

  return (
    <section id="projects" ref={sectionRef} className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-neon-cyan to-neon-magenta bg-clip-text text-transparent">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={idx}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
