const Footer = () => {
  return (
    <footer className="bg-primary text-white py-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-medium mb-4">Contact Us</h3>
            <div className="space-y-2 text-sm">
              <p>Huina Huo Acupuncture</p>
              <p>huinahuo@southbankclinic.co.uk</p>
              <p>Tel: 020 7928 8333</p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-4">Location</h3>
            <div className="space-y-2 text-sm">
              <p>75 Roupell Street, London SE1 8SS</p>
              <p>Nearest tube stations: Waterloo or Southwark</p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-4">Opening Hours</h3>
            <div className="space-y-2 text-sm">
              <p>Monday - Friday: 9:00am - 8:30pm</p>
              <p>Saturday: 10:00am - 1:00pm</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
