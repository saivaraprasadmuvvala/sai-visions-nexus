import { useEffect, useRef, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Brain, Lightbulb, Users } from 'lucide-react';
import developerAvatar from '@/assets/developer-avatar.jpg';

const AboutSection = () => {
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

  const strengths = [
    { icon: <Code className="w-6 h-6" />, title: "Quick Learner", description: "Rapidly adapts to new technologies and frameworks" },
    { icon: <Brain className="w-6 h-6" />, title: "Problem Solver", description: "Analytical thinking with innovative solutions" },
    { icon: <Lightbulb className="w-6 h-6" />, title: "Innovation-Driven", description: "Inspired by tech visionaries like Elon Musk and Tony Stark" },
    { icon: <Users className="w-6 h-6" />, title: "Strong Communicator", description: "Effective collaboration and team leadership" }
  ];

  const hobbies = ["Reading", "Music", "Workouts", "Editing", "Painting"];

  return (
    <section id="about" className="py-20 bg-secondary/20" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">About Me</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A passionate Full Stack Developer with a vision to innovate through technology
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Image and basic info */}
            <div className={`${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
              <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 hover-scale">
                <div className="text-center mb-6">
                  <div className="w-48 h-48 mx-auto mb-6 relative">
                    <img 
                      src={developerAvatar} 
                      alt="Sai Vara Prasad Muvvala" 
                      className="w-full h-full object-cover rounded-full border-4 border-primary/30 glow-primary"
                    />
                  </div>
                  <h3 className="text-2xl font-bold gradient-text mb-2">Sai Vara Prasad Muvvala</h3>
                  <p className="text-primary font-semibold text-lg">Full Stack Developer</p>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-accent mb-2">Education & Certifications</h4>
                    <Badge variant="secondary" className="mr-2 mb-2">AIML Certificate - IIT Bhubaneswar</Badge>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-accent mb-2">Experience</h4>
                    <div className="text-sm text-muted-foreground space-y-1">
                      <p>• Coratia Technologies - AI & ML Intern</p>
                      <p>• Prodigy InfoTech - Software Development Intern (Sep 2024)</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-accent mb-2">Hobbies</h4>
                    <div className="flex flex-wrap gap-2">
                      {hobbies.map((hobby, index) => (
                        <Badge key={index} variant="outline" className="border-primary/30">
                          {hobby}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Right side - Detailed description and strengths */}
            <div className={`space-y-8 ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
              <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-4 text-accent">My Journey</h3>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    I'm a passionate Full Stack Developer with expertise in modern web technologies and a deep 
                    fascination with AI and Machine Learning. My journey has been shaped by curiosity, determination, 
                    and the inspiration drawn from tech visionaries like Tony Stark and Elon Musk.
                  </p>
                  <p>
                    Through my internships at Coratia Technologies and Prodigy InfoTech, I've gained hands-on 
                    experience in both AI/ML applications and software development. I believe in the power of 
                    technology to solve real-world problems and create meaningful impact.
                  </p>
                  <p>
                    My academic journey, including earning an AIML certificate from IIT Bhubaneswar, has equipped 
                    me with both theoretical knowledge and practical skills. I'm always eager to learn new 
                    technologies and contribute to innovative projects that push the boundaries of what's possible.
                  </p>
                </div>
              </Card>

              {/* Strengths Grid */}
              <div className="grid md:grid-cols-2 gap-4">
                {strengths.map((strength, index) => (
                  <Card 
                    key={index} 
                    className="p-4 bg-card/30 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 hover-scale group"
                  >
                    <div className="flex items-start space-x-3">
                      <div className="text-primary group-hover:text-accent transition-colors duration-300">
                        {strength.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">{strength.title}</h4>
                        <p className="text-sm text-muted-foreground">{strength.description}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;