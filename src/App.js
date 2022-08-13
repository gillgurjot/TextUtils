import React, { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  let modeText = "Enable dark mode";

  const [myStyle, setmyStyle] = useState({
    backgroundColor: "white",
    color: "black"});

  const [mode, setMode] = useState("light");

  function toggleMode() {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      setmyStyle({
        backgroundColor: "white",
        color: "black"});

    } else {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      setmyStyle({
        backgroundColor: "black",
        color: "white"});
        showAlert("Dark mode has been enabled", "success");
    }
  }
  return (
    <>
    <BrowserRouter>
    <Navbar
        title="TextUtils"
        mode={mode}
        toggleMode={toggleMode}
        modeText={modeText}
      />
      <Alert alert={alert} />
    <Routes>
      <Route path="/" element={<TextForm
        heading="Enter your text below to analyze"
        showAlert={showAlert}
        mode={mode}
      />}/> 
      <Route path="about" element={<About myStyle={myStyle}/>}/>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
