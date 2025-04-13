import "./App.css";
import {createBrowserRouter,RouterProvider } from "react-router-dom";
import About from "./pages/about";
import Contact from "./pages/contact";
import Country from "./pages/country";
import Home from "./pages/home";
import { AppLayout } from "./Componants/Layouts/AppLayout";
import { ErrorPage } from "./pages/errorPage";
import { CountryDetails } from "./Componants/Layouts/countryDetails";

const router=createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,    errorElement:<ErrorPage/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"about",
        element:<About/>
      },
      {
        path:"country",
        element:<Country/>
      },
      {
        path:"contact",
        element:<Contact/>
      },
      {
        path:"country/:id",
        element:<CountryDetails/>
      }
    ]
  }
]);

const App=()=>{
  return <RouterProvider router={router}>
    
  </RouterProvider>
}

export default App;