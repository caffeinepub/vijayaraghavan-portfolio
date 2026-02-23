import { useState, useRef, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';
import { triggerConfetti } from '../utils/confetti';

interface Project {
  title: string;
  description: string;
  tech: string[];
  image: string;
  liveUrl: string;
  githubUrl: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
  isVisible: boolean;
}

const ProjectCard = ({ project, index, isVisible }: ProjectCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isVisible && cardRef.current) {
      const card = cardRef.current;
      card.style.opacity = '0';
      card.style.transform = 'translateY(50px) scale(0.9)';
      
      setTimeout(() => {
        card.style.transition = 'all 0.8s cubic-bezier(0.19, 1, 0.22, 1)';
        card.style.opacity = '1';
        card.style.transform = 'translateY(0) scale(1)';
      }, index * 100);
    }
  }, [isVisible, index]);

  const handleCardClick = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest('button, a')) return;
    triggerConfetti(e.clientX, e.clientY);
  };

  const handleMouseEnter = () => {
    if (cardRef.current) {
      cardRef.current.style.transform = 'scale(1.05) rotateY(5deg) rotateX(5deg)';
    }
  };

  const handleMouseLeave = () => {
    if (cardRef.current) {
      cardRef.current.style.transform = 'scale(1) rotateY(0) rotateX(0)';
    }
  };

  return (
    <div
      ref={cardRef}
      className="opacity-0 transition-all duration-300"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleCardClick}
      style={{ perspective: '1000px' }}
    >
      <Card className="glass-card border-neon-cyan/20 h-full cursor-pointer overflow-hidden group">
        <div className="relative h-48 bg-gradient-to-br from-neon-cyan/20 to-neon-magenta/20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/10 to-electric-blue/10 group-hover:scale-110 transition-transform duration-500" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-6xl font-bold text-white/10">{project.title.charAt(0)}</div>
          </div>
        </div>
        
        <CardHeader>
          <CardTitle className="text-xl">{project.title}</CardTitle>
          <CardDescription className="text-foreground/60">
            {project.description}
          </CardDescription>
        </CardHeader>

        <CardContent>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((tech) => (
              <Badge
                key={tech}
                variant="outline"
                className="border-neon-cyan/30 text-xs"
              >
                {tech}
              </Badge>
            ))}
          </div>

          <div className="flex gap-2">
            <Button
              size="sm"
              variant="outline"
              className="flex-1 border-neon-cyan/30 hover:bg-neon-cyan/10"
              asChild
            >
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                Live
              </a>
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="flex-1 border-neon-magenta/30 hover:bg-neon-magenta/10"
              asChild
            >
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                Code
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProjectCard;
