
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-background/80 z-0"></div>
      
      {/* Background elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
            Crafting <span className="text-primary">Digital</span> Experiences <br className="hidden md:block" />
            That <span className="text-secondary">Elevate</span> Brands
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl">
            Web designer and UI/UX specialist creating beautiful, functional websites
            that help businesses achieve their digital goals.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button onClick={() => {
              const portfolioSection = document.getElementById('portfolio');
              if (portfolioSection) portfolioSection.scrollIntoView({ behavior: 'smooth' });
            }} size="lg" className="px-8">
              View My Work
            </Button>
            
            <Button onClick={() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' });
            }} variant="outline" size="lg" className="px-8">
              Get in Touch
            </Button>
          </div>
        </div>
      </div>
      
      <button 
        onClick={scrollToAbout}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-foreground/70 hover:text-primary transition-colors flex flex-col items-center"
      >
        <span className="mb-2 text-sm">Scroll Down</span>
        <ArrowDown className="animate-bounce" />
      </button>
    </section>
  );
};

export default Hero;
