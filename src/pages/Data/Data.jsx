import React from "react";
import { Link } from "react-router-dom";
import Image from "../../assets/images/other_images/type.png";
import Logo from "../../assets/images/other_images/logo_pen.png";

const Data = () => {
  return (
    <div className="block m-auto relative h-fit mx-4 md:mx-10 border-1 border-cyan-200">
      <Link to={"/data/text"}>
        <div className="flex overflow-y-auto h-[25vh] justify-start md:px-24 items-center m-auto mt-10 md:w-[80%] text-left bg-blue-100 rounded-md border-solid border-black border-2">
          <div className="hidden md:block  h-4/5 w-1/5">
            <img src={Logo} className="h-full pl-5" />
          </div>
          <div className="w-4/5">
            <h1 className="m-2 text-2xl font-bold">
              Help us by converting Nepali text into handwritten text.
            </h1>
            <p className="m-2 text-md font-medium">
              In this section , you can help us by providing handwritten images
              of Nepali text
            </p>
          </div>
        </div>
      </Link>
      <Link to={"/data/annotate"}>
        <div className="flex h-[25vh] overflow-y-auto justify-start md:px-24 items-center m-auto mt-10 md:w-[80%]  text-left bg-blue-100 rounded-md border-solid border-black border-2">
          <div className="hidden md:block h-4/5 w-1/5 ">
            <img src={Image} className="h-full" />
          </div>
          <div className="w-4/5">
            <h1 className="m-2 text-2xl font-bold">
              Help us by converting handwritten Nepali sentences into digital
              text.
            </h1>
            <p className="m-2 text-md font-medium">
              In this section , you can help us by annotating already written
              Nepali characters. Label each images by typing out in the
              textfield.
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Data;
