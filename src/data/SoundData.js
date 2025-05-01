// src/data/soundData.js

import pAnimation from "../assets/ballon.json";


const SoundData = {
    p: {
      id: "p",
      title: "Let's learn the P sound!",
      subtitle: "P is a lip sound! ",
      animationData: pAnimation,
      voiceText: "Let's learn the P sound!",
      videoSrc: "/assets/video/PSound.mp4",
      nextRoute: "/ArticulationGame/partice/p",
       backgroundImage: "/assets/img/PSoundBg.png",
      wordsWithEmojis: [
        // { word: "pop", emoji: "🎈" },
        // { word: "pen", emoji: "🖊️" },
        // { word: "paw", emoji: "🐾" },
        { word: "pot", emoji: "🍲" },
        { word: "mama", emoji: "🎈" },
        { word: "nice", emoji: "🖊️" },
        // { word: "mama", emoji: "🐾" },
        // { word: "mama", emoji: "🍲" },
      
      ]
      
    },
  };
  


export default SoundData;
