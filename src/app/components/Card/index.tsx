import React from "react";

type Props = {};

function Card({}: Props) {
  return (
    <div className="border bg-slate-200 m-7 rounded-2xl max-w-96 text-xl">
      <div className="flex justify-around my-2 ">
        <p>Name of todo</p>
        <div
          className="badge badge-secondary size-7 w-16
        "
        >
          medium
        </div>
      </div>
      <div className="mt-8">
        <span className="text-2xl font-medium">Participant</span>
        :Anar
      </div>
      <div>
        <span className="text-2xl font-medium">Date added</span>
        :12/12/2004
      </div>
    </div>
  );
}

export default Card;
