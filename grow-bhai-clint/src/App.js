import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layout/Main';
import Home from './Component/Consumer/Home/Home';
import Login from './Component/Consumer/Login/Login';
import Registration from './Component/Consumer/Registration/Registration';
import Account from './Component/Consumer/Account/Account';
import Checkout from './Component/Consumer/Checkout/Checkout';
import Farmer from './Layout/Farmer';
import HomeF from './Component/Farmer/Home/HomeF';
import Order from './Component/Farmer/Order/Order';
import Profile from './Component/Farmer/Profile/Profile';
import { UserAuthContextProvider } from './Context/UserAuthContext';
import ProtectedRoutes from './Context/ProtectedRoutes';
import Fish from './Component/Consumer/Pages/Fish/Fish';
import Meat from './Component/Consumer/Pages/Meat/Meat';
import Vegetables from './Component/Consumer/Pages/Vegetables/Vegetables';
import Search from './Component/Consumer/Pages/Search/Search';
import SignUp from './Component/Farmer/Pages/SignUp/SignUp';
import LoginF from './Component/Farmer/Pages/Login/LoginF';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <ProtectedRoutes><Home></Home></ProtectedRoutes>
        },
        {
          path: '/home',
          element: <ProtectedRoutes><Home></Home></ProtectedRoutes>
        },
        {
          path: '/account',
          element: <Account></Account>
        },
        {
          path: '/checkout',
          element: <Checkout></Checkout>
        },
        {
          path: '/fish',
          element: <Fish></Fish>
        },
        {
          path: '/meat',
          element: <Meat></Meat>
        },
        {
          path: '/vegitable',
          element: <Vegetables></Vegetables>
        },
        {
          path: '/cooking',
          element: <Fish></Fish>
        },
        {
          path: 'search',
          element: <Search></Search>
        }
        
      ]
    },
    {
      path: '/farmer',
      element: <ProtectedRoutes><Farmer></Farmer></ProtectedRoutes>,
      children: [
        {
          path: '/farmer',
          element: <ProtectedRoutes><HomeF></HomeF></ProtectedRoutes>
        },
        {
          path: '/farmer/homeF',
          element: <ProtectedRoutes><HomeF></HomeF></ProtectedRoutes>
        },
        {
          path: '/farmer/order',
          element: <ProtectedRoutes><Order></Order></ProtectedRoutes>
        },
        {
          path: '/farmer/profile',
          element: <ProtectedRoutes><Profile></Profile></ProtectedRoutes>
        }
      ]
    },
    {
      path: '/login',
      element: <Login></Login>
    },
    {
      path: '/registration',
      element: <Registration></Registration>
    },
    {
      path: '/signup',
      element: <SignUp></SignUp>
    },
    {
      path:'/loginF',
      element: <LoginF></LoginF>
    }
  ])
  return (
    <div className="App">
      
      <UserAuthContextProvider>
        <RouterProvider router={router}></RouterProvider>
      </UserAuthContextProvider>
    </div>
  );
}

export default App;
