import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Layout } from './components/pages/Home/Layout/Layout'
import { Home } from './components/pages/Home/Home';
import { ManagedServices } from './components/pages/solutions/Managed';
import { CloudServices } from './components/pages/solutions/Cloud';
import { ContactUs } from './components/pages/contactUs/ContactUs';
import { CPanel } from './components/pages/cPanel/CPanel';
import { CloudPricing } from './components/pages/cloudServices/cloudpricing/CloudPricing';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,

      },
      {
        path: "solutions/managedServices",
        element: <ManagedServices />,
      },
      {
        path: "solutions/cloudServices",
        element: <CloudServices />,
      },
      {

        path: "ContactUs",
        element: <ContactUs />,
      },
      {

        path: "cPanel",
        element: <CPanel />,
      },
      {

        path: "cloudserver",
        element: <CloudPricing />,
      },

    ]
  },
  {
    path: "about",
    element: <div>About</div>,
  },
 
]);
function App() {
  return (
    <>
      <Layout />
      <RouterProvider router={router} />
    </>
  )
}

export default App
