
export const conditions = [
  "Acne", "Anxiety", "Back Pain", "Depression", "Fertility",
  "Headaches & Migraines", "Insomnia", "Pain Management",
  "Stress Relief", "Sports Injuries", "Women's Health"
];

const Research = () => {
  return (
    <section id="research" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-serif text-primary mb-12 text-center fade-up">Research</h2>
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
  );
};

export default Research;
