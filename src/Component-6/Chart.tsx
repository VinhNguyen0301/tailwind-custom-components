import React from "react";
import Pagination from "./Pagination";
import Map from "./Map";
import { barChartDataDailyTraffic } from "./variables/charts";
import { barChartOptionsDailyTraffic } from "./variables/charts";
import BarChart from "./BarChart/BarChart";
import TabsButton from "./TabsButton";

const Charts = () => {
  return (
    <div className="w-full rounded-lg bg-[#EFF0F1] p-16 shadow-lg">
      <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2">
        <div className="rounded-3xl bg-white p-6">
          <div style={{ height: "400px" }}>
            <BarChart
              chartData={barChartDataDailyTraffic}
              chartOptions={barChartOptionsDailyTraffic}
            />
          </div>
          <TabsButton />

          <div className="flex pt-6">
            <p className="grow text-center font-popi text-2xl font-medium">
              Product Transactions Chart
            </p>
          </div>
        </div>
        <div className="rounded-3xl bg-white p-6">
          <div style={{ height: "400px" }}>
            <Map />
          </div>
          <TabsButton />

          <div className="flex pt-6">
            <p className="grow text-center font-popi text-2xl font-medium">
              Product Volume by Country
            </p>
          </div>
        </div>
      </div>
      <div className="mt-6 flex gap-2">
        <div className="relative grow rounded-full border-2 border-gray-300">
          <input
            className=" mr-2  w-full rounded-full border-gray-300 px-4  py-3 pl-10"
            type="text"
            name="search"
            placeholder="Filter by product name"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="absolute right-3 top-3.5 h-5 w-5 text-gray-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </div>
      </div>
      <div className="mt-6 flex gap-2">
        <table className="w-full border-collapse bg-white shadow-lg">
          <tr>
            <th className="border bg-blue-100 px-8 py-4 text-left">Company</th>
            <th className="border bg-blue-100 px-8 py-4 text-left">Contact</th>
            <th className="border bg-blue-100 px-8 py-4 text-left">Country</th>
            <th className="border bg-blue-100 px-8 py-4 text-left">Column 4</th>
            <th className="border bg-blue-100 px-8 py-4 text-left">Column 5</th>
            <th className="border bg-blue-100 px-8 py-4 text-left">Column 6</th>
          </tr>
          <tr className="hover:bg-gray-50 focus:bg-gray-300 active:bg-red-200">
            <td className="border px-8 py-4">Alfreds Futterkiste</td>
            <td className="border px-8 py-4">Dante Sparks</td>
            <td className="border px-8 py-4">Italy</td>
            <td className="border px-8 py-4">Alfreds Futterkiste</td>
            <td className="border px-8 py-4">Dante Sparks</td>
            <td className="border px-8 py-4">Italy</td>
          </tr>
          <tr className="hover:bg-gray-50 focus:bg-gray-300 active:bg-red-200">
            <td className="border px-8 py-4">Centro comercial Moctezuma</td>
            <td className="border px-8 py-4">Neal Garrison</td>
            <td className="border px-8 py-4">Spain</td>
            <td className="border px-8 py-4">Alfreds Futterkiste</td>
            <td className="border px-8 py-4">Dante Sparks</td>
            <td className="border px-8 py-4">Italy</td>
          </tr>
          <tr className="hover:bg-gray-50 focus:bg-gray-300 active:bg-red-200">
            <td className="border px-8 py-4">Ernst Handel</td>
            <td className="border px-8 py-4">Maggie O'Neill</td>
            <td className="border px-8 py-4">Austria</td>
            <td className="border px-8 py-4">Alfreds Futterkiste</td>
            <td className="border px-8 py-4">Dante Sparks</td>
            <td className="border px-8 py-4">Italy</td>
          </tr>
          <tr className="hover:bg-gray-50 focus:bg-gray-300 active:bg-red-200">
            <td className="border px-8 py-4">Ernst Handel</td>
            <td className="border px-8 py-4">Maggie O'Neill</td>
            <td className="border px-8 py-4">Austria</td>
            <td className="border px-8 py-4">Alfreds Futterkiste</td>
            <td className="border px-8 py-4">Dante Sparks</td>
            <td className="border px-8 py-4">Italy</td>
          </tr>
        </table>
      </div>
      <div className="gap-2">
        <Pagination />
      </div>
    </div>
  );
};

export default Charts;
