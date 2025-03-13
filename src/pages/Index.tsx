
import Navigation from "@/components/Navigation";
import { useEffect } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Treatments from "./components/Treatments";
import Contact from "./components/Contact";
import Testimonials from "./components/Testimonials";
import Research from "./components/Research";
import Privacy from "./components/Privacy";
import Footer from "./components/Footer";

const Index = () => {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-up');
          entry.target.classList.remove('opacity-0');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.fade-up').forEach((element) => {
      element.classList.add('opacity-0');
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF9F7]">
      <Navigation />
      <Hero />
      <About />
      <Treatments />
      <Contact />
      <Testimonials />
      <Research />
      <Privacy />
      <Footer />
    </div>
  );
};

export default Index;
