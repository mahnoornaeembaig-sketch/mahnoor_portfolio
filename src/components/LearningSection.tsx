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
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05, y: -8 }}
              className="card-glass p-6 text-center group cursor-pointer"
            >
              <motion.div 
                className="inline-flex p-3 rounded-xl bg-primary/10 mb-4 border border-primary/20"
                whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.2 }}
                transition={{ duration: 0.5 }}
              >
                <topic.icon className={topic.color} size={28} />
              </motion.div>
              <h3 className="font-semibold text-foreground text-sm sm:text-base group-hover:text-primary transition-colors">
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
