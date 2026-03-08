import { motion } from "framer-motion";
import { Code, Globe, BookOpen, Wrench } from "lucide-react";

const categories = [
  {
    icon: Code,
    title: "Programming",
    skills: [
      { name: "C", level: 75 },
      { name: "C++", level: 80 },
      { name: "Python", level: 60 },
    ],
  },
  {
    icon: Globe,
    title: "Web Development",
    skills: [{ name: "HTML", level: 65 }],
  },
  {
    icon: BookOpen,
    title: "CS Foundations",
    skills: [
      { name: "Object-Oriented Programming", level: 80 },
      { name: "Problem Solving", level: 85 },
      { name: "Logic Design", level: 70 },
      { name: "Basic Data Structures", level: 65 },
    ],
  },
  {
    icon: Wrench,
    title: "Tools",
    skills: [
      { name: "Git", level: 60 },
      { name: "VS Code", level: 85 },
    ],
  },
];

const SkillBar = ({ name, level, delay }: { name: string; level: number; delay: number }) => (
  <div className="space-y-1.5">
    <div className="flex justify-between text-sm">
      <span className="text-foreground font-medium">{name}</span>
      <span className="text-muted-foreground font-mono text-xs">{level}%</span>
    </div>
    <div className="skill-bar">
      <motion.div
        className="skill-bar-fill"
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay, ease: "easeOut" }}
      />
    </div>
  </div>
);

const SkillsSection = () => (
  <section id="skills" className="relative">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">
          My <span className="gradient-text">Skills</span>
        </h2>
        <p className="section-subtitle">Technologies and concepts I work with</p>

        <div className="grid sm:grid-cols-2 gap-6">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: ci * 0.1 }}
              className="card-glass glow-border p-6 space-y-5"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <cat.icon className="text-primary" size={20} />
                </div>
                <h3 className="font-semibold text-lg text-foreground">{cat.title}</h3>
              </div>
              <div className="space-y-4">
                {cat.skills.map((skill, si) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    delay={ci * 0.1 + si * 0.1}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default SkillsSection;
