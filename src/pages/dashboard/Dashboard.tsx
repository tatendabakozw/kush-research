import PrimaryButton from "@/components/buttons/PriimaryButton";
import CustomInput from "@/components/inputs/CustomInput";
import DashboardLayout from "@/layouts/DashboardLayout";
// import { data } from "@/utils/data";
import { useState } from "react";

function Dashboard() {
  //   const [vehicle_make, setVehicleMake] = useState(data.vehicle_makes);
  const [new_make, setNewMake] = useState("");
  const [new_type, setNewType] = useState("");
  const [loading, setLoading] = useState(false);

  const saveNewInfoHandler = () => {
    setLoading(true);
    // TODO: add new info items
    setLoading(false);
  };

  return (
    <DashboardLayout>
      <div className="flex flex-col space-y-4 bg-zinc-100 min-h-[90vh]">
        <div className="flex max-w-7xl w-full mx-auto p-4">
          <div className="max-w-2xl w-full flex flex-col space-y-4 ">
            <CustomInput
              heading="Vehicle Make"
              value={new_make}
              setValue={setNewMake}
              placeholder="Enter vehicle make"
            />
            <CustomInput
              heading="Vehicle type"
              value={new_type}
              setValue={setNewType}
              placeholder="Enter vehicle type"
            />
            <PrimaryButton
              onClick={saveNewInfoHandler}
              loading={loading}
              text="Save Info"
            />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Dashboard;
