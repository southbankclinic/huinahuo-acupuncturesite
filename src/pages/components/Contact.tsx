const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-serif text-primary mb-12 text-center fade-up">Contact Us</h2>
          <div className="grid md:grid-cols-2 gap-12 fade-up">
            <div>
              <h3 className="text-xl font-medium mb-4">Clinic Locations</h3>
              <div className="space-y-6">
                <div>
                  <p className="font-medium">The Clinic@Southbank</p>
                  <p>75 Roupell Street, London</p>
                  <p>SE1 8SS</p>
                  <p>Tel: 020 7928 8333</p>
                </div>
                <div className="mt-6">
                  <h3 className="text-xl font-medium mb-4">Email</h3>
                  <p>info@huinalondon.com</p>
                </div>
                <div className="mt-6">
                  <h3 className="text-xl font-medium mb-4">Clinic Hours</h3>
                  <div className="space-y-2">
                    <p>Monday - Friday: 9:00am - 8:30pm</p>
                    <p>Saturday: 10:00am - 1:00pm</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[450px] rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.547626650382!2d-0.10970879999999999!3d51.5036468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604b06bf1f2d5%3A0x3f5f762b563f883e!2s75%20Roupell%20St%2C%20London%20SE1%208SS!5e0!3m2!1sen!2suk!4v1707913183297!5m2!1sen!2suk"
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
  );
};

export default Contact;
