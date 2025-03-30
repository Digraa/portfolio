
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${scrolled ? 'bg-background/90 backdrop-blur-md shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl md:text-2xl font-display font-bold">
            <span className="text-primary">Design</span>
            <span className="text-foreground">Studio</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-foreground hover:text-primary transition-colors">Home</button>
            <button onClick={() => scrollToSection('about')} className="text-foreground hover:text-primary transition-colors">About</button>
            <button onClick={() => scrollToSection('portfolio')} className="text-foreground hover:text-primary transition-colors">Portfolio</button>
            <Button onClick={() => scrollToSection('contact')} variant="default">Get in Touch</Button>
          </div>
          
          {/* Mobile Navigation Toggle */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              {isOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute left-0 right-0 top-16 bg-background/95 backdrop-blur-lg p-4 shadow-lg animate-fade-in">
            <div className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('home')} className="text-foreground hover:text-primary transition-colors py-2">Home</button>
              <button onClick={() => scrollToSection('about')} className="text-foreground hover:text-primary transition-colors py-2">About</button>
              <button onClick={() => scrollToSection('portfolio')} className="text-foreground hover:text-primary transition-colors py-2">Portfolio</button>
              <Button onClick={() => scrollToSection('contact')} variant="default" className="w-full">Get in Touch</Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
