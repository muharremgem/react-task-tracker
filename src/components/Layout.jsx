import React, { useState } from "react";
import { Header, AddTask, Task } from ".";

const Layout = () => {
  const [isActive, setIsActive] = useState(false);

  const Data = [
    {
      id: new Date().getMilliseconds(),
      title: "The Alpha Team",
      date: "Dec 12 12 2:30PM",
      complated: false,
    },
  ];

  return (
    <div className="mt-[2.5rem] w-[40rem] bg-pink-500 pb-10">
      <Header active={isActive} setActive={setIsActive} />
      {isActive && (
        <div className="w-[30rem] mx-auto">
          <AddTask />
        </div>
      )}
      {Data.map((item, idx) => {
        <div key={idx}>
          <Task />
        </div>;
      })}
    </div>
  );
};

export default Layout;
