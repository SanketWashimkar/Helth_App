import { useContext } from "react";
import mainContext from "../../Store/mainContext/mainContext";
import HealthTable from "../../common/HealthTable/HealthTable";

const ShowHelthData = () => {
  const healthContext: any = useContext(mainContext);
  console.log("healthContext", healthContext);
  const {healthData} = healthContext;

  const tHead = [
    "id",
    "name",
    "DBP",
    "HR",
    "SBP",
    "cal",
    "hemoglobin",
    "spo2",
    "sugar",

  ];

console.log('healthData', healthData);

  return <div>
    <HealthTable tHead = {tHead} healthData = {healthData} /> 
  </div>;
};
export default ShowHelthData;
