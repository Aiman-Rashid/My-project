import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Typography,
  useMediaQuery,
  useTheme,
  Box,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import "../styles/FluencyExercisesPage.css";
import {fluencyExercisesTypeData,fluencyExercisesTypeDataUrdu} from "../data/fluencyExercisesTypeData";


export default function FluencyExercisesPage() {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const { i18n } = useTranslation();
  const isUrdu = i18n.language === "ur";

  const exercises = isUrdu ? fluencyExercisesTypeDataUrdu : fluencyExercisesTypeData;

  return (
    <Box 
      className={`fluency-page-container`} 
    >
      <Typography 
        variant={isMobile ? "h4" : "h3"} 
        className="page-title" 
        gutterBottom
        sx={{ 
          px: 2,
          textAlign: 'center',
          wordBreak: 'break-word',
          color: isUrdu ? "#2e7d32" : "primary.main"
        }}
      >
        {isUrdu ? "لکنت کی مشقیں" : "STUTTERING EXERCISES"}
      </Typography>

      <Box className="content-container">
        {!isMobile && (
          <Box className="character-container">
            <Box className="pointing-character">
              <img 
                src="assets/img/Boy.png" 
                alt="Cartoon boy" 
                className="character-image" 
                style={{ 
                  maxWidth: '100%',
                  height: 'auto',
                  objectFit: 'contain'
                }}
              />
            </Box>
          </Box>
        )}

        <Box className="strategies-container">
          {exercises.map((exercise, index) => (
            <Box 
              key={index} 
              className="strategy-item"
              onClick={() => navigate(exercise.path)}
              sx={{
                width: '100%',
                maxWidth: '600px',
                mx: 'auto',
                textAlign: isUrdu ? "right" : "left",
                flexDirection:isUrdu?"row-reverse":"row",
                
              }}
            >
              <Box className="strategy-number">{index + 1}</Box>
              <Box className="strategy-content">
                <Typography 
                  variant="h6" 
                  className="strategy-title" 
                  sx={{ fontWeight: 600 }}
                >
                  {exercise.title}
                </Typography>
                <Typography 
                  variant="body2" 
                  className="strategy-description"
                >
                  {exercise.description}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
