
import { useState } from "react";
import { Link } from "react-router-dom";
import { blogPosts } from "@/data/blogPosts";
import { CalendarDays, Tag, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState("");
  
  const filteredPosts = blogPosts.filter(post => 
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="container mx-auto py-16 px-4 md:px-8 lg:py-24">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-olly-white">
          OllyGarden <span className="text-olly-accent">Blog</span>
        </h1>
        <p className="text-lg text-white/80 max-w-2xl mx-auto">
          Insights, updates, and best practices for optimizing telemetry pipelines and transforming raw data into actionable intelligence.
        </p>
        
        <div className="max-w-md mx-auto mt-8">
          <input
            type="text"
            placeholder="Search articles..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-5 py-3 bg-olly-dark text-white border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-olly-accent"
          />
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-effect rounded-xl overflow-hidden hover:border-olly-accent/30 transition-all-300"
            >
              <Link to={`/blog/${post.slug}`} className="block">
                <div className="h-56 overflow-hidden">
                  <img 
                    src={post.coverImage} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-all-300 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-4 mb-4 text-sm text-white/70">
                    <div className="flex items-center">
                      <CalendarDays size={16} className="mr-1" />
                      <span>{new Date(post.publishedAt).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'short', 
                        day: 'numeric'
                      })}</span>
                    </div>
                    <div className="flex items-center flex-wrap gap-2">
                      <Tag size={16} className="mr-1" />
                      {post.tags.slice(0, 2).map((tag) => (
                        <span 
                          key={tag} 
                          className={cn(
                            "text-xs px-2 py-1 rounded-full", 
                            tag === "AI" || tag === "Machine Learning" 
                              ? "bg-purple-900/40 text-purple-200"
                              : tag === "Telemetry" || tag === "Observability"
                              ? "bg-blue-900/40 text-blue-200"
                              : "bg-gray-800/40 text-gray-200"
                          )}
                        >
                          {tag}
                        </span>
                      ))}
                      {post.tags.length > 2 && (
                        <span className="text-xs">+{post.tags.length - 2}</span>
                      )}
                    </div>
                  </div>
                  <h2 className="text-xl font-bold mb-3 text-olly-white">
                    {post.title}
                  </h2>
                  <p className="text-white/80 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      {post.author.avatar && (
                        <img 
                          src={post.author.avatar} 
                          alt={post.author.name}
                          className="w-8 h-8 rounded-full mr-2 object-cover"
                        />
                      )}
                      <span className="text-sm text-white/70">{post.author.name}</span>
                    </div>
                    <span className="text-olly-accent inline-flex items-center text-sm font-medium">
                      Read more <ArrowRight size={16} className="ml-1" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))
        ) : (
          <div className="col-span-1 md:col-span-2 text-center py-16">
            <h3 className="text-xl text-white/80 mb-2">No articles found</h3>
            <p className="text-white/60">
              Try adjusting your search terms or browse all our content by clearing the search.
            </p>
            <button 
              onClick={() => setSearchTerm("")} 
              className="mt-4 px-6 py-2 bg-olly-accent/20 text-olly-accent rounded-md hover:bg-olly-accent/30 transition-all-300"
            >
              Clear search
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
