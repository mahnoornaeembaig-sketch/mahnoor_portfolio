import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const socials = [
  { icon: Mail, href: "mailto:mahnoornaeembaig@gmail.com", label: "Email" },
  { icon: Github, href: "https://github.com/mahnoornaeembaig-sketch/github", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/mahnoor-naeem-baig/", label: "LinkedIn" },
];

const Footer = () => (
  <footer className="border-t border-border/50 py-8 bg-card/30 backdrop-blur-sm">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} Mahnoor Naeem. All rights reserved.
      </p>
      <p className="text-xs text-muted-foreground">
        Designed and built by <span className="text-primary font-medium">Mahnoor Naeem</span>
      </p>
      <div className="flex gap-4">
        {socials.map((social) => (
          <motion.a 
            key={social.label}
            href={social.href} 
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-lg hover:bg-primary/10"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            aria-label={social.label}
          >
            <social.icon size={18} />
          </motion.a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
