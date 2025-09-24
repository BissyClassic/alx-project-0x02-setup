 import React from "react";
 import Card from "@/components/common/Card";


 export default function HomePage() {
    return(
        <div className="min-h-screen bg-gray-50 p-10">
       <h1 className="font-bold text-white text-left">
        Welcome to my homepage 
        </h1>
        <div>
            <Card 
            title="About us"
            content="This is what we do."
            />
            <Card
            title="Our Purpose" 
            content="To make people come together."
            />
        </div>
        </div>
    );
 }