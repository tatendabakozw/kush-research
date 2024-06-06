import RadioItem from "../../radio-item/RadioItem";

const BuildersWare = () => {
  return (
    <div className="flex flex-col space-y-4">
      {/* Builders ware */}
      <div className="grid grid-cols-3">
        <div className="col-span-1 px-2 text-sm font-medium text-zinc-700">
          <p>Builders ware</p>
        </div>
        <div className="col-span-2 grid grid-cols-2">
          <ul className="items-center col-span-3 w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex">
            <RadioItem label="Bathrooms" />
            <RadioItem label="Bricks" />
            <RadioItem label="Cement" />
            <RadioItem label="Cisterns" />
            <RadioItem label="Doors" />
            <RadioItem label="Frames" />
            <RadioItem label="Sinks" />
            <RadioItem label="Roofs" />
            <RadioItem label="Wiindows" />
          </ul>
        </div>
      </div>
      {/* Importation method */}
      <div className="grid grid-cols-3">
        <div className="col-span-1 px-2 text-sm font-medium text-zinc-700">
          <p>Importation method</p>
        </div>
        <div className="col-span-2 grid grid-cols-2">
          <input
            type="text"
            className="p-2 col-span-1 bg-zinc-100 rounded-lg "
            placeholder="Importation method"
          />
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
  );
};

export default BuildersWare;
