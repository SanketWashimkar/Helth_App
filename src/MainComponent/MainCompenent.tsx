import React from "react";
import { Outlet } from "react-router-dom";
import MenuBar from "../MenuBar/MenuBar";
import styless from './MainComponent.module.scss';

const MainComponent = () => {
const buttonArr = [
{
id:1,
label:'add-health',
path: '/'

},
{
    id:2,
    label:'show-health',
    path: '/showData'
    
    },
    {
        id:3,
        label:'analytics-helth',
        path: '/anData'
        
        },
];
    return (
<>
        <div className={styless['full-width']}>
<MenuBar buttonArr={buttonArr} />
<Outlet />
        </div>
        
        </>
    )
}

export default MainComponent;
