import * as React from "react";
import { Card, CardContent, CardActions, Button, Typography, Grid, CardMedia } from "@mui/material";
import { Link } from "react-router-dom";
import { useState } from "react";
import Lottie from "lottie-react";
import animationData from "../assets/Animation.json";
import articulationImage from "../assets/img/articulation.png";
import stutteringProblem from "../assets/img/stutteringProblem.jpg";
import { speakText } from "../utils/tts"; 
import "../styles/SelectProblem.css"; 
const problems = [
  {
    title: "Articulation Disorders",
description:
  "Helps kids learn how to say sounds correctly, like \"s\", \"r\", or \"th\". If your child says \"wabbit\" instead of \"rabbit\" or \"thun\" instead of \"sun,\" this is the right place to start .💫",
image: articulationImage,
path: "/Articulation",
path1:"/ArticulationIntro"

  },
  {
    title: "Language Disorders",
    description:
      "Activities to build vocabulary and sentence skills. If your child struggles to understand instructions or express thoughts, this is the right choice.",
    image: articulationImage,
    path: "/language",
  },
  {
    title: "Stuttering (Fluency Disorders)",
    description:
      "Exercises for smoother, more confident speech. If your child repeats sounds or gets stuck on words, like saying 'b-b-ball,' this section can help.",
    image: stutteringProblem,
    path: "/fluency",
  },
];

export default function SelectProblemPage() {
  const [hasSpoken, setHasSpoken] = useState(false);

  const handleAnimationClick = () => {
    if (!hasSpoken) {
      speakText("Hi! Are you confused? Let me help you select a problem.");
      setHasSpoken(true);
    }
  };

  return (
    <>
      <div className="select-problem-container">
        <Typography variant="h4" gutterBottom>
          Select a Speech Challenge
        </Typography>
        <Grid container spacing={4} justifyContent="center" className="grid-container">
          {problems.map((problem, index) => (
            <Grid item key={index} xs={12} sm={6} md={4} className="grid-item">
              <Card className="card">
                <CardMedia
                  component="img"
                  height="160"
                  image={problem.image}
                  alt={problem.title}
                  className="card-media"
                />
                <CardContent>
                  <Typography gutterBottom variant="h6">
                    {problem.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {problem.description}
                  </Typography>
                </CardContent>
                <CardActions style={{ padding: "0 5rem 1rem" }}>
                <Link to={problem.path1}>
                  <Button size="small"  >
                  Learn More
                  </Button>
                  </Link>
                  <Link to={problem.path}>
                    <Button className="btn-primary">
                      Start
                    </Button>
                  </Link>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>

  
    </>
  );
}
