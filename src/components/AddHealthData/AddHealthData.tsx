import { useContext, useState } from "react";
import mainContext from "../../Store/mainContext/mainContext";
import styless from './AddHealthData.module.scss';
const AddHealthData = () => {
const healthContext:any = useContext(mainContext);
const {setHealthData, healthData} = healthContext;
//console.log('setHealthData', setHealthData)
const [userName, setUserName] = useState('');
const [userNameIsTouched, setUserNameIsTouched] = useState(false);
const userNameIsEmpty = userName === ''

const [hr,setHR] = useState(0);

const addNewHealthData = (e:any) => {
  e.preventDefault();
  console.log('userName', userName);
  console.log('hr',hr);
  const newHealthData = [
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

},
];
setHealthData(newHealthData)
};
console.log('chcek user name', userName === '')
//const changeUserName = (e: any) => {
  //     if (e.target.value !== "") {
  //       setUserNameIsEmpty(false);
  //     } else {
  //       setUserNameIsEmpty(true);
  //     }
  //     setUserName(e.target.value);
  //   };
  return <div>
<form onSubmit ={ (e)=> addNewHealthData(e)}>
<div className={styless["form-control"]}>
  <label htmlFor="username">Username</label>
  <input type="text" id = "username" value={userName}
  onBlur = {() => setUserNameIsTouched(true)}
onChange={(e)=>setUserName(e.target.value)}
/>
{userNameIsTouched && userNameIsEmpty &&(
  <span className={styless['error-class']}>
    'user name can not  be empty'
  </span>
)}
</div>
<div className="sm:col-span-2 sm:col-start-1 w-96">
          <label
            htmlFor="hr"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Heart Rate
          </label>
          <div className="mt-2">
            <input
              type="number"
              name="hr"
              id="hr"
              value={hr}
              onChange={(e) => setHR(parseFloat(e.target.value))}
              autoComplete="address-level2"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <button type="submit" disabled = {userNameIsEmpty}className={userNameIsEmpty ? styless['submit-bt-empty'] : styless['submit-bt']} >Add New</button>
</form>
  
  </div>;
};
export default AddHealthData;
