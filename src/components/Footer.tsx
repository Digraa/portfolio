
import { Github, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <Twitter className="h-5 w-5" />, href: 'https://twitter.com' },
    { icon: <Github className="h-5 w-5" />, href: 'https://github.com' },
    { icon: <Linkedin className="h-5 w-5" />, href: 'https://linkedin.com' },
    { icon: <Instagram className="h-5 w-5" />, href: 'https://instagram.com' },
  ];

  return (
    <footer className="bg-card/50 backdrop-blur-sm border-t border-border/50 py-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="text-xl md:text-2xl font-display font-bold mb-2">
              <span className="text-primary">Design</span>
              <span className="text-foreground">Studio</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Creating beautiful digital experiences since 2018
            </p>
          </div>
          
          <div className="flex space-x-4 mb-6 md:mb-0">
            {socialLinks.map((link, index) => (
              <a 
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-muted/30 hover:bg-primary/20 rounded-full transition-colors"
                aria-label={`Social media link ${index + 1}`}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
        
        <div className="border-t border-border/50 mt-6 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            &copy; {currentYear} DesignStudio. All rights reserved.
          </p>
          
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
