import { motion } from "framer-motion";
import { BookOpen, Binary, Cpu, Code2 } from "lucide-react";

const topics = [
  { icon: BookOpen, title: "Data Structures", color: "text-primary" },
  { icon: Binary, title: "Algorithms", color: "text-accent" },
  { icon: Cpu, title: "Digital Logic Design", color: "text-primary" },
  { icon: Code2, title: "Advanced OOP", color: "text-accent" },
];

const LearningSection = () => (
  <section className="relative">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">
          Currently <span className="gradient-text">Learning</span>
        </h2>
        <p className="section-subtitle">Topics I'm actively studying</p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {topics.map((topic, i) => (
            <motion.div
              key={topic.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="card-glass glow-border p-6 text-center group"
            >
              <div className="inline-flex p-3 rounded-xl bg-primary/10 mb-4 group-hover:scale-110 transition-transform">
                <topic.icon className={topic.color} size={28} />
              </div>
              <h3 className="font-semibold text-foreground text-sm sm:text-base">
                {topic.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default LearningSection;
