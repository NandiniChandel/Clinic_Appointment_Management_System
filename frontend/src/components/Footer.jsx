import React from "react";
import { assets } from "../assets/assets_frontend/assets";
import { useNavigate } from "react-router-dom";

const Footer = () => {

  const navigate=useNavigate();
  return (
    <footer className="px-6 sm:px-10 md:px-16 lg:px-16 py-16 text-gray-700">
      <div className="flex flex-col md:flex-row justify-between gap-10">

        {/* Left Section */}
        <div className="md:w-1/2 space-y-4">
          <img src={assets.logo} alt="Logo" className="w-32" />
          <p className="leading-relaxed">
            A web-based scheduling platform that allows users to easily book,
            manage, and cancel appointments in real-time. Features include
            calendar-based slot selection, automated reminders, user
            authentication, and an intuitive dashboard for both customers and
            service providers.
          </p>
        </div>

        {/* Right Section */}
        <div className="flex flex-col sm:flex-row gap-12">

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-lg mb-3">Company</h3>
            <ul className="space-y-2">
              <li className="hover:text-black cursor-pointer" onClick={()=>{navigate('/home')}}>Home</li>
              <li className="hover:text-black cursor-pointer" onClick={()=>{navigate('/about')}}>About Us</li>
              <li className="hover:text-black cursor-pointer" onClick={()=>{navigate('/contact')}}>Contact Us</li>
              <li className="hover:text-black cursor-pointer">Privacy Policy</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-3">Get In Touch</h3>
            <ul className="space-y-2">
              <li>+91 6786 123 678</li>
              <li>abc@example.com</li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Note */}
      <div className="text-center mt-10 text-sm text-gray-500 border-t pt-4">
        © {new Date().getFullYear()} Appointment Booking. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
