
import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export interface ProjectProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const ProjectCard = ({ title, description, image, tags, liveUrl, githubUrl }: ProjectProps) => {
  return (
    <Card className="overflow-hidden group hover:shadow-lg transition-all duration-300 flex flex-col bg-card/50 backdrop-blur-sm border border-border/50">
      <div className="overflow-hidden h-48 sm:h-64">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
        <div className="flex flex-wrap gap-2 mt-2">
          {tags.map((tag, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </CardHeader>
      
      <CardContent className="flex-grow">
        <CardDescription className="text-muted-foreground">
          {description}
        </CardDescription>
      </CardContent>
      
      <CardFooter className="flex gap-3">
        {liveUrl && (
          <Button variant="default" size="sm" asChild>
            <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
              <ExternalLink className="h-4 w-4" /> View Live
            </a>
          </Button>
        )}
        
        {githubUrl && (
          <Button variant="outline" size="sm" asChild>
            <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
              <Github className="h-4 w-4" /> View Code
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
