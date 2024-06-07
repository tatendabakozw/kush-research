/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useEffect, useState } from "react";
import { data } from "../../utils/data";
import RadioItem from "../radio-item/RadioItem";
import { getSingleArray } from "../../helpers/arrayMethods";
import { PrinterIcon } from "@heroicons/react/16/solid";

const rate_for_duty = 0.4;

const VehicleCalculator = () => {
  const [make, setMake] = useState("");
  const [vehicle_type, setVehicleType] = useState("");
  const [supply_country, setSupplyCountry] = useState("");
  const [invoice_currency, setInvoiceCurrency] = useState("");
  const [invoice_value, setInvoiceValue] = useState<any>();
  const [carrier_currency, setCarrierCurrency] = useState("");
  const [year_of_man, setYearOfMan] = useState("");
  const [other_charges, setOtherCharges] = useState<any>();

  // calculated values
  const [value_for_duty, setValueForDuty] = useState(0.0);

  useEffect(() => {
    const invoiceValueFloat = parseFloat(invoice_value) || 0.0;
    const otherChargesFloat = parseFloat(other_charges) || 0.0;
    const totalValue = invoiceValueFloat + otherChargesFloat;
    const formattedValue = parseFloat(totalValue.toFixed(3)); // Ensures it's a float with 3 decimal places
    setValueForDuty(formattedValue);
  }, [invoice_value, other_charges]);

  const [customs_duty, setCustomsDuty] = useState<number>(0.0);

  // Calculate customs duty
  useEffect(() => {
    // Calculate customs duty
    const calculatedDuty = value_for_duty * rate_for_duty;
    // Format the duty to three decimal places
    const formattedDuty = parseFloat(calculatedDuty.toFixed(3));
    // Set the calculated customs duty
    setCustomsDuty(formattedDuty);
  }, [value_for_duty]);

  const [value_added_tax, setValueAddedTax] = useState<number>(0.0);

  // Calculate value added tax
  useEffect(() => {
    const vatRate = 0.15; // VAT rate is 15%
    const calculatedVAT = (customs_duty + value_for_duty) * vatRate;
    const formattedVAT = parseFloat(calculatedVAT.toFixed(3));
    setValueAddedTax(formattedVAT);
  }, [customs_duty, value_for_duty]);

  const [surtax, setSurtax] = useState<number>(0.0);

  // Calculate surtax
  useEffect(() => {
    const surtaxRate = 0.35; // Surtax rate is 35%
    const calculatedSurtax = value_for_duty * surtaxRate;
    const formattedSurtax = parseFloat(calculatedSurtax.toFixed(3));
    setSurtax(formattedSurtax);
  }, [value_for_duty]);

  const [total_payable, setTotalPayable] = useState<number>(0.0);

  // Calculate total payable
  useEffect(() => {
    const calculatedTotalPayable = customs_duty + value_added_tax + surtax;
    const formattedTotalPayable = parseFloat(calculatedTotalPayable.toFixed(3));
    setTotalPayable(formattedTotalPayable);
  }, [customs_duty, value_added_tax, surtax]);

  return (
    <div className="grid grid-cols-4 gap-4">
      <div className="flex flex-col space-y-4 col-span-3 rounded-xl border border-zinc-100 p-4 bg-white">
        {/* vehicle makes */}
        <div className="grid grid-cols-3">
          <div className="col-span-1 px-2 text-sm font-medium text-zinc-700">
            <p>Vehicle Make</p>
          </div>
          <div className="col-span-2 grid grid-cols-2">
            <form className="max-w-7xl col-span-1">
              <select
                id="make"
                value={make}
                onChange={(e) => setMake(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              >
                <option selected>Please select the make of your vehicle</option>
                {data.vehicle_makes.map((item) => (
                  <option value={item._id} key={item._id}>
                    {item.name}
                  </option>
                ))}
              </select>
            </form>
          </div>
        </div>
        {/* vehicle makes */}
        <div className="grid grid-cols-3">
          <div className="col-span-1 px-2 text-sm font-medium text-zinc-700">
            <p>Vehicle Type</p>
          </div>
          <div className="col-span-2 grid grid-cols-2">
            <form className="max-w-7xl col-span-1">
              <select
                id="vehicle_type"
                value={vehicle_type}
                onChange={(e) => setVehicleType(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              >
                <option selected>Please select type of vehicle</option>
                {data.vehicle_types.map((item) => (
                  <option key={item._id} value={item._id}>
                    {item.name}
                  </option>
                ))}
              </select>
            </form>
          </div>
        </div>
        {/* Country of supply */}
        <div className="grid grid-cols-3">
          <div className="col-span-1 px-2 text-sm font-medium text-zinc-700">
            <p>Country of supply</p>
          </div>
          <div className="col-span-2 grid grid-cols-2">
            <ul className="items-center col-span-3 w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex">
              <RadioItem
                value={supply_country}
                setValue={setSupplyCountry}
                label="Southern Africa"
              />
              <RadioItem
                value={supply_country}
                setValue={setSupplyCountry}
                label="Rest of africa"
              />
              <RadioItem
                value={supply_country}
                setValue={setSupplyCountry}
                label="UK"
              />
              <RadioItem
                value={supply_country}
                setValue={setSupplyCountry}
                label="Japan"
              />
              <RadioItem
                value={supply_country}
                setValue={setSupplyCountry}
                label="USA"
              />
              <RadioItem
                value={supply_country}
                setValue={setSupplyCountry}
                label="Rest of world"
              />
            </ul>
          </div>
        </div>
        {/* year of manufacturer */}
        <div className="grid grid-cols-3">
          <div className="col-span-1 px-2 text-sm font-medium text-zinc-700">
            <p>Year of manufacturer</p>
          </div>
          <div className="col-span-2 grid grid-cols-2">
            <input
              type="text"
              value={year_of_man}
              onChange={(e) => setYearOfMan(e.target.value)}
              className="p-2 col-span-1 bg-zinc-100 rounded-lg "
              placeholder="Year"
            />
          </div>
        </div>
        {/* Invoice value */}
        <div className="grid grid-cols-3">
          <div className="col-span-1 px-2 text-sm font-medium text-zinc-700">
            <p>Invoice value</p>
          </div>
          <div className="col-span-2 grid grid-cols-2">
            <input
              type="text"
              value={invoice_value}
              onChange={(e) => setInvoiceValue(e.target.value)}
              className="p-2 col-span-1 bg-zinc-100 rounded-lg "
              placeholder="Invoice value"
            />
          </div>
        </div>
        {/* Invoice value */}
        <div className="grid grid-cols-3">
          <div className="col-span-1 px-2 text-sm font-medium text-zinc-700">
            <p>Other Charges</p>
          </div>
          <div className="col-span-2 grid grid-cols-2">
            <input
              type="text"
              value={other_charges}
              onChange={(e) => setOtherCharges(e.target.value)}
              className="p-2 col-span-1 bg-zinc-100 rounded-lg "
              placeholder="Invoice value"
            />
          </div>
        </div>
        {/* Invoice currency */}
        <div className="grid grid-cols-3">
          <div className="col-span-1 px-2 text-sm font-medium text-zinc-700">
            <p>Invoice Currency</p>
          </div>
          <div className="col-span-2 grid grid-cols-2">
            <ul className="items-center col-span-3 w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex">
              {data.currencies.map((item) => (
                <RadioItem
                  key={item._id}
                  value={item._id}
                  setValue={setInvoiceCurrency}
                  label={item.name}
                />
              ))}
            </ul>
          </div>
        </div>
        {/* Carrier Charge to border post */}
        <div className="grid grid-cols-3">
          <div className="col-span-1 px-2 text-sm font-medium text-zinc-700">
            <p>Carrier Charge to border post</p>
          </div>
          <div className="col-span-2 grid grid-cols-2">
            <input
              type="text"
              className="p-2 col-span-1 bg-zinc-100 rounded-lg "
              placeholder="Carrier Charge to border"
            />
          </div>
        </div>
        {/* Carrier Charge to border currency */}
        <div className="grid grid-cols-3">
          <div className="col-span-1 px-2 text-sm font-medium text-zinc-700">
            <p>Carrier Charge to border currency</p>
          </div>
          <div className="col-span-2 grid grid-cols-2">
            <ul className="items-center col-span-3 w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex">
              {data.currencies.map((item, index) => (
                <RadioItem
                  key={index}
                  value={item._id}
                  setValue={setCarrierCurrency}
                  label={item.name}
                />
              ))}
            </ul>
          </div>
        </div>
        {/* Rate for exchange */}
        <div className="grid grid-cols-3">
          <div className="col-span-1 px-2 text-sm font-medium text-zinc-700">
            <p>Rate for exchange</p>
          </div>
          <div className="col-span-2 grid grid-cols-2">
            <input
              type="text"
              value={1.0}
              className="p-2 col-span-1 bg-zinc-100 rounded-lg "
              placeholder="Rate for exchange"
            />
          </div>
        </div>
        {/* Value for duty purposes */}
        <div className="grid grid-cols-3">
          <div className="col-span-1 px-2 text-sm font-medium text-zinc-700">
            <p>Value for duty purposes</p>
          </div>
          <div className="col-span-2 grid grid-cols-2">
            <input
              type="text"
              disabled
              value={value_for_duty}
              className="p-2 col-span-1 bg-zinc-100 rounded-lg "
              placeholder="Value for duty purposes"
            />
          </div>
        </div>
        {/* Rate for duty */}
        <div className="grid grid-cols-3">
          <div className="col-span-1 px-2 text-sm font-medium text-zinc-700">
            <p>Rate for duty</p>
          </div>
          <div className="col-span-2 grid grid-cols-2">
            <input
              type="text"
              disabled
              className="p-2 col-span-2 bg-zinc-100 rounded-lg "
              placeholder="Rate for duty"
              value={
                getSingleArray(data.vehicle_types, vehicle_type)?.duty_rate
              }
            />
          </div>
        </div>
        {/* Custom duty */}
        <div className="grid grid-cols-3">
          <div className="col-span-1 px-2 text-sm font-medium text-zinc-700">
            <p>Customs duty</p>
          </div>
          <div className="col-span-2 grid grid-cols-2">
            <input
              type="text"
              value={customs_duty}
              className="p-2 col-span-2 bg-zinc-100 rounded-lg "
              placeholder="Custom duty"
            />
          </div>
        </div>
        {/* VTP */}
        <div className="grid grid-cols-3">
          <div className="col-span-1 px-2 text-sm font-medium text-zinc-700">
            <p>VTP</p>
          </div>
          <div className="col-span-2 grid grid-cols-2">
            <input
              type="text"
              value={value_for_duty + customs_duty}
              className="p-2 col-span-2 bg-zinc-100 rounded-lg "
              placeholder="VTP"
            />
          </div>
        </div>
        {/* Value added tax */}
        <div className="grid grid-cols-3">
          <div className="col-span-1 px-2 text-sm font-medium text-zinc-700">
            <p>Value added tax(15%)</p>
          </div>
          <div className="col-span-2 grid grid-cols-2">
            <input
              type="text"
              value={value_added_tax}
              className="p-2 col-span-2 bg-zinc-100 rounded-lg "
              placeholder="Value added tax"
            />
          </div>
        </div>
        {/* Surtax */}
        <div className="grid grid-cols-3">
          <div className="col-span-1 px-2 text-sm font-medium text-zinc-700">
            <p>Surtax(35%)</p>
          </div>
          <div className="col-span-2 grid grid-cols-2">
            <input
              type="text"
              value={surtax}
              className="p-2 col-span-2 bg-zinc-100 rounded-lg "
              placeholder="Surtax"
            />
          </div>
        </div>
        {/* Total Payable */}
        <div className="grid grid-cols-3">
          <div className="col-span-1 px-2 text-sm font-medium text-zinc-700">
            <p>Total Payable</p>
          </div>
          <div className="col-span-2 grid grid-cols-2">
            <input
              type="text"
              value={total_payable}
              className="p-2 col-span-2 bg-zinc-100 rounded-lg "
              placeholder="Total Payable"
            />
          </div>
        </div>
      </div>
      {/* summary sectoin */}
      <div className="flex flex-col col-span-1 sticky">
        <div className="flex flex-col space-y-2 rounded-xl border border-zinc-100 p-4 bg-white">
          <p className="text-lg font-semibold tet-zinc-950">
            Summary of the Costs
          </p>
          <p className="text-zinc-500">
            Vehicle Make{" "}
            <span className="text-zinc-950 font-semibold">
              {getSingleArray(data.vehicle_makes, make)?.name}
            </span>
          </p>
          <p className="text-zinc-500">
            Vehicle Type{" "}
            <span className="text-zinc-950 font-semibold">
              {getSingleArray(data.vehicle_types, vehicle_type)?.name}
            </span>
          </p>
          <p className="text-zinc-500">
            Customs duty{" "}
            <span className="text-zinc-950 font-semibold">{customs_duty}</span>
          </p>
          <p className="text-zinc-500">
            Value added tax{" "}
            <span className="text-zinc-950 font-semibold">
              {value_added_tax}
            </span>
          </p>
          <p className="text-zinc-500">
            Surtax: Vehicle is less than 5 years old{" "}
            <span className="text-zinc-950 font-semibold">{surtax}</span>
          </p>
          <p className="text-zinc-500">
            Total Payable{" "}
            <span className="text-zinc-950 font-semibold">{total_payable}</span>
          </p>
        </div>
        <div className="flex flex-row items-center mt-8 space-x-4 w-full ml-auto bg-white border border-zinc-100 rounded-lg p-2">
          <PrinterIcon height={16} width={16} />
          <p>Print</p>
        </div>
      </div>
    </div>
  );
};

export default VehicleCalculator;
