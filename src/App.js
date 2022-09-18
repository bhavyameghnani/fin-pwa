import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { recognition } from "./API/voicerecognition";
import "./App.css";
import Contact from "./components/Navbar";
import QuickStart from "./components/QuickStart";

const App = () => {
  const history = useNavigate();
  const [stopReco, setStopReco] = useState(false);

  recognition.onresult = (event) => {
    console.log(event)
    const command = event.results[0][0].transcript;
    console.log(command)

    if (command.includes("go to") || command.includes("navigate to")) {
      if (command.includes("home") || command.includes("index")) {
        history("/");
      } else if (
        command.includes("contact") ||
        command.includes("contact us")
      ) {
        history("/contact");
      } else if (
        command.includes("tutorials") ||
        command.includes("tutorial")
      ) {
        history("/tutorials");
      } else if (command.includes("about") || command.includes("about us")) {
        history("/about");
      }
    } else if (
      command.includes("stop listening") ||
      command.includes("stop recognition") ||
      command.includes("stop recognizing") ||
      command.includes("stop voice controlling") ||
      command.includes("stop voice control")
    ) {
      recognition.stop();
      setStopReco(true);
    }
  };

  recognition.onend = () => {
    if (!stopReco) {
      recognition.start();
    }
  };

  return (
    <div className="App-header" >
      <Routes>
        <Route path="/" element={<QuickStart />} />
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </div>
  );
};

export default App;
