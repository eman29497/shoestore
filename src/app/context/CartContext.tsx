"use client";
import { createContext, useState, useEffect, ReactNode } from "react";
export interface Shoe {
  id: number;
  name: string;
  price: number;
  image: string;
}
interface ShoeContextType {
  products: Shoe[];
  cart: Shoe[];
  wishlist: Shoe[];
  addProduct: (shoe: Shoe) => void;
  addToCart: (shoe: Shoe) => void;
  addToWishlist: (shoe: Shoe) => void;
  removeFromCart: (id: number) => void;
}
export const ShoeContext = createContext<ShoeContextType | undefined>(undefined);
const initialShoes: Shoe[] = [
  { id: 1, name: "Nike Air", price: 120, image: "/image1.png" },
  { id: 2, name: "Adidas Runner", price: 150, image: "/image2.png" },
   { id: 3, name: "Nike Air", price: 120, image: "/image3.png" },
     { id: 4, name: "Adidas Runner", price: 150, image: "/image1.png" },
];
export const ShoeProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<Shoe[]>(initialShoes);
  const [cart, setCart] = useState<Shoe[]>([]);
  const [wishlist, setWishlist] = useState<Shoe[]>([]);
  const addProduct = (shoe: Shoe) => {
    setProducts((prev) => [...prev, shoe]);
  };
  const addToCart = (shoe: Shoe) => {
    setCart((prev) => [...prev, shoe]);
    alert(`${shoe.name} Cart mein add ho gaya!`);
  };
  const addToWishlist = (shoe: Shoe) => {
    if (wishlist.find(item => item.id === shoe.id)) {
      alert("Pehle se wishlist mein hai!");
    } else {
      setWishlist((prev) => [...prev, shoe]);
      alert("Wishlist mein add ho gaya!");
    }
  };
  const removeFromCart = (id: number) => {
    setCart((prev) => prev.filter(item => item.id !== id));
  };
  return (
    <ShoeContext.Provider value={{ products, cart, wishlist, addProduct, addToCart, addToWishlist, removeFromCart }}>
      {children}
    </ShoeContext.Provider>
  );
};