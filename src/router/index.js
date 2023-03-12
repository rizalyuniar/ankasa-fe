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
import VerifEmail from "../views/emailVerification";
import Page404 from "../views/Page404";
import AdminLogin from "../views/authAdmin/login";

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
          <Route path="/mybooking/:id" element={<MyBooking />} />
          <Route path="/updateProfile" element={<UpdateProfile />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/airlines" element={<Airlines />} />
          <Route path="/admin/flight" element={<AdminFlight />} />
          <Route path="/admin/payment" element={<AdminPayment />} />
          <Route path="/verifEmail" element={<VerifEmail />} />
          <Route path="/notfound" element={<Page404 />} />
          <Route path="/login/admin" element={<AdminLogin />} />
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
};

export default Router;
