"use client";
import { useState, useContext } from "react";
import { ShoeContext } from "../context/CartContext";
import { useRouter } from "next/navigation";
export default function AdminPage() {
  const { addProduct } = useContext(ShoeContext)!;
  const router = useRouter();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !price || !image) return alert("Saari fields bharein!");
    const newShoe = { id: Date.now(), name, price: Number(price), image };
    addProduct(newShoe);
    alert("Naya Shoe Add Ho Gaya!");
    router.push("/"); 
  };
  return (
    <div className="max-w-md mx-auto mt-20 p-8 bg-white rounded-2xl shadow-xl border">
      <h2 className="text-2xl font-bold mb-6">Admin Panel - Add Product</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input placeholder="Shoe Name" className="w-full p-3 border rounded" onChange={(e)=>setName(e.target.value)} />
        <input placeholder="Price" type="number" className="w-full p-3 border rounded" onChange={(e)=>setPrice(e.target.value)} />
        <input placeholder="Image Link (URL)" className="w-full p-3 border rounded" onChange={(e)=>setImage(e.target.value)} />
        <button className="w-full bg-black text-white py-3 rounded-lg font-bold">Add to Store</button>
      </form>
    </div>
  );
}