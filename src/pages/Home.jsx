import React from "react";

const Home = () => {
  return (
    <div className="bg-homeBgMobile  bg-no-repeat bg-cover h-screen  flex justify-center sm:bg-homeBgTablet md:bg-homeBgDesktop">
      <div className="flex flex-col mx-20 gap-[20rem] items-center  py-[200px] md:flex-row">
        <div className=" text-center w-1/2">
          <h5>SO, YOU WANT TO TRAVEL TO</h5>
          <h1 className="text-white uppercase  mt-8 ">space</h1>
          <p className="text-justify  text-wrap ">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className="flex w-1/2  text-3xl uppercase">
          <button className="w-[10rem] h-[10rem] bg-white text-black relative rounded-full  duration-300 ease-in-out  after:content-[''] after:absolute after:w-[20rem] after:h-[20rem] after:rounded-full after:-top-14   after:-left-14 after:right-0 after:opacity-30 after:bg-white after:scale-50  hover:after:scale-100  hover:after:transition sm:w-[17rem] sm:h-[17rem] sm:after:w-[24rem] sm:after:h-[24rem] ">
            explore
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
