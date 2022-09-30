import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { recognition } from "./API/voicerecognition";
import "./App.css";
import Podcast from "./components/Podcast";
import Bonds from "./components/Bond";
import Greeting from "./components/greeting";
import QuickStart from "./components/QuickStart";
import PlayQuote from "./components/PlayQuote";
import Portfolio from "./components/Portfolio";
import Magic from "./components/Magic";
import FoundPod from "./components/FoundPod";

const App = () => {
  const history = useNavigate();
  const [stopReco, setStopReco] = useState(false);

  recognition.onresult = (event) => {
    console.log(event)
    const command = event.results[0][0].transcript;
    console.log(command)

    if (command.includes("go to") || command.includes("navigate to") || command.includes("show me")) {
      if (command.includes("home") || command.includes("index")) {
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
        history("/bonds");
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
    } else if (
      command.includes("good morning") ||
      command.includes("morning") 
    ) {
      console.log("play greeting");
      history("/greeting");
    } else if (
      command.includes("quote") ||
      command.includes("quote of the day") 
    ) {
      console.log("play quote");
      history("/playquote");
      //play quote mp3
    } else if (
      command.includes("portfolio") ||
      command.includes("portfolios") 
    ) {
      console.log("play portfolio jump");
      history("/portfolio");
      //play portfolio jump mp3
    } else if (
      command.includes("magic")
    ) {
      console.log("play who did it");
      history("/magic");
      //play who did it mp3
    } else if (
      command.includes("podcast") ||
      command.includes("podcasts") 
    ) {
      console.log("play podcast");
      history("/podcast");
      //play found a podcast mp3
    }else if (
      command.includes("i knew it") ||
      command.includes("I knew it")
    ) {
      console.log("play found a podcast");
      history("/foundpod");
      //play found a podcast mp3
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
        <Route path="/bonds" element={<Bonds />}></Route>
        <Route path="/greeting" element={<Greeting />}></Route>
        <Route path="/playquote" element={<PlayQuote />}></Route>
        <Route path="/portfolio" element={<Portfolio />}></Route>
        <Route path="/magic" element={<Magic />}></Route>
        <Route path="/foundpod" element={<FoundPod />}></Route>
      </Routes>
    </div>
  );
};

export default App;

