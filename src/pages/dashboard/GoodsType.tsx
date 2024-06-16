/* eslint-disable @typescript-eslint/no-explicit-any */
import PrimaryButton from "@/components/buttons/PriimaryButton";
import CustomInput from "@/components/inputs/CustomInput";
import { useFetch } from "@/hooks/useFetch";
import DashboardLayout from "@/layouts/DashboardLayout";
import { apiUrl } from "@/utils/apiiUrl";
import axios from "axios";
import { useState } from "react";

const GoodsType = () => {
  const [selected_type, setlectedGoodType] = useState<any>();
  const [new_type, setNewType] = useState("");
  const [good_name, setGoodName] = useState("");
  const [loading, setLoading] = useState(false);
  const [rate, setRate] = useState(1);

  const response = useFetch(`${apiUrl}/goods_types/all`);

  const saveGoodType = async () => {
    setLoading(false);
    try {
      const { data } = await axios.post(`${apiUrl}/goods/create`, {
        name: good_name,
        rate,
        parent: selected_type,
      });
      console.log(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  const saveNewInfoHandler = async () => {
    setLoading(true);
    try {
      const { data } = await axios.post(`${apiUrl}/goods_types/create`, {
        name: new_type,
      });
      console.log(data);
      setNewType("");
      // TODO: add new info items
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  console.log("response fropm server", response);

  return (
    <DashboardLayout>
      <div className="flex flex-col space-y-4 bg-zinc-100 min-h-[90vh]">
        <div className="flex max-w-7xl w-full mx-auto p-4">
          <div className="max-w-2xl w-full flex flex-col space-y-4 ">
            <div className="flex flex-col space-y-6">
              <p className="text-3xl font-medium text-zinc-950">
                Add New Goods type
              </p>
              <CustomInput
                heading="Goods types"
                value={new_type}
                setValue={setNewType}
                placeholder="Enter vehicle make"
              />
              <PrimaryButton
                onClick={saveNewInfoHandler}
                loading={loading}
                text="Save Info"
              />
            </div>
            <div className="flex flex-col space-y-4 pt-8">
              <p className="text-3xl font-medium text-zinc-950">Add new good</p>

              <div className="md:col-span-2 col-span-1 grid grid-cols-2">
                <form className="max-w-7xl md:col-span-1 col-span-2">
                  <select
                    id="selected_type"
                    value={selected_type}
                    onChange={(e) => setlectedGoodType(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  >
                    <option selected>Select Goods type</option>
                    {response.data.goods_type?.map((item: any) => (
                      <option value={item._id} key={item._id}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                </form>
              </div>
              <CustomInput
                heading="Goods name"
                value={good_name}
                setValue={setGoodName}
                placeholder="Enter good name"
              />
              <CustomInput
                heading="Rate"
                value={rate}
                setValue={setRate}
                placeholder="Enter rate"
              />
              <PrimaryButton
                onClick={saveGoodType}
                loading={loading}
                text="Save Info"
              />
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default GoodsType;
