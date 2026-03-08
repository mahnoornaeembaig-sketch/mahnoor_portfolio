import { motion } from "framer-motion";
import { ExternalLink, Github, CheckCircle2, Clock } from "lucide-react";

const projects = [
  {
    title: "Flight Management System",
    description:
      "A console-based C++ application designed to manage flight schedules and passenger information. Demonstrates object-oriented programming concepts and structured program design.",
    features: [
      "Manage flight records",
      "Store passenger data",
      "Display flight schedules",
      "Menu-driven interface",
    ],
    tech: ["C"],
    github: "https://github.com/mahnoornaeembaig-sketch/github/blob/main/airplanereservation%20(1).c",
    status: "Completed",
  },
  {
    title: "Library Management System",
    description:
      "An object-oriented system designed to manage books, members, and borrowing operations efficiently.",
    features: [
      "Manage books and library resources",
      "Track issued and returned books",
      "Member management",
    ],
    tech: ["C++"],
    status: "In Progress",
  },
];

const ProjectsSection = () => (
  <section id="projects" className="relative">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">
          My <span className="gradient-text">Projects</span>
        </h2>
        <p className="section-subtitle">Things I've built and am working on</p>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="card-glass glow-border p-6 flex flex-col"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <span
                  className={`flex items-center gap-1.5 text-xs font-medium ${
                    project.status === "Completed"
                      ? "text-primary"
                      : "text-accent"
                  }`}
                >
                  {project.status === "Completed" ? (
                    <CheckCircle2 size={14} />
                  ) : (
                    <Clock size={14} />
                  )}
                  {project.status}
                </span>
              </div>

              <h3 className="text-xl font-bold text-foreground mb-3">{project.title}</h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {project.description}
              </p>

              <ul className="space-y-1.5 mb-6 flex-1">
                {project.features.map((f) => (
                  <li key={f} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-primary mt-1">▹</span>
                    {f}
                  </li>
                ))}
              </ul>

              <div className="flex gap-3">
                <a href="#" className="btn-outline-glow text-sm !px-4 !py-2 flex items-center gap-2">
                  <Github size={16} /> GitHub
                </a>
                <a href="#" className="btn-primary-gradient text-sm !px-4 !py-2 flex items-center gap-2">
                  <ExternalLink size={16} /> View Details
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default ProjectsSection;
