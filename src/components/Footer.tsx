import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border py-8">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} Mahnoor Naeem. All rights reserved.
      </p>
      <p className="text-xs text-muted-foreground">
        Designed and built by <span className="text-primary font-medium">Mahnoor Naeem</span>
      </p>
      <div className="flex gap-4">
        <a href="mailto:mahnoor@example.com" className="text-muted-foreground hover:text-primary transition-colors">
          <Mail size={18} />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
          <Github size={18} />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
          <Linkedin size={18} />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
