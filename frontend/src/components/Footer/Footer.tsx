import React from "react";
import {Navbar} from "../Navbar/Navbar";
import Image from "next/image";
import logo from "../../../assets/shared/desktop/logo.svg";
import facebook from "../../../assets/shared/desktop/icon-facebook.svg";
import instagram from "../../../assets/shared/desktop/icon-instagram.svg";
import twitter from "../../../assets/shared/desktop/icon-twitter.svg";
const Footer = () => {
  return (
    <footer className="h-[365px] bg-black w-screen flex flex-col justify-center items-center mt-44">
      <div id="footerConainer" className="w-[1110px] relative">
        <div className="max-w-[1440px] h-20 flex mx-auto mt-0 items-center justify-between w-full z-10 border-b-[#979797]">
          <h1 className="text-white font-black text-2xl text-pretty">
            <Image src={logo} alt="audiophile" />
          </h1>
          <Navbar />
        </div>
        <div className="flex">
          <div className= "w-7/12 text-gray-500 leading-7">
            <p>Audiophile is an all in one stop to fulfill your audio needs. 
              We&apos;re a small team <br></br> of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. 
              Come and visit our demo facility - we&apos;re open 7 <br></br> days a week.</p>
          </div>
          <div className="w-1/2 flex items-center justify-end gap-5">
            <Image src={facebook} alt="Access our facebook page here" ></Image>
            <Image src={instagram} alt="Access our instagram page here" ></Image>
            <Image src={twitter} alt="Access our twitter page here" ></Image>         
          </div>
        </div>
      <p className="font-bold text-gray-600 w-full mt-12">Copyright 2021. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
