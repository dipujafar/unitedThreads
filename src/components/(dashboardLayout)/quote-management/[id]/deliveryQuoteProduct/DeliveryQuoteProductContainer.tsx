"use client";
import { Select } from "antd";
import { CiUser } from "react-icons/ci";
import { LuCalendarDays } from "react-icons/lu";
import DeliveryQuoteProductTable from "./DeliveryQuoteProductTable";

const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};

const DeliveryQuoteProductContainer = ({}) => {
  return (
    <div>
      <div className="flex justify-between">
        <div>
          <div className="flex items-center gap-3">
            <p className="text-xl font-bold ">Orders ID: #6743</p>
            <Select
              defaultValue="pending"
              style={{ width: 120, border: "none" }}
              className=""
              onChange={handleChange}
              options={[
                { value: "pending", label: "Pending" },
                { value: "processing", label: "Processing" },
                { value: "delivered", label: "Delivered" },
              ]}
            />
          </div>
          <div className=" flex items-center gap-3 mt-3">
            <LuCalendarDays className=" w-6 h-6" />
            <p className=" text-md">Feb 16,2022</p>
          </div>
          <p className="text-xl font-bold mt-4">View delivery status</p>
        </div>
        <div className="flex gap-3">
          <CiUser className="w-12 h-12 rounded-md bg-primaryBlack text-parimaryWhite py-2 px-2" />

          <div>
            <h2 className="text-xl font-bold mb-3">Retailer </h2>
            <p className=" mb-2">Full Name: Emon</p>
            <p className=" mb-2">Email: emon@gmail.com</p>
            <p className=" mb-2">PHone: +545412110</p>
            <p className=" mb-2">Address: Keraniganj, Dhaka</p>
          </div>
        </div>
      </div>

      {/* order Products Table */}
      <div className="mt-10">
        <DeliveryQuoteProductTable></DeliveryQuoteProductTable>
      </div>
    </div>
  );
};

export default DeliveryQuoteProductContainer;
