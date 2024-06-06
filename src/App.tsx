import { useState } from "react";
import "./App.css";
import VehicleCalculator from "./components/vehicle-calculator/VehicleCalculator";
import GoodsCalculator from "./components/goods-calculator/GoodsCalculator";

function App() {
  const [type_calculator, setTypeCalculator] = useState("vehicle-calcutator");
  const type = [
    { name: "Vehicle Calculator", _id: "vehicle-calcutator" },
    { name: "Goods Calculator", _id: "good-calcutator" },
  ];
  return (
    <div className="flex w-full min-h-screen bg-zinc-100 flex-col">
      <div className="navbar py-4 w-full bg-white text-center font-semibold text-zinc-900">
        Duty Calculator
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

export default App;
