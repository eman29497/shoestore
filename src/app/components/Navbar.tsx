"use client";
import Link from 'next/link';
import React, { useState } from 'react';

export default function  Navbar(){
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className="bg-olive-800 text-white font-bold">
            <div className="flex justify-between items-center p-4">
                <div className="text-3xl">ShoeStore</div>
                <div className="hidden md:flex gap-10 text-xl font-normal items-center">
                    <Link href="/" className="hover:text-gray-300">Home</Link>
                    <Link href="/cart" className="hover:text-gray-300">Cart</Link>
                    <Link href="/wishlist" className="hover:text-gray-300">Wishlist</Link>
                    <Link href='/admin' className='hover:text-gray-300'>Admin</Link>
                    <link href='/signup' className='hover:text-gray-300 '></link>
                    <Link href="/login" className="bg-white text-black px-4 py-1 rounded-xl">Login</Link>
                </div>
                <button 
                    onClick={() => setIsOpen(!isOpen)} 
                    className="md:hidden text-3xl focus:outline-none"
                >
       {isOpen ? '✕' : '☰'} 
                </button>
            </div>
            {isOpen && (
                <div className="md:hidden flex flex-col items-center gap-4 pb-4 font-normal">
                    <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
                    <Link href="/cart" onClick={() => setIsOpen(false)}>Cart</Link>
                    <Link href="/wishlist" onClick={() => setIsOpen(false)}>Wishlist</Link>
                     <Link href='/admin' onClick={()=>setIsOpen(false)}>Admin</Link>
                    <Link href="/login" className="bg-white text-black px-4 py-1 rounded-xl" onClick={() => setIsOpen(false)}>Login</Link>
                </div>
            )}
        </nav>
    );
};

