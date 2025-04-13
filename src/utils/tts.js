// src/utils/tts.js

export const speakText = (text) => {
    const synth = window.speechSynthesis;
  
    if (!synth) {
      console.error("Speech synthesis is not supported in this browser.");
      return;
    }
  
    const voices = synth.getVoices();
    
    // Try to find a kid-friendly voice
    const childVoice = voices.find(
      (voice) =>
        voice.name.toLowerCase().includes("child") ||
        voice.name.toLowerCase().includes("soft") ||
        voice.name.toLowerCase().includes("female")
    );
  
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.voice = childVoice || voices[0]; // Default to the first voice if none found
    utterance.rate = 0.8; // Slows down speech (default is 1.0)
    utterance.pitch = 1.0; // Keep pitch normal
    utterance.volume = 1.0; // Full volume
   
  
    synth.speak(utterance);
  };
  
  