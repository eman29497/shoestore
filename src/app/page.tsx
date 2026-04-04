"use client";
import { useContext } from "react";
import { ShoeContext } from "./context/CartContext";
export default function HomePage() {
  const context = useContext(ShoeContext);
  if (!context) return null;
  const { products, addToCart, addToWishlist } = context;
  return (
    <div className="p-10 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-center">Shoe Store</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((shoe) => (
          <div key={shoe.id} className="bg-white p-4 rounded-xl shadow-md border">
            <div className="relative h-64 w-full">
            <img src={shoe.image} alt={shoe.name} className="w-full h-48 object-cover rounded-lg" />
            </div>
            <div className="mt-4 flex justify-between items-center">
              <div>
                <h2 className="text-xl font-semibold">{shoe.name}</h2>
                <p className="text-gray-600">${shoe.price}</p>
              </div>
              <button onClick={() => addToWishlist(shoe)} className="text-2xl text-red-400">❤️</button>
            </div>
            <button 
              onClick={() => addToCart(shoe)}
              className="w-full mt-4 bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}