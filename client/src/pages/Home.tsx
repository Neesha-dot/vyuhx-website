import { useRef, useState, useEffect } from "react";
import { Link } from "react-scroll";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import CountUp from "react-countup";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import VanillaTilt from "vanilla-tilt";
import { 
  ArrowRight, CheckCircle2, Trophy, Users, Code2, 
  Monitor, Smartphone, Cloud, Cpu, LineChart, Globe,
  Send, MapPin, Mail, Phone, ExternalLink, Calendar,
  Award
} from "lucide-react";
import { 
  SiReact, SiNodedotjs, SiTypescript, SiPython, SiAmazonwebservices, 
  SiDocker, SiKubernetes, SiNextdotjs, SiPostgresql, SiMongodb, 
  SiTailwindcss, SiFigma, SiFlutter, SiGraphql, SiRedis, SiTensorflow, SiFirebase, SiGo
} from "react-icons/si";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { SectionHeading } from "@/components/SectionHeading";
import { useContactForm } from "@/hooks/use-contact";
import { insertContactMessageSchema } from "@shared/schema";

// Form Schema
const formSchema = insertContactMessageSchema.extend({
  phone: z.string().optional(),
  subject: z.string().optional(),
});

export default function Home() {
  const contactMutation = useContactForm();
  const [selectedService, setSelectedService] = useState<any>(null);
  const [isClosing, setIsClosing] = useState(false);
  
  useEffect(() => {
    if (selectedService) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => { document.body.style.overflow = "auto"; };
  }, [selectedService]);

  const closeServiceModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      setSelectedService(null);
      setIsClosing(false);
    }, 300);
  };

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeServiceModal();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  // --- Journey Intersection Observer ---
  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement;
          const delay = parseInt(target.getAttribute('data-index') || '0') * 200;
          setTimeout(() => {
            target.classList.add('visible');
          }, delay);
        }
      });
    }, observerOptions);

    const cards = document.querySelectorAll('.journey-card-wrapper');
    cards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
      phone: "",
      subject: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    contactMutation.mutate(values, {
      onSuccess: () => form.reset(),
    });
  }

  // --- Hero Parallax ---
  const heroRef = useRef(null);
  const { scrollY } = useScroll();
  const yHero = useTransform(scrollY, [0, 500], [0, 200]);

  // --- Carousel ---
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    AutoScroll({ speed: 1.5, stopOnInteraction: false })
  ]);

  const techs = [
    { name: "React", icon: SiReact, color: "#61DAFB" },
    { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "Python", icon: SiPython, color: "#3776AB" },
    { name: "AWS", icon: SiAmazonwebservices, color: "#232F3E" },
    { name: "Docker", icon: SiDocker, color: "#2496ED" },
    { name: "Kubernetes", icon: SiKubernetes, color: "#326CE5" },
    { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    { name: "TailwindCSS", icon: SiTailwindcss, color: "#06B6D4" },
    { name: "Figma", icon: SiFigma, color: "#F24E1E" },
    { name: "Flutter", icon: SiFlutter, color: "#02569B" },
    { name: "GraphQL", icon: SiGraphql, color: "#E10098" },
    { name: "Redis", icon: SiRedis, color: "#DC382D" },
    { name: "TensorFlow", icon: SiTensorflow, color: "#FF6F00" },
    { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
    { name: "Go", icon: SiGo, color: "#00ADD8" }
  ];

const techWithLogos = {
  inner: [
    { name: 'React',      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    { name: 'Next.js',    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
    { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'CSS3',       logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  ],
  middle: [
    { name: 'Node.js',    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'Flutter',    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
    { name: 'Docker',     logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
    { name: 'Firebase',   logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
    { name: 'Java',       logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
    { name: 'Bootstrap',  logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
  ],
  outer: [
    { name: 'Python',      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'AWS',         logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg' },
    { name: 'MongoDB',     logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    { name: 'PostgreSQL',  logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
    { name: 'GraphQL',     logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg' },
    { name: 'Kotlin',      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg' },
    { name: 'HTML5',       logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'MySQL',       logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    { name: 'Redux',       logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg' },
    { name: 'Tailwind',    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg' },
  ]
};

const OrbitVisual = () => {
  return (
    <div className="orbit-container">
      {/* Center icon */}
      <div className="orbit-center">
        <span className="orbit-center-icon">&lt;/&gt;</span>
      </div>

      {/* Inner Ring - 5 items */}
      <div className="orbit-ring orbit-ring-inner">
        {techWithLogos.inner.map((tech, i) => (
          <div
            key={tech.name}
            className="orbit-item"
            style={{
              '--angle': `${(360 / techWithLogos.inner.length) * i}deg`,
              '--count': techWithLogos.inner.length
            } as React.CSSProperties}
          >
            <span className="tech-label">
              <img
                src={tech.logo}
                alt={tech.name}
                className="tech-label-logo"
                onError={(e) => (e.currentTarget.style.display = 'none')}
              />
              {tech.name}
            </span>
          </div>
        ))}
      </div>

      {/* Middle Ring - 6 items */}
      <div className="orbit-ring orbit-ring-middle">
        {techWithLogos.middle.map((tech, i) => (
          <div
            key={tech.name}
            className="orbit-item orbit-item-middle"
            style={{
              '--angle': `${(360 / techWithLogos.middle.length) * i}deg`,
              '--count': techWithLogos.middle.length
            } as React.CSSProperties}
          >
            <span className="tech-label">
              <img
                src={tech.logo}
                alt={tech.name}
                className="tech-label-logo"
                onError={(e) => (e.currentTarget.style.display = 'none')}
              />
              {tech.name}
            </span>
          </div>
        ))}
      </div>

      {/* Outer Ring - 10 items */}
      <div className="orbit-ring orbit-ring-outer">
        {techWithLogos.outer.map((tech, i) => (
          <div
            key={tech.name}
            className="orbit-item"
            style={{
              '--angle': `${(360 / techWithLogos.outer.length) * i}deg`,
              '--count': techWithLogos.outer.length
            } as React.CSSProperties}
          >
            <span className="tech-label">
              <img
                src={tech.logo}
                alt={tech.name}
                className="tech-label-logo"
                onError={(e) => (e.currentTarget.style.display = 'none')}
              />
              {tech.name}
            </span>
          </div>
        ))}
      </div>

      {/* Glowing dots on each ring */}
      <div className="orbit-dot dot-inner"></div>
      <div className="orbit-dot dot-middle"></div>
      <div className="orbit-dot dot-outer"></div>

      {/* Caption */}
      <div className="orbit-caption">
        Innovation in Motion • VyuhX Technologies
      </div>
    </div>
  );
};

  const serviceTiltRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    serviceTiltRef.current.forEach((el) => {
      if (el) {
        VanillaTilt.init(el, {
          max: 15,
          speed: 400,
          glare: true,
          "max-glare": 0.2,
          perspective: 1000,
        });
      }
    });
  }, []);

  const services = [
    {
      title: "Web Development",
      icon: <Code2 />,
      desc: "High-performance, scalable web applications using modern frameworks like React and Next.js.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800",
      features: ["Responsive Design", "SEO Optimization", "Performance First", "Modern UI/UX"],
      overview: "We craft fast, modern websites and web apps that don't just look great — they perform, convert, and scale with your business goals.",
      challenges: [
        { title: "Slow Loading Speeds", icon: "⚠️" },
        { title: "Poor Mobile Experience", icon: "⚠️" },
        { title: "Security Vulnerabilities", icon: "⚠️" },
        { title: "Difficulty Scaling", icon: "⚠️" }
      ],
      technologies: [
        { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
        { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
        { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "AWS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" }
      ],
      deliverables: [
        { text: "Fully Responsive Website", icon: "📱" },
        { text: "Clean Source Code", icon: "💻" },
        { text: "SEO-Ready Structure", icon: "🔍" },
        { text: "Post-Launch Support", icon: "🛠️" }
      ]
    },
    {
      title: "Software Development",
      icon: <Cpu />,
      desc: "Custom software solutions engineered to solve complex business challenges with efficiency and scale.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
      features: ["Scalable Backend", "API Integration", "Secure Architecture", "Agile Process"],
      overview: "From idea to production-ready software — we build robust, scalable systems that solve real problems and streamline your operations.",
      challenges: [
        { title: "Legacy System Integration", icon: "⚠️" },
        { title: "Data Silos", icon: "⚠️" },
        { title: "High Operational Costs", icon: "⚠️" },
        { title: "Inefficient Workflows", icon: "⚠️" }
      ],
      technologies: [
        { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
        { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
        { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
        { name: "Redis", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" }
      ],
      deliverables: [
        { text: "Production-Ready Software", icon: "🚀" },
        { text: "API & Technical Docs", icon: "📄" },
        { text: "QA Test Reports", icon: "🧪" },
        { text: "Maintenance Plan", icon: "📋" }
      ]
    },
    {
      title: "Mobile Apps",
      icon: <Smartphone />,
      desc: "Native and cross-platform mobile experiences that users love, built with Flutter and React Native.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800",
      features: ["iOS & Android", "Offline Support", "Smooth Animations", "App Store Ready"],
      overview: "We build smooth, intuitive mobile apps for iOS and Android that users actually enjoy using — from MVP to full product launch.",
      challenges: [
        { title: "Fragmented User Experience", icon: "⚠️" },
        { title: "Slow Performance", icon: "⚠️" },
        { title: "Complex Store Guidelines", icon: "⚠️" },
        { title: "Maintenance Overhead", icon: "⚠️" }
      ],
      technologies: [
        { name: "Flutter", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" },
        { name: "React Native", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Firebase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
        { name: "Swift", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg" },
        { name: "Kotlin", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg" }
      ],
      deliverables: [
        { text: "iOS & Android App", icon: "📱" },
        { text: "Store Listings", icon: "🏪" },
        { text: "Push Notification Setup", icon: "🔔" },
        { text: "Post-Launch Support", icon: "🛠️" }
      ]
    },
    {
      title: "Digital Marketing",
      icon: <Globe />,
      desc: "Comprehensive marketing campaigns that drive traffic, engagement, and conversion.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
      features: ["Growth Hacking", "Social Media", "Data Analytics", "Brand Strategy"],
      overview: "We grow your brand online with strategies built around data, not guesswork — more traffic, better leads, and real measurable results.",
      challenges: [
        { title: "Low Conversion Rates", icon: "⚠️" },
        { title: "Weak Brand Visibility", icon: "⚠️" },
        { title: "Ineffective Ad Spend", icon: "⚠️" },
        { title: "Lack of Data Insights", icon: "⚠️" }
      ],
      technologies: [
        { name: "Google Ads", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" },
        { name: "Meta Ads", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg" },
        { name: "HubSpot", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hubspot/hubspot-original.svg" }
      ],
      deliverables: [
        { text: "Marketing Strategy", icon: "📈" },
        { text: "Weekly Reports", icon: "📊" },
        { text: "SEO Audit & Fixes", icon: "🔍" },
        { text: "Growth Analysis", icon: "🚀" }
      ]
    },
  ];

  const projects = [
    {
      title: "Bomb Rolls",
      category: "web",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=800",
      description: "A high-performance food delivery platform with real-time tracking.",
      tags: ["React", "Node.js", "MongoDB"]
    },
    {
      title: "Shreerath",
      category: "mobile",
      image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&q=80&w=800",
      description: "Comprehensive transport management solution for logistics fleets.",
      tags: ["Flutter", "Firebase", "Google Maps"]
    },
    {
      title: "Cafe Twenty Twenty",
      category: "web",
      image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=800",
      description: "Modern digital presence and reservation system for a premium cafe.",
      tags: ["Next.js", "Tailwind", "Supabase"]
    },
    {
      title: "FinDash Pro",
      category: "dashboard",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
      description: "Real-time financial analytics dashboard for enterprise clients.",
      tags: ["React", "D3.js", "Python"]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-body text-slate-900 selection:bg-cyan-200 selection:text-cyan-900">
      <Navigation />

      {/* --- HERO SECTION --- */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-[#1a2332]" ref={heroRef}>
        {/* Background Video */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute min-w-full min-h-full object-cover opacity-60 animate-[kenburns_20s_infinite_ease-in-out]"
          >
            <source 
              src="/assets/new-hero-video.mp4" 
              type="video/mp4" 
            />
          </video>
          {/* Overlay */}
          <div className="absolute inset-0 bg-[#1a2332]/60 z-[1]"></div>
          
          {/* Decorative Orbs */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] animate-pulse pointer-events-none"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[150px] animate-pulse pointer-events-none delay-1000"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 hero-content">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="max-w-6xl mx-auto flex flex-col items-center"
          >
            {/* Top Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="section-badge-label inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#00bcd4]/15 border border-[#00bcd4] backdrop-blur-md mb-[20px]"
            >
              <span className="text-[#00bcd4]">Pioneering Digital Excellence</span>
            </motion.div>
            
            {/* Company Name */}
            <motion.h1
              initial={{ opacity: 1, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="mt-[25px] !text-white !opacity-100 font-extrabold text-[42px] lg:text-[80px] leading-tight text-center"
              style={{ color: '#FFFFFF', opacity: 1 }}
            >
              VyuhX Technologies
            </motion.h1>

            {/* Main Tagline */}
            <div className="flex flex-col items-center overflow-hidden">
              <motion.span
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
                className="tagline-vision"
              >
                Vision to
              </motion.span>
              <motion.span
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
                className="tagline-execution animate-[glow_3s_infinite]"
              >
                Execution
              </motion.span>
            </div>
            
            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="hero-subtitle"
            >
              We build powerful websites, smart software, and digital marketing 
              strategies that grow your business from idea to impact.
            </motion.p>

            {/* Buttons Container */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-6 justify-center"
            >
              <Link to="portfolio" smooth={true} duration={500}>
                <Button className="h-[60px] px-10 text-[1.1rem] rounded-full bg-gradient-to-r from-[#00bcd4] to-[#0ea5e9] text-white font-semibold shadow-[0_10px_30px_rgba(0,188,212,0.3)] transition-all hover:scale-105 active:scale-95 group">
                  View Portfolio
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform" />
                </Button>
              </Link>
              <Link to="contact" smooth={true} duration={500}>
                <Button variant="outline" className="h-[60px] px-10 text-[1.1rem] rounded-full border-2 border-white bg-transparent text-white hover:bg-white hover:text-[#1a2332] transition-all duration-300 font-semibold">
                  Consult Us
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Scroll Indicator removed based on EXACT changes */}
      </section>

      {/* --- ABOUT SECTION --- */}
      <section id="about" className="bg-white relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-cyan-50/30 skew-x-12 transform origin-top-right -z-10"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-50/50 rounded-full blur-3xl -z-10 animate-pulse"></div>
        
        <div className="container mx-auto px-6 md:px-8">
          <SectionHeading 
            subtitle="About VyuhX Technologies" 
            title="Building Tomorrow's Tech Today" 
            align="left"
          />

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h3 className="about-tagline text-slate-900 mb-6 leading-[1.4] font-[800] text-[1.85rem]">
                We turn complex challenges into <span className="text-[#00bcd4] relative inline-block">
                  elegant solutions
                  <motion.span 
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ delay: 1, duration: 0.8 }}
                    className="absolute bottom-1 left-0 h-2 bg-cyan-100 -z-10"
                  ></motion.span>
                </span> through code and creativity.
              </h3>
              <p className="text-slate-600 text-lg leading-relaxed mb-6 font-light">
                Founded with a mission to bridge the gap between ambitious ideas and technical execution, VyuhX Technologies has grown into a powerhouse of digital innovation. We don't just write code; we architect experiences that drive growth.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {[
                  { text: "Agile Methodology", desc: "Iterative & fast delivery" },
                  { text: "Cloud Native", desc: "Scale without limits" },
                  { text: "User-Centric Design", desc: "Built for people" },
                  { text: "Scalable Architecture", desc: "Future-proof systems" }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + (i * 0.1) }}
                    className="flex flex-col gap-0.5"
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-cyan-500/10 flex items-center justify-center">
                        <CheckCircle2 className="text-cyan-500 h-3 w-3" />
                      </div>
                      <span className="font-bold text-slate-800 text-sm">{item.text}</span>
                    </div>
                    <span className="text-xs text-slate-500 ml-7">{item.desc}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Orbit Visual Column */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <OrbitVisual />
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- CORE VALUES SECTION --- */}
      <section id="values" className="bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-8">
          <SectionHeading 
            subtitle="Our Principles" 
            title="Our Core Values" 
            description="The principles that guide our approach to technology, innovation, and client success."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {[
              {
                title: "Quality Without Compromise",
                desc: "Delivering excellence in every project through rigorous testing, best practices, and unwavering attention to detail.",
                icon: Award
              },
              {
                title: "Empowering Growth",
                desc: "Equipping businesses with transformative technology solutions that unlock new opportunities and accelerate sustainable growth.",
                icon: LineChart
              },
              {
                title: "Integrity & Accountability",
                desc: "Standing behind our commitments with honest communication, transparent processes, and ownership of outcomes.",
                icon: CheckCircle2
              },
              {
                title: "Future-Ready Solutions",
                desc: "Building scalable, adaptable systems that evolve with your business and stay ahead of technological change.",
                icon: Cpu
              }
            ].map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-8 rounded-[2.5rem] flex flex-col items-center text-center justify-between min-h-[400px] bg-white text-slate-900 border border-slate-100 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:bg-[linear-gradient(135deg,#1a2b4a_0%,#2d4a6f_50%,#3a5b7e_100%)] hover:text-white group relative overflow-hidden"
              >
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-2xl bg-cyan-50 text-cyan-500 flex items-center justify-center mb-8 group-hover:bg-cyan-400 group-hover:text-white transition-all duration-300 shadow-sm">
                    <value.icon size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-white transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-sm leading-relaxed mb-8 text-slate-600 group-hover:text-slate-300 transition-colors font-light">
                    {value.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- VIDEO CTA SECTION --- */}
      <section className="relative overflow-hidden bg-[#151f2e] !py-[20px] !my-[10px]" style={{ paddingTop: '20px', paddingBottom: '20px', marginTop: '10px', marginBottom: '10px' }}>
        <div className="absolute inset-0 z-0">
          <video autoPlay loop muted playsInline className="absolute w-full h-full object-cover opacity-30 grayscale brightness-50">
            <source src="https://assets.mixkit.co/videos/preview/mixkit-technological-and-futuristic-digital-background-40781-large.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-[#151f2e] via-[#151f2e]/40 to-[#151f2e]"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 1, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-[#1a2535] backdrop-blur-xl border border-white/10 p-10 md:p-16 rounded-[3rem] text-center md:text-left"
            >
              <h2 className="section-main-heading !text-white !opacity-100 mb-6" style={{ color: '#FFFFFF', opacity: 1 }}>
                Ready to redefine <br/>
                <span className="text-cyan-400 underline decoration-cyan-500/30 underline-offset-8">your digital limits?</span>
              </h2>
              <p className="text-lg text-slate-300 mb-8 max-w-xl">
                Got a business idea? We turn it into a working digital product — fast, clean, and built to scale.
              </p>
              <Link to="contact" smooth={true} duration={500}>
                <Button size="lg" className="h-14 px-10 text-lg rounded-full bg-white text-slate-900 hover:bg-cyan-500 hover:text-white transition-all duration-500 font-black tracking-tight">
                  Start Your Journey
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- SERVICES SECTION --- */}
      <section id="services" className="bg-[#f5f7fa] relative overflow-hidden">
        {/* Animated Mesh Background */}
        <div className="absolute inset-0 opacity-30 pointer-events-none bg-[radial-gradient(at_0%_0%,rgba(0,188,212,0.15)_0,transparent_50%),radial-gradient(at_100%_100%,rgba(14,165,233,0.15)_0,transparent_50%)] animate-[mesh_10s_infinite_alternate]" />
        
        {/* Floating Decorative Shapes */}
        <div className="absolute top-20 left-10 w-24 h-24 rounded-full border border-cyan-500/10 animate-[float_4s_infinite_ease-in-out]" />
        <div className="absolute bottom-20 right-10 w-32 h-32 rounded-3xl border border-blue-500/10 rotate-12 animate-[float_6s_infinite_ease-in-out_reverse]" />

        <div className="container mx-auto px-6 md:px-8 relative z-10">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
            className="mb-20 max-w-3xl mx-auto text-center relative"
          >
            <motion.span
              variants={{
                initial: { opacity: 0, scale: 0.8 },
                animate: { opacity: 1, scale: 1 }
              }}
              className="inline-block text-sm font-bold tracking-wider uppercase mb-4 px-4 py-1.5 rounded-full bg-[#e0f7fa] text-[#00bcd4] border border-cyan-100 shadow-sm"
            >
              Our Expertise
            </motion.span>
            <motion.h2
              variants={{
                initial: { opacity: 0, y: 30 },
                animate: { opacity: 1, y: 0 }
              }}
              className="section-main-heading mb-6"
            >
              Comprehensive Digital Solutions
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "120px" }}
              className="h-2 bg-gradient-to-r from-[#00bcd4] to-[#0ea5e9] mx-auto rounded-full mb-8 shadow-[0_0_15px_rgba(0,188,212,0.5)]"
            />
            <motion.p
              variants={{
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 }
              }}
              className="text-xl md:text-2xl leading-relaxed text-[#5a6c7d] font-light"
            >
              End-to-end services tailored to your unique business needs.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                ref={(el) => (serviceTiltRef.current[idx] = el as HTMLDivElement)}
                initial={{ opacity: 0, y: 50, rotate: -5 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ 
                  duration: 0.8, 
                  delay: idx * 0.2, 
                  type: "spring",
                  stiffness: 100,
                  damping: 15
                }}
                onClick={() => setSelectedService(service)}
                className="service-card group relative flex flex-col bg-white rounded-[2rem] border-2 border-cyan-500/10 shadow-[0_10px_40px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_60px_rgba(0,188,212,0.2)] transition-all duration-500 overflow-hidden"
              >
                {/* Image Section */}
                <div className="relative h-48 overflow-hidden card-image">
                  <motion.img 
                    src={service.image} 
                    alt={service.title}
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:blur-[2px]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent group-hover:from-[#1a2b4a]/80 transition-all duration-500" />
                  
                  {/* Icon Badge */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70px] h-[70px] rounded-full bg-gradient-to-br from-[#00bcd4] to-[#0ea5e9] shadow-[0_8px_25px_rgba(0,188,212,0.4)] flex items-center justify-center animate-bounce group-hover:animate-none group-hover:rotate-[360deg] group-hover:scale-125 group-hover:shadow-[0_0_30px_rgba(0,188,212,0.8)] transition-all duration-500 card-icon">
                    <div className="text-white">
                      {service.icon}
                    </div>
                  </div>
                </div>

                <div className="p-8 flex flex-col flex-1">
                  <h3 className="text-2xl font-bold text-[#1a2b4a] mb-4 group-hover:translate-y-[-5px] transition-transform duration-500 card-title">
                    {service.title}
                  </h3>
                  <p className="text-[#5a6c7d] text-sm leading-relaxed mb-6 flex-1">
                    {service.desc}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature: string, i: number) => (
                      <motion.li 
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: (idx * 0.2) + (i * 0.1) }}
                        className="flex items-center gap-2 text-sm text-[#5a6c7d] feature-item"
                      >
                        <CheckCircle2 size={16} className="text-[#00bcd4] animate-pulse" />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>

                  <Button 
                    className="w-full h-[50px] rounded-full bg-gradient-to-r from-[#00bcd4] to-[#0ea5e9] hover:from-[#0ea5e9] hover:to-[#00bcd4] text-white font-semibold shadow-lg hover:scale-105 hover:shadow-[0_10px_25px_rgba(0,188,212,0.4)] transition-all duration-500 relative overflow-hidden group/btn learn-more-btn"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      Learn More
                      <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform duration-300 btn-arrow" />
                    </span>
                    <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700" />
                  </Button>
                </div>
                
                {/* Shimmer Sweep */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite] pointer-events-none" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <div 
            className={`modal-backdrop ${isClosing ? 'closing' : ''}`}
            onClick={closeServiceModal}
          >
            <div 
              className={`modal-box ${isClosing ? 'closing' : ''}`}
              onClick={(e) => e.stopPropagation()}
            >
              {/* HEADER */}
              <div className="modal-header">
                <div className="modal-icon-title">
                  <div className="modal-icon">
                    {selectedService.icon}
                  </div>
                  <h2 className="modal-title">
                    {selectedService.title}
                  </h2>
                </div>
                <button 
                  className="modal-close" 
                  onClick={closeServiceModal}
                >
                  ✕
                </button>
              </div>

              {/* BODY - TWO COLUMNS */}
              <div className="modal-body">
                
                {/* LEFT COLUMN */}
                <div className="modal-left">
                  <div className="modal-section mb-8">
                    <h3 className="modal-section-title">Overview</h3>
                    <p className="modal-overview">
                      {selectedService.overview}
                    </p>
                  </div>

                  <div className="challenges-section">
                    <h3 className="section-heading-modal">Challenges We Solve</h3>
                    <div className="challenges-list">
                      {selectedService.challenges.map((challenge: any, i: number) => (
                        <div key={i} className="challenge-item">
                          <div className="challenge-icon">{challenge.icon}</div>
                          <div className="challenge-content">
                            <span className="challenge-title">{challenge.title}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="engagement-section">
                    <h3 className="section-heading-modal">Engagement Models</h3>
                    <div className="engagement-cards">
                      <div className="engagement-card">
                        <div className="engagement-icon">🔲</div>
                        <div className="engagement-title">Fixed Price</div>
                        <div className="engagement-desc">
                          Best for defined scope projects
                        </div>
                      </div>
                      <div className="engagement-card">
                        <div className="engagement-icon">👥</div>
                        <div className="engagement-title">Dedicated Team</div>
                        <div className="engagement-desc">
                          Full-time team for your project
                        </div>
                      </div>
                      <div className="engagement-card">
                        <div className="engagement-icon">⏱️</div>
                        <div className="engagement-title">Hourly Basis</div>
                        <div className="engagement-desc">
                          Flexible hours as needed
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* RIGHT COLUMN */}
                <div className="modal-right">
                  <div className="tech-logos-section">
                    <h3 className="section-heading-modal">Technologies</h3>
                    <div className="tech-logos-grid">
                      {selectedService.technologies.map((tech: any, i: number) => (
                        <div key={i} className="tech-logo-item">
                          <div className="tech-logo-wrapper">
                            <img 
                              src={tech.logo} 
                              alt={tech.name}
                              className="tech-logo-img"
                              onError={(e: any) => {
                                e.target.style.display = 'none';
                                e.target.nextSibling.style.display = 'flex';
                              }}
                            />
                            <div 
                              className="tech-logo-fallback"
                              style={{display: 'none'}}
                            >
                              {tech.name.charAt(0)}
                            </div>
                          </div>
                          <span className="tech-logo-name">{tech.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="deliverables-box">
                    <div className="deliverables-header">
                      <span className="deliverables-icon-main">✅</span>
                      <span className="deliverables-title">Deliverables</span>
                    </div>
                    <div className="deliverables-grid">
                      {selectedService.deliverables.map((item: any, i: number) => (
                        <div key={i} className="deliverable-item">
                          <span className="deliverable-icon">{item.icon}</span>
                          <span className="deliverable-text">{item.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* FOOTER BUTTONS */}
              <div className="modal-footer">
                <button className="btn-start-project" onClick={closeServiceModal}>
                  Start Project Discussion
                </button>
                <button className="btn-request-quote" onClick={closeServiceModal}>
                  Request Quote
                </button>
              </div>
            </div>
          </div>
        )}
      </AnimatePresence>

      {/* --- JOURNEY SECTION --- */}
      <section id="journey" className="journey-section overflow-hidden">
        <div className="container mx-auto px-6 md:px-8">
          <SectionHeading 
            subtitle="Milestones" 
            title="Our Growth Journey"
            description="From a small idea to a thriving tech ecosystem."
          />

          <div className="relative max-w-4xl mx-auto mt-10">
            {/* Center Line */}
            <div className="absolute left-[19px] md:left-1/2 top-0 bottom-0 w-0.5 journey-line -translate-x-1/2 md:translate-x-0"></div>

            <div className="space-y-10">
              {[
                { year: "2025", title: "The Foundation", icon: "🚀", tag: "Milestone", desc: "VyuhX Technologies was born with a vision to simplify tech for non-tech founders. 1 Vision, Infinite Possibilities.", align: "right" },
                { year: "Dec 2025", title: "SIH Victory", icon: "🏆", tag: "Achievement", desc: "Secured Gold at Smart India Hackathon — Top 5 out of 500+ Teams, validating our innovative approach to problem solving.", align: "left", special: "sih-victory" },
                { year: "Jan 2026", title: "First Major Client", icon: "🤝", tag: "Victory", desc: "Successfully delivered our first client project with 100% client satisfaction.", align: "right" },
                { year: "Present", title: "Expansion", icon: "🌍", tag: "Present", desc: "We are actively working with new clients, taking on exciting projects and expanding our reach every single day.", align: "left" },
                { year: "2026 & Beyond", title: "The Next Chapter", icon: "✨", tag: "Coming Soon", desc: "The next chapter is being written. Bigger projects, global clients, new horizons.", align: "right", special: "next-chapter" }
              ].map((item, idx) => (
                <div 
                  key={idx}
                  data-index={idx}
                  className={`journey-card-wrapper opacity-0 relative flex items-center md:justify-between ${item.align === "left" ? "flex-row-reverse" : ""} ${item.align === "left" ? "translate-x-[-60px]" : "translate-x-[60px]"}`}
                >
                  <div className="hidden md:block w-5/12"></div>
                  
                  {/* Dot */}
                  <div className="absolute left-0 md:left-1/2 w-8 h-8 rounded-full bg-white border-4 border-[#00BCD4] flex items-center justify-center z-10 -translate-x-1/2 md:translate-x-1/2 shadow-lg journey-dot">
                    <div className="w-2 h-2 rounded-full bg-[#00BCD4]"></div>
                  </div>

                  <div className="ml-12 md:ml-0 w-full md:w-5/12 pl-4 md:pl-0">
                    <Card className={`journey-card p-6 shadow-md transition-all ${item.special === 'next-chapter' ? 'border-dashed opacity-75' : 'border-l-4 border-l-[#00BCD4]'} ${item.special === 'sih-victory' ? 'sih-victory-card' : ''}`} data-year={item.year}>
                      <div className="flex items-center justify-between mb-3">
                        <Badge className="journey-badge bg-[#00BCD4]/10 text-[#00BCD4] border-[#00BCD4]/20">
                          {item.tag}
                        </Badge>
                        <span className="text-2xl">{item.icon}</span>
                      </div>
                      <div className="flex items-center gap-2 mb-1 text-[#00BCD4] font-bold text-base">
                        <Calendar size={16} />
                        {item.year}
                      </div>
                      <h4 className="text-lg font-bold text-slate-900 mb-1">{item.title}</h4>
                      <p className="text-slate-600 text-sm relative z-10">{item.desc}</p>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Strip */}
          <div className="stats-strip mt-20">
            <div className="stats-container">
              <div className="stat-item">
                <span className="stat-number"><CountUp end={1} duration={2} enableScrollSpy scrollSpyOnce /></span>
                <span className="stat-label">🏆 Gold Medal</span>
              </div>
              <div className="stat-item">
                <span className="stat-number"><CountUp end={10} duration={2} enableScrollSpy scrollSpyOnce />+</span>
                <span className="stat-label">Projects</span>
              </div>
              <div className="stat-item">
                <span className="stat-number"><CountUp end={4} duration={2} enableScrollSpy scrollSpyOnce /></span>
                <span className="stat-label">Milestones</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- PORTFOLIO SECTION --- */}
      <section id="portfolio" className="bg-slate-50">
        <div className="container mx-auto px-6 md:px-8">
          <SectionHeading 
            subtitle="Our Work" 
            title="Featured Projects" 
            description="A glimpse into the diverse solutions we've crafted."
          />

          <Tabs defaultValue="all" className="w-full mb-10">
            <div className="flex justify-center mb-6">
              <TabsList className="bg-white border p-1 rounded-full h-auto">
                {["all", "web", "mobile", "dashboard"].map((tab) => (
                  <TabsTrigger 
                    key={tab} 
                    value={tab}
                    className="rounded-full px-5 py-1.5 text-xs capitalize data-[state=active]:bg-cyan-500 data-[state=active]:text-white transition-all"
                  >
                    {tab}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            <TabsContent value="all">
              <div className="grid md:grid-cols-2 gap-6">
                {projects.map((project, idx) => (
                  <ProjectCard key={idx} project={project} />
                ))}
              </div>
            </TabsContent>
            {["web", "mobile", "dashboard"].map((cat) => (
              <TabsContent key={cat} value={cat}>
                <div className="grid md:grid-cols-2 gap-6">
                  {projects.filter(p => p.category === cat).map((project, idx) => (
                    <ProjectCard key={idx} project={project} />
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>

          <div className="text-center">
             <Button variant="outline" className="border-cyan-200 text-cyan-700 hover:bg-cyan-50 hover:text-cyan-800">
                View All Case Studies
             </Button>
          </div>
        </div>
      </section>

      {/* --- TECHNOLOGY STACK --- */}
      <section id="technologies" className="bg-[#0D1B2A] text-white overflow-hidden">
        <div className="container mx-auto mb-8 text-center">
          <h2 className="text-xl md:text-2xl font-display font-bold mb-1">Tools That Power Our Work</h2>
          <p className="text-slate-400 text-sm">Handpicked technologies for performance, scale and reliability.</p>
        </div>
        
        <div className="relative" ref={emblaRef}>
          <div className="flex">
            {techs.concat(techs).map((tech, idx) => (
              <div key={idx} className="flex-[0_0_auto] min-w-0 px-2">
                <div className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-slate-300 text-sm font-medium whitespace-nowrap hover:bg-white/10 hover:border-cyan-500/50 hover:text-cyan-400 transition-colors cursor-default group">
                  <tech.icon style={{ color: tech.color }} className="text-lg group-hover:scale-110 transition-transform" />
                  <span>{tech.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CONTACT SECTION --- */}
      <section id="contact" className="bg-white">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-5 gap-8 rounded-3xl overflow-hidden shadow-2xl bg-white border border-slate-100">
            {/* Left Info Panel */}
            <div className="lg:col-span-2 bg-slate-900 p-8 md:p-10 text-white flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
              
              <div>
                <h3 className="text-2xl font-display font-bold mb-4">Let's talk business</h3>
                <p className="text-slate-400 mb-8 leading-relaxed text-sm">
                  Have a project in mind? We'd love to hear about it. Send us a message and we'll get back to you within 24 hours.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                      <Mail size={14} className="text-cyan-400" />
                    </div>
                    <span className="text-base text-slate-200">vyuhxtechnologies@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                      <Phone size={14} className="text-cyan-400" />
                    </div>
                    <span className="text-base text-slate-200">+91 7977696462 / +91 7208125036</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                      <MapPin size={14} className="text-cyan-400" />
                    </div>
                    <span className="text-base text-slate-200">Kalyan, Maharashtra, India</span>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <p className="text-[10px] text-slate-500 font-medium uppercase tracking-wider mb-3">Connect with us</p>
                <div className="flex gap-3">
                  {/* Social icons placeholders */}
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-white/5 hover:bg-cyan-500 transition-colors cursor-pointer border border-white/10 flex items-center justify-center">
                      <ExternalLink size={14} />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Form Panel */}
            <div className="lg:col-span-3 p-8 md:p-10">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Send us a message</h3>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-xs">Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" {...field} className="h-10 bg-slate-50 border-slate-200 focus-visible:ring-cyan-500 text-sm" />
                          </FormControl>
                          <FormMessage className="text-[10px]" />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-xs">Email</FormLabel>
                          <FormControl>
                            <Input placeholder="john@company.com" {...field} className="h-10 bg-slate-50 border-slate-200 focus-visible:ring-cyan-500 text-sm" />
                          </FormControl>
                          <FormMessage className="text-[10px]" />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-xs">Phone (Optional)</FormLabel>
                          <FormControl>
                            <Input placeholder="+91 00000 00000" {...field} className="h-10 bg-slate-50 border-slate-200 focus-visible:ring-cyan-500 text-sm" />
                          </FormControl>
                          <FormMessage className="text-[10px]" />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-xs">Subject</FormLabel>
                          <FormControl>
                            <Input placeholder="Project Inquiry" {...field} className="h-10 bg-slate-50 border-slate-200 focus-visible:ring-cyan-500 text-sm" />
                          </FormControl>
                          <FormMessage className="text-[10px]" />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-xs">Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell us about your project goals..." 
                            className="min-h-[100px] bg-slate-50 border-slate-200 focus-visible:ring-cyan-500 resize-none text-sm"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage className="text-[10px]" />
                      </FormItem>
                    )}
                  />

                  <Button 
                    type="submit" 
                    className="w-full h-12 text-base font-semibold bg-cyan-500 hover:bg-cyan-600 text-white shadow-lg shadow-cyan-500/20"
                    disabled={contactMutation.isPending}
                  >
                    {contactMutation.isPending ? "Sending Message..." : "Send Message"}
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function ProjectCard({ project }: { project: any }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -10 }}
      viewport={{ once: true }}
      className="group relative rounded-[2rem] overflow-hidden bg-white shadow-xl hover:shadow-cyan-500/20 transition-all duration-700 border border-slate-100"
    >
      <div className="relative h-64 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 group-hover:rotate-1" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
        <Badge className="absolute top-4 left-4 bg-white/10 backdrop-blur-md border-white/20 text-white capitalize px-3 py-0.5 text-[10px]">
          {project.category}
        </Badge>
      </div>
      <div className="p-6">
        <h4 className="text-xl font-display font-bold text-slate-900 mb-2 group-hover:text-cyan-600 transition-colors">
          {project.title}
        </h4>
        <p className="text-slate-500 text-sm mb-6 leading-relaxed line-clamp-2">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag: string) => (
            <span key={tag} className="text-[10px] font-bold uppercase tracking-widest text-slate-400 border border-slate-100 px-2 py-0.5 rounded-full group-hover:border-cyan-100 group-hover:text-cyan-600 transition-colors">
              {tag}
            </span>
          ))}
        </div>
        <Button variant="ghost" className="p-0 h-auto text-cyan-600 font-bold text-sm group-hover:gap-2 transition-all">
          Case Study <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </motion.div>
  );
}
