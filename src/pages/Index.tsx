import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useEffect } from "react";

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
      
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center bg-[url('/lovable-uploads/c295deef-9cde-41ad-a8ed-461a7d9e92b1.png')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative container mx-auto px-6 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-serif mb-6">Huina Huo</h1>
          <p className="text-xl md:text-2xl mb-8">Acupuncture & Traditional Chinese Medicine</p>
          <Button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white border border-white/50"
          >
            Book Appointment
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-4xl font-serif text-primary mb-8 fade-up">About Huina</h2>
              <div className="prose prose-lg max-w-none fade-up">
                <p className="mb-6">Huina is a highly qualified and multi-disciplinary practitioner, specializing in Chinese Medicine and acupuncture. With extensive training from the University of Westminster, she holds:</p>
                <ul className="list-disc pl-6 mb-6">
                  <li>BSc (Hons) Chinese Medicine Acupuncture</li>
                  <li>MSc(Hons) Chinese Herbal Medicine</li>
                  <li>Member of the British Acupuncture Council</li>
                  <li>Diploma of Qigong Tui Na</li>
                  <li>First aid certificate</li>
                  <li>CIBTAC Beauty Therapy Diploma</li>
                </ul>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="aspect-[3/4] rounded-lg overflow-hidden shadow-xl fade-up">
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
                  alt="Huina Huo"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Treatments Section */}
      <section id="treatments" className="py-24 bg-secondary/20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-serif text-primary mb-12 text-center fade-up">Our Treatments</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 fade-up">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-serif text-primary mb-4">Acupuncture</h3>
              <p className="text-gray-600">Traditional Chinese acupuncture for pain management, stress relief, and overall wellness.</p>
            </Card>
            
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-serif text-primary mb-4">Facial Acupuncture</h3>
              <p className="text-gray-600">Natural facial rejuvenation to improve skin tone, reduce fine lines, and promote collagen production.</p>
            </Card>
            
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-serif text-primary mb-4">Fertility Support</h3>
              <p className="text-gray-600">Specialized treatments to support natural fertility and IVF complementary care.</p>
            </Card>
            
            <Card className="p-6 text-center hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-serif text-primary mb-4">Menopause Support</h3>
              <p className="text-gray-600">Holistic approach to managing menopause symptoms and hormonal balance.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-serif text-primary mb-12 text-center fade-up">Contact Us</h2>
            <div className="grid md:grid-cols-2 gap-12 fade-up">
              <div>
                <h3 className="text-xl font-medium mb-4">Clinic Locations</h3>
                <div className="space-y-6">
                  <div>
                    <p className="font-medium">The Clinic@Southbank</p>
                    <p>76 Roupell Street, London</p>
                    <p>SE1 8SS</p>
                    <p>Tel: 020 7928 8333</p>
                  </div>
                  <div>
                    <p className="font-medium">University of Westminster Polyclinic</p>
                    <p>Hanson Street, London</p>
                    <p>W1W 6EA</p>
                    <p>Tel: 020 7911 5041</p>
                  </div>
                  <div className="mt-6">
                    <h3 className="text-xl font-medium mb-4">Clinic Hours</h3>
                    <div className="space-y-2">
                      <p>Tuesday, Wednesday 2:30-8:30pm</p>
                      <p>Friday 9:30 am to 2:30pm</p>
                      <p>Saturday 9am to 12pm</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[400px] rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.5476266503823!2d-0.1097088!3d51.5036468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604b06bf1f2d5%3A0x3f5f762b563f883e!2s76%20Roupell%20St%2C%20London%20SE1%208SS!5e0!3m2!1sen!2suk!4v1707913183297!5m2!1sen!2suk"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Clinic Location"
                  className="rounded-lg shadow-md"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 bg-secondary/20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-serif text-primary mb-12 text-center fade-up">What Our Patients Say</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 fade-up">
                <p className="mb-4 italic">{testimonial.quote}</p>
                <p className="text-sm text-gray-600">{testimonial.author}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section id="research" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-serif text-primary mb-12 text-center fade-up">Research & Evidence</h2>
          <div className="max-w-3xl mx-auto fade-up">
            <p className="mb-6">The British Acupuncture Council (BAcC) provides factsheets and the latest research studies for specific conditions:</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {conditions.map((condition, index) => (
                <div key={index} className="p-3 bg-secondary/10 rounded-md text-sm">
                  {condition}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Notice */}
      <section id="privacy" className="py-24 bg-secondary/20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-serif text-primary mb-8 fade-up">Privacy Notice</h2>
            <div className="prose prose-lg max-w-none fade-up">
              <p>Your privacy is important to us. This privacy notice explains how we collect, store, and use your personal information in accordance with data protection laws.</p>
              {/* Add more privacy content as needed */}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Contact Column */}
            <div>
              <h3 className="text-xl font-medium mb-4">Contact Us</h3>
              <div className="space-y-2">
                <p>The Clinic@Southbank</p>
                <p>Tel: 020 7928 8333</p>
                <p className="mt-4">University of Westminster Polyclinic</p>
                <p>Tel: 020 7911 5041</p>
              </div>
            </div>

            {/* Location Column */}
            <div>
              <h3 className="text-xl font-medium mb-4">Location</h3>
              <div className="space-y-2">
                <p>76 Roupell Street</p>
                <p>London SE1 8SS</p>
                <p className="mt-4">Hanson Street</p>
                <p>London W1W 6EA</p>
              </div>
            </div>

            {/* Opening Hours Column */}
            <div>
              <h3 className="text-xl font-medium mb-4">Opening Hours</h3>
              <div className="space-y-2">
                <p>Tuesday, Wednesday</p>
                <p>2:30pm - 8:30pm</p>
                <p>Friday</p>
                <p>9:30am - 2:30pm</p>
                <p>Saturday</p>
                <p>9:00am - 12:00pm</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

const testimonials = [
  {
    quote: "Huina has been helping me with my shoulder, neck pains and headaches through acupuncture and Tuina. I can't praise her therapy enough! She is a friendly and effective practitioner.",
    author: "Jim, Kensington"
  },
  {
    quote: "I've been receiving acupuncture treatment from Huina for over two years now. She is an extremely knowledgeable and fantastic acupuncturist!",
    author: "Rachel, West London"
  },
];

const conditions = [
  "Acne", "Anxiety", "Back Pain", "Depression", "Fertility",
  "Headaches & Migraines", "Insomnia", "Pain Management",
  "Stress Relief", "Sports Injuries", "Women's Health"
];

export default Index;
