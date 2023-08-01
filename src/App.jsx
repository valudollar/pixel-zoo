import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import frog from "./assets/frog.mp4";
import "./App.css";

function App() {
  return (
    <>
      <video
        width="320"
        height="320"
        src={frog}
        muted
        autoPlay={"autoplay"}
        preLoad="auto"
        loop
      >
        <source src={frog} type="video/mp4"></source>
      </video>
    </>
  );
}

export default App;
