import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const roles = [
  "Programmer",
  "Computer Engineering Student",
  "Future Systems Engineer",
];

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
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="section-container text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-mono text-primary text-sm mb-4">Hi, my name is</p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4">
            Mahnoor <span className="gradient-text">Naeem</span>
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground mb-6">
            Computer Engineering Student | Aspiring Software Engineer
          </p>

          <div className="h-10 flex items-center justify-center mb-8">
            <span className="font-mono text-lg sm:text-xl text-foreground">
              I'm a{" "}
              <span className="text-primary">{text}</span>
              <span className="typing-cursor" />
            </span>
          </div>

          <p className="text-muted-foreground max-w-2xl mx-auto mb-10 text-base sm:text-lg leading-relaxed">
            I am a Computer Engineering student passionate about programming, logical
            problem solving, and exploring the inner workings of computer systems.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#projects" className="btn-primary-gradient">
              View Projects
            </a>
            <a href="#contact" className="btn-outline-glow">
              Contact Me
            </a>
          </div>
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown className="text-muted-foreground" size={28} />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
