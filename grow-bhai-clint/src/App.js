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

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Login></Login>
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
        
      ]
    },
    {
      path: '/farmer',
      element: <Farmer></Farmer>,
      children: [
        {
          path: '/farmer',
          element: <HomeF></HomeF>
        },
        {
          path: '/farmer/homeF',
          element: <HomeF></HomeF>
        },
        {
          path: '/farmer/order',
          element: <Order></Order>
        },
        {
          path: '/farmer/profile',
          element: <Profile></Profile>
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
