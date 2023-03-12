import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home";
import VideoComp from "./components/Video/VideoComp";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadUser } from "./redux/action/userAction";
import "./cssfiles/app.scss";
import Signin from "./components/User/Signin";
import Register from "./components/User/Signup";
import Navbar from "./components/navbar/Navbar";

function App() {
  const dispatch = useDispatch();

  const { isAuthenticated, user, message, error, loading } = useSelector(
    (state) => state.user
  );
  useEffect(() => {
    if (error) {
      console.log(error);
      dispatch({ type: "clearError" });
    }
    if (message) {
      dispatch({ type: "clearMessage" });
    }
  }, [dispatch, error, message]);

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);
  return (
    <>
      <Navbar isAuthenticated={isAuthenticated} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<VideoComp />} />
        <Route
          path="/login"
          element={isAuthenticated ? <Navigate to={"/"} /> : <Signin />}
        />
        <Route
          path="/register"
          element={isAuthenticated ? <Navigate to={"/"} /> : <Register />}
        />
      </Routes>
    </>
  );
}

export default App;
