import { createBrowserRouter, Link} from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import AddProducts from "../../Pages/Dashboard/AddProducts/AddProducts";
import AllUsers from "../../Pages/Dashboard/AllUsers/AllUsers";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";

import MyOrders from "../../Pages/Dashboard/MyOrders/MyOrders";
import MyProducts from "../../Pages/Dashboard/MyProducts/MyProducts";
import Payment from "../../Pages/Dashboard/Payment/Payment";

import Advertise from "../../Pages/Home/Advertise/Advertise";
import AllProductCard from "../../Pages/Home/AllProducts/AllProductCard";
import AllProducts from "../../Pages/Home/AllProducts/AllProducts";
import Blog from "../../Pages/Home/Blog/Blog";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Signup from "../../Pages/Login/Signup";
import Products from "../../Pages/Products/Products/Products";
import AdminRoute from "../AdminRoute/AdminRoute";
import BuyerRoute from "../BuyerRoute/BuyerRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import SellerRoute from "../SellerRoute/SellerRoute";
import error from '../../assets/error.png'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/allProducts',
                element: <AllProducts></AllProducts>,
                loader: ()=> fetch('https://resale-server-rianaazad.vercel.app/products')
            },
            {
                path: '/allProductsCard',
                element: <AllProductCard></AllProductCard>
            },
            {
                path: '/advertise',
                element: <Advertise></Advertise>,
                
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/products/:category',
                element: <PrivateRoute><Products></Products></PrivateRoute>,
                loader: ({params})=> fetch(`https://resale-server-rianaazad.vercel.app/products?category=${params.category}`)
            }
    
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>,
                
            },
            {
                path: '/dashboard/myOrders',
                element: <BuyerRoute><MyOrders></MyOrders></BuyerRoute>
            },
            {
                path: '/dashboard/myProducts',
                element: <SellerRoute><MyProducts></MyProducts></SellerRoute>
            },
            {
                path: '/dashboard/addProducts',
                element: <SellerRoute><AddProducts></AddProducts></SellerRoute>
            },
            {
                path: '/dashboard/allUsers',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path: '/dashboard/payment/:id',
                loader: ({params}) => fetch(`https://resale-server-rianaazad.vercel.app/bookings/${params.id}`),
                element: <BuyerRoute><Payment></Payment></BuyerRoute>
            }
        ]
    },
    {
        path: '*', 
        element: <div className='bg-white text-center'>
          <img className='w-75 m-auto' src={error} alt="" />
          <div className='h5'> <p className="h1  text-danger">Error: 404</p>This route is not found! Please Enter a valid page link. Thank you!<br></br>
          <Link to='/'>Back to Home</Link>
          </div>
        </div>
      }
])

export default router;