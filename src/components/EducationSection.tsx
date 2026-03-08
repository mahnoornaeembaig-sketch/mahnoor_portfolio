import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const coursework = [
  "Programming Fundamentals",
  "Object-Oriented Programming",
  "Digital Logic Design",
  "Discrete Structures",
];

const EducationSection = () => (
  <section id="education" className="relative">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">
          <span className="gradient-text">Education</span>
        </h2>
        <p className="section-subtitle">My academic background</p>

        <div className="space-y-6 max-w-3xl mx-auto">
          {[
            {
              degree: "Bachelor's in Computer Systems Engineering",
              institution: "NED University of Engineering and Technology",
              showCoursework: true,
            },
            {
              degree: "Intermediate in Computer Science",
              institution: "BAMM P.E.C.H.S GOVT College for Women",
            },
            {
              degree: "Matriculation",
              institution: "St. Patrick's Girls High School",
            },
          ].map((edu, i) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="card-glass glow-border p-8"
            >
              <div className="flex items-start gap-5">
                <div className="p-3 rounded-xl bg-primary/10 shrink-0">
                  <GraduationCap className="text-primary" size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-1">
                    {edu.degree}
                  </h3>
                  <p className="text-primary font-medium mb-4">
                    {edu.institution}
                  </p>
                  {edu.showCoursework && (
                    <>
                      <h4 className="text-sm font-semibold text-foreground mb-3">
                        Relevant Coursework
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {coursework.map((c) => (
                          <span
                            key={c}
                            className="text-xs font-mono px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground"
                          >
                            {c}
                          </span>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default EducationSection;
