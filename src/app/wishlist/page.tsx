"use client";
import { useContext } from "react";
import { ShoeContext } from "../context/CartContext";
const WishlistPage = () => {
  const { wishlist } = useContext(ShoeContext); 
  return (
    <div className="max-w-2xl mx-auto p-6 mt-10">
      <h1 className="text-3xl font-bold text-center mb-8">My Wishlist</h1>
      
      {wishlist.length === 0 ? (
        <p className="text-center text-gray-500">Wishlist khali hai!</p>
      ) : (
        wishlist.map((item: any) => (
          <div key={item.id} className="flex justify-between border-b p-4">
            <img src={item.image}
            alt={item.image}
            className="w-20 h-20 object-cover rounded-md"
            />
             <span>{item.name}</span>
             <span>${item.price}</span>
          </div>
        ))
      )}
    </div>
  );
};

export default WishlistPage;