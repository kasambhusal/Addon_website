import React from 'react'
import {createBrowserRouter} from 'react-router-dom';

import Root from './components/Root'
import Home from './components/Home'
import Departments from './components/Departments';
import Pricing from './components/Pricing';
import It from './components/It';
import Civil from './components/Civil';
import Electrical from './components/Electrical';
const Router=createBrowserRouter([
    {
        path:"/",
        element:<Root/>,
        children:[
            {
                path:"/",
                element:<Home/>,
                index:true
            },
            {
                path:"/departments",
                element:<Departments/>
            },
            {
                path:"/pricing",
                element:<Pricing/>
            },
            {
                path:"/it",
                element:<It/>
            },
            {
                path:"/civil",
                element:<Civil/>
            },
            {
                path:"/electrical",
                element:<Electrical/>
            }
        ]

    }
    
]

);
export default Router;