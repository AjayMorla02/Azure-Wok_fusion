import Hero from "./components/Hero";
import FoodCard from "./components/FoodCard";
import "./index.css";

export default function App() {
  const menuItems = [
    {
      id: 1,
      name: "Schezwan Chicken Noodles",
      price: "12.95",
      description: "Wok-tossed noodles in fiery schezwan sauce with tender chicken, bell peppers, and spring onions.",
      image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&q=80&w=800",
      isPopular: true
    },
    {
      id: 2,
      name: "Chili Paneer Dry",
      price: "10.95",
      description: "Crispy paneer cubes tossed in a sweet, spicy, and tangy soy-based sauce with vibrant bell peppers.",
      image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 3,
      name: "Gobi Manchurian",
      price: "11.95",
      description: "Cauliflower florets fried to a crisp and tossed in our signature dark garlic and ginger soy sauce.",
      image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&q=80&w=800",
      isPopular: true
    },
    {
      id: 4,
      name: "Dragon Chicken",
      price: "13.95",
      description: "Thinly sliced crispy chicken tossed in a spicy red sauce with cashews and dried red chilies.",
      image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 5,
      name: "Street Hakka Noodles",
      price: "9.95",
      description: "Classic street-style wok tossed noodles with shredded cabbage, carrots, soy sauce and white pepper.",
      image: "https://images.unsplash.com/photo-1617093727343-374698b1b08d?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 6,
      name: "Nasi Goreng Wok",
      price: "14.95",
      description: "A South East Asian favorite adapted with our Indo-Chinese touch. Smokey fried rice with a fried egg on top.",
      image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&q=80&w=800",
      isPopular: true
    }
  ];

  return (
    <div className="app-container">
      <nav className="navbar">
        <div className="logo">Wok<span style={{color: '#fff'}}>Fusion</span></div>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#menu">Menu</a>
          <a href="#story">Our Story</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <div id="home">
        <Hero />
      </div>

      <section id="menu" className="menu-section">
        <span className="section-subtitle">Discover Our Menu</span>
        <h2 className="section-title">Indo-Chinese Classics</h2>
        <p className="hero-desc" style={{marginBottom: '4rem', maxWidth: '700px', margin: '0 auto 4rem auto'}}>
          Experience the perfect blend of Indian spices and Chinese cooking techniques. 
          Masterfully wok-tossed dishes that pack a punch and deliver bold, fiery flavors.
        </p>

        <div className="menu-grid">
          {menuItems.map(item => (
            <FoodCard key={item.id} {...item} />
          ))}
        </div>
      </section>

      <footer style={{textAlign: 'center', padding: '4rem 2rem', background: '#050505', borderTop: '1px solid var(--border)', color: 'var(--text-muted)'}}>
        <div className="logo" style={{justifyContent: 'center', marginBottom: '1.5rem'}}>Wok<span style={{color: '#fff'}}>Fusion</span></div>
        <p style={{marginBottom: '0.5rem'}}>123 Culinary Avenue, Food District, FD 45678</p>
        <p>© 2026 Wok Fusion. All rights reserved.</p>
      </footer>
    </div>
  );
}