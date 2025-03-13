
import { Card } from "@/components/ui/card";

const Treatments = () => {
  return (
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
  );
};

export default Treatments;
