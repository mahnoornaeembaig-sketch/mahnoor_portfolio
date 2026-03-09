import { motion } from "framer-motion";
import { ExternalLink, Award, Star, Github } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const badges = [
  { name: "Problem Solving", level: "Basic", stars: 5, color: "from-primary via-accent to-primary", percentage: "90%" },
  { name: "C++", level: "Basic", stars: 4, color: "from-accent via-primary to-accent", percentage: "85%" },
  { name: "Python", level: "Basic", stars: 3, color: "from-primary via-lavender-300 to-accent", percentage: "60%" },
  { name: "SQL", level: "Basic", stars: 2, color: "from-accent via-primary to-lavender-300", percentage: "40%" },
];

const CodingAchievementsSection = () => (
  <section id="achievements" className="relative">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">
          Coding <span className="gradient-text">Achievements</span>
        </h2>
        <p className="section-subtitle">My competitive programming journey</p>

        <div className="max-w-4xl mx-auto">
          {/* HackerRank Profile Card */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -6, scale: 1.01 }}
            className="card-glass p-8 mb-8"
          >
            <div className="flex flex-col sm:flex-row items-center gap-6">
              {/* HackerRank Logo */}
              <motion.div 
                className="w-20 h-20 rounded-2xl bg-[#00EA64] flex items-center justify-center shrink-0 shadow-lg"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <svg viewBox="0 0 512 512" className="w-12 h-12" fill="white">
                  <path d="M477.5 128C463 103.05 285.13 0 256.16 0S49.25 102.79 34.84 128s-14.49 230.8 0 256 192.38 128 221.32 128S463 409.08 477.49 384s14.51-231 .01-256zM316.13 414.22c-4 0-40.91-35.77-38-38.69.87-.87 6.26-1.48 17.55-1.83 0-26.23.59-68.59.94-86.32 0-2-.44-3.43-.44-5.85h-79.93c0 7.1-.46 36.2 1.37 72.88.23 4.54-1.58 6-5.74 5.94-10.13 0-20.27-.11-30.41-.08-4.1 0-5.87-1.53-5.74-6.11.92-33.44 3-84-.15-212.67v-3.17c-9.67-.35-16.38-1-17.26-1.84-2.92-2.92 34.54-38.69 38.49-38.69s41.17 35.78 38.27 38.69c-.87.87-7.9 1.49-16.77 1.84v3.16c-2.42 25.75-2 79.59-2.63 105.39h80.26c0-4.55.39-34.74-1.2-83.64-.1-3.39.95-5.17 4.21-5.2 11.07-.08 22.15-.13 33.23-.06 3.46 0 4.57 1.72 4.5 5.38C333 354.64 336 341.29 336 373.69c8.87.35 16.82 1 17.69 1.84 2.88 2.91-33.62 38.69-37.58 38.69z"/>
                </svg>
              </motion.div>

              <div className="text-center sm:text-left flex-1">
                <h3 className="text-2xl font-bold text-foreground mb-1">HackerRank</h3>
                <p className="text-primary font-mono text-lg mb-2">@mahnoornaeembaig</p>
                <p className="text-muted-foreground text-sm mb-4">
                  Solving coding challenges and building problem-solving skills
                </p>
                <motion.a
                  href="https://www.hackerrank.com/profile/mahnoornaeembaig"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary-gradient inline-flex items-center gap-2 !px-5 !py-2.5 text-sm"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ExternalLink size={16} /> Visit Profile
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* GitHub Stats Card */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ y: -6, scale: 1.01 }}
            className="card-glass p-8 mb-8"
          >
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <motion.div 
                className="w-20 h-20 rounded-2xl bg-[#24292e] flex items-center justify-center shrink-0 shadow-lg"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <Github className="w-12 h-12 text-white" />
              </motion.div>
              <div className="text-center sm:text-left flex-1">
                <h3 className="text-2xl font-bold text-foreground mb-1">GitHub</h3>
                <p className="text-primary font-mono text-lg mb-2">@mahnoornaeembaig-sketch</p>
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <motion.div 
                    className="text-center p-3 rounded-lg bg-primary/5 border border-primary/20"
                    whileHover={{ scale: 1.05, borderColor: "hsl(280 35% 72%)" }}
                  >
                    <div className="text-2xl font-bold text-primary">8</div>
                    <div className="text-xs text-muted-foreground">Repositories</div>
                  </motion.div>
                  <motion.div 
                    className="text-center p-3 rounded-lg bg-primary/5 border border-primary/20"
                    whileHover={{ scale: 1.05, borderColor: "hsl(280 35% 72%)" }}
                  >
                    <div className="text-2xl font-bold text-accent">45</div>
                    <div className="text-xs text-muted-foreground">Contributions</div>
                  </motion.div>
                  <motion.div 
                    className="text-center p-3 rounded-lg bg-primary/5 border border-primary/20"
                    whileHover={{ scale: 1.05, borderColor: "hsl(280 35% 72%)" }}
                  >
                    <div className="text-2xl font-bold text-primary">3</div>
                    <div className="text-xs text-muted-foreground">Languages</div>
                  </motion.div>
                </div>
                <motion.a
                  href="https://github.com/mahnoornaeembaig-sketch"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary-gradient inline-flex items-center gap-2 !px-5 !py-2.5 text-sm"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ExternalLink size={16} /> View Profile
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Badges Grid */}
          <TooltipProvider>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {badges.map((badge, i) => (
                <motion.div
                  key={badge.name}
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.08, y: -8 }}
                  className="card-glass p-5 text-center group cursor-pointer"
                >
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div>
                        {/* Badge Icon */}
                        <motion.div 
                          className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${badge.color} flex items-center justify-center shadow-lg border border-white/20`}
                          whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.15 }}
                          transition={{ duration: 0.6 }}
                        >
                          <Award className="w-8 h-8 text-white" />
                        </motion.div>

                        {/* Badge Name */}
                        <h4 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                          {badge.name}
                        </h4>
                        <p className="text-xs text-muted-foreground mb-2">{badge.level}</p>

                        {/* Stars */}
                        <div className="flex justify-center gap-1">
                          {[...Array(5)].map((_, si) => (
                            <motion.div
                              key={si}
                              initial={{ opacity: 0, scale: 0 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ delay: 0.3 + i * 0.1 + si * 0.05 }}
                            >
                              <Star
                                size={14}
                                className={si < badge.stars ? "text-primary fill-primary" : "text-muted-foreground/30"}
                              />
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent className="bg-card border-primary/30">
                      <p className="font-mono text-primary">Skill Level: {badge.percentage}</p>
                    </TooltipContent>
                  </Tooltip>
                </motion.div>
              ))}
            </div>
          </TooltipProvider>
        </div>
      </motion.div>
    </div>
  </section>
);

export default CodingAchievementsSection;
