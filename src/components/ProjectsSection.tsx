import { motion } from "framer-motion";
import { ExternalLink, Github, CheckCircle2, Clock } from "lucide-react";

const projects = [
  {
    title: "Library Management System",
    description:
      "An object-oriented system designed to manage books, members, and borrowing operations efficiently.",
    features: [
      "Manage books and library resources",
      "Track issued and returned books",
    ],
    tech: ["C++"],
    github: "https://github.com/mahnoornaeembaig-sketch/LIBRARY_MANAGEMENT_SYSTEM_C-",
    status: "Completed",
  },
  {
    title: "Flight Reservation System",
    description:
      "A C program designed to manage flight bookings and ticketing using robust file handling.",
    features: [
      "Book, view, and cancel flight reservations",
      "Generate user tickets with unique IDs",
      "Validate inputs and store data via file reading/writing",
    ],
    tech: ["C"],
    github: "https://github.com/mahnoornaeembaig-sketch/FLIGHT-RESERVATION-SYSTEM",
    status: "Completed",
  },
  {
    title: "The Cheesecake Method",
    description:
      "A full-stack e-commerce storefront and secure admin dashboard designed to manage boutique bakery operations efficiently.",
    features: [
      "Process customer orders and verified reviews",
      "Trigger one-click automated WhatsApp status updates",
      "Manage operations securely via a private database backend",
    ],
    tech: ["Full-Stack"],
    live: "https://thecheesecakemethod.vercel.app/",
    status: "Live",
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="card-glass p-6 flex flex-col group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex gap-2">
                  {project.tech.map((t) => (
                    <motion.span
                      key={t}
                      className="font-mono text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                      whileHover={{ scale: 1.1, borderColor: "hsl(280 35% 72%)" }}
                    >
                      {t}
                    </motion.span>
                  ))}
                </div>
                <motion.span
                  className={`flex items-center gap-1.5 text-xs font-medium px-3 py-1 rounded-full ${
                    project.status === "Completed"
                      ? "text-primary bg-primary/10 border border-primary/20"
                      : "text-accent bg-accent/10 border border-accent/20"
                  }`}
                  whileHover={{ scale: 1.05 }}
                >
                  {project.status === "Completed" ? (
                    <CheckCircle2 size={14} />
                  ) : (
                    <Clock size={14} />
                  )}
                  {project.status}
                </motion.span>
              </div>

              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {project.description}
              </p>

              <ul className="space-y-1.5 mb-6 flex-1">
                {project.features.map((f) => (
                  <motion.li 
                    key={f} 
                    className="text-sm text-muted-foreground flex items-start gap-2"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                  >
                    <span className="text-primary mt-1">▹</span>
                    {f}
                  </motion.li>
                ))}
              </ul>

              <div className="flex gap-3">
                {project.github && (
                  <motion.a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn-outline-glow text-sm !px-4 !py-2 flex items-center gap-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github size={16} /> View on GitHub
                  </motion.a>
                )}
                {project.live && (
                  <motion.a 
                    href={project.live} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn-primary-gradient text-sm !px-4 !py-2 flex items-center gap-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink size={16} /> View Live Website
                  </motion.a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default ProjectsSection;
