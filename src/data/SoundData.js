// src/data/soundData.js
import PenguinAni from "../assets/penguin.json";
import PenguinImg from "../assets/img/penguin.png";
import BalloonAni from "../assets/balloon.json";
import BalloonImg from "../assets/img/balloon.png";
import TreasureAni from "../assets/treasure.json";
import TreasureImg from "../assets/img/treasure.png";
import PopSound from "/assets/sounds/pop.mp3";
import birdImg from "../assets/img/bird.png";
import birdAni from "../assets/bird.json";


import PSoundVideo from "/assets/video/PSound.mp4";
import BSoundVideo from "/assets/video/BSound.mp4";
import MSoundVideo from "/assets/video/MSound.mp4";
import HSoundVideo from "/assets/video/HSound.mp4";
import WSoundVideo from "/assets/video/WSound.mp4";
import TSoundVideo from "/assets/video/TSound.mp4";
import DSoundVideo from "/assets/video/DSound.mp4";
import NSoundVideo from "/assets/video/NSound.mp4";
import KSoundVideo from "/assets/video/KSound.mp4";
import GSoundVideo from "/assets/video/GSound.mp4";

import VSoundVideo from "/assets/video/VSound.mp4";
import SSoundVideo from "/assets/video/SSound.mp4";
import ZSoundVideo from "/assets/video/ZSound.mp4";
import FSoundVideo from "/assets/video/FSound.mp4";

import SHSoundVideo from "/assets/video/SHSound.mp4";
import JSoundVideo from "/assets/video/JSound.mp4";
import CHSoundVideo from "/assets/video/CHSound.mp4";
import RSoundVideo from "/assets/video/RSound.mp4";
import THSoundVideo from "/assets/video/THSound.mp4";



import PSoundBg from "/assets/img/bg.png";
import BSoundBg from "/assets/img/bg2.png";
import MSoundBg from "/assets/img/bg1.png";
import HSoundBg from "/assets/img/bg4.png";
import WSoundBg from "/assets/img/bg2.png";
import TSoundBg from "/assets/img/bg5.png";
import DSoundBg from "/assets/img/bg.png";
import NSoundBg from "/assets/img/bg1.png";
import KSoundBg from "/assets/img/bg4.png";
import GSoundBg from "/assets/img/bg2.png";
import FSoundBg from "/assets/img/bg5.png";
import VSoundBg from "/assets/img/bg3.png";
import SSoundBg from "/assets/img/bg1.png";
import ZSoundBg from "/assets/img/bg.png";
import SHSoundBg from "/assets/img/bg2.png";
import JSoundBg from "/assets/img/bg4.png";
import CHSoundBg from "/assets/img/bg3.png";
import THSoundBg from "/assets/img/bg2.png";





const SoundData = {
  p: {
    id: "p",
    category: "green",
    title: "Let's learn the P sound! 🎤",
    subtitle: "Press lips together like kissing! 💋",
    voiceText: "Let's learn the P sound!",
    videoSrc: PSoundVideo,
    nextRoute: "/ArticulationGame/partice/p",
    backgroundImage: PSoundBg,
    sound: PopSound,
    
    // Level 1: Isolation
    level1: {
      animation: BalloonAni,
      basket_img: BalloonImg,
      exercises: [
        { 
          word: "pp", 
          emoji: "💋",  
          tip: "👄 Press lips together like a kiss 💋, then POP 🎈 them open with a puff of air! P...P" 
        },
        { 
          word: "ppp", 
          emoji: "🫧",    
          tip: "👄 Press lips together like a kiss 💋, then POP POP POP 🎯 with a puff of air! P...P..P" 
        }
      ]
    },

    // Level 2: Syllables
    level2: {
      animation: PenguinAni,
      basket_img: PenguinImg,
      exercises: [
        { 
          word: "papa", 
          emoji: "👶",  
          tip: "👶 Say 'PA' like a baby - open wide 😮 then pop your lips! 💥" 
        },
        { 
          word: "popo", 
          emoji: "🦜", 
          tip: "🦜 Make round lips like a parrot and say 'PO' with a strong P! 💨" 
        },
      

        { 
          word: "pupu", 
          emoji: "🧸",      
          tip: "🧸 Pucker up like kissing a teddy bear 💋 and say 'PUH' with a pop! 💥" 
        }
      ]
    },

    // Level 3: Words
    level3: {
      animation: TreasureAni,
      basket_img: TreasureImg,
      exercises: [
        { 
          word: "puppy", 
          emoji: "🐶",  
          tip: "🐶 Say 'PUH-PUPPY' with two strong P pops 💥💥 at the start!" 
        },
        { 
          word: "apple", 
          emoji: "🍎",   
          tip: "🍎 Say 'AP-PLE' - don't forget the P pop 💥 in the middle!" 
        },
        { 
          word: "cup", 
          emoji: "☕",  
          tip: "☕ Say 'CUP' with a big lip pop 💥 at the end - CU-POP! 🎤" 
        }
      ]
    }
  },
  b: {
    id: "b",
    category: "green",
    title: "Let's learn the B sound! 🎤",
    subtitle: "Press lips together and buzz! 🐝",
    voiceText: "Let's learn the B sound!",
    videoSrc: BSoundVideo,
    nextRoute: "/ArticulationGame/partice/b",
    backgroundImage: BSoundBg,
    sound: PopSound,
    
    level1: {
      animation: BalloonAni,
      basket_img: BalloonImg,
      exercises: [
        { 
          word: "bb", 
          emoji: "🐝",  
          tip: "👄 Press lips together and BUZZ like a bee 🐝! B...B" 
        },
        { 
          word: "bbb", 
          emoji: "🪘",    
          tip: "👄 Press lips together and make a drum sound 🥁! B...B..B" 
        }
      ]
    },
    level2: {
      animation: PenguinAni,
      basket_img: PenguinImg,
      exercises: [
        { 
          word: "baba", 
          emoji: "👶",  
          tip: "👶 Say 'BA' like a baby - lips together then open with a buzz! 🐝" 
        },
        { 
          word: "bobo", 
          emoji: "🐻", 
          tip: "🐻 Say 'BO' like a bear - round lips with a strong B!" 
        },
        { 
          word: "bubu", 
          emoji: "🚌",      
          tip: "🚌 Say 'BU' like a bus horn - strong B sound!" 
        }
      ]
    },
    level3: {
      animation: TreasureAni,
      basket_img: TreasureImg,
      exercises: [
        { 
          word: "baby", 
          emoji: "👶",  
          tip: "👶 Say 'BA-BY' with two strong B buzzes 🐝🐝 at the start!" 
        },
        { 
          word: "bubble", 
          emoji: "🫧",   
          tip: "🫧 Say 'BUB-BLE' - don't forget the B buzz 🐝 in the middle!" 
        },
        { 
          word: "tub", 
          emoji: "🛁",  
          tip: "🛁 Say 'TUB' with a big lip buzz 🐝 at the end - TU-BUZZ!" 
        }
      ]
    }
  },

  // M Sound (same structure)
  m: {
    id: "m",
    category: "green",
    title: "Let's learn the M sound! 🎤",
    subtitle: "Press lips together and hum! 🎵",
    voiceText: "Let's learn the M sound!",
    videoSrc: MSoundVideo,
    nextRoute: "/ArticulationGame/partice/m",
    backgroundImage: MSoundBg,
    sound: PopSound,
    
    level1: {
      animation: BalloonAni,
      basket_img: BalloonImg,
      exercises: [
        { 
          word: "mm", 
          emoji: "🎵",  
          tip: "👄 Press lips together and HUM like music 🎵! M...M" 
        },
        { 
          word: "mmm", 
          emoji: "🍫",    
          tip: "👄 Press lips together and HUM like yummy food 🍫! M...M..M" 
        }
      ]
    },
    level2: {
      animation: PenguinAni,
      basket_img: PenguinImg,
      exercises: [
        { 
          word: "mama", 
          emoji: "👩",  
          tip: "👩 Say 'MA' like calling mom - lips together then hum! 🎵" 
        },
        { 
          word: "momo", 
          emoji: "🐵", 
          tip: "🐵 Say 'MO' like a monkey - round lips with a strong M!" 
        }
      ]
    },
    level3: {
      animation: TreasureAni,
      basket_img: TreasureImg,
      exercises: [
        { 
          word: "mummy", 
          emoji: "👩",  
          tip: "👩 Say 'MOM-MY' with two strong M hums 🎵🎵 at the start!" 
        },
        { 
          word: "hammer", 
          emoji: "🔨",   
          tip: "🔨 Say 'HAM-MER' - don't forget the M hum 🎵 in the middle!" 
        },
        { 
          word: "jam", 
          emoji: "🍓",  
          tip: "🍓 Say 'JAM' with a big lip hum 🎵 at the end - JA-HUMM!" 
        }
      ]
    }
  },

  // H Sound (same structure)
  h: {
    id: "h",
    category: "green",
    title: "Let's learn the H sound! 🎤",
    subtitle: "Breathe out like you're fogging a mirror! ☁️",
    voiceText: "Let's learn the H sound!",
    videoSrc: HSoundVideo,
    nextRoute: "/ArticulationGame/partice/h",
    backgroundImage: HSoundBg,
    sound: PopSound,
    
    level1: {
      animation: BalloonAni,
      basket_img: BalloonImg,
      exercises: [
        { 
          word: "hh", 
          emoji: "☁️",  
          tip: "👄 Open mouth and breathe out like fogging a mirror ☁️! H...H" 
        },
        { 
          word: "hhh", 
          emoji: "♨️",    
          tip: "👄 Breathe out warm air like hot soup ♨️! H...H..H" 
        }
      ]
    },
    level2: {
      animation: PenguinAni,
      basket_img: PenguinImg,
      exercises: [
        { 
          word: "haha", 
          emoji: "😄",  
          tip: "😄 Say 'HA' like laughing - big breath out! ☁️" 
        },
        { 
          word: "hoho", 
          emoji: "🎅", 
          tip: "🎅 Say 'HO' like Santa - round lips with strong H!" 
        }
      ]
    },
    level3: {
      animation: TreasureAni,
      basket_img: TreasureImg,
      exercises: [
        { 
          word: "hello", 
          emoji: "👋",  
          tip: "👋 Say 'HE-LLO' with strong H breath ☁️ at the start!" 
        },
        { 
          word: "house", 
          emoji: "🏠",   
          tip: "🏠 Say 'HOUSE' - don't forget the H breath ☁️ at the start!" 
        },
        { 
          word: "hat", 
          emoji: "🧢",  
          tip: "🧢 Say 'HAT' with a big breath ☁️ at the start - HHHAT!" 
        }
      ]
    }
  },
  // D Sound (Yellow Light - Tongue Tip)
  d: {
    id: "d",
    category: "yellow",
    title: "Let's learn the D sound! 🎤",
    subtitle: "Tap tongue and use your voice! 🎵",
    voiceText: "Let's learn the D sound!",
    videoSrc: DSoundVideo,
    nextRoute: "/ArticulationGame/partice/d",
    backgroundImage: DSoundBg,
    sound: PopSound,
    
    level1: {
      animation: BalloonAni,
      basket_img: BalloonImg,
      exercises: [
        { 
          word: "dd", 
          emoji: "🥁",  
          tip: "👅 Tap tongue behind teeth like a drum 🥁! D...D" 
        },
        { 
          word: "ddd", 
          emoji: "🦯",    
          tip: "👅 Strong tongue taps like walking sticks 🦯! D...D..D" 
        }
      ]
    },
    level2: {
      animation: PenguinAni,
      basket_img: PenguinImg,
      exercises: [
        { 
          word: "dada", 
          emoji: "👨",  
          tip: "👨 Say 'DA' like calling dad - tongue up then down! 👅" 
        },
        { 
          word: "dodo", 
          emoji: "🦤", 
          tip: "🦤 Say 'DO' like a dodo bird - strong tongue tap!" 
        },
        { 
          word: "didi", 
          emoji: "🚲",      
          tip: "🚲 Say 'DI' like riding a bike - light tongue tap!" 
        }
      ]
    },
    level3: {
      animation: TreasureAni,
      basket_img: TreasureImg,
      exercises: [
        { 
          word: "daddy", 
          emoji: "👨",  
          tip: "👨 Say 'DAD-DY' with two tongue taps 👅👅 at the start!" 
        },
        { 
          word: "ladder", 
          emoji: "🪜",   
          tip: "🪜 Say 'LAD-DER' - don't forget the D tongue tap 👅 in the middle!" 
        },
        { 
          word: "bed", 
          emoji: "🛏️",  
          tip: "🛏️ Say 'BED' with a clear tongue tap 👅 at the end - BE-DING!" 
        }
      ]
    }
  },

  // N Sound (Yellow Light - Tongue Tip)
  n: {
    id: "n",
    category: "yellow",
    title: "Let's learn the N sound! 🎤",
    subtitle: "Tongue up and hum through your nose! 👃",
    voiceText: "Let's learn the N sound!",
    videoSrc: NSoundVideo,
    nextRoute: "/ArticulationGame/partice/n",
    backgroundImage: NSoundBg,
    sound: PopSound,
    
    level1: {
      animation: BalloonAni,
      basket_img: BalloonImg,
      exercises: [
        { 
          word: "nn", 
          emoji: "👃",  
          tip: "👅 Tongue up behind teeth, hum through nose 👃! N...N" 
        },
        { 
          word: "nnn", 
          emoji: "🚂",    
          tip: "👅 Hum like a train going 'nnn-nnn' 🚂! N...N..N" 
        }
      ]
    },
    level2: {
      animation: PenguinAni,
      basket_img: PenguinImg,
      exercises: [
        { 
          word: "nana", 
          emoji: "🍌",  
          tip: "🍌 Say 'NA' like banana - tongue up then hum! 👃" 
        },
      
        { 
          word: "nini", 
          emoji: "🛏️",      
          tip: "🛏️ Say 'NI' like night-night - gentle nose hum!" 
        }
      ]
    },
    level3: {
      animation: TreasureAni,
      basket_img: TreasureImg,
      exercises: [
        { 
          word: "nose", 
          emoji: "👃",  
          tip: "👃 Say 'NO-SE' with nose hum 👃 at the start!" 
        },
        { 
          word: "banana", 
          emoji: "🍌",   
          tip: "🍌 Say 'BA-NA-NA' - don't forget the N nose hum 👃 in the middle!" 
        },
        { 
          word: "sun", 
          emoji: "☀️",  
          tip: "☀️ Say 'SUN' with nose hum 👃 at the end - SU-HUMM!" 
        }
      ]
    }
  },
// Continuing from the existing SoundData object...

  // W Sound (Green Light - Lips)
  w: {
    id: "w",
    category: "green",
    title: "Let's learn the W sound! 🎤",
    subtitle: "Make round lips like a whistle! 🎵",
    voiceText: "Let's learn the W sound!",
    videoSrc: WSoundVideo,
    nextRoute: "/ArticulationGame/partice/w",
    backgroundImage: WSoundBg,
    sound: PopSound,
    
    level1: {
      animation: BalloonAni,
      basket_img: BalloonImg,
      exercises: [
        { 
          word: "ww", 
          emoji: "🌀",  
          tip: "👄 Make tight round lips like blowing bubbles 🫧! W...W" 
        },
        { 
          word: "www", 
          emoji: "🚂",    
          tip: "👄 Make round lips like a train whistle 🚂! W...W..W" 
        }
      ]
    },
    level2: {
      animation: PenguinAni,
      basket_img: PenguinImg,
      exercises: [
        { 
          word: "wawa", 
          emoji: "👶",  
          tip: "👶 Say 'WA' like a baby crying - round lips then open! 🌀" 
        },
        { 
          word: "wowo", 
          emoji: "🦉", 
          tip: "🦉 Say 'WO' like an owl - keep lips round the whole time!" 
        },
        { 
          word: "wiwi", 
          emoji: "🐦",      
          tip: "🐦 Say 'WI' like a little bird - lips round then smile!" 
        }
      ]
    },
    level3: {
      animation: TreasureAni,
      basket_img: TreasureImg,
      exercises: [
        { 
          word: "water", 
          emoji: "💧",  
          tip: "💧 Say 'WA-TER' with strong round lips 🌀 at the start!" 
        },
        { 
          word: "window", 
          emoji: "🪟",   
          tip: "🪟 Say 'WIN-DOW' - don't forget the W lip rounding 🌀!" 
        },
        { 
          word: "swim", 
          emoji: "🏊",  
          tip: "🏊 Say 'SWIM' with round lips at the start - SWWWIM!" 
        }
      ]
    }
  },

  // T Sound (Yellow Light - Tongue Tip)
  t: {
    id: "t",
    category: "yellow",
    title: "Let's learn the T sound! 🎤",
    subtitle: "Tap your tongue behind your teeth! 👅",
    voiceText: "Let's learn the T sound!",
    videoSrc: TSoundVideo,
    nextRoute: "/ArticulationGame/partice/t",
    backgroundImage: TSoundBg,
    sound: PopSound,
    
    level1: {
      animation: BalloonAni,
      basket_img: BalloonImg,
      exercises: [
        { 
          word: "tt", 
          emoji: "⏱️",  
          tip: "👅 Tap tongue behind teeth like a clock tick ⏱️! T...T" 
        },
        { 
          word: "ttt", 
          emoji: "🐜",    
          tip: "👅 Quick tongue taps like an ant marching 🐜! T...T..T" 
        }
      ]
    },
    level2: {
      animation: PenguinAni,
      basket_img: PenguinImg,
      exercises: [
        { 
          word: "tata", 
          emoji: "👯",  
          tip: "👯 Say 'TA' like tap dancing - tongue up then down! 👅" 
        },
        { 
          word: "toto", 
          emoji: "🐢", 
          tip: "🐢 Say 'TO' like a slow turtle - strong tongue tap!" 
        },
        { 
          word: "titi", 
          emoji: "🐦",      
          tip: "🐦 Say 'TI' like a quick bird - light tongue tap!" 
        }
      ]
    },
    level3: {
      animation: TreasureAni,
      basket_img: TreasureImg,
      exercises: [
        { 
          word: "turtle", 
          emoji: "🐢",  
          tip: "🐢 Say 'TUR-TLE' with two tongue taps 👅👅 at the start!" 
        },
        { 
          word: "butter", 
          emoji: "🧈",   
          tip: "🧈 Say 'BUT-TER' - don't forget the T tongue tap 👅 in the middle!" 
        },
        { 
          word: "cat", 
          emoji: "🐱",  
          tip: "🐱 Say 'CAT' with a clear tongue tap 👅 at the end - CA-TAP!" 
        }
      ]
    }
  },



  // K Sound (Red Light - Back Sounds)
  k: {
    id: "k",
    category: "red",
    title: "Let's learn the K sound! 🎤",
    subtitle: "Lift back of tongue like coughing! 🤧",
    voiceText: "Let's learn the K sound!",
    videoSrc: KSoundVideo,
    nextRoute: "/ArticulationGame/partice/k",
    backgroundImage: KSoundBg,
    sound: PopSound,
    
    level1: {
      animation: BalloonAni,
      basket_img: BalloonImg,
      exercises: [
        { 
          word: "kk", 
          emoji: "🎬",  
          tip: "👅 Back tongue up like saying 'cut' 🎬! K...K" 
        },
        { 
          word: "kkk", 
          emoji: "🐦",    
          tip: "👅 Quick back taps like a woodpecker 🐦! K...K..K" 
        }
      ]
    },
    level2: {
      animation: PenguinAni,
      basket_img: PenguinImg,
      exercises: [
        { 
          word: "kaka", 
          emoji: "🦜",  
          tip: "🦜 Say 'KA' like a parrot - back tongue up then down! 👅" 
        },
       
        { 
          word: "kiki", 
          emoji: "🔑",      
          tip: "🔑 Say 'KI' like keys jingling - light back tap!" 
        }
      ]
    },
    level3: {
      animation: TreasureAni,
      basket_img: TreasureImg,
      exercises: [
        { 
          word: "cookie", 
          emoji: "🍪",  
          tip: "🍪 Say 'COO-KIE' with two back tongue taps 👅👅!" 
        },
        { 
          word: "pocket", 
          emoji: "👖",   
          tip: "👖 Say 'POCK-ET' - don't forget the K back tap 👅 in the middle!" 
        },
        { 
          word: "duck", 
          emoji: "🦆",  
          tip: "🦆 Say 'DUCK' with a clear back tap 👅 at the end - DU-KICK!" 
        }
      ]
    }
  },

  // G Sound (Red Light - Back Sounds)
  g: {
    id: "g",
    category: "red",
    title: "Let's learn the G sound! 🎤",
    subtitle: "Lift back of tongue with voice! 🎵",
    voiceText: "Let's learn the G sound!",
    videoSrc: GSoundVideo,
    nextRoute: "/ArticulationGame/partice/g",
    backgroundImage: GSoundBg,
    sound: PopSound,
    
    level1: {
      animation: BalloonAni,
      basket_img: BalloonImg,
      exercises: [
        { 
          word: "gg", 
          emoji: "🪀",  
          tip: "👅 Back tongue up with voice like a gurgle 🪀! G...G" 
        },
        { 
          word: "ggg", 
          emoji: "🐔",    
          tip: "👅 Say 'g-g-g' like a chicken 🐔! G...G..G" 
        }
      ]
    },
    level2: {
      animation: PenguinAni,
      basket_img: PenguinImg,
      exercises: [
        { 
          word: "gaga", 
          emoji: "👶",  
          tip: "👶 Say 'GA' like a baby - back tongue up with voice! 🎵" 
        },
        { 
          word: "gogo", 
          emoji: "🚗", 
          tip: "🚗 Say 'GO' like 'go car' - strong back tongue lift!" 
        },
        { 
          word: "gigi", 
          emoji: "🦒",      
          tip: "🦒 Say 'GI' like giraffe - light back tap with voice!" 
        }
      ]
    },
    level3: {
      animation: TreasureAni,
      basket_img: TreasureImg,
      exercises: [
        { 
          word: "guitar", 
          emoji: "🎸",  
          tip: "🎸 Say 'GUI-TAR' with two back tongue taps 👅👅!" 
        },
        { 
          word: "dragon", 
          emoji: "🐉",   
          tip: "🐉 Say 'DRAG-ON' - don't forget the G back tap 👅 in the middle!" 
        },
        { 
          word: "dog", 
          emoji: "🐶",  
          tip: "🐶 Say 'DOG' with a clear back tap 👅 at the end - DO-GUG!" 
        }
      ]
    }
  },

  // F Sound (Green Light - Lips)
  f: {
    id: "f",
    category: "green",
    title: "Let's learn the F sound! 🎤",
    subtitle: "Bite lip and blow like a fan! 🌬️",
    voiceText: "Let's learn the F sound!",
    videoSrc: FSoundVideo,
    nextRoute: "/ArticulationGame/partice/f",
    backgroundImage: FSoundBg,
    sound: PopSound,
    
    level1: {
      animation: BalloonAni,
      basket_img: BalloonImg,
      exercises: [
        { 
          word: "ff", 
          emoji: "🌬️",  
          tip: "👄 Bite lower lip, blow air like wind 🌬️! F...F" 
        },
        { 
          word: "fff", 
          emoji: "🐍",    
          tip: "👄 Long air like a snake 🐍! F...F..F" 
        }
      ]
    },
    level2: {
      animation: PenguinAni,
      basket_img: PenguinImg,
      exercises: [
        { 
          word: "fafa", 
          emoji: "👶",  
          tip: "👶 Say 'FA' like a baby - bite lip then blow! 🌬️" 
        },
        { 
          word: "fofo", 
          emoji: "🤡", 
          tip: "🤡 Say 'FO' like funny - strong lip bite and blow!" 
        }
      ]
    },
    level3: {
      animation: TreasureAni,
      basket_img: TreasureImg,
      exercises: [
        { 
          word: "fish", 
          emoji: "🐟",  
          tip: "🐟 Say 'FISH' with strong lip bite 🌬️ at the start!" 
        },
        { 
          word: "coffee", 
          emoji: "☕",   
          tip: "☕ Say 'COF-FEE' - don't forget the F lip bite 🌬️ in the middle!" 
        },
        { 
          word: "leaf", 
          emoji: "🍃",  
          tip: "🍃 Say 'LEAF' with lip bite 🌬️ at the end - LEA-FFFT!" 
        }
      ]
    },
    level4: {
      animation: birdAni, // Add a new animation for this level
      basket_img: birdImg, // Add a new basket image
      exercises: [
        { 
          word: "Find the fish", 
          emoji: "🔍🐟",  
          tip: "🔍 'FIND the FISH' - remember to bite lip for both F sounds!" 
        },
        { 
          word: "Funny fox runs", 
          emoji: "🤡🦊🏃",   
          tip: "🤡 'FUNNY FOX RUNS' - three F sounds to practice!" 
        },
        { 
          word: "Fresh fruit is good", 
          emoji: "🍎🍓👍",  
          tip: "🍎 'FRESH FRUIT' - strong F sounds at the start of both words!" 
        },
        { 
          word: "Fly far away", 
          emoji: "🦋🌎✈️",  
          tip: "🦋 'FLY FAR AWAY' - gentle F sounds to start both words!" 
        }
      ]
    }
  },

 

  // S Sound (Yellow Light - Tongue Tip)
  s: {
    id: "s",
    category: "yellow",
    title: "Let's learn the S sound! 🎤",
    subtitle: "Tongue behind teeth like a snake! 🐍",
    voiceText: "Let's learn the S sound!",
    videoSrc: SSoundVideo,
    nextRoute: "/ArticulationGame/partice/s",
    backgroundImage: SSoundBg,
    sound: PopSound,
    
    level1: {
      animation: BalloonAni,
      basket_img: BalloonImg,
      exercises: [
        { 
          word: "ss", 
          emoji: "🐍",  
          tip: "👅 Tongue behind teeth, hiss like a snake 🐍! S...S" 
        },
        { 
          word: "sss", 
          emoji: "🚰",    
          tip: "👅 Long hiss like water from a tap 🚰! S...S..S" 
        }
      ]
    },
    level2: {
      animation: PenguinAni,
      basket_img: PenguinImg,
      exercises: [
        { 
          word: "sasa", 
          emoji: "👶",  
          tip: "👶 Say 'SA' like a baby - tongue up then hiss! 🐍" 
        },
        { 
          word: "soso", 
          emoji: "🤷", 
          tip: "🤷 Say 'SO' like 'so-so' - strong tongue hiss!" 
        }
      ]
    },
    level3: {
      animation: TreasureAni,
      basket_img: TreasureImg,
      exercises: [
        { 
          word: "sun", 
          emoji: "☀️",  
          tip: "☀️ Say 'SUN' with strong tongue hiss 🐍 at the start!" 
        },
        { 
          word: "baseball", 
          emoji: "⚾",   
          tip: "⚾ Say 'BASE-BALL' - don't forget the S hiss 🐍 in the middle!" 
        },
        { 
          word: "bus", 
          emoji: "🚌",  
          tip: "🚌 Say 'BUS' with tongue hiss 🐍 at the end - BU-SSSS!" 
        }
      ]
    },
    level4: {
      animation: birdAni, // Create or use an animation for sentences
      basket_img: birdImg, // Appropriate image for sentence level
      exercises: [
        { 
          word: "I see the sun", 
          emoji: "👀☀️",  
          tip: "Hiss on each S: 'I sss-ee the sss-un'" 
        },
        { 
          word: "Sam sees seven buses", 
          emoji: "👦👀🚌", 
          tip: "Strong S sounds: 'Sss-am sss-eees sss-even busss-es'" 
        },
        { 
          word: "Sally sells seashells", 
          emoji: "👧🏖️🐚",      
          tip: "Tongue up for each S: 'Sss-ally sss-ells sss-eassshells'" 
        },
        { 
          word: "The snake slides slowly", 
          emoji: "🐍⏳",      
          tip: "Long hisses: 'The sss-nake sss-lides sss-lowly'" 
        }
      ]
    }
  },

  // Z Sound (Yellow Light - Tongue Tip)
  // z: {
  //   id: "z",
  //   category: "yellow",
  //   title: "Let's learn the Z sound! 🎤",
  //   subtitle: "Tongue behind teeth and buzz like a bee! 🐝",
  //   voiceText: "Let's learn the Z sound!",
  //   videoSrc: ZSoundVideo,
  //   nextRoute: "/ArticulationGame/partice/z",
  //   backgroundImage: ZSoundBg,
  //   sound: PopSound,
    
  //   level1: {
  //     animation: BalloonAni,
  //     basket_img: BalloonImg,
  //     exercises: [
  //       { 
  //         word: "zz", 
  //         emoji: "🐝",  
  //         tip: "👅 Tongue behind teeth, buzz like a bee 🐝! Z...Z" 
  //       },
  //       { 
  //         word: "zzz", 
  //         emoji: "💤",    
  //         tip: "👅 Long buzz like sleeping 💤! Z...Z..Z" 
  //       }
  //     ]
  //   },
  //   level2: {
  //     animation: PenguinAni,
  //     basket_img: PenguinImg,
  //     exercises: [
  //       { 
  //         word: "zaza", 
  //         emoji: "👶",  
  //         tip: "👶 Say 'ZA' like a baby - tongue up then buzz! 🐝" 
  //       },
  //       { 
  //         word: "zozo", 
  //         emoji: "🤡", 
  //         tip: "🤡 Say 'ZO' like silly - strong tongue buzz!" 
  //       },
  //       { 
  //         word: "zizi", 
  //         emoji: "✂️",      
  //         tip: "✂️ Say 'ZI' like scissors - light tongue buzz!" 
  //       }
  //     ]
  //   },
  //   level3: {
  //     animation: TreasureAni,
  //     basket_img: TreasureImg,
  //     exercises: [
  //       { 
  //         word: "zoo", 
  //         emoji: "🐘",  
  //         tip: "🐘 Say 'ZOO' with strong tongue buzz 🐝 at the start!" 
  //       },
  //       { 
  //         word: "pizza", 
  //         emoji: "🍕",   
  //         tip: "🍕 Say 'PIZ-ZA' - don't forget the Z buzz 🐝 in the middle!" 
  //       },
  //       { 
  //         word: "cheese", 
  //         emoji: "🧀",  
  //         tip: "🧀 Say 'CHEESE' with tongue buzz 🐝 at the end - CHEE-ZZZ!" 
  //       }
  //     ]
  //   },
  //   level4: {
  //     animation: birdAni, // Animation of buzzing bees
  //     basket_img: birdImg, // Image of a beehive
  //     exercises: [
  //       { 
  //         word: "Zoe zips her jacket",
  //         emoji: "👧🆒🧥",
  //         tip: "Buzz on Z's: 'Zzz-oe zzz-ips her jacket'"
  //       },
  //       { 
  //         word: "The zebra zigzags",
  //         emoji: "🦓⚡",
  //         tip: "Strong buzzes: 'The zzz-ebra zzz-igzzz-ags'"
  //       },
  //       { 
  //         word: "Zack's zipper is stuck",
  //         emoji: "👦🤐🛑",
  //         tip: "Buzz through the sentence: 'Zzz-ack's zzz-ipper is stuck'"
  //       },
  //       { 
  //         word: "Buzzy bees zoom by",
  //         emoji: "🐝💨👋",
  //         tip: "Extra buzz: 'Buzzy bzzz-ees zzz-oom by'"
  //       }
  //     ]
  //   }
  // },



  // SH Sound (Red Light - Harder Tongue Sounds)
  sh: {
    id: "sh",
    category: "red",
    title: "Let's learn the SH sound! 🎤",
    subtitle: "Lips round, tongue up like hushing! 🤫",
    voiceText: "Let's learn the S H sound!",
    videoSrc: SHSoundVideo,
    nextRoute: "/ArticulationGame/partice/sh",
    backgroundImage: SHSoundBg,
    sound: PopSound,
    

    level1: {
      animation: TreasureAni,
      basket_img: TreasureImg,
      exercises: [
    
        { 
          word: "washing", 
          emoji: "🧼",   
          tip: "🧼 Say 'WASH-ING' - don't forget the SH hush 🤫 in the middle!" 
        },
        { 
          word: "fish", 
          emoji: "🐟",  
          tip: "🐟 Say 'FISH' with hush 🤫 at the end - FI-SHHH!" 
        }
      ]
    },
    level2: {
      animation: BalloonAni,
      basket_img: BalloonImg,
      exercises: [

        { 
          word: "She is washing the mug", 
          emoji: "🧼", 
          tip: "Listen for the SH in 'washing' – keep it soft and long 🤫!"
        },
        { 
          word: "I see a fish", 
          emoji: "🐟", 
          tip: "End with a hiss: 'fishhh' – great SH at the end! 🤫"
        },
        
      ]
    }
    
  },

  // J Sound (Red Light - Harder Tongue Sounds)
  j: {
    id: "j",
    category: "red",
    title: "Let's learn the J sound! 🎤",
    subtitle: "Tongue up with voice like jumping! 🦘",
    voiceText: "Let's learn the J sound!",
    videoSrc: JSoundVideo,
    nextRoute: "/ArticulationGame/partice/j",
    backgroundImage: JSoundBg,
    sound: PopSound,
    
    level1: {
      animation: BalloonAni,
      basket_img: BalloonImg,
      exercises: [
        { 
          word: "jj", 
          emoji: "🦘",  
          tip: "👅 Tongue up with voice like saying 'jump' 🦘! J...J" 
        },
        { 
          word: "jjj", 
          emoji: "🎠",    
          tip: "👅 Bouncy sound like a carousel 🎠! J...J..J" 
        }
      ]
    },

    level2: {
      animation: TreasureAni,
      basket_img: TreasureImg,
      exercises: [
        { 
          word: "jump", 
          emoji: "🦘",  
          tip: "🦘 Say 'JUMP' with tongue up 🎵 at the start!" 
        },
        { 
          word: "jam", 
          emoji: "🍓",  
          tip: "🍓 Say 'JAM' with a big lip hum 🎵 at the end - JA-HUMM!" 
        },
        { 
          word: "orange", 
          emoji: "🍊",  
          tip: "🍊 Say 'O-RANGE' with J sound at the end - O-RANJ!" 
        }
      ]
    },
    level3: {
      animation: birdAni,  // Animation of a jumping kangaroo
      basket_img: birdImg,  // Image of kangaroo/jumping theme
      exercises: [
        { 
          word: "Jack jumps joyfully",
          emoji: "👦🦘😄",
          tip: "Bounce on J's: 'Jjj-ack jjj-umps jjj-oyfully'"
        },

        { 
          word: "The giant joined the journey",
          emoji: "👹✈️🗺️",
          tip: "Tongue up for each J: 'The gii-ant jjj-oined the jjj-ourney'"
        },
        { 
          word: "Jumpy frogs joke by the jungle",
          emoji: "🐸😂🌴",
          tip: "Bouncy J sounds: 'Jjj-umpy frogs jjj-oke by the jjj-ungle'"
        }
      ]
    }
  },

  // CH Sound (Red Light - Harder Tongue Sounds)
  ch: {
    id: "ch",
    category: "red",
    title: "Let's learn the CH sound! 🎤",
    subtitle: "Tongue up like a sneeze - achoo! 🤧",
    voiceText: "Let's learn the CH sound!",
    videoSrc: CHSoundVideo,
    nextRoute: "/ArticulationGame/partice/ch",
    backgroundImage: CHSoundBg,
    sound: PopSound,
    
    level1: {
      animation: TreasureAni,
      basket_img: TreasureImg,
      exercises: [
        { 
          word: "chair", 
          emoji: "🪑",  
          tip: "🪑 Start with a puff: 'CHHH-air' (tongue up then down!)" 
        },
        { 
          word: "ketchup", 
          emoji: "🍟",   
          tip: "🍟 Middle CH: 'KET-CHHH-up' (like a train brake! 🚂)" 
        },
        { 
          word: "watch", 
          emoji: "⌚",  
          tip: "⌚ End strong: 'wa-TCHHH' (sneeze sound! 🤧)" 
        }
      ]
    },
    level2: {
      animation: BalloonAni,
      basket_img: BalloonImg,
      exercises: [
        { 
          word: "The chair is blue", 
          emoji: "🪑🔵", 
          tip: "Emphasize starting CH: 'The CHHH-air is blue'"
        },
        { 
          word: "I want ketchup", 
          emoji: "👦🍅", 
          tip: "Strong middle CH: 'I want KET-CHHH-up!'"
        },
        { 
          word: "Look at my watch", 
          emoji: "👀⌚", 
          tip: "Hold ending CH: 'Look at my wa-TCHHHH'"
        },
      ]
    }
  },

  // TH Sound (Red Light - Advanced Sounds)
  th: {
    id: "th",
    category: "red",
    title: "Let's learn the TH sound! 🎤",
    subtitle: "Tongue between teeth like a snake! 🐍",
    voiceText: "Let's learn the TH sound!",
    videoSrc: THSoundVideo,
    nextRoute: "/ArticulationGame/partice/th",
    backgroundImage: THSoundBg,
    sound: PopSound,
    
    level1: {
      animation: TreasureAni,
      basket_img: TreasureImg,
      exercises: [
        { 
          word: "thumb", 
          emoji: "👍",  
          tip: "👍 Tongue out for 'THHH-umb' (peek between teeth!) 👅" 
        },
        { 
          word: "bathroom", 
          emoji: "🚽",   
          tip: "🚽 Middle TH: 'BA-THHH-room' (tongue tickles teeth!)" 
        },
        { 
          word: "bath", 
          emoji: "🛁",  
          tip: "🛁 End strong: 'ba-THHHH' (hiss like a snake!) 🐍" 
        }
      ]
    },
    level2: {
      animation: BalloonAni,
      basket_img: BalloonImg,
      exercises: [
  
        { 
          word: "This toothpaste is thick", 
          emoji: "🪥🌀", 
          tip: "Starting TH: 'THHH-is' & 'THHH-ick' (tongue out twice!)" 
        },
        { 
          word: "Mother loves smooth cloth", 
          emoji: "👩❤️👕", 
          tip: "Middle/end TH: 'Mo-THHH-er' and 'clo-THHH'" 
        }
      ]
    },
    level3: {
      animation: PenguinAni,
      basket_img: PenguinImg,
     exercises: [
  {
    emoji: "🤔👤",
    tip: "Story mode! Listen for all TH sounds:",
    word: "The thief is very thin. He thinks about thunder. He throws a thick cloth. Then he thanks his brother.",
      isSentence: true,
  targetSound: "th"
  }

]

    }
  }
};

export default SoundData;
