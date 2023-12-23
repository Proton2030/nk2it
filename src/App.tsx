// import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './components/pages/Home/Layout/Layout'

import { Home } from './components/pages/Home/Home';
import { ManagedServices } from './components/pages/solutions/Managed';
import { CloudServices } from './components/pages/solutions/Cloud';
import { ContactUs } from './components/pages/contactUs/ContactUs';
import Blog from './components/pages/Blog/Blog';
import { Power } from './components/pages/OurPackages/power';



function App() {
  return (
   <>

<BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route path='' element={<Home/>}/>
       <Route path='/solutions/managedServices' element={<ManagedServices/>}/>
       <Route path='/solutions/cloudServices' element={<CloudServices/>}/>
       <Route path='/Ourpacakages/power' element={<Power/>}/>
       <Route path='/ContactUs' element={<ContactUs/>}/>
       <Route path='/blog' element={<Blog/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
   </>
  )
}

export default App
