import { useEffect, useRef, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, ShoppingCart, Eye, Shield, Image, Gamepad2 } from 'lucide-react';

const ProjectsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: "Online Organic Farm Store",
      description:
        "An e-commerce platform connecting farmers with customers to sell organic fruits and vegetables directly. Features include shopping cart, payment gateway integration, user authentication, and a clean, intuitive user interface.",
      techStack: ["HTML", "CSS", "JavaScript", "SQL"],
      features: ["Shopping Cart", "Payment Gateway", "User Authentication", "Clean UI"],
      category: "E-commerce",
      gradient: "from-green-500 to-emerald-600",
      github: "https://github.com/saivaraprasadmuvvala/online-organic-farm-store", // CHANGE if needed
      demo: "#" // replace with live link if hosted
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "AI-Based Online Proctoring System",
      description:
        "An intelligent exam monitoring system using computer vision and AI. Features face detection with OpenCV, gaze tracking, browser activity monitoring, and real-time alert systems for secure online examinations.",
      techStack: ["Python", "OpenCV", "JavaScript", "Computer Vision"],
      features: ["Face Detection", "Gaze Tracking", "Activity Monitoring", "Real-time Alerts"],
      category: "AI/ML",
      gradient: "from-blue-500 to-purple-600",
      github: "https://github.com/saivaraprasadmuvvala/online-proctoring-system",
      demo: "#" // add demo later if deployed
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Image Encryption & Decryption System",
      description:
        "A robust security application that encrypts and decrypts images using custom-built algorithms. Ensures secure transmission and storage of sensitive visual data.",
      techStack: ["Python", "Cryptography", "Image Processing"],
      features: ["Custom Algorithm", "Secure Transmission", "File Protection", "Fast Processing"],
      category: "Security",
      gradient: "from-red-500 to-pink-600",
      github: "https://github.com/saivaraprasadmuvvala/image-encryption-decryption",
      demo: "#"
    },
    {
      icon: <Gamepad2 className="w-8 h-8" />,
      title: "Rock Paper Scissors Game",
      description:
        "A classic logic-based game implemented with modern web technologies. Features interactive gameplay, score tracking, and responsive design.",
      techStack: ["JavaScript", "HTML", "CSS"],
      features: ["Interactive UI", "Score Tracking", "Responsive Design", "Smooth Animations"],
      category: "Game",
      gradient: "from-yellow-500 to-orange-600",
      github: "https://github.com/saivaraprasadmuvvala/rock-paper-scissors",
      demo: "https://saivaraprasadmuvvala.github.io/rock-paper-scissors"
    }
  ];


  return (
    <section id="projects" className="py-20 bg-secondary/20" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Featured Projects</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Innovative solutions showcasing technical expertise across various domains
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index}
                className={`group relative overflow-hidden bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-500 hover-scale ${
                  isVisible ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                <div className="relative p-6">
                  {/* Project Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="text-primary group-hover:text-accent transition-colors duration-300">
                        {project.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                        <Badge variant="outline" className="text-xs">
                          {project.category}
                        </Badge>
                      </div>
                    </div>
                  </div>

                  {/* Project Description */}
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Key Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-accent mb-3">Key Features</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {project.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-accent mb-3">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex}
                          variant="secondary"
                          className="bg-primary/10 text-primary border-primary/30 hover:bg-primary/20 transition-colors duration-300"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button
                        size="sm"
                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                      >
                        <Github size={16} className="mr-2" />
                        Code
                      </Button>
                    </a>

                    {project.demo && project.demo !== "#" ? (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1"
                      >
                        <Button
                          size="sm"
                          variant="outline"
                          className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                        >
                          <ExternalLink size={16} className="mr-2" />
                          Demo
                        </Button>
                      </a>
                    ) : (
                      <Button
                        size="sm"
                        variant="outline"
                        disabled
                        className="flex-1 border-muted text-muted-foreground cursor-not-allowed"
                      >
                        <ExternalLink size={16} className="mr-2" />
                        Demo
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className={`text-center mt-12 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '800ms' }}>
            <Card className="inline-block p-6 bg-card/30 backdrop-blur-sm border-primary/20">
              <p className="text-muted-foreground mb-4">
                Interested in seeing more of my work or collaborating on a project?
              </p>
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 glow-primary hover-scale"
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Let's Work Together
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;