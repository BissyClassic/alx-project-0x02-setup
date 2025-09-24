import React, { useEffect, useState } from "react";
import UserCard from "@/components/common/UserCard";
import { UserProps } from "@/interfaces";
import Header from "@/components/layout/Header";
"getStaticProps"

export default function UsersPage() {
  const [users, setUsers] = useState<UserProps[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();

      // Map API response to match UserProps
      const formattedUsers: UserProps[] = data.map((user: any) => ({
        id: user.id,
        name: user.name,
        email: user.email,
        address: {
          street: user.address.street,
          city: user.address.city,
        },
      }));

      setUsers(formattedUsers);
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <Header />
      <main className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <h1 className="text-3xl font-bold col-span-full mb-4">Users</h1>
        {users.length > 0 ? (
          users.map((user) => (
            <UserCard
              key={user.id}
              id={user.id}
              name={user.name}
              email={user.email}
              address={user.address}
            />
          ))
        ) : (
          <p>Loading users...</p>
        )}
      </main>
    </div>
  );
}

