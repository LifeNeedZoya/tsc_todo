"use client";
import React, { FC } from "react";

import { Droppable, Draggable } from "react-beautiful-dnd";
import Card from "../Card";

interface PropsType {
  board: {
    id: string;
    title: string;
    hasBtn: boolean;
    tasks: {
      id: string;
      name: string;
      priority: string;
      author: string;
      isStatus: string;
    }[];
  };
}

const Board: FC<PropsType> = ({ board }) => {
  return (
    <div className="w-full h-full bg-slate-50">
      <Droppable droppableId={"droppable-" + board.id}>
        {(provided) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className="h-full w-full items-stretch bg-slate-300 rounded-lg p-4"
          >
            <h1>{board.title}</h1>
            {board?.tasks.map((task, i) => (
              <Draggable key={i} draggableId={task.id.toString()} index={i}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.dragHandleProps}
                    {...provided.draggableProps}
                  >
                    <Card task={task} key={i} />
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default Board;
