import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Typography,
} from "@mui/material";
import "../styles/FluencyExercisesPage.css";

export default function FluencyExercisesPage() {
  const navigate = useNavigate();

  // Your original exercises content
  const exercises = [
    {
      title: "Turtle Talk",
      description: "Speak slowly like a turtle to practice calm, smooth speech.",
      action: () => navigate("/turtle-talk"),
    },
    {
      title: "Breathing Practice",
      description: "Take a deep breath and exhale while saying a short word or sentence.",
      action: () => navigate("/breathing-practice"),
    },
    {
      title: "Pause and Plan",
      description: "Use short pauses between phrases. Practice slow talking with breaks.",
      action: () => navigate("/pause-and-plan"),
    },
    {
      title: "Mirror Speaking",
      description: "Speak in front of a mirror to see how your mouth moves.",
      action: () => navigate("/mirror-speaking"),
    },
  
  ];

  return (
    <div className="fluency-page-container">
      <Typography variant="h2" className="page-title" gutterBottom>
        Stuttering (Fluency Disorder) Exercises
      </Typography>

      <div className="content-container">
        {/* Left side: Cartoon character pointing to exercises */}
        <div className="character-container">
          <div className="pointing-character">
            <img src="/src/assets/img/another.jpg" alt="Cartoon boy" className="character-image" />
          </div>
        </div>

        {/* Right side: Exercise list using the strategy styling */}
        <div className="strategies-container">
          {exercises.map((exercise, index) => (
            <div 
              key={index} 
              className="strategy-item"
              onClick={exercise.action}
            >
              <div className="strategy-number">{index + 1}</div>
              <div className="strategy-content">
                <div className="strategy-title">{exercise.title}</div>
                <div className="strategy-description">{exercise.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}