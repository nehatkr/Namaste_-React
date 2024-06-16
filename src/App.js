import React ,{lazy,Suspense, useEffect} from "react";
import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider , Outlet} from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import UserContext from "./utils/UserContext";
// import Grocery from "./components/Grocery";
// import RestaurantCard from "./components/RestaurantCard";

// Dynamic bundling
// Code splitting
// chunking
// lazy loading
// on demand loading
// Dynamic import

const Grocery = lazy(()=>import("./components/Grocery"));


const AppLayout = ()=>{

    const [userName, setUserName] = useState();

    useEffect(()=>{
        const data = {
            name: "Neha Thakur",
        };
        setUserName(data.name);
    },[]);


    return(
        <Provider store={appStore}>
        <UserContext.Provider value = {{loggedInUser: userName,setUserName}}>
        <div className="app">
            <Header />
            <Outlet />
        </div>
        </UserContext.Provider>
        </Provider>
    );
};



const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout />,
        children:[
            {
                path:"/",
                element:<Body />,
            },
            {
                path:"/about",
                element:<About />,
            },
            {
                path:"/contact",
                element:<Contact />,
            },
            {
                path:"/grocery",
                element:<Suspense fallback={<h1>Loading....</h1>}><Grocery /></Suspense>,
            },
            {
                path:"/restaurants/:resId",
                element:<RestaurantMenu />,
            },
           
        ],
        errorElement:<Error />,
    },
   
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);


