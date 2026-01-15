import { useEffect, useRef, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Briefcase, Award, Code } from 'lucide-react';

const TimelineSection = () => {
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

  const timelineEvents = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "AIML Certificate - IIT Bhubaneswar",
      description: "Completed comprehensive course in Artificial Intelligence and Machine Learning from prestigious IIT Bhubaneswar, gaining deep insights into modern AI techniques and applications.",
      date: "2024",
      type: "education",
      tags: ["AI/ML", "IIT", "Certification"]
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Software Development Intern - Prodigy InfoTech",
      description: "Gained hands-on experience in software development, working on real-world projects and collaborating with experienced developers to build scalable solutions.",
      date: "Sep 2024",
      type: "experience", 
      tags: ["Internship", "Software Development", "Team Collaboration"]
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "AI & ML Intern - Coratia Technologies",
      description: "Specialized in AI and Machine Learning applications, working with computer vision projects using OpenCV and developing intelligent systems for real-world problems.",
      date: "2024",
      type: "experience",
      tags: ["AI/ML", "OpenCV", "Computer Vision"]
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Academic Journey & Personal Growth",
      description: "Overcame academic challenges including supplementary exams, demonstrating resilience and determination. This period shaped my character and strengthened my resolve to succeed in technology.",
      date: "2023-2024",
      type: "milestone",
      tags: ["Personal Growth", "Resilience", "Academic Success"]
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'education':
        return 'text-blue-400 border-blue-400/30 bg-blue-400/10';
      case 'experience':
        return 'text-green-400 border-green-400/30 bg-green-400/10';
      case 'milestone':
        return 'text-purple-400 border-purple-400/30 bg-purple-400/10';
      default:
        return 'text-primary border-primary/30 bg-primary/10';
    }
  };

  return (
    <section className="py-20" ref={sectionRef}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">Journey Timeline</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Key milestones in my educational and professional development
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary opacity-30"></div>

            {/* Timeline events */}
            <div className="space-y-12">
              {timelineEvents.map((event, index) => (
                <div 
                  key={index}
                  className={`relative flex items-start space-x-6 ${
                    isVisible ? 'animate-fade-in' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  {/* Timeline dot */}
                  <div className="relative flex-shrink-0">
                    <div className="w-16 h-16 bg-card border-2 border-primary/30 rounded-full flex items-center justify-center glow-primary">
                      <div className="text-primary">
                        {event.icon}
                      </div>
                    </div>
                  </div>

                  {/* Event content */}
                  <Card className="flex-1 p-6 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 hover-scale">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <h3 className="text-xl font-bold mb-2 sm:mb-0">{event.title}</h3>
                      <div className="flex items-center space-x-2">
                        <Badge variant="outline" className={getTypeColor(event.type)}>
                          {event.type}
                        </Badge>
                        <Badge variant="secondary" className="text-muted-foreground">
                          {event.date}
                        </Badge>
                      </div>
                    </div>

                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {event.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {event.tags.map((tag, tagIndex) => (
                        <Badge 
                          key={tagIndex}
                          variant="secondary"
                          className="bg-primary/10 text-primary border-primary/30 text-xs"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Inspirational Quote */}
          <div className={`mt-16 text-center ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '800ms' }}>
            <Card className="max-w-3xl mx-auto p-8 bg-card/30 backdrop-blur-sm border-primary/20">
              <blockquote className="text-lg md:text-xl font-medium text-foreground mb-4">
                "Every challenge is an opportunity to grow, every setback a setup for a comeback. The journey matters as much as the destination."
              </blockquote>
              <p className="text-muted-foreground">
                — My personal philosophy through the ups and downs of learning
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;