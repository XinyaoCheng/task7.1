
import Homepage from "./homepage/homepage";
import LoginForm from "./login/login";
import SignForm from "./login/signup";
import { Routes,Route } from "react-router-dom";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage/>}></Route>
        <Route path="/login" element={<LoginForm/>}></Route>
        <Route path="/signup" element={<SignForm/>}></Route>
      </Routes>
    </div>
  );
}
