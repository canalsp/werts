
const MapSection = () => {
  return (
    <section className="py-0">
      <div className="w-full h-64 sm:h-80 md:h-96">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.6066851144773!2d-46.85276768502195!3d-23.533515984681636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf033d6e5bf6c7%3A0x1a1a1a1a1a1a1a1a!2sAv.%20Tore%20Albert%20Munck%2C%20116%20-%20Cotia%2C%20SP!5e0!3m2!1spt!2sbr!4v1635789456789!5m2!1spt!2sbr"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Localização Werts - Av. Tore Albert Munck, 116, Cotia - SP"
        ></iframe>
      </div>
    </section>
  );
};

export default MapSection;
