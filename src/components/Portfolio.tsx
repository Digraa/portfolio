
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import ProjectCard, { ProjectProps } from './ProjectCard';

const projectsData: ProjectProps[] = [
  {
    title: 'E-commerce Redesign',
    description: 'A complete redesign of an e-commerce platform focusing on improved conversion rates and mobile experience.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3',
    tags: ['E-commerce', 'UI Design', 'UX Research'],
    liveUrl: 'https://example.com',
  },
  {
    title: 'Financial Dashboard',
    description: 'A comprehensive dashboard for a fintech startup, visualizing complex data in an intuitive interface.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3',
    tags: ['Dashboard', 'Data Visualization', 'Fintech'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
  {
    title: 'Travel App',
    description: 'A mobile-first travel planning application with integrated booking and itinerary management.',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3',
    tags: ['Mobile App', 'Travel', 'UX Design'],
    liveUrl: 'https://example.com',
  },
  {
    title: 'Restaurant Website',
    description: 'An elegant website for a high-end restaurant, featuring online reservations and menu showcase.',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3',
    tags: ['Restaurant', 'Web Design', 'Booking System'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
  },
  {
    title: 'Healthcare Portal',
    description: 'A patient management portal for a healthcare provider, focusing on accessibility and ease of use.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3',
    tags: ['Healthcare', 'Portal', 'Accessibility'],
    liveUrl: 'https://example.com',
  },
  {
    title: 'Photography Portfolio',
    description: 'A minimalist portfolio website for a professional photographer with gallery and client access.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3',
    tags: ['Portfolio', 'Photography', 'Gallery'],
    liveUrl: 'https://example.com',
  },
];

const categories = ['All', 'Web Design', 'Mobile App', 'E-commerce', 'Dashboard', 'UI/UX'];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [visibleProjects, setVisibleProjects] = useState(4);

  // Filter projects based on active category
  const filteredProjects = activeCategory === 'All'
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
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of my recent work, showcasing UI design, UX improvements, 
            and creative problem-solving across different industries.
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
              Load More
            </Button>
          )}
          
          {hasLessProjects && (
            <Button onClick={showLessProjects} variant="outline">
              Show Less
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
