// import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './components/pages/Home/Layout/Layout'

import { Home } from './components/pages/Home/Home';
import { ManagedServices } from './components/pages/solutions/Managed';
import { CloudServices } from './components/pages/solutions/Cloud';
import { ContactUs } from './components/pages/contactUs/ContactUs';
// import { CPanel } from './components/pages/cPanel/CPanel';
// import { CloudPricing } from './components/pages/cloudServices/cloudpricing/CloudPricing';

function App() {
  return (
   <>

<BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route path='' element={<Home/>}/>
       <Route path='/solutions/managedServices' element={<ManagedServices/>}/>
       <Route path='/solutions/cloudServices' element={<CloudServices/>}/>
       <Route path='/ContactUs' element={<ContactUs/>}/>
       <Route path='/about' element={<div>About</div>}/>
        </Route>
      </Routes>
    </BrowserRouter>
   </>
  )
}

export default App
