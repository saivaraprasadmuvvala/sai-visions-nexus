import { useEffect, useRef, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Linkedin, Github, MapPin, Send, Calendar } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';


const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const sectionRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    emailjs
      .send(
        "service_8zey8db",
        "template_zkmnquq",
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject || "No subject",
          message: formData.message,
        },
        "HszHOUq9F7XPQEVZN"
      )
      .then(() => {
        toast({
          title: "Message sent successfully!",
          description: "I'll get back to you within 24 hours.",
        });

        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        toast({
          title: "Failed to send message",
          description: "Something went wrong. Please try again later.",
          variant: "destructive",
        });
      });
  };


  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: 'Email',
      value: 'saivaraprasadmuvvala@gmail.com',
      href: 'mailto:saivaraprasadmuvvala@gmail.com'
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: 'LinkedIn',
      value: 'linkedin.com/in/saivaraprasad-muvvala',
      href: 'http://www.linkedin.com/in/saivaraprasad-muvvala'
    },
    {
      icon: <Github className="w-5 h-5" />,
      label: 'GitHub',
      value: 'github.com/saivaraprasadmuvvala',
      href: 'https://github.com/saivaraprasadmuvvala'
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: 'Location',
      value: 'India',
      href: 'https://maps.app.goo.gl/72RqkC1JmgGZUiEz8'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-secondary/20" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
              Let&apos;s Connect
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to collaborate on innovative projects or discuss opportunities?
              Let&apos;s build something amazing together.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Form */}
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/20">
              <h3 className="text-2xl font-bold mb-6 gradient-text">
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label>Name *</Label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <Label>Email *</Label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label>Subject</Label>
                  <Input
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <Label>Message *</Label>
                  <Textarea
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project or idea..."
                    required
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  <Send size={18} className="mr-2" />
                  Send Message
                </Button>
              </form>
            </Card>

            {/* Info + Actions */}
            <div className="space-y-8">
              
              <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/20">
                <h3 className="text-xl font-bold mb-6 text-accent">Get in Touch</h3>
                <div className="space-y-4">
                  {contactInfo.map((item, i) => (
                    <div key={i} className="flex items-center space-x-3">
                      {item.icon}
                      <div>
                        <p className="text-sm text-muted-foreground">{item.label}</p>
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-primary"
                        >
                          {item.value}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/20">
                <h3 className="text-xl font-bold mb-6 text-accent">Quick Actions</h3>

                <a
                  href="http://www.linkedin.com/in/saivaraprasad-muvvala"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" className="w-full justify-start mb-3">
                    <Calendar className="mr-3" size={18} />
                    Schedule a Meeting
                  </Button>
                </a>

                <a
                  href="/Sai_Vara_Prasad_Muvvala_Resume.pdf"
                  download
                >
                  <Button
                    variant="outline" className="w-full justify-start mb-3"
                  >
                    <Mail size={18} className="mr-3" />
                    Download Resume
                  </Button>
                </a>


                <a
                  href="https://github.com/saivaraprasadmuvvala"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" className="w-full justify-start">
                    <Github className="mr-3" size={18} />
                    View GitHub Profile
                  </Button>
                </a>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
