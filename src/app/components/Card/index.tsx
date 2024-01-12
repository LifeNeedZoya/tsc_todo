"use client";
import React from "react";

type TaskType = {
  name: string;
  id: string;
  priority: string;
  author: string;
  isStatus: string;
};

function Card({ task }: { task: TaskType }) {
  return (
    <div className="border bg-slate-200 m-7 rounded-2xl max-w-96 text-xl">
      <div className="flex justify-around my-2 ">
        <p>{task.name}</p>
        <div
          className="badge badge-secondary size-7 w-16
        "
        >
          medium
        </div>
      </div>
      <div className="mt-8">
        <span className="text-2xl font-medium">Participant</span>
        {task.author}
      </div>
      <div>
        <span className="text-2xl font-medium">Date added</span>
        {task.priority}
      </div>
    </div>
  );
}

export default Card;
