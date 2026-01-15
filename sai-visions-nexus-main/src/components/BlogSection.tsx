import { useEffect, useRef, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, ArrowRight, BookOpen, Brain, Trophy, Heart } from 'lucide-react';

const BlogSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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

  const blogPosts = [
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "The Developer's Journey: Learning Never Stops",
      excerpt:
        "Insights from my experience in full-stack development, the importance of continuous learning, and how staying curious drives innovation in tech.",
      category: "Development",
      readTime: "5 min read",
      date: "2024-01-15",
      tags: ["Learning", "Career", "Technology"],
      link: "/blog"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI & ML: The Future is Now",
      excerpt:
        "Exploring the current trends in artificial intelligence and machine learning, from computer vision applications to the ethical implications of AI in society.",
      category: "AI/ML",
      readTime: "7 min read",
      date: "2024-01-10",
      tags: ["AI", "Machine Learning", "Future Tech"],
      link: "/blog"
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "From Struggles to Success: My Placement Journey",
      excerpt:
        "A candid look at overcoming academic challenges, dealing with supplementary exams, and how perseverance led to meaningful internship opportunities.",
      category: "Personal",
      readTime: "6 min read",
      date: "2024-01-05",
      tags: ["Career", "Growth", "Inspiration"],
      link: "/blog"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Finding Balance: Code, Life, and Everything Between",
      excerpt:
        "Reflections on maintaining mental health, pursuing hobbies like music and painting, and building meaningful relationships while growing as a developer.",
      category: "Lifestyle",
      readTime: "4 min read",
      date: "2023-12-28",
      tags: ["Work-Life Balance", "Mental Health", "Hobbies"],
      link: "/blog"
    }
  ];

  return (
    <section id="blog" className="py-20" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
              Blog & Insights
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Sharing thoughts on development, AI/ML trends, and the journey of continuous learning
            </p>
          </div>

          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {blogPosts.map((post, index) => (
              <a key={index} href={post.link} className="block">
                <Card
                  className={`group relative overflow-hidden bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-500 hover-scale cursor-pointer ${
                    isVisible ? 'animate-fade-in' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="p-6">
                    
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="text-primary group-hover:text-accent transition-colors duration-300">
                          {post.icon}
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {post.category}
                        </Badge>
                      </div>
                      <div className="text-primary group-hover:text-accent transition-colors duration-300 opacity-0 group-hover:opacity-100">
                        <ArrowRight size={20} />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {post.excerpt}
                    </p>

                    {/* Meta */}
                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <Calendar size={14} />
                          <span>
                            {new Date(post.date).toLocaleDateString('en-US', {
                              month: 'short',
                              day: 'numeric',
                              year: 'numeric'
                            })}
                          </span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock size={14} />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag, tagIndex) => (
                        <Badge
                          key={tagIndex}
                          variant="secondary"
                          className="bg-primary/10 text-primary border-primary/30 hover:bg-primary/20 transition-colors duration-300 text-xs"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </Card>
              </a>
            ))}
          </div>

          {/* Quote */}
          <div className={`mt-16 text-center ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '800ms' }}>
            <Card className="max-w-4xl mx-auto p-8 bg-card/30 backdrop-blur-sm border-primary/20">
              <blockquote className="text-xl md:text-2xl font-medium mb-4">
                "The future belongs to those who learn more skills and combine them in creative ways."
              </blockquote>
              <p className="text-muted-foreground">
                — A principle that guides my journey through technology and innovation
              </p>
            </Card>
          </div>

          {/* CTA */}
          <div className={`text-center mt-12 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '1000ms' }}>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 hover-scale"
              onClick={() => document.querySelector('#blog')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View All Posts
              <ArrowRight size={20} className="ml-2" />
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BlogSection;
