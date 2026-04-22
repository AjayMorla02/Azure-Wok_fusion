export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg">
        <img src="https://images.unsplash.com/photo-1552611052-33e04de081de?auto=format&fit=crop&q=80&w=2000" alt="Wok Cooking" />
      </div>
      <div className="hero-overlay"></div>
      
      <div className="hero-content">
        <span className="hero-tagline">Master of the Wok</span>
        <h1 className="hero-title">Fiery Indo-Chinese Flavors</h1>
        <p className="hero-desc">
          Experience the authentic taste of street-style Indo-Chinese cuisine. 
          Fresh ingredients, traditional spices, and the intense heat of the wok, 
          brought together to create unforgettable dishes.
        </p>
        <div className="hero-actions">
          <a href="#menu" className="btn btn-primary">Explore Menu</a>
          <a href="#contact" className="btn btn-outline">Book a Table</a>
        </div>
      </div>
    </section>
  );
}