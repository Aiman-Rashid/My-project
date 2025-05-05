export const speakText = (text) => {
    const synth = window.speechSynthesis;
  
    if (!synth) {
      console.error("Speech synthesis not supported in this browser.");
      return;
    }
  
    const speak = () => {
      const voices = synth.getVoices();
      const childVoice = voices.find((voice) =>
        voice.name.toLowerCase().includes("child") ||
        voice.name.toLowerCase().includes("soft") ||
        voice.name.toLowerCase().includes("female") ||
        voice.name.toLowerCase().includes("samantha") ||
        voice.name.toLowerCase().includes("zira") ||
        voice.name.toLowerCase().includes("karen")
      );
  
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.voice = childVoice || voices[0];
      utterance.rate = 0.5;
      utterance.pitch = 1.0;
      utterance.volume = 1.0;
  
      synth.speak(utterance);
    };
  
    if (synth.getVoices().length === 0) {
      synth.addEventListener("voiceschanged", speak);
    } else {
      speak();
    }
  };
  
  export const speakWithPauses = async (words, pauseDuration = 1000) => {
    const synth = window.speechSynthesis;
  
    if (!synth) {
      console.error("Speech synthesis not supported in this browser.");
      return;
    }
  
    const getVoice = () => {
      const voices = synth.getVoices();
      return voices.find((voice) =>
        voice.name.toLowerCase().includes("child") ||
        voice.name.toLowerCase().includes("soft") ||
        voice.name.toLowerCase().includes("female") ||
        voice.name.toLowerCase().includes("samantha") ||
        voice.name.toLowerCase().includes("zira") ||
        voice.name.toLowerCase().includes("karen")
      ) || voices[0];
    };
  
    const voice = synth.getVoices().length ? getVoice() : null;
  
    for (let word of words) {
      await new Promise((resolve) => {
        const utterance = new SpeechSynthesisUtterance(word);
  
        if (voice) {
          utterance.voice = voice;
        }
  
        utterance.rate = 0.5;
        utterance.pitch = 1.0;
        utterance.volume = 1.0;
  
        synth.speak(utterance);
  
        utterance.onend = () => {
          setTimeout(resolve, pauseDuration);
        };
      });
    }
  };