import UserProfile from "./Component-1/UserProfile";
import JobList from "./Component-2/JobList";
import Collections from "./Component-3/Collections";
import ReviewForm from "./Component-4/ReviewForm";
import UserList from "./Component-5/UserList";

function App() {
  return (
    <h1 className="flex min-h-screen w-full items-center justify-center bg-[#E6EFFA]">
      {/* <UserProfile /> */}
      {/* <JobList /> */}
      {/* <Collections /> */}
      {/* <ReviewForm /> */}
      <UserList />
    </h1>
  );
}

export default App;
