
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, MapPin, Phone } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Messaggio inviato!",
        description: "Grazie per avermi contattato. Ti risponderò al più presto.",
      });
      
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      
      setIsSubmitting(false);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5 text-primary" />,
      title: 'Email',
      content: 'marco@digrandi.it',
      link: 'mailto:marco@digrandi.it',
    },
    {
      icon: <MapPin className="h-5 w-5 text-primary" />,
      title: 'Sede',
      content: 'Torino, Italia',
      link: 'https://maps.google.com',
    },
  ];

  return (
    <section id="contact" className="section-padding py-24">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Entriamo in <span className="text-primary">Contatto</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Vuoi collaborare o hai un progetto in mente? Compila il form qui sotto e ti risponderò il prima possibile.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="lg:col-span-2">
            <Card className="bg-card/50 backdrop-blur-sm border border-border/50">
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">Nome</label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Il tuo nome"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">Email</label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="La tua email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">Oggetto</label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="Richiesta informazioni"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">Messaggio</label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Parlami del tuo progetto..."
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Invio in corso...' : 'Invia Messaggio'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
          
          <div className="space-y-4">
            {contactInfo.map((item, index) => (
              <Card key={index} className="bg-card/50 backdrop-blur-sm border border-border/50">
                <CardContent className="p-4 flex items-start space-x-4">
                  <div className="p-2 bg-muted rounded-lg">{item.icon}</div>
                  <div>
                    <h3 className="font-medium">{item.title}</h3>
                    <a 
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item.content}
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
            
            <Card className="bg-primary/10 backdrop-blur-sm border border-primary/20 mt-8">
              <CardContent className="p-6 text-center">
                <h3 className="font-medium text-lg mb-2">Pronto a iniziare?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Creiamo insieme qualcosa di straordinario.
                </p>
                <Button variant="default" asChild>
                  <a href="mailto:marco@digrandi.it">Prenota una chiamata</a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
