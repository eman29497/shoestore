"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const handleLogin = (e: any) => {
    e.preventDefault();
    const savedUser = JSON.parse(localStorage.getItem("user") || "{}");
    if (savedUser.email === email && savedUser.password === password) {
      alert("Sahi hai! Login ho gaya.");
      localStorage.setItem("isLoggedIn", "true"); 
      router.push("/"); 
    } else {
      alert("Ghalat Email ya Password! Phir se koshish karein.");
    }
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleLogin} className="bg-white p-6 rounded shadow-md w-80">
        <h1 className="text-xl font-bold mb-4 text-center">Login Page</h1>
        <input 
          type="email" 
          placeholder="Type Email Here..." 
          className="w-full p-2 border mb-3 rounded"
          onChange={(e) => setEmail(e.target.value)}
          required
        />     
        <input 
          type="password" 
          placeholder="Type Password Here..." 
          className="w-full p-2 border mb-4 rounded"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className="w-full bg-black text-white py-2 rounded ">
          Login
        </button>

        <p className="mt-3 text-sm text-center text-gray-600">
          Account nahi hai? <a href="/signup" className="text-black">Sign Up karein</a>
        </p>
      </form>
    </div>
  );
};
export default LoginPage;