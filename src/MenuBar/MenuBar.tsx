import React from "react";
import logo from "../logo/React.png";

const MenuBar: React.FC<{
  buttonArr: any;
}> = ({ buttonArr }) => {
  const buttonContent = buttonArr.map((bt: any) => {
    return (
      <button key={bt.id} className="text-white" onClick={bt.btFun}>
        {bt.label}
      </button>
    );
  });
  return (
    <div className="flex items-center justify-between bg-blue-500 p-4">
      <div className="flex space-x-4">
        <img src={logo} alt="Logo" className="w-50 h-8" />
        {buttonContent}
      </div>
      <button className="text-white">Log In</button>
    </div>
  );
};

export default MenuBar;
