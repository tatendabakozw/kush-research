/* eslint-disable @typescript-eslint/no-explicit-any */
import { useFetch } from "@/hooks/useFetch";
import DashboardLayout from "@/layouts/DashboardLayout";
import { apiUrl } from "@/utils/apiiUrl";
import React from "react";

function Requests() {
  const response = useFetch(`${apiUrl}/requests/all`);
  console.log("response on requests", response);
  return (
    <DashboardLayout>
      <div className=" bg-zinc-50 min-h-[95vh]">
        <div className="max-w-7xl mx-auto w-full flex flex-col space-y-4 p-4">
          {response.data.requests?.map((item: any) => (
            <div
              key={item._id}
              className="bg-white p-4 rounded-xl border gap-2 border-zinc-200/50"
            >
              <p className="text-zinc-900 text-lg font-medium">{item.email}</p>
              <p className="text-sm text-zinc-500">{item.message}</p>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Requests;
