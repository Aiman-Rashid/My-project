import * as React from "react";
import { Card, CardContent, CardActions, Button, Typography, Grid, CardMedia } from "@mui/material";
import { Link } from "react-router-dom";
import articulationImage from "../assets/img/articulation.png";
import stutteringProblem from "../assets/img/stutteringProblem.jpg";
import "../styles/SelectProblem.css";

const problems = [
  {
    title: "Articulation Disorders",
    description: "Helps kids learn to say sounds correctly, like \"s\", \"r\", or \"th\". If your child says \"wabbit\" instead of \"rabbit\", this is the right place to start. 💫",
    image: articulationImage,
    path: "/Articulation",
    learnMorePath: "/ArticulationIntro"
  },
  {
    title: "Stuttering (Fluency Disorders)",
    description: "Exercises for smoother, more confident speech. If your child repeats sounds like 'b-b-ball', this section can help them.",
    image: stutteringProblem,
    path: "/fluency",
    learnMorePath: "/fluency-intro"
  },
];

export default function SelectProblemPage() {
  const handleStartClick = (path) => {
    window.location.href = path;
  };

  return (
    <div className="select-problem-container">
      <Typography variant="h3" gutterBottom className="SelectProblemHeading">
        SELECT A SPEECH CHALLENGE
      </Typography>
      <h3 className="SelectProblemHeading">
        Let's Make Speech Fun! ✨
      </h3>

      <Grid container spacing={4} justifyContent="center" className="grid-container">
        {problems.map((problem, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} className="grid-item">
            <Card className="card" elevation={3}>
              <CardMedia
                component="img"
                height="160"
                image={problem.image}
                alt={problem.title}
                className="card-media"
              />
              <CardContent>
                <Typography gutterBottom variant="h6" className="Card-heading-SP">
                  {problem.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {problem.description}
                </Typography>
              </CardContent>
              <CardActions className="card-actions">
                <Link to={problem.learnMorePath} style={{ textDecoration: 'none' }}>
                  <Button size="small" className="btn-secondary">
                    Learn More
                  </Button>
                </Link>
                <Button 
                  size="small" 
                  className="btn-primary"
                  onClick={() => handleStartClick(problem.path)}
                >
                  Start
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}