import React from "react";

const Home = () => {
  const circleAfterStyles =
    "after-content-[''] after:absolute after:bg-white after:scale-50 after:opacity-30 after:w-[12rem] after:h-[12rem] after:rounded-full after:-top-6 after:-left-6 md:after:w-[20rem] md:after:h-[20rem] md:after:-top-10 md:after:-left-9 lg:after:w-[23rem] lg:after:h-[23rem] lg:after:-top-12 lg:after:-left-12 hover:after:scale-100 after:transition";

  return (
    <div className="bg-homeBgMobile  bg-no-repeat bg-cover h-screen  flex  sm:bg-homeBgTablet md:bg-homeBgDesktop">
      <div className="flex flex-col  py-[200px] md:flex-row sm:mt-32 md:mt-40">
        <div className=" text-center w-full  px-4 md:w-1/2 sm:px-auto  lg:px-24">
          <h5>SO, YOU WANT TO TRAVEL TO</h5>
          <h1 className="text-white uppercase  mt-8">space</h1>
          <p className="text-justify  text-wrap ">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className="flex w-full  justify-center  text-3xl uppercase  md:w-1/2">
          <button
            className={` w-[9rem] h-[9rem] bg-white rounded-full relative text-dark uppercase mt-20 md:w-[15rem] md:h-[15rem] lg:w-[17rem] lg:h-[17rem] duration-300 ease-in-out ${circleAfterStyles}`}
          >
            explore
          </button>

          {/* <button className="w-[10rem] h-[10rem] bg-white text-black relative rounded-full  duration-300 ease-in-out  after:content-[''] after:absolute after:w-[20rem] after:h-[20rem] after:rounded-full after:-top-14   after:-left-14 after:right-0 after:opacity-30 after:bg-white after:scale-50  hover:after:scale-100  hover:after:transition sm:w-[17rem] sm:h-[17rem] sm:after:w-[24rem] sm:after:h-[24rem] ">
            explore
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
