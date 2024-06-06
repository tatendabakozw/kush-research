/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { goods_data } from "../../utils/goods_data";
import RadioItem from "../radio-item/RadioItem";
import { getSingleArray } from "../../helpers/arrayMethods";

const GoodsCalculator = () => {
  const [selected_goods_type, setSelectedGoodsType] = useState<any>("");
  const [selected_importation_method, setSelectedImportationMethod] =
    useState<any>("");

  console.log(selected_goods_type);
  return (
    <div className="flex flex-col space-y-4 bg-white rounded-xl p-4 border border-zinc-100">
      {/* vehicle makes */}
      <div className="grid grid-cols-3 rounded-xl">
        <div className="col-span-1 px-2 text-sm font-medium text-zinc-700">
          <p>Please select type of goods</p>
        </div>
        <div className="col-span-2 grid grid-cols-2">
          <form className="max-w-7xl col-span-1">
            <select
              value={selected_goods_type}
              onChange={(e) => setSelectedGoodsType(e.target.value)}
              id="countries"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            >
              <option selected>Please select type of goods</option>
              {goods_data.goods_type.map((item) => (
                <option key={item._id} value={item._id}>
                  {item.name}
                </option>
              ))}
            </select>
          </form>
        </div>
      </div>
      <div className="flex flex-col space-y-4">
        {/* Builders ware */}
        <div className="grid grid-cols-3">
          <div className="col-span-1 px-2 text-sm font-medium text-zinc-700">
            {selected_goods_type && (
              <p>
                {
                  getSingleArray(goods_data.goods_type, selected_goods_type)
                    ?.name
                }
              </p>
            )}
          </div>
          {selected_goods_type && (
            <div className="col-span-2 grid grid-cols-2">
              <ul className="items-center col-span-3 w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex">
                {getSingleArray(
                  goods_data.goods_type,
                  selected_goods_type
                )?.categories?.map((item: any) => (
                  <RadioItem key={item._id} label={item.name} />
                ))}
              </ul>
            </div>
          )}
        </div>
        {/* Importation method */}
        <div className="grid grid-cols-3">
          <div className="col-span-1 px-2 text-sm font-medium text-zinc-700">
            <p>Importation method</p>
          </div>
          <div className="col-span-2 grid grid-cols-2">
            <form className="max-w-7xl col-span-1">
              <select
                value={selected_importation_method}
                onChange={(e) => setSelectedImportationMethod(e.target.value)}
                id="countries"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              >
                <option selected>Importation method</option>
                {goods_data.importation_methods.map((item) => (
                  <option
                    key={item._id}
                    value={item._id}
                    className="capitalise"
                  >
                    {item.name}
                  </option>
                ))}
              </select>
            </form>
          </div>
        </div>
        {/* Rate of duty */}
        <div className="grid grid-cols-3">
          <div className="col-span-1 px-2 text-sm font-medium text-zinc-700">
            <p>Rate of duty</p>
          </div>
          <div className="col-span-2 grid grid-cols-2">
            <input
              type="text"
              className="p-2 col-span-1 bg-zinc-100 rounded-lg "
              placeholder="Rate of duty"
            />
          </div>
        </div>
        {/* Customs duty */}
        <div className="grid grid-cols-3">
          <div className="col-span-1 px-2 text-sm font-medium text-zinc-700">
            <p>Customs duty</p>
          </div>
          <div className="col-span-2 grid grid-cols-2">
            <input
              type="text"
              className="p-2 col-span-1 bg-zinc-100 rounded-lg "
              placeholder="Customs duty"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoodsCalculator;
