import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  subtitle: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}

export function SectionHeading({ 
  subtitle, 
  title, 
  description, 
  align = "center",
  light = false
}: SectionHeadingProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className={cn(
        "mb-12 max-w-3xl mx-auto",
        align === "center" ? "text-center" : "text-left"
      )}
    >
      <span className={cn(
        "inline-block text-sm font-bold tracking-wider uppercase mb-3 px-3 py-1 rounded-full",
        light 
          ? "bg-white/10 text-cyan-300 border border-white/20" 
          : "bg-cyan-50 text-cyan-600 border border-cyan-100"
      )}>
        {subtitle}
      </span>
      <h2 className={cn(
        "text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6 leading-tight",
        light ? "text-white" : "text-slate-900"
      )}>
        {title}
      </h2>
      {description && (
        <p className={cn(
          "text-lg md:text-xl leading-relaxed",
          light ? "text-slate-300" : "text-slate-600"
        )}>
          {description}
        </p>
      )}
    </motion.div>
  );
}
