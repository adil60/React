import React, { lazy, Suspense, useContext, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./components/Header";
import Body from "./components/Body";
import About from "./components/About"
import Contact from "./components/Contact";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import userContext from "./utils/userContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

const Grocery = lazy(() => import("./components/Grocery"))

const AppLayout = () => {

  const [info, setInfo] = useState(null);

  useEffect(() => {
    const data = {
      userName: "Adil Raza"
    }

    setInfo(data.userName)
  }, [])

  return (
    <userContext.Provider value={
      { userName: info , setInfo }}>
      <div className="app">
        <Header />
        <Outlet />
      </div >
    </userContext.Provider>
  )
}

const appRoute = createBrowserRouter([
  {
    path: "/", element: <AppLayout />, errorElement: <Error />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/restaurant/:resId", element: <RestaurantMenu /> },
      {
        path: "/grocery", element:
          <Suspense fallback={<h2>Loading...</h2>}><Grocery /></Suspense>
      }
    ]
  }

]);


root.render(<RouterProvider router={appRoute} />);