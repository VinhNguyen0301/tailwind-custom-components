import ConnectWallet from "./Button-Connect-Wallet/ConnectWallet";
import UserProfile from "./Component-1/UserProfile";
import JobList from "./Component-2/JobList";
import Collections from "./Component-3/Collections";
import ReviewForm from "./Component-4/ReviewForm";
import UserList from "./Component-5/UserList";
import Charts from "./Component-6/Chart";
import Animation from "./Component-7/Animation";

export const routes = [
  { path: '/', element: <div>Select a Custom Component</div> },
  { path: '/joblist', element: <JobList /> },
  { path: '/userprofile', element: <UserProfile /> },
  { path: '/collection', element: <Collections /> },
  { path: '/reviewform', element: <ReviewForm /> },
  { path: '/userlist', element: <UserList /> },
  { path: '/chart', element: <Charts /> },
  { path: '/animation', element: <Animation /> },
  { path: '/connectwallet', element: <ConnectWallet /> },

];
