import { createContext, useState } from "react";

const mainContext: any = createContext({
  healthData: [],
});
//const tHead = ['id', 'HR']
const intialState = [
  {
    id: 0,
    HR: 120,
    SBP: 132,
    DBP: 123,
    sugar: 123,
    cal: 123,
    hemoglobin: 123,
    spo2: 123,
    name: "arc",
  },
  {
    id: 1,
    HR : 1,
    SBP: 2,
    DBP:3,
    sugar:4,
    cal:5,
    hemoglobin:6,
    spo2: 123,
    name: 'arc'
},
];

export const MainContexWrapper: React.FC<any> = (props) => {
  const [healthData, setHealthData] = useState(intialState);
  return (
    <mainContext.Provider
      value={{
        healthData: healthData,
        setHealthData: setHealthData
      }}
    >
      {props.children}
    </mainContext.Provider>
  );
};
export default mainContext;
