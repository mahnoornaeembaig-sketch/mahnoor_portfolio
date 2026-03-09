import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Sparkles } from "lucide-react";

const roles = [
  "Programmer",
  "Computer Engineering Student",
  "Future Systems Engineer",
];

const FloatingShape = ({ delay, duration, className }: { delay: number; duration: number; className: string }) => (
  <motion.div
    className={`absolute rounded-full opacity-20 ${className}`}
    animate={{
      y: [0, -30, 0],
      x: [0, 20, 0],
      scale: [1, 1.1, 1],
      rotate: [0, 180, 360],
    }}
    transition={{
      duration,
      delay,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />
);

const Particle = ({ index }: { index: number }) => {
  const randomX = Math.random() * 100;
  const randomDelay = Math.random() * 2;
  const randomDuration = 3 + Math.random() * 2;

  return (
    <motion.div
      className="absolute"
      style={{ left: `${randomX}%`, top: "100%" }}
      animate={{
        y: [0, -800],
        opacity: [0, 1, 1, 0],
        scale: [0, 1, 1, 0],
      }}
      transition={{
        duration: randomDuration,
        delay: randomDelay,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      <Sparkles className="text-primary" size={6 + Math.random() * 8} />
    </motion.div>
  );
};

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setText(current.slice(0, text.length + 1));
          if (text.length + 1 === current.length) {
            setTimeout(() => setIsDeleting(true), 1500);
          }
        } else {
          setText(current.slice(0, text.length - 1));
          if (text.length === 0) {
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 40 : 80
    );
    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Animated Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large gradient orbs */}
        <motion.div 
          className="absolute top-1/4 -left-32 w-96 h-96 rounded-full"
          style={{ 
            background: "radial-gradient(circle, hsl(280 35% 72% / 0.15) 0%, transparent 70%)",
            filter: "blur(60px)"
          }}
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full"
          style={{ 
            background: "radial-gradient(circle, hsl(300 45% 70% / 0.15) 0%, transparent 70%)",
            filter: "blur(60px)"
          }}
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />

        {/* Floating geometric shapes */}
        <FloatingShape 
          delay={0} 
          duration={6} 
          className="top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-primary/20 to-accent/20"
        />
        <FloatingShape 
          delay={1} 
          duration={7} 
          className="top-1/3 right-1/4 w-24 h-24 bg-gradient-to-br from-accent/20 to-primary/20"
        />
        <FloatingShape 
          delay={2} 
          duration={8} 
          className="bottom-1/3 left-1/3 w-20 h-20 bg-gradient-to-br from-primary/10 to-accent/10"
        />
        
        {/* Sparkle particles */}
        {[...Array(12)].map((_, i) => (
          <Particle key={i} index={i} />
        ))}
      </div>

      <div className="section-container text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p 
            className="font-mono text-primary text-sm mb-4 flex items-center justify-center gap-2"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Sparkles size={16} className="animate-pulse" />
            Hi, my name is
          </motion.p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4">
            Mahnoor <span className="gradient-text">Naeem</span>
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground mb-6">
            Computer Engineering Student | Aspiring Software Engineer
          </p>

          <div className="h-10 flex items-center justify-center mb-8">
            <span className="font-mono text-lg sm:text-xl text-foreground">
              I'm a{" "}
              <span className="text-primary font-semibold">{text}</span>
              <span className="typing-cursor" />
            </span>
          </div>

          <p className="text-muted-foreground max-w-2xl mx-auto mb-10 text-base sm:text-lg leading-relaxed">
            I am a Computer Engineering student passionate about programming, logical
            problem solving, and exploring the inner workings of computer systems.
          </p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <a href="#projects" className="btn-primary-gradient">
              View Projects
            </a>
            <a href="#contact" className="btn-outline-glow">
              Contact Me
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown className="text-primary/70" size={28} />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
