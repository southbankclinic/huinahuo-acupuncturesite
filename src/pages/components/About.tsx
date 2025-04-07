import { Card } from "@/components/ui/card";
import img from "/Huina5.jpg";

const About = () => {
  return (
    <section id="about" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-4xl font-serif text-primary mb-8 fade-up">About Huina</h2>
            <div className="prose prose-lg max-w-none fade-up">
              <p className="mb-6">
                Huina is a skilled and multi-disciplinary practitioner, originally trained as a beauty therapist specializing in Swedish and facial massage. She then pursued her passion for Chinese medicine, earning a BSc (Hons) in Acupuncture from the University of Westminster. Huina gained practical experience at the University's Polyclinic, treating various conditions including fertility and IVF support. She furthered her expertise with an MSc (Hons) in Chinese Herbal Medicine and is a licensed practitioner with the Register of Chinese Herbal Medicine (RCHM). In addition to her UK studies, Huina has deepened her knowledge through training in Mainland China and Taiwan, including studying under Prof. Xian Jianchun at Guangzhou University of Chinese Medicine and gaining insights into cosmetic acupuncture at Taiwan China Medical University Hospital. She holds:
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li>BSc (Hons) Chinese Medicine Acupuncture</li>
                <li>MSc (Hons) Chinese Herbal Medicine</li>
                <li>Member of the British Acupuncture Council</li>
                <li>Diploma of Qigong Tui Na</li>
                <li>First aid certificate</li>
                <li>CIBTAC Beauty Therapy Diploma</li>
              </ul>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="aspect-3/4 rounded-lg overflow-hidden shadow-xl fade-up max-w-sm mx-auto">
              <img
                src={img}
                alt="Huina Huo"
                className="w-full h-full object-cover object-center scale-75"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
