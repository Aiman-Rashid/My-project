export const speakText = (text, onEnd = () => {}) => {
  const synth = window.speechSynthesis;
  const utterance = new SpeechSynthesisUtterance(text);

  // Try to pick an English voice
  const voices = synth.getVoices();
  const englishVoice = voices.find((v) => v.lang.startsWith("en"));
  if (englishVoice) {
    utterance.voice = englishVoice;
  }

  utterance.onend = onEnd;
  synth.speak(utterance);
};
