import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Features", href: "#features" },
    // { name: "SMP Points", href: "#smp-points" },
    { name: "About", href: "#about" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2">
            <img 
              src="/svg/main-logo.svg" 
              alt="SowPay Mart Logo" 
              className="h-16 w-auto"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            {/* <Link to="/login">
              <Button variant="outline" size="sm">
                Login
              </Button>
            </Link> */}
            <Link to="https://www.sowpaymart.com/">
              <Button variant="outline" size="sm">
                Login
              </Button>
            </Link>

            <Link to="https://play.google.com/store/search?q=com.sowpay.mart&c=apps&hl=en_IE">
            <Button variant="hero" size="sm">
              Download App
            </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border animate-slide-up">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block py-3 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <Link to="/login" className="block py-3">
              <Button variant="outline" size="sm" className="w-full mb-2">
                Login
              </Button>
            </Link>
            <Button variant="hero" size="sm" className="w-full">
              Download App
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
