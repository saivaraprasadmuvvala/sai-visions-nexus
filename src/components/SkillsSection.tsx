import { useEffect, useRef, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Monitor, Server, Database, Wrench } from 'lucide-react';

const SkillsSection = () => {
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

  const skillCategories = [
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "Frontend Development",
      skills: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "Responsive Design", "UI/UX Design"],
      color: "primary"
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "Backend Development", 
      skills: ["Python", "Java", "C", "C++", "REST APIs", "Server Architecture"],
      color: "accent"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Database & Tools",
      skills: ["SQL", "Git", "Version Control", "Database Design", "Query Optimization"],
      color: "primary"
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "AI & Machine Learning",
      skills: ["OpenCV", "Computer Vision", "AI Algorithms", "Data Analysis", "Python ML Libraries"],
      color: "accent"
    }
  ];

  return (
    <section id="skills" className="py-20" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Technical Skills</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A comprehensive toolkit for building modern, scalable applications
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <Card 
                key={index}
                className={`p-6 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-500 hover-scale group ${
                  isVisible ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex items-center mb-6">
                  <div className={`text-${category.color} group-hover:glow-primary transition-all duration-300 mr-4`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex}
                      variant="secondary"
                      className={`${
                        category.color === 'primary' 
                          ? 'bg-primary/10 text-primary border-primary/30 hover:bg-primary/20' 
                          : 'bg-accent/10 text-accent border-accent/30 hover:bg-accent/20'
                      } transition-all duration-300 hover-scale cursor-default`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg pointer-events-none"></div>
              </Card>
            ))}
          </div>

          {/* Additional Info */}
          <div className={`mt-12 text-center ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '800ms' }}>
            <Card className="inline-block p-6 bg-card/30 backdrop-blur-sm border-primary/20">
              <p className="text-muted-foreground">
                <span className="text-primary font-semibold">Always Learning:</span> Currently exploring advanced AI/ML concepts, 
                cloud technologies, and modern frameworks to stay at the forefront of technology.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;