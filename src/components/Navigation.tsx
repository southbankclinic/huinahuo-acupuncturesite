import { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { Menu, MessageCircle } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        if (section instanceof HTMLElement) {
          const top = section.offsetTop;
          const height = section.offsetHeight;
          
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section.id);
          }
        }
      });

      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/442079288333', '_blank');
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'research', label: 'Research' },
    { id: 'privacy', label: 'Privacy' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"
    )}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-serif text-primary">Huina Huo</h1>
          
          <div className="flex items-center gap-4">
            <Popover>
              <PopoverTrigger asChild>
                <button
                  className="p-2 hover:bg-accent hover:text-accent-foreground rounded-md transition-colors"
                  aria-label="Chat on WhatsApp"
                >
                  <MessageCircle className="h-6 w-6" />
                </button>
              </PopoverTrigger>
              <PopoverContent className="w-60" align="end">
                <div className="space-y-2">
                  <h3 className="font-medium">Chat with us</h3>
                  <p className="text-sm text-muted-foreground">Contact us on WhatsApp for appointments and inquiries.</p>
                  <button
                    onClick={openWhatsApp}
                    className="w-full bg-[#25D366] hover:bg-[#20BD5A] text-white px-4 py-2 rounded-md text-sm transition-colors"
                  >
                    Open WhatsApp
                  </button>
                </div>
              </PopoverContent>
            </Popover>

            {isMobile ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button 
                    className="p-2 hover:bg-white/10 rounded-md transition-colors"
                    aria-label="Navigation Menu"
                  >
                    <Menu className="h-6 w-6" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  {navItems.map((item) => (
                    <DropdownMenuItem
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={cn(
                        "cursor-pointer",
                        activeSection === item.id && "font-medium text-primary"
                      )}
                    >
                      {item.label}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <div className="hidden md:flex space-x-8">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={cn(
                      "text-sm transition-colors duration-200",
                      activeSection === item.id
                        ? "text-primary font-medium"
                        : "text-gray-600 hover:text-primary"
                    )}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
