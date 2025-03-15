import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-[url('/lovable-uploads/c295deef-9cde-41ad-a8ed-461a7d9e92b1.png')] bg-cover bg-center">
      <div className="absolute inset-0 bg-black/20" />
      <div className="relative container mx-auto px-6 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-serif mb-6">Huina Huo</h1>
        <p className="text-xl md:text-2xl mb-8">Acupuncture & Traditional Chinese Medicine</p>
        <div className="flex gap-4 justify-center">
          <Button 
            onClick={() => window.location.href = 'mailto:info@huinalondon.com'}
            className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white border border-white/50"
          >
            Book Appointment
          </Button>
          <Button 
            onClick={() => window.location.href = 'tel:+442079288333'} // Replace with actual phone number
            className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white border border-white/50"
          >
            Call Us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
