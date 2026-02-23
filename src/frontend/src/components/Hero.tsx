import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Github, Mail } from 'lucide-react';
import ParticleBackground from './ParticleBackground';
import { useParallax } from '../hooks/useParallax';

const Hero = () => {
  const nameRef = useRef<HTMLDivElement>(null);
  const avatarRef = useRef<HTMLDivElement>(null);
  const parallaxRef = useRef<HTMLDivElement>(null);
  const { x, y } = useParallax();

  useEffect(() => {
    // Name explosion animation
    if (nameRef.current) {
      const name = 'VIJAYARAGHAVAN';
      nameRef.current.innerHTML = name
        .split('')
        .map((char, i) => {
          const randomX = Math.random() * 1000 - 500;
          const randomY = Math.random() * 1000 - 500;
          const randomRotate = Math.random() * 360 - 180;
          return `<span class="inline-block" style="opacity: 0; transform: translate(${randomX}px, ${randomY}px) rotate(${randomRotate}deg) scale(0);">${char === ' ' ? '&nbsp;' : char}</span>`;
        })
        .join('');

      const spans = nameRef.current.querySelectorAll('span');
      spans.forEach((span, i) => {
        setTimeout(() => {
          (span as HTMLElement).style.transition = 'all 1.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
          (span as HTMLElement).style.opacity = '1';
          (span as HTMLElement).style.transform = 'translate(0, 0) rotate(0) scale(1)';
        }, i * 50);
      });
    }

    // Avatar floating animation
    if (avatarRef.current) {
      avatarRef.current.style.animation = 'float 3s ease-in-out infinite';
    }
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleBackground />
      
      <div
        ref={parallaxRef}
        className="container mx-auto px-4 z-10 text-center"
        style={{
          transform: `translate(${x * 0.02}px, ${y * 0.02}px)`,
          transition: 'transform 0.1s ease-out',
        }}
      >
        {/* Avatar */}
        <div ref={avatarRef} className="mb-8 flex justify-center">
          <Avatar className="w-32 h-32 border-4 border-neon-cyan shadow-neon-glow">
            <AvatarImage src="/placeholder-avatar.jpg" alt="Vijayaraghavan" />
            <AvatarFallback className="text-4xl bg-gradient-to-br from-neon-cyan to-neon-magenta text-white">
              V
            </AvatarFallback>
          </Avatar>
        </div>

        {/* Name */}
        <div
          ref={nameRef}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-neon-cyan via-electric-blue to-neon-magenta bg-clip-text text-transparent"
          style={{
            textShadow: '0 0 40px rgba(0, 255, 255, 0.5)',
          }}
        />

        {/* Tagline with typing effect */}
        <div className="mb-8">
          <p className="text-xl md:text-2xl text-foreground/80 typing-text">
            Full-Stack Web & Application Developer | Crafting Pixel-Perfect Experiences
          </p>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            onClick={() => scrollToSection('projects')}
            className="bg-gradient-to-r from-neon-cyan to-electric-blue hover:shadow-neon-glow transition-all duration-300 text-white font-semibold px-8"
          >
            View Projects
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollToSection('contact')}
            className="border-neon-magenta text-neon-magenta hover:bg-neon-magenta/10 hover:shadow-neon-glow transition-all duration-300 px-8"
          >
            Contact Me
          </Button>
        </div>

        {/* Social Links */}
        <div className="mt-8 flex gap-4 justify-center">
          <a
            href="https://github.com/vijay2git"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/60 hover:text-neon-cyan transition-colors"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="mailto:sghvvijayaraghavan@gmail.com"
            className="text-foreground/60 hover:text-neon-magenta transition-colors"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
