import { useState, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';
import { SiGithub, SiLinkedin, SiX } from 'react-icons/si';
import { toast } from 'sonner';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { triggerConfetti } from '../utils/confetti';

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useScrollAnimation(sectionRef);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Trigger confetti
    triggerConfetti(window.innerWidth / 2, window.innerHeight / 2);
    
    // Show success message
    toast.success('Message sent successfully! I\'ll get back to you soon.', {
      duration: 5000,
    });

    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const socialLinks = [
    {
      name: 'GitHub',
      icon: SiGithub,
      url: 'https://github.com/vijay2git',
      color: 'neon-cyan',
    },
    {
      name: 'LinkedIn',
      icon: SiLinkedin,
      url: '#',
      color: 'electric-blue',
    },
    {
      name: 'Twitter',
      icon: SiX,
      url: '#',
      color: 'neon-magenta',
    },
  ];

  return (
    <section id="contact" ref={sectionRef} className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-neon-cyan to-neon-magenta bg-clip-text text-transparent">
          Get In Touch
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card className="glass-card border-neon-cyan/20">
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-1 border-neon-cyan/30 focus:border-neon-cyan"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-1 border-neon-cyan/30 focus:border-neon-cyan"
                  />
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="mt-1 border-neon-cyan/30 focus:border-neon-cyan"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-neon-cyan to-electric-blue hover:shadow-neon-glow transition-all duration-300"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="glass-card border-neon-magenta/20">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Mail className="w-6 h-6 text-neon-magenta" />
                  <h3 className="text-xl font-semibold">Email</h3>
                </div>
                <a
                  href="mailto:sghvvijayaraghavan@gmail.com"
                  className="text-foreground/80 hover:text-neon-cyan transition-colors"
                >
                  sghvvijayaraghavan@gmail.com
                </a>
              </CardContent>
            </Card>

            <Card className="glass-card border-electric-blue/20">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Connect With Me</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-3 rounded-lg bg-${social.color}/10 border border-${social.color}/30 hover:bg-${social.color}/20 hover:scale-110 transition-all duration-300 social-pulse`}
                        aria-label={social.name}
                      >
                        <Icon className={`w-6 h-6 text-${social.color}`} />
                      </a>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card border-neon-cyan/20">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Let's Build Something Amazing</h3>
                <p className="text-foreground/70">
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-20 pt-8 border-t border-border text-center">
          <p className="text-foreground/60">
            © {new Date().getFullYear()} Vijayaraghavan. Built with ❤️ using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(
                typeof window !== 'undefined' ? window.location.hostname : 'portfolio'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neon-cyan hover:text-neon-magenta transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
