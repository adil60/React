import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./components/Header";
import Body from "./components/Body";
import About from "./components/About"
import Contact from "./components/Contact";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";

const root = ReactDOM.createRoot(document.getElementById("root"));

const Grocery = lazy(() => import("./components/Grocery"))

const AppLayout = () => {


  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
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