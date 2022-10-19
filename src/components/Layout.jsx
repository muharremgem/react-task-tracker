import React, { useState } from "react";
import { Header, AddTask } from ".";

const Layout = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="mt-[2.5rem] w-[40rem] bg-pink-500 pb-10">
      <Header active={isActive} setActive={setIsActive} />
      {isActive && (
        <div className="w-[30rem] mx-auto">
          <AddTask />
        </div>
      )}
    </div>
  );
};

export default Layout;
