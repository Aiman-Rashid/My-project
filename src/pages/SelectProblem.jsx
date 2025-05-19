import * as React from "react";
import { 
  Card, 
  CardContent, 
  CardActions, 
  Button, 
  Typography, 
  Grid, 
  CardMedia, 
  Dialog, 
  DialogTitle, 
  DialogContent, 
  DialogContentText, 
  DialogActions, 
  TextField 
} from "@mui/material";
import { Link } from "react-router-dom";
import { useState } from "react";
import articulationImage from "../assets/img/articulation.png";
import articulationURImage from "../assets/img/articulationUR.png";
import stutteringProblem from "../assets/img/stutteringProblem.jpg";
import stutteringProblemUR from "../assets/img/stutteringProblemUR.png";
import { useTranslation } from "react-i18next";
import "../styles/SelectProblem.css";

export default function SelectProblemPage() {
  const { t, i18n } = useTranslation();

  const problems = [
    {
      title: "Articulation Disorders",
      description: "Helps kids learn to say sounds correctly...",
      image: i18n.language === "ur" ? articulationURImage : articulationImage,
      path: "/Articulation",
      learnMorePath: "/ArticulationIntro",
      requiresAge: true,
    },
    {
      title: "Stuttering (Fluency Disorders)",
      description: "Exercises for smoother, more confident speech...",
      image: i18n.language === "ur" ? stutteringProblemUR : stutteringProblem,
      path: "/fluency",
      learnMorePath: "/FluencyIntro",
      requiresAge: false,
    },
  ];

  const [openAgeDialog, setOpenAgeDialog] = useState(false);
  const [age, setAge] = useState("");
  const [selectedPath, setSelectedPath] = useState("");

  const handleStartClick = (path, requiresAge) => {
    if (requiresAge) {
      setSelectedPath(path);
      setOpenAgeDialog(true);
    } else {
      window.location.href = path;
    }
  };

  const handleAgeSubmit = () => {
    if (age && age >= 2 && age <= 12) {
      localStorage.setItem("childAge", age);
      window.location.href = `${selectedPath}?age=${age}`;
    }
  };

  return (
    <div className={`select-problem-container ${i18n.language === "ur" ? "urdu-mode" : ""}`}>
      <Typography variant="h3" gutterBottom className="SelectProblemHeading">
        {t('selectProblem.selectTitle')}
      </Typography>
      <h3 className="SelectProblemHeading">
        {t('selectProblem.subTitle')}!✨
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
                  {t(`selectProblem.problems.${problem.title}.title`)}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {t(`selectProblem.problems.${problem.title}.description`)}
                </Typography>
              </CardContent>
              <CardActions className="card-actions">
                <Link to={problem.learnMorePath} style={{ textDecoration: 'none' }}>
                  <Button size="small" className="btn-secondary">
                    {t('selectProblem.learnMore')}
                  </Button>
                </Link>
                <Button 
                  size="small" 
                  className="btn-primary"
                  onClick={() => handleStartClick(problem.path, problem.requiresAge)}
                >
                  {t('selectProblem.start')}
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Age Dialog */}
      <Dialog 
        open={openAgeDialog} 
        onClose={() => setOpenAgeDialog(false)}
        PaperProps={{
          style: {
            minWidth: "300px",
            maxWidth: "400px",
            padding: "20px",
            borderRadius: "12px"
          }
        }}
      >
        <DialogTitle style={{ textAlign: "center" }}>
          {t('selectProblem.ageDialogTitle')}
        </DialogTitle>
        <DialogContent>
          <DialogContentText style={{ textAlign: "center", marginBottom: "20px" }}>
            {t('selectProblem.ageDialogDescription')}
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            label={t('selectProblem.ageLabel')}
            type="number"
            fullWidth
            variant="outlined"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            inputProps={{ 
              min: 2, 
              max: 12,
              style: { textAlign: "center" }
            }}
            style={{ marginBottom: "10px" }}
          />
        </DialogContent>
        <DialogActions style={{ justifyContent: "center" }}>
          <Button 
            onClick={() => setOpenAgeDialog(false)}
            style={{ marginRight: "10px" }}
          >
            {t('selectProblem.cancel')}
          </Button>
          <Button 
            onClick={handleAgeSubmit} 
            disabled={!age || age < 2 || age > 12}
            variant="contained"
            color="primary"
          >
            {t('selectProblem.continue')}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
