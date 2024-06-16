export const data = {
  nav_options: [
    // { name: 'Home', _id: 'overview', location: '/overview' },
    { name: "Duty Calculator", _id: "home", location: "/" },
    { name: "Goods Type", _id: "goods_type", location: "/goods_type" },
    // { name: "Pos", _id: "pos", location: "/pos" },
    // { name: "Orders", _id: "orders", location: "/orders" },
  ],
  types_of_goods: [
    { name: "Builders ware", _id: "builders-ware" },
    { name: "Chemical Products", _id: "chemical-parts" },
    {
      name: "Clothing, footware and household linen",
      _id: "clothing-footware",
    },
    { name: "Electronic equipment", _id: "electronic-equip" },
    { name: "Groceries", _id: "groceries" },
    {
      name: "Machinery and Mechanical equipment",
      _id: "machinery-and-mechanical",
    },
    { name: "Stationery and toys", _id: "stationary-toys" },
    { name: "Toiletries and sanitary ware", _id: "toiletries" },
    { name: "Vehicle parts", _id: "vehicle-parts" },
  ],
  vehicle_makes: [
    { name: "acura", _id: "acura" },
    { name: "alpha romeo", _id: "alpha-romeo" },
    { name: "aston martin", _id: "aston-martin" },
    { name: "audi", _id: "audi" },
    { name: "bentley", _id: "bently" },
    { name: "bmw", _id: "bmw" },
  ],
  vehicle_types: [
    {
      name: "Coupe/Sedan/Saloon/Convertible",
      _id: "sedan-coupe",
      duty_rate: "40%",
    },
    {
      name: "Hatchback/Station Wagon/SUV/Estate",
      _id: "staion-wagon",
      duty_rate: "40%",
    },
    {
      name: "Hybrid and electic vehicle",
      _id: "hybrid-electric",
      duty_rate: "40%",
    },
    {
      name: "Small Truck/ Single cab",
      _id: "small-truck",
      duty_rate: "Payload <800Kg (25%) , <2500kg (40%), >2500kg (10%)",
    },
    {
      name: "Rigid trucks/ Tipper trucks",
      _id: "rigid-trucks",
      duty_rate: "10%",
    },
    {
      name: "Petal Van",
      _id: "petal-van",
      duty_rate: "Payload <800Kg (25%) , <2500kg (40%),>2500kg (10%)",
    },
    { name: "Double Cab/Twin cab", _id: "double-cab", duty_rate: "60%" },
  ],
  currencies: [
    { name: "AED", _id: "aed" },
    // { name: "YUAN", _id: "YUAN" },
    // { name: "EUR", _id: "EUR" },
    // { name: "GBP", _id: "GBP" },
    // { name: "USD", _id: "USD" },
    // { name: "ZAR/NAD", _id: "ZAR/NAD" },
    { name: "ZIG", _id: "zig" },
  ],
  FOB: 1,
};
