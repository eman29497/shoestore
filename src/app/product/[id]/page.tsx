"use client";
import { useContext, use } from "react"; 
import { ShoeContext } from "../../context/CartContext"; 
import Image from "next/image";
export default function ProductDetail({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const productId = resolvedParams.id;

  const context = useContext(ShoeContext);
  const allProducts = context?.products || [];
  const shoe = allProducts.find((item: any) => item.id === Number(productId));
  if (!shoe) {
    return (
      <div className="flex justify-center items-center h-screen flex-col gap-4 text-center p-5">
        <h1 className="text-3xl font-bold text-red-500">Shoe Not Found!</h1>
        <p className="text-gray-500">ID: {productId} ke liye data nahi mila. Check karein ke Context sahi load ho raha hai.</p>
      </div>
    );
  }
  return (
    <div className="max-w-6xl mx-auto p-6 md:p-12 min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="bg-gray-50 rounded-[50px] p-10 flex justify-center shadow-inner">
          <Image 
            src={shoe.image} 
            alt={shoe.name} 
            width={500} 
            height={500} 
            className="object-contain hover:scale-110 transition-transform duration-500"
          />
        </div>
        <div className="space-y-6">
          <h1 className="text-5xl font-black uppercase italic tracking-tighter text-black leading-none">
            {shoe.name}
          </h1>
          <div className="inline-block bg-black text-white px-8 py-3 rounded-2xl font-black text-3xl shadow-lg">
            ${shoe.price}
          </div>
          <p className="text-gray-600 text-lg leading-relaxed border-l-4 border-gray-200 pl-4">
            Experience premium comfort with our latest arrival. This shoe features advanced cushioning and a sleek design perfect for your daily rotation.
          </p>
          <div className="flex flex-col gap-4 pt-6">
            <button 
              onClick={() => context?.addToCart(shoe)}
              className="w-full bg-black text-white py-5 rounded-2xl font-black text-xl hover:bg-gray-800 transition active:scale-95 shadow-xl"
            >
              ADD TO BAG 🛒
            </button>
            <button 
              onClick={() => context?.addToWishlist(shoe)}
              className="w-full border-2 border-black py-5 rounded-2xl font-black text-xl hover:bg-black hover:text-white transition active:scale-95"
            >
              SAVE TO WISHLIST ❤️
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}