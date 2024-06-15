import { Cog6ToothIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full border-b border-zinc-100">
      <div className="container w-full max-w-7xl mx-auto px-4 flex flex-row items-center space-x-4 py-4 ">
        <Link to={"/"} className="heading-text font-bold">
          Duty Dashboard
        </Link>

        <div className="flex-1" />
        <Link
          to={"/settings"}
          className=" transition-all cursor-pointer duration-100 main-link-text dark:hover:bg-slate-800 hover:bg-slate-100 p-1 rounded-full"
        >
          <Cog6ToothIcon height={20} width={20} />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
