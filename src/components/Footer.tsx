
import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-olly-dark/50 border-t border-white/5 py-8">
      <div className="container mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="inline-block">
              <img 
                src="/lovable-uploads/e09be7f4-1703-4f71-9c33-362f30eb1819.png" 
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
            <Link
              to="/careers"
              className="text-olly-white/80 hover:text-olly-accent transition-all-300 text-sm"
            >
              Careers
            </Link>
          </div>
        </div>
        
        <div className="mt-8 pt-4 border-t border-white/5 flex flex-col md:flex-row justify-between items-center">
          <p className="text-olly-white/60 text-xs">
            &copy; {currentYear} OllyGarden. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-4">
            <a
              href="#"
              className="text-olly-white/60 hover:text-olly-accent transition-all-300 text-xs"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-olly-white/60 hover:text-olly-accent transition-all-300 text-xs"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
