"use client";

import Link from "next/link";
import Image from "next/image";
import { useContext } from "react";
import { ShoeContext } from "./context/CartContext"; 
//v2 update for deployment
export default function HomePage() {
  const { products, addToCart, addToWishlist } = useContext(ShoeContext)!;
  return (
    <div className="p-8 max-w-7xl mx-auto">
      <h1 className="text-4xl font-black mb-12 text-center uppercase tracking-tighter">
        Shoe Collection
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products?.map((shoe: any) => (
          <div key={shoe.id} className="border border-gray-100 rounded-3xl p-5 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between">
            <Link href={`/product/${shoe.id}`}>
              <div className="bg-gray-50 rounded-2xl p-4 cursor-pointer flex justify-center mb-4">
                <Image 
                  src={shoe.image} 
                  alt={shoe.name} 
                  width={250} 
                  height={250} 
                  className="object-contain hover:scale-105 transition-transform"
                />
              </div>
            </Link>
            <div className="px-2">
              <h2 className="font-bold text-xl">{shoe.name}</h2>
              <p className="text-blue-600 font-bold text-2xl mb-4">${shoe.price}</p>
            </div>
            <div className="space-y-3">
              <button 
                onClick={() => addToCart(shoe)}
                className="w-full bg-black text-white py-3 rounded-xl font-bold hover:bg-gray-800 transition"
              >
                Add to Cart 🛒
              </button>
              <button 
                onClick={() => addToWishlist(shoe)}
                className="w-full border border-gray-200 text-gray-700 py-3 rounded-xl font-bold hover:bg-red-50 hover:text-red-600 transition"
              >
                Wishlist ❤️
              </button>

              <Link href={`/product/${shoe.id}`}>
                <button className="w-full text-gray-400 text-sm font-medium py-2 hover:underline">
                  View Full Details →
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}