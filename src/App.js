
import Homepage from "./homepage/homepage";
import LoginForm from "./login/login";
import SignForm from "./login/signup";
import FindDevs from "./finddevs/finddevs";
import { Routes,Route } from "react-router-dom";
import FindJobs from "./findjobs/findjobs";
import Subscribe from "./subscribe/subscribe";
import Pay from "./payment/pay";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage/>}></Route>
        <Route path="/login" element={<LoginForm/>}></Route>
        <Route path="/signup" element={<SignForm/>}></Route>
        <Route path="/finddevs" element={<FindDevs/>}></Route>
        <Route path="/findjobs" element={<FindJobs/>}></Route>
        <Route path="/subscribe" element={<Subscribe/>}></Route>
        <Route path="/pay/:price" element={<Pay/>}></Route>
      </Routes>
    </div>
  );
}
