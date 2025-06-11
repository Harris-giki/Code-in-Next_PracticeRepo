//server side data fetching
import React from "react";

interface User {
  id: number;
  name: string;
}
const page = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/users",
    { cache: "no-store" } //caching disabled if the data is frequently changing
  ); //another option is to keep data fresh for a certain period of time
  // {next: {revalidate: 10}} // rechecking for fresh data every 10 seconds
  const users: User[] = await res.json();
  return (
    <>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
};

export default page;
