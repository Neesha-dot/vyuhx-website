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
        "section-badge-label inline-block mb-3 px-3 py-1 rounded-full",
        light 
          ? "bg-white/10 text-cyan-300 border border-white/20" 
          : "bg-cyan-50 text-cyan-600 border border-cyan-100"
      )}>
        {subtitle}
      </span>
      <h2 className={cn(
        "section-main-heading mb-6",
        light ? "text-white !important" : ""
      )}>
        {title}
      </h2>
      <p className={cn(
        "section-subtitle text-lg md:text-xl leading-relaxed",
        light ? "text-slate-300" : "text-slate-600"
      )}>
        {description}
      </p>
    </motion.div>
  );
}
