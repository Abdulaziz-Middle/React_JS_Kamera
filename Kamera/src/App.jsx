import React, { useEffect, useRef } from "react";
const App = () => {
  const videoRef = useRef(null);
  const photoRef = useRef();
  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({
        video: { width: 1920, height: 1080 },
      })
      .then((stream) => {
        let video = videoRef.current;
        video.srcObject = stream;
        video.play();
      });
  }, [videoRef]);
  const takePhoto = () => {
    const width = 414;
    const height = width / (16 / 9);
    let video = videoRef.current;
    let photo = photoRef.current;
    photo.width = width;
    photo.height = height;
    let context = photo.getContext("2d");
    context.drawImage(video, 0, 0, width, height);
  };
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "50vw",
        height: "50vh",
      }}
    >
      <div className="">
        <video className="camera" ref={videoRef}></video>
      </div>

      <button
        onClick={() => takePhoto()}
        style={{
          margin: "10px",
          padding: "5px",
        }}
      >
        Rasmga olish
      </button>
      {photoRef && <canvas className="image" ref={photoRef}></canvas>}
    </div>
  );
};

export default App;
