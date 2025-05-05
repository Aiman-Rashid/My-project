import React, { useEffect, useRef, useState } from "react";

const MirrorCamera = () => {
  const videoRef = useRef(null);
  const [cameraActive, setCameraActive] = useState(false);
  const [cameraError, setCameraError] = useState(false);

  useEffect(() => {
    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          setCameraActive(true);
          setCameraError(false);
        }
      } catch (err) {
        console.error("Error accessing webcam:", err);
        setCameraError(true);
      }
    };
    startCamera();

    // Cleanup function to stop the camera when component unmounts
    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        const tracks = videoRef.current.srcObject.getTracks();
        tracks.forEach(track => track.stop());
      }
    };
  }, []);

  return (
    <div className="mirror-camera-container">
      <div className="camera-frame">
        <video 
          ref={videoRef}
          autoPlay
          playsInline
          muted
          className="mirror-video"
        />
        <div className="camera-overlay">
          <div className="overlay-decoration top-left"></div>
          <div className="overlay-decoration top-right"></div>
          <div className="overlay-decoration bottom-left"></div>
          <div className="overlay-decoration bottom-right"></div>
        </div>
        {cameraError && (
          <div className="camera-error-message">
            <p>Oops! We can't access your camera.</p>
            <p>Please check your permissions and try again!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MirrorCamera;