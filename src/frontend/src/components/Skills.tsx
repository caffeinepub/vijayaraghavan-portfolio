import { useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Code2, Database, Wrench } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useScrollAnimation(sectionRef);

  const skillCategories = [
    {
      title: 'Frontend',
      icon: Code2,
      color: 'neon-cyan',
      skills: [
        { name: 'React / Next.js', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'Tailwind CSS', level: 95 },
        { name: 'HTML/CSS', level: 98 },
      ],
    },
    {
      title: 'Backend',
      icon: Database,
      color: 'neon-magenta',
      skills: [
        { name: 'Node.js / Express', level: 90 },
        { name: 'Python / Django', level: 85 },
        { name: 'MongoDB', level: 88 },
        { name: 'PostgreSQL', level: 87 },
      ],
    },
    {
      title: 'Tools & Others',
      icon: Wrench,
      color: 'electric-blue',
      skills: [
        { name: 'Git / GitHub', level: 92 },
        { name: 'Docker', level: 85 },
        { name: 'AWS', level: 80 },
        { name: 'Figma', level: 88 },
      ],
    },
  ];

  return (
    <section id="skills" ref={sectionRef} className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-neon-cyan to-neon-magenta bg-clip-text text-transparent">
          Skills & Expertise
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => {
            const Icon = category.icon;
            return (
              <Card
                key={category.title}
                className="glass-card border-neon-cyan/20 hover:scale-105 transition-all duration-300"
                style={{
                  animationDelay: `${idx * 100}ms`,
                }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`p-3 rounded-lg bg-${category.color}/10 border border-${category.color}/30`}>
                      <Icon className={`w-6 h-6 text-${category.color}`} />
                    </div>
                    <h3 className="text-xl font-semibold">{category.title}</h3>
                  </div>

                  <div className="space-y-4">
                    {category.skills.map((skill) => (
                      <div key={skill.name}>
                        <div className="flex justify-between mb-2">
                          <span className="text-sm text-foreground/80">{skill.name}</span>
                          <span className="text-sm text-foreground/60">{skill.level}%</span>
                        </div>
                        <Progress
                          value={isVisible ? skill.level : 0}
                          className="h-2"
                        />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
