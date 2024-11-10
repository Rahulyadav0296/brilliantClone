import { lazy, Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./pages/Footer/Footer";
import { setToken } from "./utils/authSlice";

// Lazy-loaded components
const Landing = lazy(() => import("./components/Landing/Landing"));
const Home = lazy(() => import("./pages/Dashboard/Home/Home"));
const Courses = lazy(() => import("./pages/Dashboard/Courses/Courses"));

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

// Router configuration with lazy-loaded components
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "",
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <Landing />
          </Suspense>
        ),
      },
      {
        path: "home",
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "courses",
        element: (
          <Suspense fallback={<p>Loading...</p>}>
            <Courses />
          </Suspense>
        ),
      },
    ],
  },
]);

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("Token");
    if (token) {
      dispatch(setToken(token));
    }
  }, [dispatch]);

  return (
    <RouterProvider router={router} future={{ v7_startTransition: true }} />
  );
}

export default App;
