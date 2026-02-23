import { useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Experience = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useScrollAnimation(sectionRef);

  const experiences = [
    {
      title: 'Freelance Full-Stack Developer',
      company: 'Self-Employed',
      period: '2024 - Present',
      description: 'Building modern web applications for clients worldwide. Specializing in React, Node.js, and scalable cloud solutions.',
      achievements: [
        'Delivered 10+ successful projects',
        'Maintained 99% client satisfaction rate',
        'Specialized in modern web technologies',
      ],
    },
    {
      title: 'Learning & Development',
      company: 'Various Online Platforms',
      period: '2023 - 2024',
      description: 'Intensive learning phase focusing on full-stack development, modern frameworks, and best practices.',
      achievements: [
        'Completed 50+ projects and coding challenges',
        'Mastered React, Node.js, and TypeScript',
        'Built comprehensive portfolio of work',
      ],
    },
  ];

  return (
    <section id="experience" ref={sectionRef} className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-neon-cyan to-neon-magenta bg-clip-text text-transparent">
          Experience
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neon-cyan via-neon-magenta to-electric-blue" />

          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div key={exp.title} className="relative pl-20">
                {/* Timeline dot */}
                <div className="absolute left-6 top-6 w-5 h-5 rounded-full bg-neon-cyan border-4 border-background shadow-neon-glow" />

                <Card className="glass-card border-neon-cyan/20">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-foreground">{exp.title}</h3>
                        <p className="text-neon-cyan">{exp.company}</p>
                      </div>
                      <span className="text-sm text-foreground/60 mt-2 md:mt-0">{exp.period}</span>
                    </div>

                    <p className="text-foreground/80 mb-4">{exp.description}</p>

                    <ul className="space-y-2">
                      {exp.achievements.map((achievement) => (
                        <li key={achievement} className="flex items-start gap-2 text-sm text-foreground/70">
                          <span className="text-neon-magenta mt-1">▹</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
