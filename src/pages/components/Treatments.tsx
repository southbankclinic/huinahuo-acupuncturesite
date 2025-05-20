import { Card } from "@/components/ui/card";

const Treatments = () => {
  return (
    <section id="treatments" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-serif text-primary mb-12 text-center fade-up">Our Treatments</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 fade-up">
          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-serif text-primary mb-4">Acupuncture</h3>
            <p className="text-gray-600 mb-4">Traditional Chinese acupuncture for pain management, stress relief, and overall wellness.</p>
            <div className="text-sm text-gray-700">
              <p>Initial consultation (including treatment): £110</p>
              <p>Follow up appointments: £85</p>
            </div>
          </Card>
          
          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-serif text-primary mb-4">Facial Acupuncture</h3>
            <p className="text-gray-600 mb-4">Natural facial rejuvenation to improve skin tone, reduce fine lines, and promote collagen production.</p>
            <div className="text-sm text-gray-700">
              <p>Initial consultation (including treatment): £180</p>
              <p>Follow up appointments: £150</p>
            </div>
          </Card>
          
          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-serif text-primary mb-4">Fertility & IVF Support</h3>
            <p className="text-gray-600 mb-4">Specialized treatments to support natural fertility and IVF complementary care.</p>
            <div className="text-sm text-gray-700">
              <p>Initial consultation (including treatment): £110</p>
              <p>Follow up appointments: £85</p>
            </div>
          </Card>
          
          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-serif text-primary mb-4">Menopause Support</h3>
            <p className="text-gray-600 mb-4">Holistic approach to managing menopause symptoms and hormonal balance.</p>
            <div className="text-sm text-gray-700">
              <p>Initial consultation (including treatment): £110</p>
              <p>Follow up appointments: £85</p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Treatments;
