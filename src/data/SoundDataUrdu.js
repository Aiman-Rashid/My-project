// src/data/urduSoundData.js
import UrduPenguinAni from "../assets/urdu/animations/UrduPenguinAnimation.json";
import UrduPenguinImg from "../assets/urdu/images/UrduPenguinImage.png";
import UrduBalloonAni from "../assets/urdu/animations/UrduBalloonAnimation.json";
import UrduBalloonImg from "../assets/urdu/images/UrduBalloonImage.png";
import UrduTreasureAni from "../assets/urdu/animations/UrduTreasureAnimation.json";
import UrduTreasureImg from "../assets/urdu/images/UrduTreasureImage.png";
import UrduPopSound from "/assets/urdu/sounds/pop.mp3";

// Urdu consonant videos and backgrounds
import PSoundVideo from "/assets/urdu/video/PSound.mp4";
import BSoundVideo from "/assets/urdu/video/BSound.mp4";
import MSoundVideo from "/assets/urdu/video/MSound.mp4";

const UrduSoundData = {
  پ: {
    id: "پ",
    category: "green",
    title: "پ کی آواز سیکھیں! 🎤",
    subtitle: "ہونٹوں کو پیار سے ملائیں جیسے چوم رہے ہوں! 💋",
    voiceText: "آؤ پ کی آواز سیکھیں!",
    videoSrc: PSoundVideo,
    nextRoute: "/ArticulationGame/partice/پ",
    backgroundImage: "/assets/urdu/img/green_bg.png",
    sound: UrduPopSound,
    
    level1: {
      animation: UrduBalloonAni,
      basket_img: UrduBalloonImg,
      exercises: [
        { 
          word: "پ پ", 
          emoji: "💋",  
          tip: "ہونٹوں کو ملائیں اور کہیں 'پ...پ' جیسے بلبلہ پھٹ رہا ہو 🎈" 
        },
        { 
          word: "پ پ پ", 
          emoji: "🫧",    
          tip: "ہونٹ کھول کر کہیں 'پ پ پ' جیسے کئی بلبلے پھٹ رہے ہوں 🎯" 
        }
      ]
    },
    level2: {
      animation: UrduPenguinAni,
      basket_img: UrduPenguinImg,
      exercises: [
        { 
          word: "پا پا", 
          emoji: "👶",  
          tip: "بچے کی طرح کہیں 'پا' - منہ کھول کر ہونٹ ملائیں 😮" 
        },
        { 
          word: "پو پو", 
          emoji: "🦜", 
          tip: "طوطے کی طرح گول ہونٹ بنا کر 'پو' کہیں 💨" 
        }
      ]
    },
    level3: {
      animation: UrduTreasureAni,
      basket_img: UrduTreasureImg,
      exercises: [
        { 
          word: "پانی", 
          emoji: "💧",  
          tip: "پ سے شروع کریں: 'پا-نی' پہلے پ پر زور دیں 💥" 
        },
        { 
          word: "پھول", 
          emoji: "🌸",   
          tip: "درمیان میں پ کی آواز: 'پھ-ول' 🌸" 
        }
      ]
    }
  },

  ب: {
    id: "ب",
    category: "green",
    title: "ب کی آواز سیکھیں! 🎤",
    subtitle: "ہونٹ ملائیں اور گنگنائیں جیسے بھنورا ہو! 🐝",
    voiceText: "آؤ ب کی آواز سیکھیں!",
    videoSrc: BSoundVideo,
    nextRoute: "/ArticulationGame/partice/ب",
    backgroundImage: "/assets/urdu/img/green_bg.png",
    sound: UrduPopSound,
    
    level1: {
      animation: UrduBalloonAni,
      basket_img: UrduBalloonImg,
      exercises: [
        { 
          word: "ب ب", 
          emoji: "🐝",  
          tip: "ہونٹ ملائیں اور 'ب...ب' کہیں جیسے بھنورا گنگنا رہا ہو 🐝" 
        }
      ]
    },
    level2: {
      animation: UrduPenguinAni,
      basket_img: UrduPenguinImg,
      exercises: [
        { 
          word: "با با", 
          emoji: "👨",  
          tip: "ابا جی کو بلاتے ہوئے 'با...با' کہیں 👨" 
        }
      ]
    },
    level3: {
      animation: UrduTreasureAni,
      basket_img: UrduTreasureImg,
      exercises: [
        { 
          word: "بال", 
          emoji: "⚽",  
          tip: "ب سے شروع کریں: 'با-ل' ⚽" 
        },
        { 
          word: "کتاب", 
          emoji: "📖",   
          tip: "آخر میں ب کی آواز: 'کتا-ب' 📖" 
        }
      ]
    }
  },

  // Add other consonants following the same pattern
  ت: {
    id: "ت",
    category: "yellow",
    title: "ت کی آواز سیکھیں! 🎤",
    subtitle: "زبان کی نوک اوپر لے جائیں جیسے گھنٹی بجا رہے ہوں 🔔",
    voiceText: "آؤ ت کی آواز سیکھیں!",
    videoSrc: "/assets/urdu/video/TSound.mp4",
    nextRoute: "/ArticulationGame/partice/ت",
    backgroundImage: "/assets/urdu/img/yellow_bg.png",
    sound: UrduPopSound,
    
    level1: {
      animation: UrduBalloonAni,
      basket_img: UrduBalloonImg,
      exercises: [
        { 
          word: "ت ت", 
          emoji: "👅",  
          tip: "زبان کی نوک اوپر لے جائیں اور 'ت...ت' کہیں 🔔" 
        }
      ]
    },
    level2: {
      animation: UrduPenguinAni,
      basket_img: UrduPenguinImg,
      exercises: [
        { 
          word: "تا تا", 
          emoji: "👣",  
          tip: "چلتے ہوئے 'تا...تا' کہیں 👣" 
        }
      ]
    },
    level3: {
      animation: UrduTreasureAni,
      basket_img: UrduTreasureImg,
      exercises: [
        { 
          word: "تارا", 
          emoji: "⭐",  
          tip: "ت سے شروع کریں: 'تا-را' ⭐" 
        }
      ]
    }
  },

  // Add more consonants following the same pattern...
};

export default UrduSoundData;