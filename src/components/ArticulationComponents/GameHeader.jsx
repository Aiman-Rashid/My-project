import React from "react";
import { LinearProgress } from "@mui/material";
import TipDisplay from "./TipDisplay";

const GameHeader = ({ title, subtitle, progress, currentTip, onCloseTip }) => (
  <>
    <h2 className="title">{title}</h2>
    <p className="subtitle">{subtitle}</p>
    <div className="progress-and-tip">
      <LinearProgress
        variant="determinate"
        value={progress}
        className="progress-bar"
      />
      {currentTip && <TipDisplay tip={currentTip} onClose={onCloseTip} />}
    </div>
  </>
);

export default GameHeader;