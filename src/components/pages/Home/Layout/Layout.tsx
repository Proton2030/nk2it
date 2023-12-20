import { NavBar } from '../../../shared/navbar/NavBar'
import { Outlet} from "react-router-dom";

export const Layout = () => {
  return (
<body className="bg-white dark:bg-gray-900 w-full">
		<NavBar/>
		<main>
		<Outlet />
		</main>
		
	</body>
  
  )
}
