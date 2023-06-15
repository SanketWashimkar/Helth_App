import { useContext } from "react";
import mainContext from "../../Store/mainContext/mainContext";

const AddHealthData = () => {
const healthContext:any = useContext(mainContext);
const {setHealthData, healthData} = healthContext;
console.log('setHealthData', setHealthData)

const addNewHealthData = () => {
  const NewHealthData = [
...healthData
,{
  id: 12,
  HR : 12,
  SBP: 22,
  DBP:32,
  sugar:42,
  cal:52,
  hemoglobin:62,
  spo2: 1232,
  name: 'arc2'

}]
setHealthData(NewHealthData)
}

  return <div>
    <button type="button" onClick={addNewHealthData}>Add New</button>
  </div>;
};
export default AddHealthData;
