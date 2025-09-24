import React, { useState } from "react";

interface PostModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: ( title: string, content: string) => void;
}

const PostModal: React.FC<PostModalProps> = ({ isOpen, onClose, onSubmit }) => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    if (!isOpen) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (title && content) {
            onSubmit(title, content);
            setTitle("");
            setContent("");
            onClose();
        }
    };
    
    return (
    <div className="fixed flex items-center text-center bg-blue-300 justify-center z-50">
        <div className="bg-white text-black w-full">
        <h2>Create new post</h2>
        <form onSubmit={handleSubmit}>
       <input 
       type="text"
       placeholder="Enter a text"
       value={title}
       onChange={(e) => setTitle(e.target.value)}
       className="w-full border p-2 rounded mb-3"
       />
       <textarea
       placeholder="Enter Content"
       value={content}
       onChange={(e) => setContent(e.target.value)}
       className="w-full border p-2 rounded mb-3"
       rows={4}
       />
       <div className="">
        <button
        type="button"
        onClick={onClose}
        className="px-3 py-6 bg-gray-200 rounded hover:bg-pink-200">
        Cancel
        </button>
        <button 
        type="submit"
        className="px-3 py-6 bg-gray-200 rounded hover:bg-pink-200"
        >Save</button>
       </div>
        </form>
        </div>

    </div>
    );
};

export default PostModal;