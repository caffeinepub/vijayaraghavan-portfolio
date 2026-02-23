import { useEffect } from 'react';
import { ThemeProvider } from 'next-themes';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import FloatingBlobs from './components/FloatingBlobs';
import CursorFollower from './components/CursorFollower';
import PageLoadAnimation from './components/PageLoadAnimation';
import { Toaster } from '@/components/ui/sonner';

function App() {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <div className="relative min-h-screen overflow-x-hidden">
        <FloatingBlobs />
        <CursorFollower />
        <PageLoadAnimation />
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>
        <Toaster />
      </div>
    </ThemeProvider>
  );
}

export default App;
