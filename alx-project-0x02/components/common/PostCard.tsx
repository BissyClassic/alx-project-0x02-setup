import React from "react";
import { PostProps } from "@/interfaces/index";
"import {type PostProps}"

const PostCard: React.FC<PostProps> = ({ title, content, userId }) => {
 return(
     <div className="border border-gray-300 rounded-lg shadow-md p-4 bg-white hover:shadow-lg transition">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-gray-700 mt-2">{content}</p>
      <div className="text-sm text-gray-500 mt-4">Posted by User {userId}</div>
    </div>
 );
};

export default PostCard;