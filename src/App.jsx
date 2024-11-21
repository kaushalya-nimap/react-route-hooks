import React from 'react'
import {createBrowserRouter,RouterProvider } from 'react-router-dom'
import Home from './Home'
//import About from './About'
const LazyAbout=React.lazy(()=>import('./About'))
//lazy loading or code splitting is used when we are having a wesite with multiple component and pages and we dont want to make the end user wait till all it component is loaded bcoz the end user will be using only 1 or 2 pages in that case we can lazily load a page or a component
import Services from './Services'
import NoContacts from './NoContacts'
import UseMemoPage from './UseMemoPage'
import UseCallbackExample from './UseCallback'
import UseRef from './UseRef'
function App() {
  
  const router=createBrowserRouter([
    {
      path:'/',
      element:<Home/>
    },
    {
      path:'/about',
      element:<LazyAbout/>
    },
    {
      path:'/services',
      element:<Services/>
    },
    {
      path:'/contacts',
      element:<NoContacts/>
    },
    {
      path:'/memo',
      element:<UseMemoPage/>
    },
    {
      path:'/callback',
      element:<UseCallbackExample/>
    }
  ])

  return (

    // <BrowserRouter>
      <div>
      <nav>
        <ul>
          <li><a href='/'>Home</a ></li>
          <li><a href='/about'>About</a ></li>
          <li><a href='/services'>Services</a ></li>
          <li><a href='/contacts'>Contacts</a ></li>
          <li><a href='/memo'>UseMemo</a ></li>
          <li><a href='/callback'>UseCallback</a ></li>
        </ul>
      </nav>
      <UseRef/>
      

      {/* <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/contacts' element={<NoContacts/>}/>
      </Routes> */}
      <RouterProvider router={router}/>
    </div>
    // </BrowserRouter>

  )
}

export default App