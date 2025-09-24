 import React from "react";
 import {type ButtonProps} from "@/interfaces";
 "import { type ButtonProps }";

 
 
 const Button: React.FC<ButtonProps> = ({label="string", size= "medium", shape= "rounded-md" }) => {
    const sizeClasses: Record<string, string> = {
         small: "px-3 py-1 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-6 py-3 text-lg",
    };

  return (
    <main className="flex flex-col h-screen justify-center items-center text-4xl font-semibold">
      <h2>Click me</h2>
      <button className=" border px-3 py-1 text-lg mt-3  bg-blue-500 text-white rounded-full" >Get Started</button>
    </main>
  )
}

export default Button;
