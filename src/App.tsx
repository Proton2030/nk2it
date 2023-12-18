import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Layout } from './components/pages/Home/Layout/Layout'
import { Home } from './components/pages/Home/Home';
import { ManagedServices } from './components/pages/solutions/Managed';
import { CloudServices } from './components/pages/solutions/Cloud';
import { ContactUs } from './components/pages/contactUs/ContactUs';
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
