
const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-medium mb-4">Contact Us</h3>
            <div className="space-y-2">
              <p>The Clinic@Southbank</p>
              <p>Tel: 020 7928 8333</p>
              <p className="mt-4">University of Westminster Polyclinic</p>
              <p>Tel: 020 7911 5041</p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-4">Location</h3>
            <div className="space-y-2">
              <p>75 Roupell Street</p>
              <p>London SE1 8SS</p>
              <p className="mt-4">Hanson Street</p>
              <p>London W1W 6EA</p>
            </div>
          </div>

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
  );
};

export default Footer;
