import { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useCountUp } from '../hooks/useCountUp';

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useScrollAnimation(sectionRef);
  
  const projectsCount = useCountUp(50, isVisible);
  const clientsCount = useCountUp(10, isVisible);
  const satisfactionCount = useCountUp(99, isVisible);

  const techStack = [
    'React', 'Next.js', 'TypeScript', 'Node.js', 'Express',
    'MongoDB', 'PostgreSQL', 'Tailwind CSS', 'Python', 'Django',
    'AWS', 'Docker', 'Figma', 'Git'
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-neon-cyan to-neon-magenta bg-clip-text text-transparent">
          About Me
        </h2>

        <Card className="glass-card border-neon-cyan/20 mb-12">
          <CardContent className="p-8">
            <p className="text-lg text-foreground/80 leading-relaxed mb-6">
              Passionate full-stack developer specializing in React, Node.js, and scalable apps. 
              I craft pixel-perfect, performant web experiences that delight users and drive results.
            </p>
            <p className="text-base text-foreground/60 italic">
              Note: Fresher in freelance full-stack web development, eager to bring innovative solutions to your projects.
            </p>
          </CardContent>
        </Card>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="glass-card border-neon-cyan/20 text-center hover:scale-105 transition-transform">
            <CardContent className="p-6">
              <div className="text-5xl font-bold text-neon-cyan mb-2">{projectsCount}+</div>
              <div className="text-foreground/60">Projects</div>
            </CardContent>
          </Card>
          <Card className="glass-card border-neon-magenta/20 text-center hover:scale-105 transition-transform">
            <CardContent className="p-6">
              <div className="text-5xl font-bold text-neon-magenta mb-2">{clientsCount}+</div>
              <div className="text-foreground/60">Clients</div>
            </CardContent>
          </Card>
          <Card className="glass-card border-electric-blue/20 text-center hover:scale-105 transition-transform">
            <CardContent className="p-6">
              <div className="text-5xl font-bold text-electric-blue mb-2">{satisfactionCount}%</div>
              <div className="text-foreground/60">Satisfaction</div>
            </CardContent>
          </Card>
        </div>

        {/* Tech Stack */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-6 text-foreground/90">Tech Stack</h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {techStack.map((tech, index) => (
              <Badge
                key={tech}
                variant="outline"
                className="badge-hover border-neon-cyan/30 text-foreground/80 px-4 py-2 text-sm"
                style={{
                  animationDelay: `${index * 50}ms`,
                }}
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
