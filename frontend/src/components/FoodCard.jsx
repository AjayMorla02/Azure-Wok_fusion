export default function FoodCard({ name, price }) {
  return (
    <div className="bg-gray-900 text-white p-4 rounded-lg hover:scale-105 transition">
      <h3 className="text-xl font-semibold">{name}</h3>
      <p className="text-orange-400">${price}</p>

      <button className="mt-3 bg-orange-500 px-4 py-1 rounded">
        Add to Cart
      </button>
    </div>
  );
}