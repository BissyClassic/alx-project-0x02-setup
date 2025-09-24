 import React, { useState } from "react";
 import Card from "@/components/common/Card";
 import PostModal from "@/components/common/PostModal";
 import Header from "@/components/layout/Header";


 export default function HomePage() {
    const [ post, setPost ] = useState([
        {title:"About us", content: "We are who we are."},
        {title:"Our mission", content:"To do what we do."},
        ]);

        const [isModalOpen, setIsModalOpen] = useState(false);

        const handleAddPost = (title: string, content: string) => {
            setPost([...post, {title, content}]);
        }
    return(
        <div className="min-h-screen bg-gray-50 p-10">
            <Header />
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
        <button
        onClick={() => setIsModalOpen(true)}
         className="mb-6 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
        >
            + Add post
        </button>

        <div className="grid grid-cols-1 md-grid-cols-3 gap-6">
            {post.map((post, index) => (<Card key={index} title={post.title} content={post.content}/>))}
        </div>

        <PostModal 
        isOpen= {isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddPost}
        />
        </div>
    );
 }