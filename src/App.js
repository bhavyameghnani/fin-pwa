import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { recognition } from "./API/voicerecognition";
import "./App.css";
import Podcast from "./components/Podcast";
import Reports from "./components/Reports";
import QuickStart from "./components/QuickStart";
import Portfolio from "./components/Portfolio";


const App = () => {
  const history = useNavigate();
  const [stopReco, setStopReco] = useState(false);

  recognition.onresult = (event) => {
    console.log(event)
    const command = event.results[0][0].transcript;
    console.log(command)

    if (command.includes("go to") || command.includes("navigate to") || command.includes("show me") || command.includes("please open")) {
      if (
        command.includes("home")
      ) {
        history("/");
      } else if (
        command.includes("podcast") ||
        command.includes("podcasts")
      ) {
        history("/podcast");
      } else if (
        command.includes("report") ||
        command.includes("reports")
      ) {
        history("/report");
      } else if (
        command.includes("news") ||
        command.includes("new")
      ) {
        history("/new");
      } else if (
        command.includes("portfolio") || 
        command.includes("portfolios")
      ) {
        history("/portfolio");
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
        <Route path="/podcast" element={<Podcast />}></Route>
        <Route path="/reports" element={<Reports />}></Route>
        <Route path="/portfolio" element={<Portfolio />}></Route>
      </Routes>
    </div>
  );
};

export default App;