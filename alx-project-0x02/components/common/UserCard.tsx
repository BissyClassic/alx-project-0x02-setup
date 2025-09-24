import React from "react";
import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ name, email, address }) => {
  return (
    <div className="border border-gray-300 rounded-lg shadow-md p-4 bg-white hover:shadow-lg transition">
      <h2 className="text-xl font-semibold">{name}</h2>
      <p className="text-gray-700">{email}</p>
      <p className="text-gray-500 text-sm">
        {address.street}, {address.city}
      </p>
    </div>
  );
};

export default UserCard;

