
import { useParams, useNavigate, Link } from "react-router-dom";
import { useEffect } from "react";
import { getBlogPostBySlug } from "@/data/blogPosts";
import { CalendarDays, Tag, ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { remark } from "remark";
import remarkHtml from "remark-html";

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const post = getBlogPostBySlug(slug || "");
  
  useEffect(() => {
    if (!post) {
      navigate("/blog", { replace: true });
    }
    // Scroll to top when post changes
    window.scrollTo(0, 0);
  }, [post, navigate]);

  if (!post) {
    return null;
  }

  const processMarkdown = (content: string) => {
    const processed = remark()
      .use(remarkHtml)
      .processSync(content);
    return { __html: String(processed) };
  };

  return (
    <div className="container mx-auto py-16 px-4 md:px-6 lg:px-8 lg:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Link 
          to="/blog" 
          className="inline-flex items-center text-white/80 hover:text-olly-accent mb-8 transition-all-300"
        >
          <ArrowLeft size={18} className="mr-2" />
          Back to all articles
        </Link>

        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="h-[400px] overflow-hidden rounded-xl">
              <img 
                src={post.coverImage} 
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="mb-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-olly-white">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <div className="flex items-center text-white/70">
                {post.author.avatar && (
                  <img 
                    src={post.author.avatar} 
                    alt={post.author.name}
                    className="w-10 h-10 rounded-full mr-3 object-cover"
                  />
                )}
                <span>{post.author.name}</span>
              </div>
              
              <div className="flex items-center text-white/70">
                <CalendarDays size={18} className="mr-2" />
                <span>{new Date(post.publishedAt).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric'
                })}</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map((tag) => (
                <span 
                  key={tag} 
                  className={cn(
                    "px-3 py-1 rounded-full text-sm", 
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
            </div>
          </div>

          <div className="prose prose-lg prose-invert max-w-none">
            <div dangerouslySetInnerHTML={processMarkdown(post.content)} />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
