import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-scroll";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10 border-t border-slate-800">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <img 
                src="/logo.png" 
                alt="VyuhX Technologies Logo" 
                className="w-10 h-10 object-contain"
              />
              <span className="font-display font-bold text-2xl tracking-tight">
                VyuhX <span className="text-cyan-400">Technologies</span>
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed">
              Transforming complex challenges into elegant digital solutions. We build the future of web and mobile experiences.
            </p>
            <div className="flex gap-4">
              {[
                { icon: Twitter, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: Facebook, href: "#" },
                { icon: Instagram, href: "#" }
              ].map((social, i) => (
                <a 
                  key={i} 
                  href={social.href} 
                  className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-cyan-500 hover:text-white transition-all duration-300"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6 text-white">Quick Links</h4>
            <ul className="space-y-4">
              {['About', 'Services', 'Journey', 'Portfolio', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    to={item.toLowerCase()} 
                    smooth={true} 
                    className="text-slate-400 hover:text-cyan-400 cursor-pointer transition-colors inline-block"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6 text-white">Services</h4>
            <ul className="space-y-4">
              {[
                { name: 'Web Development', id: 'services' },
                { name: 'Software Development', id: 'services' },
                { name: 'Mobile Apps', id: 'services' },
                { name: 'Digital Marketing', id: 'services' }
              ].map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.id} 
                    smooth={true} 
                    duration={500}
                    className="text-slate-400 hover:text-cyan-400 cursor-pointer transition-colors inline-block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6 text-white">Contact Us</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <Mail className="w-5 h-5 text-cyan-400 mt-1 shrink-0" />
                <span className="text-slate-400">vyuhxtechnologies@gmail.com</span>
              </li>
              <li className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-cyan-400 mt-1 shrink-0" />
                <span className="text-slate-400">+91 7977696462 / +91 7208125036</span>
              </li>
              <li className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-cyan-400 mt-1 shrink-0" />
                <span className="text-slate-400">Kalyan, Maharashtra, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © {currentYear} VyuhX Technologies. All rights reserved.
          </p>
          <div className="flex gap-8 text-sm text-slate-500">
            <a href="#" className="hover:text-cyan-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
