'use client';

import { Picture } from '../assets/Image';

import { HeroTexts } from '../../utils/staticData';
import { Button } from '../assets/Button';

import { FaPlay } from 'react-icons/fa';
// import { Fade, Slide } from "react-awesome-reveal";

const Hero = () => {
  return (
    <div className="max-width lg:h[100vh] md:h[550px] relative flex h-[830px] w-full justify-end overflow-x-hidden">
      <div className="absolute left-0 top-0 grid h-auto w-full bg-[#FFF1DA] px-5 pt-24 md:grid-cols-2 md:px-8 md:pt-32 lg:h-full lg:px-24 lg:pt-0 ">
        <div className="md:order1 order- flex max-w-lg flex-col justify-center gap-3 md:gap-6">
          <span className="font-poppins text-[14px] font-semibold uppercase text-green-600 ">
            {HeroTexts.firstText}
          </span>
          <h1 className=" z[100] text-[50px] font-extrabold leading-none text-blue-950 sm:text-[64px] 2xl:text-[72px]">
            {HeroTexts.secondText}
          </h1>
          <p className="my-6 max-w-md text-[14px] text-[#5E6282] lg:tracking-wider">
            {HeroTexts.thirdText}
          </p>
          <div className="flex w-full items-center justify-between gap-0 md:justify-start md:gap-6 lg:gap-12">
            <Button
              type="button"
              className="bg-color2 rounded-lg border-none px-5 py-3 font-extralight text-white outline-none hover:bg-orange-600 lg:px-7"
            >
              {HeroTexts.firstButton}
            </Button>
            <div className="flex cursor-pointer items-center gap-3 rounded-lg hover:bg-green-400 hover:text-white lg:gap-6 ">
              <div className="relative flex h-12 w-12">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                <span className="relative flex h-12 w-12 items-center justify-center rounded-full bg-green-400 text-white">
                  <FaPlay size={20} color="currentColor" weight="fill" />
                </span>
              </div>
              <Button type="button" className="border-none pr-4 outline-none ">
                {HeroTexts.secondButton}
              </Button>
            </div>
          </div>
        </div>
        <div className="w1/2 justifycenter flex flex-col items-center justify-end">
          <div className="flex w-full items-end justify-end xl:flex-[1.5] ">
            <Picture
              image="/heroMockUp.png"
              alt="heroMockUp"
              className="py10 w-full  "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
