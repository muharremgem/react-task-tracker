import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const Task = ({ data, handleRemove, handleComplated }) => {
  return (
    <div className="w-[30rem] mx-auto py-3">
      <div className={`bg-white p-4 flex justify-between items-center`}>
        <div
          className="w-full cursor-pointer"
          onClick={() => handleComplated(data.id)}
        >
          <p className={`font-bold text-xl`}>{data.title}</p>
          <p className={`${data.complated && "line-through"}`}>{data.date}</p>
        </div>
        <div
          className="text-xl text-red-800 cursor-pointer p-2 bg-slate-200 rounded-full"
          onClick={() => handleRemove(data.id)}
        >
          <AiOutlineClose />
        </div>
      </div>
    </div>
  );
};

export default Task;
