"use clinet";
import React from "react";
import { LuCalendarDays } from "react-icons/lu";
import OrderListTable from "./QuotaOrderListTable";



const QuoteManagementContainer = () => {
  const today = new Date().toDateString();
  return (
    <div>
      <div className="flex justify-between mb-9">
        <h1 className="text-2xl font-bold "> Orders List</h1>
        <div className="px-4 py-2 bg-primaryBlack text-parimaryWhite rounded flex items-center gap-2">
          <LuCalendarDays />
          {today}
        </div>
      </div>
      <OrderListTable></OrderListTable>
    </div>
  );
};

export default QuoteManagementContainer;