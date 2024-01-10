"use client";

import { useState } from "react";
import Card from "./components/Card";

export default function Home() {
  const [arrData, setArrData] = useState({
    name: "",
  });

  return (
    <main className="bg-gray-100">
      <div className="text-center grid grid-cols-3 p-9 h-screen gap-5 mx-auto container bg-slate-100">
        <div className="border border-black h-2/3 rounded-2xl  ">
          <div className="flex rounded-lg ">
            <div className=" justify-between  flex ">
              <div className="">
                <h1 className="text-center font-bold text-2xl">Todo</h1>
              </div>
              <div className="">
                <button
                  className="btn btn-circle btn-accent "
                  onClick={() =>
                    document.getElementById("my_modal_2").showModal()
                  }
                >
                  +
                </button>
              </div>
            </div>

            <dialog id="my_modal_2" className="modal">
              <div className="modal-box">
                <h3 className="font-bold text-lg">new todo!</h3>
                <input
                  type="text"
                  placeholder="Name of Todo"
                  className="input input-bordered input-secondary w-full max-w-xs"
                />
                <select className="select select-primary w-full max-w-xs">
                  <option disabled selected>
                    level
                  </option>
                  <option>Low</option>
                  <option>Medium</option>
                  <option>High</option>
                </select>
                <input
                  type="text"
                  placeholder="Participant Name"
                  className="input input-bordered input-secondary w-full max-w-xs"
                />
                <input
                  type="date"
                  placeholder="Type here"
                  className="input input-bordered input-secondary w-full max-w-xs"
                />
                <button className="btn btn-primary block">save</button>
              </div>

              <form method="dialog" className="modal-backdrop ">
                <button>close</button>
              </form>
            </dialog>
          </div>
          <div className="text-center"></div>
        </div>
        <div className="border border-black  h-2/3  font-bold rounded-2xl ">
          <h1 className="rounded-2xl">Doing</h1>
          <Card />
        </div>
        <div className="border border-black  font-bold h-2/3 rounded-2xl">
          <h1 className=" text-2xl">Done</h1>
        </div>
      </div>
    </main>
  );
}
