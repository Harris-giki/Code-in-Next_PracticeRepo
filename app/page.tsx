import React from "react";
import Users from "./users/page"; // Adjusted import path

const Page = () => {
  return (
    <div>
      Hello
      <br />
      <button className="btn btn-primary">Hello world</button>
      <Users />
    </div>
  );
};

export default Page;
