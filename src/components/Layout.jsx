import React, { useState } from "react";
import { Header, AddTask, Task } from ".";

const Layout = () => {
  const [isActive, setIsActive] = useState(false);
  const [data, setData] = useState([
    {
      id: new Date().getMilliseconds(),
      title: "The Alpha Team",
      date: "Dec 12 12 2:30PM",
      complated: false,
    },
  ]);

  //func
  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      id: new Date().getMilliseconds(),
      title: e.target.taskName.value,
      date: e.target.selectt.value,
      complated: false,
    };
    setData([...data, newTodo]);
  };

  //func Section is Done

  // DElete func.
  const handleRemove = (id) => {
    setData(data.filter((todo) => todo.id !== id));
  };

  // DElete functıon

  // Complated Funct
  const handleComplated = (id) => {
    const updateData = data.map((todo) => {
      if (todo.id === id) {
        return { ...todo, complated: !todo.complated };
      }
      return todo;
    });
    setData(updateData);
  };

  // ccccc
  return (
    <div className="mt-[2.5rem] w-[40rem] bg-[#FF6347] pb-10">
      <Header active={isActive} setActive={setIsActive} />
      {isActive && (
        <div className="w-[30rem] mx-auto">
          <AddTask handleSubmit={handleSubmit} />
        </div>
      )}
      {data.length !== 0 ? (
        <div className="max-h-[25rem] overflow-y-auto">
          {data.map((item, idx) => (
            <div key={idx}>
              <Task
                data={item}
                handleRemove={handleRemove}
                handleComplated={handleComplated}
              />
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-xl font-semibold mt-3">No Task Yet</p>
      )}
    </div>
  );
};

export default Layout;
