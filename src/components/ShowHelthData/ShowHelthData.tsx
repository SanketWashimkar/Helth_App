import { useContext } from "react";
import mainContext from "../../Store/mainContext/mainContext";

const ShowHelthData = () => {
  const healthContext: any = useContext(mainContext);
  console.log("healthContext", healthContext);
  return <div>ShowHealthData.tsx</div>;
};
export default ShowHelthData;
