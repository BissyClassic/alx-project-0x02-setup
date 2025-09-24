import React from "react";
import Header from "@/components/layout/Header";

export default function PostsPage() {
  return (
    <div>
      <Header />
      <main className="p-6">
        <h1 className="text-3xl font-bold">Posts</h1>
        <p className="mt-4">Here you can see all posts.</p>
      </main>
    </div>
  );
}

