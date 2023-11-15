import React from "react";

const JobList: React.FC = () => {
  return (
    <div className="w-[40rem] rounded-md bg-white p-16">
      <div className="flex items-center justify-between">
        <div className="relative">
          <input
            className=" mr-2  w-full rounded-lg  border-gray-300 px-4  py-2 pl-10"
            type="text"
            name="search"
            placeholder="Search for a partime jobs"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="absolute left-3 top-2.5 h-5 w-5 text-gray-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </div>

        <button className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700">
          Search
        </button>
      </div>
    </div>
  );
};

export default JobList;
