import { Card } from "@/components/ui/card";

export const testimonials = [
  {
    quote: "Huina has been helping me with my shoulder, neck pains and headaches through acupuncture and Tuina. I can't praise her therapy enough! She is a friendly and effective practitioner.",
    author: "Jim, Kensington"
  },
  {
    quote: "I've been receiving acupuncture treatment from Huina for over two years now. She is an extremely knowledgeable and fantastic acupuncturist!",
    author: "Rachel, West London"
  },
  {
    quote: "I have been seeing Huina for treatments following an operation to my lower back. She has been invaluable to my recovery. I would recommend her to anyone. Thanks Huina!",
    author: "Umi, Notting Hill"
  },
  {
    quote: "I started seeing Huina for fertility support, and her treatments have helped me feel more balanced both physically and emotionally. Her expertise in Traditional Chinese Medicine is impressive.",
    author: "Lisa, Chelsea"
  }
];

const Testimonials = () => {
  return (
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
  );
};

export default Testimonials;
