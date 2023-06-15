import React, { useState } from "react";
import "./App.css";
import MenuBar from "./MenuBar/MenuBar";
import AddHealthData from "./components/AddHealthData/AddHealthData";
import AnData from "./components/AnData/AnData";
import ShowHelthData from "./components/ShowHelthData/ShowHelthData";
import { MainContexWrapper } from "./Store/mainContext/mainContext";

function App() {
  const [loadComponent, setLoadComponent] = useState(<AddHealthData />);
  const buttonArr = [
    {
      id: 1,
      label: "Add-Helth",
      btFun: () => {
        setLoadComponent(<AddHealthData />);
      },
    },
    {
      id: 2,
      label: "Show-Helth",
      btFun: () => {
        setLoadComponent(<ShowHelthData />);
      },
    },
    {
      id: 3,
      label: "Analitics-Helth",
      btFun: () => {
        setLoadComponent(<AnData />);
      },
    },
  ];

  return (
    <MainContexWrapper>
      <div>
        <MenuBar buttonArr={buttonArr} />
        {loadComponent}
      </div>
    </MainContexWrapper>
  );
}

export default App;
