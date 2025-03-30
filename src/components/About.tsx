
import { Code, Layout, Lightbulb, PenTool } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const About = () => {
  const skills = [
    { 
      icon: <PenTool className="h-8 w-8 text-primary" />, 
      title: 'UI Design', 
      description: 'Creating beautiful, intuitive interfaces that users love to interact with.' 
    },
    { 
      icon: <Layout className="h-8 w-8 text-primary" />, 
      title: 'UX Design', 
      description: 'Crafting seamless user experiences that achieve business objectives.' 
    },
    { 
      icon: <Code className="h-8 w-8 text-primary" />, 
      title: 'Frontend Development', 
      description: 'Building responsive, accessible websites with modern technologies.' 
    },
    { 
      icon: <Lightbulb className="h-8 w-8 text-primary" />, 
      title: 'Brand Strategy', 
      description: 'Developing cohesive digital identities that resonate with target audiences.' 
    }
  ];

  return (
    <section id="about" className="section-padding py-24">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              About <span className="text-primary">Me</span>
            </h2>
            
            <div className="space-y-4 text-muted-foreground">
              <p>
                I'm a passionate web designer with over 5 years of experience creating
                compelling digital experiences that help businesses grow online.
              </p>
              
              <p>
                My approach combines aesthetic sensibility with user-centered design
                principles, ensuring that every project not only looks beautiful but also
                delivers measurable results.
              </p>
              
              <p>
                I've worked with clients across various industries, from startups to
                established companies, helping them establish their digital presence
                and connect with their audiences through thoughtful design and
                strategic thinking.
              </p>
            </div>
            
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">Design Tools</h3>
                <ul className="space-y-1 text-muted-foreground">
                  <li>Figma</li>
                  <li>Adobe XD</li>
                  <li>Photoshop</li>
                  <li>Illustrator</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2">Development</h3>
                <ul className="space-y-1 text-muted-foreground">
                  <li>HTML/CSS</li>
                  <li>JavaScript</li>
                  <li>React</li>
                  <li>Tailwind CSS</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              My <span className="text-primary">Expertise</span>
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <Card key={index} className="bg-card/50 backdrop-blur-sm border border-border/50">
                  <CardHeader className="pb-2">
                    <div className="mb-2">{skill.icon}</div>
                    <CardTitle>{skill.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-muted-foreground">
                      {skill.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
