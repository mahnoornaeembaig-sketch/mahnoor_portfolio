import { motion } from "framer-motion";
import { ExternalLink, Award, Star } from "lucide-react";

const badges = [
  { name: "Problem Solving", level: "Basic", stars: 3, color: "from-emerald-500 to-teal-500" },
  { name: "C++", level: "Basic", stars: 3, color: "from-blue-500 to-cyan-500" },
  { name: "Python", level: "Basic", stars: 2, color: "from-yellow-500 to-orange-500" },
  { name: "SQL", level: "Basic", stars: 2, color: "from-purple-500 to-pink-500" },
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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card-glass glow-border p-8 mb-8"
          >
            <div className="flex flex-col sm:flex-row items-center gap-6">
              {/* HackerRank Logo */}
              <div className="w-20 h-20 rounded-2xl bg-[#00EA64] flex items-center justify-center shrink-0">
                <svg viewBox="0 0 512 512" className="w-12 h-12" fill="white">
                  <path d="M477.5 128C463 103.05 285.13 0 256.16 0S49.25 102.79 34.84 128s-14.49 230.8 0 256 192.38 128 221.32 128S463 409.08 477.49 384s14.51-231 .01-256zM316.13 414.22c-4 0-40.91-35.77-38-38.69.87-.87 6.26-1.48 17.55-1.83 0-26.23.59-68.59.94-86.32 0-2-.44-3.43-.44-5.85h-79.93c0 7.1-.46 36.2 1.37 72.88.23 4.54-1.58 6-5.74 5.94-10.13 0-20.27-.11-30.41-.08-4.1 0-5.87-1.53-5.74-6.11.92-33.44 3-84-.15-212.67v-3.17c-9.67-.35-16.38-1-17.26-1.84-2.92-2.92 34.54-38.69 38.49-38.69s41.17 35.78 38.27 38.69c-.87.87-7.9 1.49-16.77 1.84v3.16c-2.42 25.75-2 79.59-2.63 105.39h80.26c0-4.55.39-34.74-1.2-83.64-.1-3.39.95-5.17 4.21-5.2 11.07-.08 22.15-.13 33.23-.06 3.46 0 4.57 1.72 4.5 5.38C333 354.64 336 341.29 336 373.69c8.87.35 16.82 1 17.69 1.84 2.88 2.91-33.62 38.69-37.58 38.69z"/>
                </svg>
              </div>

              <div className="text-center sm:text-left flex-1">
                <h3 className="text-2xl font-bold text-foreground mb-1">HackerRank</h3>
                <p className="text-primary font-mono text-lg mb-2">@mahnoornaeembaig</p>
                <p className="text-muted-foreground text-sm mb-4">
                  Solving coding challenges and building problem-solving skills
                </p>
                <a
                  href="https://www.hackerrank.com/profile/mahnoornaeembaig"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary-gradient inline-flex items-center gap-2 !px-5 !py-2.5 text-sm"
                >
                  <ExternalLink size={16} /> Visit Profile
                </a>
              </div>
            </div>
          </motion.div>

          {/* Badges Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {badges.map((badge, i) => (
              <motion.div
                key={badge.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="card-glass glow-border p-5 text-center group cursor-pointer"
              >
                {/* Badge Icon */}
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${badge.color} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow`}>
                  <Award className="w-8 h-8 text-white" />
                </div>

                {/* Badge Name */}
                <h4 className="font-semibold text-foreground mb-1">{badge.name}</h4>
                <p className="text-xs text-muted-foreground mb-2">{badge.level}</p>

                {/* Stars */}
                <div className="flex justify-center gap-1">
                  {[...Array(5)].map((_, si) => (
                    <Star
                      key={si}
                      size={14}
                      className={si < badge.stars ? "text-primary fill-primary" : "text-muted-foreground/30"}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default CodingAchievementsSection;
