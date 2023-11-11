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
import BlogPosts from "./pages/blog/BlogPosts";
import LinksPage from "./pages/links/LinksPage";
import { Routes, Route } from "react-router-dom";

import Automaton from "./pages/automata/Automaton"
import FaqPage from "./pages/faq/FaqPage";
import BackstoryPage from "./pages/backstory/BackstoryPage"
import EmoryExperience from "./pages/emory/EmoryExperience"
import LettersPage from "./pages/letters/LettersPage";

import BmiPage from "./pages/bmi/BmiPage";
import ChartsPage from "./pages/chartjs/ChartsPage";


function App() {

  return (
    <>

      <NavBar />



      <div className="container ">
        {/* <Component /> */}

        <Routes>
          {/* <Route path="/" element={<HomePage />}></Route> */}


          {/* <Route path="/" element={<HomePage />}></Route> */}

          <Route path="/" element={<LinksPage />}></Route>

          <Route path="/adhd" element={<AdhdPage />}></Route>


          {/* <Route path="/chartjs" element={<BmiPage />}></Route> */}
          <Route path="/chartjs" element={<ChartsPage />}></Route>

          <Route path="/backstory" element={<BackstoryPage />}></Route>

          <Route path="/my-emory-experience" element={<EmoryExperience />}></Route>

          <Route path="/faq" element={<FaqPage />}></Route>

          {/* <Route path="/theory" element={<Theory />}></Route> */}
          <Route path="/sparc" element={<Sparc2016 />}></Route>
          <Route path="/service" element={<ServicePage />}></Route>
          <Route path="/etbd" element={<EtbdPage />}></Route>
          {/* <Route path="/blog" element={<BlogPosts />}></Route> */}
          <Route path="/letters" element={<LettersPage />}></Route>

          {/* <Route path="/links" element={<LinksPage />}></Route> */}
          {/* <Route path="/imperfect-automata" element={<Automaton />}></Route> */}

        </Routes>

      </div>


    </>
  );
}

export default App;
