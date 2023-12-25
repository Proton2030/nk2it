// import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './components/pages/Home/Layout/Layout'

import { Home } from './components/pages/Home/Home';
import { ManagedServices } from './components/pages/solutions/Managed';
import { CloudServices } from './components/pages/solutions/Cloud';
import { ContactUs } from './components/pages/contactUs/ContactUs';
import Blog from './components/pages/Blog/Blog';
import { Powercolling  } from './components/pages/OurPackages/power';
import { Netwrokinfra } from './components/pages/OurPackages/network';
import { Unity} from './components/pages/OurPackages/unify';
import { CPanel } from './components/pages/cPanel/CPanel';
import { CloudP} from './components/pages/cloudServices/cloudpricing/CloudPricing';
import { Saas } from './components/pages/solutions/Saas';







function App() {
  return (
   <>

<BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route path='' element={<Home/>}/>
       <Route path='/solutions/managedServices' element={<ManagedServices/>}/>
       <Route path='/solutions/cloudServices' element={<CloudServices/>}/>
       <Route path='/Ourpacakages/power' element={<Powercolling/>}/>
       <Route path='/Ourpacakages/network' element={<Netwrokinfra/>}/>
       <Route path='/Ourpacakages/unify' element={<Unity/>}/>
       <Route path='/CPanel' element={<CPanel/>}/>
       <Route path='/ContactUs' element={<ContactUs/>}/>
       <Route path='/blog' element={<Blog/>}/>
       <Route path='/solutions/saas' element={<Saas/>}/>
       <Route path='/cloudPricing' element={<CloudP/>}/>
     
      
        </Route>
      </Routes>
    </BrowserRouter>
   </>
  )
}

export default App
