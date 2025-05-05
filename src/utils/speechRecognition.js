<<<<<<< HEAD
const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = "en-US";
recognition.interimResults = false;
recognition.maxAlternatives = 1;

export { recognition };
=======
// utils/speechRecognition.js
export const startSpeechRecognition = (onResult) => {
  if (!("webkitSpeechRecognition" in window)) {
    alert("Speech Recognition not supported in this browser.");
    return;
  }

  const recognition = new window.webkitSpeechRecognition();
  recognition.continuous = false;
  recognition.interimResults = false;
  recognition.lang = "en-US";

  recognition.onresult = (event) => {
    const last = event.results.length - 1;
    const result = event.results[last][0];
    const transcript = result.transcript.trim().toLowerCase();
    onResult(transcript);
  };

  recognition.onerror = (event) => {
    console.error("Speech recognition error:", event.error);
    onResult(""); // ✅ Triggers fallback in component
  };



  recognition.start();
};
>>>>>>> 1967140506b0c5d100064ccbdfe4951b3413ce5b
