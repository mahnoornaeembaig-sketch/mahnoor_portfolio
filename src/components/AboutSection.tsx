import { motion } from "framer-motion";
import { Code2, Cpu, Lightbulb } from "lucide-react";

const highlights = [
  { icon: Code2, title: "Programming", desc: "Building clean, efficient solutions with C/C++" },
  { icon: Cpu, title: "Systems", desc: "Understanding how software and hardware interact" },
  { icon: Lightbulb, title: "Problem Solving", desc: "Tackling complex challenges with logical thinking" },
];

const AboutSection = () => (
  <section id="about" className="relative">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">
          About <span className="gradient-text">Me</span>
        </h2>
        <p className="section-subtitle">Getting to know me</p>

        <div className="grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-3 space-y-5 text-muted-foreground leading-relaxed">
            <p>
              Ever since I first interacted with a computer, I've been fascinated by what
              makes technology work beneath the surface. This curiosity led me to pursue
              Computer Engineering, where I get to explore both the software and hardware
              sides of computing.
            </p>
            <p>
              I'm deeply interested in programming and enjoy the process of breaking down
              complex problems into elegant, efficient solutions. Whether it's building
              applications in C++ or learning about digital logic, I find joy in
              understanding the "why" behind every system.
            </p>
            <p>
              My goal is to grow as a software developer and systems engineer, contributing
              to projects that push the boundaries of what technology can achieve. I'm
              always eager to learn, adapt, and take on new challenges.
            </p>
          </div>

          <div className="lg:col-span-2 space-y-4">
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="card-glass glow-border p-5 flex items-start gap-4"
              >
                <div className="p-2 rounded-lg bg-primary/10">
                  <item.icon className="text-primary" size={22} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
