import "./styles.css";

import NavHeader from './NavHeader';
import AutoCarous from "./AutoCarousels";
import Developers from "./Developers";
import Customers from "./Customers";
import SubscribeEmail from "./Subscribe_email";
import Footer from "./Footer";


export default function Homepage() {
  return (
    <div className="App">
    <NavHeader/>
    <AutoCarous/>
    <Developers/>
    <Customers/>
    <SubscribeEmail/>
    <Footer/>
    </div>
  );
}
