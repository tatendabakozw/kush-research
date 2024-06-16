import React from "react";
import { useState } from "react";
import { UserIcon } from "@heroicons/react/24/outline";
import { ChatBubbleLeftIcon } from "@heroicons/react/24/outline";
import VehicleCalculator from "@/components/vehicle-calculator/VehicleCalculator";
import GoodsCalculator from "@/components/goods-calculator/GoodsCalculator";
import { Link } from "react-router-dom";

function Home() {
  const [open_chat, setOpenChat] = useState(false);
  const [type_calculator, setTypeCalculator] = useState("vehicle-calcutator");
  const type = [
    { name: "Vehicle Calculator", _id: "vehicle-calcutator" },
    { name: "Goods Calculator", _id: "good-calcutator" },
  ];
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  console.log(open_chat);
  return (
    <div className="flex w-full min-h-screen bg-zinc-100 flex-col relative">
      <div className="z-50 flex flex-col space-y-4 fixed bottom-5 right-5">
        {open_chat && (
          <div className="flex flex-col space-y-4 w-96 bg-white p-4 rounded-xl border border-ziinc-40">
            <p className="text-sm font-medium">How can we help you?</p>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="enter email"
              className="bg-zinc-100 p-2 rounded-lg"
            />
            <textarea
              name="message"
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={5}
              className="bg-zinc-100 p-2 rounded-lg"
              placeholder="enter mnessage"
            ></textarea>
            <button className="bg-zinc-950 text-white rounded-full p-2">
              Send Message
            </button>
          </div>
        )}
        <div className="flex self-end">
          <div
            onClick={() => setOpenChat(!open_chat)}
            className="bg-white cursor-pointer p-4 rounded-full  border border-ziinc-40"
          >
            <ChatBubbleLeftIcon height={24} width={24} />
          </div>
        </div>
      </div>
      <div className="navbar py-4 bg-white text-center flex  w-full font-semibold text-zinc-900">
        <div className="max-w-7xl w-full mx-auto flex flex-row items-center justify-between">
          <p></p>
          <p> Duty Calculator</p>
          <Link
            to={"/login"}
            className="bg-secondary p-1 rounded-full cursor-pointer"
          >
            <UserIcon height={16} width={16} />
          </Link>
        </div>
      </div>
      <div className="max-w-7xl mx-auto w-full py-16">
        <div className=" flex flex-col space-y-4">
          <div className="flex">
            <div className="flex flex-row items-center p-1 rounded-lg bg-white">
              {type.map((item) => (
                <button
                  onClick={() => setTypeCalculator(item._id)}
                  key={item._id}
                  className={`${
                    item._id === type_calculator ? "bg-zinc-100 " : "bg-white"
                  } p-2 rounded-lg`}
                >
                  <p>{item.name}</p>
                </button>
              ))}
            </div>
          </div>
          {/* inputs */}
          {type_calculator === "vehicle-calcutator" ? (
            <VehicleCalculator />
          ) : (
            <GoodsCalculator />
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
