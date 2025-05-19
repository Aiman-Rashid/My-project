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
import FluencyIntro from '../pages/FluencyIntro';
import SoundIntroPage from '../pages/SoundIntroPage'; 
import PSoundAGame from '../pages/Sounds/PSoundAGame';
import FluencyExercisesPage from "../pages/FluencyExercisesPage";
import TurtleTalkPage from "../pages/TurtleTalkPage";
import BreathingPracticePage from "../pages/BreathingPracticePage";
import PauseAndPlanPage from "../pages/PauseAndPlanPage"; 
import MirrorSpeakingPage from "../pages/MirrorSpeakingPage";
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
      <Route path="/FluencyIntro" element={<FluencyIntro />} />
      <Route path="/ArticulationGame/:soundId" element={<SoundIntroPage />} />
      <Route path="/ArticulationGame/partice/:soundId" element={<PSoundAGame />} />
      



      <Route path="/fluency" element={<FluencyExercisesPage />} />
      <Route path="/turtle-talk" element={<TurtleTalkPage />} />
      <Route path="/breathing-practice" element={<BreathingPracticePage />} />
      <Route path="/pause-and-plan" element={<PauseAndPlanPage />} /> {/* ✅ */}
      <Route path="/mirror-speaking" element={<MirrorSpeakingPage />} />
    </Routes>
  );
}

export default AppRoutes;
