import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-olly-dark/50 border-t border-white/5 py-8">
      <div className="container mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="inline-block">
              <img 
                src="/assets/logo.png" 
                alt="OllyGarden Logo" 
                className="h-8"
              />
            </Link>
          </div>
          
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 items-center">
            <Link
              to="/"
              className="text-olly-white/80 hover:text-olly-accent transition-all-300 text-sm"
            >
              Home
            </Link>
            <a
              href="https://blog.olly.garden"
              target="_blank"
              rel="noopener noreferrer"
              className="text-olly-white/80 hover:text-olly-accent transition-all-300 text-sm inline-flex items-center"
            >
              Blog
              <ExternalLink size={12} className="ml-1" />
            </a>
            <Link
              to="/careers"
              className="text-olly-white/80 hover:text-olly-accent transition-all-300 text-sm"
            >
              Careers
            </Link>
            <Link
              to="/privacy-policy"
              className="text-olly-white/80 hover:text-olly-accent transition-all-300 text-sm"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms-of-use"
              className="text-olly-white/80 hover:text-olly-accent transition-all-300 text-sm"
            >
              Terms of Use
            </Link>
          </div>
        </div>
        
        <div className="mt-8 pt-4 border-t border-white/5 flex flex-col md:flex-row justify-between items-center">
          <p className="text-olly-white/60 text-xs">
            &copy; {currentYear} OllyGarden, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
