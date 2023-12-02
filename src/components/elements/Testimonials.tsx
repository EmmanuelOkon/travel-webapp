'use client';

import { useCallback, useRef } from 'react';

import { TestimonialTexts } from '../../utils/staticData';
import Slider from 'react-slick';
import { Button } from '../assets/Button';

import { IoCaretDown, IoCaretUp } from 'react-icons/io5';

import Card from '../assets/Card';
import ProfileImg1 from '../../../public/profile1.jpeg';
import ProfileImg2 from '../../../public/profile2.jpeg';
import ProfileImg3 from '../../../public/profile3.jpeg';
import ProfileImg4 from '../../../public/profile4.jpeg';

const Testimonials = () => {
  const sliderRef = useRef<Slider | null>();

  const next = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const previous = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
  };

  const renderProfileImg = useCallback(
    (element: number): string | undefined => {
      switch (element) {
        case 0:
          return ProfileImg2.src as string;
        case 1:
          return ProfileImg1.src as string;
        case 2:
          return ProfileImg3.src as string;
        case 3:
          return ProfileImg4.src as string;
        default:
          return '';
      }
    },
    []
  );

  return (
    <div className="max-width lg:px24 md:px10 px6 relative mt-36 flex h-auto w-full flex-col items-start justify-center gap-5">
      <div className="grid w-full gap-8 md:grid-cols-2 md:gap-5 lg:gap-0">
        {/* Text and Steps Container  */}
        <div className="flex w-full flex-col gap-6">
          <p className="text-color3/80 text-base font-light tracking-widest">
            {TestimonialTexts.firstText}
          </p>
          <h1 className="text-color3 text-4xl font-medium md:text-3xl lg:text-5xl">
            {TestimonialTexts.secondText}
          </h1>
        </div>
        {/* Testimonial Slides Container  */}
        <div className="flex w-full flex-col items-center justify-center gap-4 md:flex-row lg:h-[400px]">
          <div className="w-[90%] lg:h-[250px]">
            <Slider
              ref={(slider) => (sliderRef.current = slider)}
              {...settings}
            >
              {TestimonialTexts.feedBacks.map((feedBack, index) => (
                <div key={index} className="w-full">
                  <Card
                    key={index}
                    cardClass="bg-white shadow border-[1px] border-color3/10 relative rounded-xl p-4 lg:h-[200px] h-[260px] lg:mb-4 w-full flex gap-4 justify-start"
                    imageAlt={feedBack.person}
                    imageSrc={renderProfileImg(index)}
                    imageWrapperClass="w-20 h-20 rounded-full absolute lg:bottom-4 bottom-3 right-4 overflow-hidden"
                    cover="object-cover object-top"
                    textWrapperClass="flex flex-col justify-center gap-6"
                  >
                    <span className="text-color3 text-[0.84rem] font-light">
                      {feedBack.text}
                    </span>
                    <div className="flex flex-col gap-2">
                      <h4 className="text-color3 text-base font-medium">
                        {feedBack.person}
                      </h4>
                      <p className="text-color3 text-sm font-light">
                        {feedBack.location}
                      </p>
                    </div>
                  </Card>
                </div>
              ))}
            </Slider>
          </div>
          {/* Controllers  */}
          <div className="flex flex-row gap-4 pb-5 md:flex-col">
            <Button
              onClick={previous}
              id="prev"
              className="bg-color2/30 text-color3 hover:bg-color2 cursor-pointer rounded-full border-none p-2 outline-none"
              type="button"
            >
              <IoCaretUp size={18} color="currentColor" weight="fill" />
            </Button>
            <Button
              onClick={next}
              id="next"
              className="bg-color2/30 text-color3 hover:bg-color2 cursor-pointer rounded-full border-none p-2 outline-none"
              type="button"
            >
              <IoCaretDown size={18} color="currentColor" weight="fill" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
