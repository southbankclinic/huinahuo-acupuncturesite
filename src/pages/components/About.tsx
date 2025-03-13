
import { Card } from "@/components/ui/card";

const About = () => {
  return (
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
  );
};

export default About;
