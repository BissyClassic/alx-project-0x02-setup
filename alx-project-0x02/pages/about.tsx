import React from "react";
import Button from "@/components/common/Button";

    export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-10">
      <h1 className="text-3xl font-bold mb-6">About Page</h1>

      <div className="flex gap-4">
        <Button label="Small Button" size="small" shape="rounded-sm"/>
        <Button label="Medium Button" size="medium" shape="rounded-md" />
        <Button label="Large Button" size="large" shape="rounded-full" />
      </div>
    </div>
  );
};