import React, { useState } from "react";
import "./App.css";
import MenuBar from "./MenuBar/MenuBar";
import AddHealthData from "./components/AddHealthData/AddHealthData";
import AnData from "./components/AnData/AnData";
import ShowHelthData from "./components/ShowHelthData/ShowHelthData";
import { MainContexWrapper } from "./Store/mainContext/mainContext";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainComponent from "./MainComponent/MainCompenent";

function App() {
  const [loadComponent, setLoadComponent] = useState(<AddHealthData />);
//  const buttonArr = [
//    {
//      id: 1,
//      label: "Add-Helth",
//      btFun: () => {
//         setLoadComponent(<AddHealthData />);
//      },
//    },
//    {
//      id: 2,
//      label: "Show-Helth",
//      btFun: () => {
//        setLoadComponent(<ShowHelthData />);
//      },
//    },
//    {
//       id: 3,
//      label: "Analitics-Helth",
//      btFun: () => {
//         setLoadComponent(<AnData />);
//      },
//     },
//  ];

  const router = createBrowserRouter([
 {
    path: '/',
  element: <MainComponent />,
  children: [
 
    {
      path: "/",
      element: <AddHealthData />,
    },
    {
      path: "/showData",
      element: <ShowHelthData/>,
    },
    {
      path: "/andata",
      element: <AnData/>
    },
  ]
}
]);

  return (
    <MainContexWrapper>
      
    {/* 
    <div className='main-content'>
  {loadComponent}
  </div> */}


  <div className='main-content'>
  <RouterProvider router={router} />
  </div>

</MainContexWrapper>
);
}
export default App;
