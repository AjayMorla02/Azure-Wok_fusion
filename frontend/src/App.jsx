import Hero from "./components/Hero";
import FoodCard from "./components/FoodCard";

function App() {
  return (
    <>
      <Hero />

      <section className="bg-black text-white px-10 py-10">
        <h2 className="text-3xl mb-6">Popular Dishes</h2>

        <div className="grid grid-cols-3 gap-6">
          <FoodCard name="Chicken Noodles" price="10.95" />
          <FoodCard name="Kothu" price="11.95" />
          <FoodCard name="Nasi Goreng" price="12.95" />
        </div>
      </section>
    </>
  );
}

export default App;