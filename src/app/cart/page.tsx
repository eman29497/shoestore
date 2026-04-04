"use client";
import { useContext } from "react";
import { ShoeContext } from "../context/CartContext";
import Image from "next/image";

export default function CartPage ()  {
  const { cart, removeFromCart } = useContext(ShoeContext)!;
  const total = cart.reduce((acc, item: any) => acc + Number(item.price), 0);

  return (
    <div className="max-w-2xl mx-auto p-6 mt-10 bg-white shadow-lg rounded-xl">
      <h1 className="text-3xl font-bold mb-8 text-center border-b pb-4">
        Shopping Cart
      </h1>

      {cart.length === 0 ? (
        <p className="text-center text-gray-500 py-10">Aapka cart khali hai.</p>
      ) : (
        <div className="space-y-6">
          {cart.map((item: any) => (
            <div key={item.id} className="flex justify-between items-center bg-gray-50 p-4 rounded-lg">
              <img src={item.image}
              alt={item.name}
              className="w-20 h-20 object-cover rounded-md"
              />
              <div className="flex flex-col">
                <span className="font-semibold text-lg">{item.name}</span>
                <span className="text-gray-600">Price: ${item.price}</span>
              </div>
              <button 
                onClick={() => removeFromCart(item.id)}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition"
              >
                Remove
              </button>
            </div>
          ))}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="flex justify-between items-center text-xl font-bold">
              <span>Total Bill:</span>
              <span className="text-green-600">${total}</span>
            </div>
            <button className="w-full bg-black hover:bg-gray-800 text-white py-3 mt-6 rounded-lg font-semibold text-lg transition">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
