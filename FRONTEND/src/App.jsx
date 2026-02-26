import React from "react";
import Home from "./pages/Home";
import { Routes ,Route} from 'react-router-dom'
import Login from "./pages/Login";
import Services from "./Components/Services/Services";
import AtsHome from "./Ats_optimizer/AtsHome";
import AtsBuildigHome from "./AtsBuilding/AtsBuildigHome";
import About from "./Components/About/About";

const App = () => {
  return (
    <div className="bg-[#d3cfff]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} /> 
        <Route path="/app/service/ats-optimizer" element={<AtsHome />}/>
        <Route path="/app/service/Resume/Building" element={<AtsBuildigHome />}/>
        <Route path="login" element={<Login />} />
        <Route path="/About" element={<About/>} />
        {/* <Route path="" /> */}
      </Routes>


      
    </div>
  );
};

export default App;