import React from "react";
import Header from "./components/header";
import Nav from "./components/nav";
import "./index.css"
// import SeeMore from "./components/seeMore.jsx"; 
import High from "./components/high";
import Pictures from "./components/pictures";
import Faq from "./components/faq";
import Service from "./components/service";
import Ceoquote from "./components/ceoquote";
import Ceoabout from "./components/ceoabout";
import Contact from "./components/contact";
import Footer from "./components/footer"
import Login from "./components/login"
import Signup from "./components/signup"
import {BrowserRouter as Router, Route,Switch} from "react-router-dom"
import Product from "./components/product";
function App() {
  return (
    <div className="App">
      <h3 className="worldwide">WORLD WIDE DELIVERY</h3>
      <Router>
      <Nav/>
  <Route>
<Route path="/" element={<Header/>}/>
 </Route>
{/* <Routes>
 <Route path="/" element={<SeeMore/>}/>
</Routes> */}
      
    <Route>
      <Route exact path="/" element={  <High/>}/>
    </Route>
    <Route exact path="/login">
    <Login/>
    </Route>
    <Route exact path="/signup">
    <SignUp/>
    </Route>
      <Pictures/>
      <Faq/>
      <Route>
        <Route exact path="/" element={<Service/>}/>
      </Route>
      <Ceoquote/>
      <Ceoabout/>
      <Route>
        <Route exact path="/" element={<Contact />}/>
      </Route>
      <Footer/>
      </Router>
    </div>
  );
}

export default App;
