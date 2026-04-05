import React from "react";
import Link from "next/link";
export default function Footer() {
  return (
    <footer className="bg-olive-800 text-white py-8 px-6 mt-8 border-t">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-xl font-bold tracking-tighter uppercase">
          Shoe Store
        </div>
        <div className="flex gap-6 text-sm font-medium">
          <Link href="/" className="text-white transition">Home</Link>
          <Link href="/cart" className="text-white transition">Cart</Link>
          <Link href="/wishlist" className="text-white transition">Wishlist</Link>
          <Link href="/admin" className="text-white transition">Admin</Link>
        </div>
        <div className="text-xs text-gray-400">
           2026 Shoe Store
        </div>
      </div>
    </footer>
  );
}