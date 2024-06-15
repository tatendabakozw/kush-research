import Navbar from "@/components/navigation/Navbar";
import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

function DashboardLayout({ children }: Props) {
  return (
    <div className="flex flex-col w-full">
      <Navbar />
      {children}
    </div>
  );
}

export default DashboardLayout;
