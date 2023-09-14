import "./styles.css";

import NavHeader from './NavHeader';
import AutoCarous from "./AutoCarousels";
import Developers from "./Developers";
import Customers from "./Customers";
import Subscribe from "./Subscribe";
import Footer from "./Footer";


export default function Homepage() {
  return (
    <div className="App">
    <NavHeader/>
    <AutoCarous/>
    <Developers/>
    <Customers/>
    <Subscribe/>
    <Footer/>
    </div>
  );
}
