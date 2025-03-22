
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import ContactForm from "@/components/ContactForm";
import { ArrowRight } from "lucide-react";

export default function Index() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (heroRef.current) {
        // Parallax effect for hero section
        heroRef.current.style.transform = `translateY(${scrollY * 0.25}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="min-h-screen w-full relative overflow-hidden flex items-center justify-center">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-olly-dark to-olly-dark/70 z-0"></div>
        <div ref={heroRef} className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-olly-accent/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-olly-accent/5 rounded-full blur-3xl"></div>
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-6 py-12 md:py-24 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-block animate-float">
              <img
                src="/lovable-uploads/e09be7f4-1703-4f71-9c33-362f30eb1819.png"
                alt="OllyGarden Logo"
                className="h-20 md:h-24 lg:h-28 mx-auto mb-8"
              />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-olly-white">
              <span className="block">
                There's a lot of bad telemetry out there.
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-olly-white/80 max-w-2xl mx-auto leading-relaxed">
              We're building the next generation of observability tools to help engineers unlock insights from their telemetry data.
            </p>

            <div className="flex flex-col md:flex-row gap-4 justify-center mt-8">
              <Link
                to="/careers"
                className={cn(
                  "px-6 py-3 rounded-md font-medium transition-all-300 inline-flex items-center",
                  "bg-olly-accent text-olly-dark hover:bg-olly-accent/90",
                  "focus:outline-none focus:ring-2 focus:ring-olly-accent/50"
                )}
              >
                View Careers
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-olly-dark/70 to-olly-dark/90 z-0"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-olly-white mb-4">
                Get in Touch
              </h2>
              <p className="text-olly-white/80 max-w-md mx-auto">
                Interested in learning more? Send us a message and we'll get back to you soon.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 md:p-8 shadow-lg animate-slideUp">
              <div className="flex flex-col lg:flex-row gap-12">
                <div className="lg:w-1/2">
                  <h3 className="text-xl font-semibold text-olly-white mb-4">
                    Contact Information
                  </h3>
                  <p className="text-olly-white/80 mb-6">
                    Fill out the form and our team will get back to you within 24 hours.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-olly-accent/10 flex items-center justify-center mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-olly-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-olly-white/60">Email</p>
                        <p className="text-olly-white">contact@olly.garden</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-olly-accent/10 flex items-center justify-center mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-olly-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-olly-white/60">Location</p>
                        <p className="text-olly-white">Remote, Worldwide</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/2">
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
