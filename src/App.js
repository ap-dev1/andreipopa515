// SOURCE LINK: WEB DEV SIMPLIFIED
// How to create a Navbar in React with Routing
// duration: 19:16

import NavBar from "./NavBar";
import Theory from "./pages/theory/Popa2019";
import Sparc2016 from "./pages/sparc/Sparc2016";
import HomePage from "./pages/home/HomePage";
import ServicePage from "./pages/service/ServicePage";
import AdhdPage from "./pages/adhd/AdhdPage";
import EtbdPage from "./pages/etbd/EtbdPage";

import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
      <NavBar />

      <div className="container">
        {/* <Component /> */}

        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          {/* <Route path="/adhd" element={<AdhdPage />}></Route> */}

          <Route path="/theory" element={<Theory />}></Route>
          <Route path="/sparc" element={<Sparc2016 />}></Route>
          <Route path="/service" element={<ServicePage />}></Route>
          <Route path="/etbd" element={<EtbdPage />}></Route>


        </Routes>

      </div>


    </>
  );
}

export default App;
