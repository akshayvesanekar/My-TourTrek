import React from "react";
import { FaInstagram, FaFacebook, FaWhatsapp, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return <>
    <div className="bg-slate-100 text-blue-700 flex flex-col items-center justify-center px-5 py-10">
      <h1 className="text-3xl font-bold text-blue-700">
        My TourTrek <span className="text-orange-500">App</span>
      </h1>
      <p className="text-center">Curated Travel Experiences for the Modern Explorer.</p>
      <div className="flex justify-center items-center py-3">
        <FaInstagram className="text-xl m-2 cursor-pointer hover:scale-105 hover:text-orange-500 transition-all" />
        <FaFacebook className="text-xl m-2 cursor-pointer hover:scale-105 hover:text-orange-500 transition-all" />
        <FaWhatsapp className="text-xl m-2 cursor-pointer hover:scale-105 hover:text-orange-500 transition-all" />
        <FaTwitter className="text-xl m-2 cursor-pointer hover:scale-105 hover:text-orange-500 transition-all" />
      </div>
      <p className="text-center">Copyright &copy; 2023 Travel - All rights reserved.</p>
    </div>
    </>
}

export default Footer;
