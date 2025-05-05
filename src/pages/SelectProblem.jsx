import * as React from "react";
import { Card, CardContent, CardActions, Button, Typography, Grid, CardMedia, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import { useState } from "react";
import Lottie from "lottie-react";
import animationData from "../assets/Animation.json";
import articulationImage from "../assets/img/articulation.png";
import stutteringProblem from "../assets/img/stutteringProblem.jpg";
import { speakText } from "../utils/tts"; 
import "../styles/SelectProblem.css";

const consonantSections = [
  {
    age: "2–3 Years",
    minAge: 2,
    maxAge: 3,
    sections: [
      { label: "🟢 Green Light (Lips & Easy Sounds)", sounds: ["p", "b", "m", "h", "w"] },
      { label: "🟡 Yellow Light (Tongue Tip)", sounds: ["t", "d", "n"] },
      { label: "🔴 Red Light (Back Sounds)", sounds: ["k", "g"] }
    ]
  },
  {
    age: "4 Years",
    minAge: 4,
    maxAge: 4,
    sections: [
      { label: "🟢 Green Light (Lips)", sounds: ["f", "v"] },
      { label: "🟡 Yellow Light (Tongue Tip)", sounds: ["s", "z"] },
      { label: "🔴 Red Light (Harder Tongue Sounds)", sounds: ["sh", "j", "ch"] }
    ]
  },
  {
    age: "5–6 Years",
    minAge: 5,
    maxAge: 6,
    sections: [
      { label: "🔴 Red Light (Advanced Sounds)", sounds: ["th"] }
    ]
  },
  {
    age: "6-7 Years",
    minAge: 6,
    maxAge: 7,
    sections: [
      { label: "🔴 Red Light (Not for home practice)", sounds: ["R", "L"] }
    ]
  }
];

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
  const [openAgeDialog, setOpenAgeDialog] = useState(false);
  const [openSoundDialog, setOpenSoundDialog] = useState(false);
  const [age, setAge] = useState("");
  const [selectedPath, setSelectedPath] = useState("");
  const [filteredSounds, setFilteredSounds] = useState([]);

  const handleStartClick = (path, title) => {
    if (title === "Articulation Disorders") {
      setSelectedPath(path);
      setOpenAgeDialog(true);
    } else {
      window.location.href = path;
    }
  };

  const handleAgeSubmit = () => {
    if (age) {
      localStorage.setItem("childAge", age);
      setOpenAgeDialog(false);
      
      // Find sounds for the selected age
      const ageNumber = parseInt(age);
      const ageGroup = consonantSections.find(group => 
        ageNumber >= group.minAge && ageNumber <= group.maxAge
      );
      
      if (ageGroup) {
        // Flatten all sounds from all sections
        const sounds = ageGroup.sections.flatMap(section => section.sounds);
        setFilteredSounds(sounds);
        setOpenSoundDialog(true);
      } else {
        // If age doesn't match any group, proceed normally
        window.location.href = selectedPath;
      }
    }
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
                  onClick={() => handleStartClick(problem.path, problem.title)}
                >
                  Start
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Age Selection Dialog */}
      <Dialog open={openAgeDialog} onClose={() => setOpenAgeDialog(false)} className="dialog">
        <DialogTitle>Enter Child's Age</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter the child's age to customize the articulation exercises.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            label="Age (years)"
            type="number"
            fullWidth
            variant="standard"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            inputProps={{ min: 2, max: 12 }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenAgeDialog(false)}>Cancel</Button>
          <Button onClick={handleAgeSubmit} disabled={!age}>Submit</Button>
        </DialogActions>
      </Dialog>

      {/* Sound Selection Dialog */}
   
    </div>
  );
}