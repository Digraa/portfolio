
import { Video, Megaphone, Palette, Share2, UserCheck } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const About = () => {
  const skills = [
    { 
      icon: <Video className="h-8 w-8 text-primary" />,
      title: 'Video Production',
      description: 'Produzione e montaggio video di alta qualità ottimizzati per i social.'
    },
    { 
      icon: <Megaphone className="h-8 w-8 text-primary" />,
      title: 'Advertising',
      description: 'Campagne pubblicitarie mirate su Meta e Google per massimizzare il ROI.'
    },
    { 
      icon: <Palette className="h-8 w-8 text-primary" />,
      title: 'Graphic Design',
      description: 'Identità visiva coerente e accattivante per il tuo brand.'
    },
    { 
      icon: <Share2 className="h-8 w-8 text-primary" />,
      title: 'Social Management',
      description: 'Gestione strategica dei canali social per costruire una community attiva.'
    },
    {
      icon: <UserCheck className="h-8 w-8 text-primary" />,
      title: 'Personal Branding',
      description: 'Posizionamento strategico per professionisti che vogliono distinguersi.'
    }
  ];

  return (
    <section id="about" className="section-padding py-24">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-8">
              <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-primary/20 shadow-lg">
                <AspectRatio ratio={1/1}>
                  {/* Sostituisci l'URL con la tua immagine */}
                  <img 
                    src="/placeholder.svg" 
                    alt="Il tuo nome" 
                    className="object-cover w-full h-full"
                  />
                </AspectRatio>
              </div>
              
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-2">
                  Su <span className="text-primary">di me</span>
                </h2>
                <p className="text-muted-foreground text-lg">Content Strategist freelance a Torino</p>
              </div>
            </div>
            
            <div className="space-y-4 text-muted-foreground">
              <p>
                Mi chiamo Marco Di Grandi e aiuto professionisti e freelance a trasformare la propria competenza in una presenza digitale solida e riconoscibile.
              </p>
              
              <p>
                Non mi definisco per gli anni di esperienza, ma per la passione, la visione e la capacità di stare al passo con un settore in continua evoluzione come quello della comunicazione digitale e dell'AI.
              </p>
              
              <p>
                Il mio obiettivo è costruire brand personali forti nello spazio della comunicazione potenziata dall'intelligenza artificiale, offrendo soluzioni concrete a chi ha valore da comunicare ma fatica a farlo con costanza e professionalità.
              </p>
            </div>
            
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">Creatività</h3>
                <ul className="space-y-1 text-muted-foreground">
                  <li>Figma</li>
                  <li>CapCut</li>
                  <li>Premiere Pro</li>
                  <li>After Effects</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2">AI & Strategy</h3>
                <ul className="space-y-1 text-muted-foreground">
                  <li>ChatGPT & Claude</li>
                  <li>Higgsfield Cinema</li>
                  <li>Meta Ads</li>
                  <li>Google Ads</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              I miei <span className="text-primary">Servizi</span>
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
