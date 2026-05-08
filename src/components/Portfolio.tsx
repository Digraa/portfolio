
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import ProjectCard, { ProjectProps } from './ProjectCard';

const projectsData: ProjectProps[] = [
  {
    title: 'Campagna Meta Ads',
    description: 'Strategia e gestione di una campagna advertising su Meta per un coach professionista, con un incremento del 40% delle lead.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3',
    tags: ['Ads', 'Strategy', 'Meta'],
    liveUrl: '#',
  },
  {
    title: 'Produzione Video Social',
    description: 'Serie di video brevi (Reels/TikTok) ottimizzati per l\'algoritmo, focalizzati sul personal branding e l\'autorità.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3',
    tags: ['Video', 'Editing', 'Social'],
    liveUrl: '#',
  },
  {
    title: 'Brand Identity Digitale',
    description: 'Creazione di un\'identità visiva coerente e professionale per un consulente finanziario su LinkedIn e Instagram.',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3',
    tags: ['Design', 'Branding'],
    liveUrl: '#',
  },
  {
    title: 'Content Strategy AI',
    description: 'Implementazione di workflow basati su AI per la creazione costante di contenuti di valore per uno studio di architettura.',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3',
    tags: ['AI', 'Strategy', 'Content'],
    liveUrl: '#',
  },
];

const categories = ['Tutti', 'Video', 'Ads', 'Branding', 'AI', 'Strategy'];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('Tutti');
  const [visibleProjects, setVisibleProjects] = useState(4);

  // Filter projects based on active category
  const filteredProjects = activeCategory === 'Tutti'
    ? projectsData
    : projectsData.filter(project => 
        project.tags.some(tag => 
          tag.toLowerCase().includes(activeCategory.toLowerCase())
        )
      );

  const showMoreProjects = () => {
    setVisibleProjects(prevVisible => 
      prevVisible >= filteredProjects.length 
        ? prevVisible 
        : prevVisible + 2
    );
  };

  const showLessProjects = () => {
    setVisibleProjects(4);
  };

  const displayedProjects = filteredProjects.slice(0, visibleProjects);
  const hasMoreProjects = visibleProjects < filteredProjects.length;
  const hasLessProjects = visibleProjects > 4 && filteredProjects.length > 4;

  return (
    <section id="portfolio" className="section-padding bg-muted/10 py-24">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Lavori <span className="text-primary">In evidenza</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Una selezione dei miei ultimi progetti, dalla produzione video alle strategie di advertising potenziate dall'AI.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((category, index) => (
            <Button
              key={index}
              variant={activeCategory === category ? 'default' : 'outline'}
              onClick={() => {
                setActiveCategory(category);
                setVisibleProjects(4);
              }}
              className="m-1"
            >
              {category}
            </Button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
        
        <div className="flex justify-center mt-12 gap-4">
          {hasMoreProjects && (
            <Button onClick={showMoreProjects} variant="default">
              Carica altri
            </Button>
          )}
          
          {hasLessProjects && (
            <Button onClick={showLessProjects} variant="outline">
              Mostra meno
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
