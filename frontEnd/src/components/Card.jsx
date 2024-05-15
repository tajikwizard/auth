import React from "react";

const Card = ({ children }) => {
  return (
    <div className="card max-w-96 bg-white p-8  rounded-2xl shadow-md">
      {children}
    </div>
  );
};

export default Card;
