// import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import LoginPage from "./pages/login";
import SelectCity from "./pages/selectCity";
import SelectSeats from "./pages/selectSeats";
import CheckOut from "./pages/checkOut";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LoginPage />,
    },
    {
      path: "/selectCity",
      element: <SelectCity />,
    },
    {
      path: "/selectSeats",
      element: <SelectSeats />,
    },
    {
      path: "/checkOut",
      element: <CheckOut />,
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
