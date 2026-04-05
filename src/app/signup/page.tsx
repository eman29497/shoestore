"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const handleSignup = (e: any) => {
    e.preventDefault();
    const userData = { email, password };
    localStorage.setItem("user", JSON.stringify(userData));
    alert("Account ban gaya! Ab Login karein.");
    router.push("/login");
  };
  return (
    <div className="flex flex-col items-center mt-20">
      <form onSubmit={handleSignup} className="bg-white p-8 shadow-lg rounded-lg border w-80">
        <h2 className="text-2xl font-bold mb-4 text-center">Sign Up</h2>
        <input 
          type="email" placeholder="Type Email Here..." required
          className="w-full p-2 border mb-4 rounded"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input 
          type="password" placeholder="Type Password Here..." required
          className="w-full p-2 border mb-4 rounded"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="w-full bg-black text-white py-2 rounded ">
          Register
        </button>
      </form>
    </div>
  );
};

export default SignupPage;