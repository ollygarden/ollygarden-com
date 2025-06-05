
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from '@/components/ThemeToggle';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/80 backdrop-blur-md border-b border-border/50' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/b169a905-547e-41a9-b2a6-ce011c4306a1.png" 
              alt="OllyGarden" 
              className="h-8 w-8"
            />
            <span className="text-xl font-bold text-foreground">
              OllyGarden
            </span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/product" 
              className={`transition-colors duration-200 ${
                location.pathname === '/product' 
                  ? 'text-olly-green' 
                  : 'text-muted-foreground hover:text-olly-green'
              }`}
            >
              Product
            </Link>
            <Link 
              to="/about" 
              className={`transition-colors duration-200 ${
                location.pathname === '/about' 
                  ? 'text-olly-green' 
                  : 'text-muted-foreground hover:text-olly-green'
              }`}
            >
              About Us
            </Link>
            <Link 
              to="/pricing" 
              className={`transition-colors duration-200 ${
                location.pathname === '/pricing' 
                  ? 'text-olly-green' 
                  : 'text-muted-foreground hover:text-olly-green'
              }`}
            >
              Pricing
            </Link>
            <Link 
              to="/contact" 
              className={`transition-colors duration-200 ${
                location.pathname === '/contact' 
                  ? 'text-olly-green' 
                  : 'text-muted-foreground hover:text-olly-green'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <Button 
              className="bg-olly-green text-olly-dark hover:bg-olly-green/90 font-semibold px-6 py-2 transition-all duration-200 hover:scale-105"
            >
              Get Early Access
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
