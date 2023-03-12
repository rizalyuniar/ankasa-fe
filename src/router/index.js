import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Login from "../views/auth/login";
import Register from "../views/auth/register";
import ForgotPassword from "../views/auth/forgotPassword";
import Home from "../views/home/index";
import Search from "../views/search";
import BookingDetail from "../views/bookingDetail";
import FlightDetail from "../views/flightDetail";
import MyBooking from "../views/myBooking";
import Profile from "../views/profile";
import UpdateProfile from "../views/updateProfile";
import Admin from "../views/admin/dashboard";
import Airlines from "../views/admin/adminAirlines";
import AdminFlight from "../views/admin/adminFlight";
import AdminPayment from "../views/admin/adminPayment";

const ScrollToTop = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return children;
};

const Router = () => {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/search" element={<Search />} />
          <Route path="/booking" element={<BookingDetail />} />
          <Route path="/flight" element={<FlightDetail />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/mybooking" element={<MyBooking />} />
          <Route path="/updateProfile" element={<UpdateProfile />} />
<<<<<<< HEAD
=======
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/airlines" element={<Airlines />} />
          <Route path="/admin/flight" element={<AdminFlight />} />
          <Route path="/admin/payment" element={<AdminPayment />} />

>>>>>>> 5ef4aeda714847d7d527d0104ce7a82c973ab68c
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
};

export default Router;
