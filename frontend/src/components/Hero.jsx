export default function Hero() {
  return (
    <section className="bg-black text-white min-h-screen flex items-center px-10">
      
      <div className="w-1/2">
        <h1 className="text-6xl font-bold text-orange-500">
          WOK FUSION
        </h1>

        <p className="mt-6 text-lg text-gray-300">
          Master the Art of Indo-Chinese Wok Cooking
        </p>

        <div className="mt-8 space-x-4">
          <button className="bg-orange-500 px-6 py-3 rounded hover:bg-orange-600">
            View Menu
          </button>

          <button className="border px-6 py-3 rounded hover:bg-white hover:text-black">
            Order Now
          </button>
        </div>
      </div>

      <div className="w-1/2">
        {/* later we add food image */}
      </div>

    </section>
  );
}