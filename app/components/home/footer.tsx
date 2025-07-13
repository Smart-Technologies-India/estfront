import { Link } from "@remix-run/react";
import {
  Fa6SolidDownLeftAndUpRightToCenter,
  Fa6SolidFireExtinguisher,
  Fa6SolidHouseChimneyMedical,
  Fa6SolidPhone,
} from "../icons/icons";

const Footer = () => {
  return (
    <>
      <section className="bg-[#fefefe] p-10 sm:p-20">
        <div className="flex xl:items-center items-start justify-between gap-6 flex-col xl:flex-row">
          <div className="shrink-0">
            <h1 className="text-black font-medium text-left text-2xl font-sans mt-4">
              Location
            </h1>
            <p className="text-black font-medium text-left text-lg font-sans mt-2">
              Office of the Collector & District Magistrate <br />
              Bhitwadi Road, Municipal Market, Dholar,
              <br /> Moti Daman, Daman,
              <br />
              Daman and Diu and Dadra and Nagar Haveli 396210
            </p>
          </div>
          <iframe
            title="frame"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14958.90673931113!2d72.8328819!3d20.394156!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0d094bbefa247%3A0x147da831799ce416!2sOffice%20of%20the%20Collector%20%26%20District%20Magistrate%2C%20Daman!5e0!3m2!1sen!2sin!4v1696066672958!5m2!1sen!2sin"
            width="600"
            height="450"
            className="shrink-0 border-none rounded-xl scale-50 origin-top-left sm:scale-100"
            loading="lazy"
          ></iframe>
        </div>
      </section>

      <section className="bg-[#eeeeee] w-full p-10 md:p-20">
        <h1 className="text-center font-normal roboto text-4xl">
          Helpline Number
        </h1>
        <div className="flex justify-around gap-6 mt-12 flex-wrap">
          <div className="grid place-items-center">
            <Fa6SolidPhone className="text-3xl text-[#c30734]"></Fa6SolidPhone>
            <p className="text-gray-600 py-2 text-xl mt-4">Police : 100</p>
          </div>
          <div className="grid place-items-center">
            <Fa6SolidFireExtinguisher className="text-3xl text-[#c30734]"></Fa6SolidFireExtinguisher>
            <p className="text-gray-600 py-2 text-xl">Fire Station : 101</p>
          </div>
          <div className="grid place-items-center">
            <Fa6SolidHouseChimneyMedical className="text-3xl text-[#c30734]"></Fa6SolidHouseChimneyMedical>
            <p className="text-gray-600 py-2 text-xl">AMBULANCE : 108</p>
          </div>
          <div className="grid place-items-center">
            <Fa6SolidDownLeftAndUpRightToCenter className="text-3xl text-[#c30734]"></Fa6SolidDownLeftAndUpRightToCenter>
            <p className="text-gray-600 py-2 text-xl">EMERGENCY : 112</p>
          </div>
        </div>
      </section>
      <div className="flex items-center justify-center mx-2 px-4 py-4 flex-wrap gap-y-6">
        <img
          src="/banner/one.png"
          alt="footerimage"
          className="w-44 h-16 object-cover object-center border-x-2"
        />
        <img
          src="/banner/two.png"
          alt="footerimage"
          className="w-44 h-16 object-cover object-center border-x-2"
        />
        <img
          src="/banner/three.png"
          alt="footerimage"
          className="w-44 h-16 object-cover object-center border-x-2"
        />
        <img
          src="/banner/four.png"
          alt="footerimage"
          className="w-44 h-16 object-cover object-center border-x-2"
        />
        <img
          src="/banner/five.png"
          alt="footerimage"
          className="w-44 h-16 object-cover object-center border-x-2"
        />
        <img
          src="/banner/six.png"
          alt="footerimage"
          className="w-44 h-16 object-cover object-center border-x-2"
        />
      </div>
      <section className="bg-[#0c0c0c]">
        <div className=" w-full bg-[#2a2a2a]">
          <div className="flex items-center justify-center py-1 gap-2 mx-2 md:mx-auto md:w-9/12 px-4 flex-wrap">
            <Link className="text-lg font-normal text-white px-1" to="/">
              FAQ /
            </Link>
            <Link className="text-lg font-normal text-white px-1" to="/">
              Website Policies /
            </Link>
            <Link className="text-lg font-normal text-white px-1" to="/">
              Contact Us /
            </Link>
            <Link className="text-lg font-normal text-white px-1" to="/">
              Help /
            </Link>
            <Link className="text-lg font-normal text-white px-1" to="/">
              Web Information Mnager
            </Link>
          </div>
        </div>
        <div className="w-full bg-[#0c0c0c]">
          <div className="py-1 gap-2 mx-2 md:mx-auto md:w-9/12 px-4 y-6">
            <p className="text-center text-xs font-normal text-white my-6">
              Content Owned by U.T. Administration of Dadra and Nagar Haveli and
              Daman and Diu. Government of India.
              <br />
              Developed and hosted by National Informatics Centre,
              <br />
              Ministry of Electronics & Information Technology, Government of
              India
            </p>
            <p className="text-center text-sm font-normal text-white y-4">
              Last Updated <span className="font-semibold">Aug 14, 2023</span>
            </p>
          </div>
          <div className="flex items-center justify-center gap-6 mx-2 md:mx-auto md:w-9/12 px-4 py-10 flex-wrap">
            <img
              src="/images/S3WaaS.png"
              alt="footerimage"
              className="w-44 h-16 object-cover object-center"
            />
            <img
              src="/images/nicLogo.png"
              alt="footerimage"
              className="w-44 h-16 object-cover object-center"
            />
            <img
              src="/images/digital-india.png"
              alt="footerimage"
              className="w-44 h-16 object-cover object-center"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
