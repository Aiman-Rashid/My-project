// src/routes/AppRoutes.jsx
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import ForgotPassword from '../pages/ForgotPassword';
import ResetPassword from '../pages/ResetPassword';
import Register from "../pages/Register";
import SelectProblem from '../pages/SelectProblem';
import Articulation from '../pages/Articulation';
import ArticulationIntro from '../pages/ArticulationIntro';
import SoundIntroPage from '../pages/SoundIntroPage'; 
import PSoundAGame from '../pages/Sounds/PSoundAGame';
<<<<<<< HEAD

=======
>>>>>>> 1967140506b0c5d100064ccbdfe4951b3413ce5b
function AppRoutes() {
  return (
    <Routes>
       {/* main routes */}
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgetPassword" element={<ForgotPassword />} />
      <Route path="/resetPassword" element={<ResetPassword />} />
      <Route path="/register" element={<Register />} />
      <Route path="/selectProblem" element={<SelectProblem/>} />
      {/* Articulation routes  */}
      <Route path="/Articulation" element={<Articulation />} />
      <Route path="/ArticulationIntro" element={<ArticulationIntro />} />
      <Route path="/ArticulationGame/:soundId" element={<SoundIntroPage />} />
      <Route path="/ArticulationGame/partice/:soundId" element={<PSoundAGame />} />
<<<<<<< HEAD
    
=======
>>>>>>> 1967140506b0c5d100064ccbdfe4951b3413ce5b
    </Routes>
  );
}

export default AppRoutes;
