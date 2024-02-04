import React from 'react'
import { RouterProvider, createHashRouter } from 'react-router-dom'
import Layout from './Componant/Layout/Layout'
import About from './Componant/About/About'
import Contact from './Componant/Contact/Contact'
import Portfolio from './Componant/Portfolio/Portfolio';
import StartFramwork from './Componant/StartFramwork/StartFramwork';



const Routers = createHashRouter ([
  {
    path :'',element :<Layout/>, children :[
      {
        index : true ,element :<StartFramwork/>
      },
      {
        path :'about',element :<About/>
      },
      {
        path :'portfolio',element :<Portfolio/>
      },
      {
        path :'contact',element :<Contact/>
      }
    ]
}
])


export default function App() {
  return <>
<RouterProvider router ={Routers} />

  
  </>
}
