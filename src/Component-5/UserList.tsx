
const UserList = () => {
  return (
    <div className="min-w-[40rem] rounded-sm bg-white p-16 shadow">
      <h1 className="font-meri text-3xl font-black">User</h1>
      <div className="mt-6 flex">
        <div>
          <div className="relative grow  rounded-md border-2 border-gray-300">
            <input
              className=" mr-2  w-full px-4  py-3 pl-10"
              type="text"
              name="search"
              placeholder="Search User"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="absolute left-3 top-3.5 h-5 w-5 text-gray-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserList;
