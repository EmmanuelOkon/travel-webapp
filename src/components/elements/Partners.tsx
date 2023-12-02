'use client';

import Slider from 'react-slick';
import Card from '../assets/Card';

const Partners = () => {
  
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };
  return (
    <div className="max-width lg:px20 px6 my-16 w-full lg:my-0">
      <Slider {...settings}>
        <Card
          cardClass="p-2 bg-white rounded-lg cursor-pointer flex item-center justify-center"
          imageAlt="partenrsLogo"
          imageSrc="/partners1.png"
          imageWrapperClass="w-[120px] h-[50px]"
          cover="object-contain"
        />
        <Card
          cardClass="p-2 bg-white rounded-lg cursor-pointer flex item-center justify-center"
          imageAlt="partenrsLogo"
          imageSrc="/partners2.png"
          imageWrapperClass="w-[120px] h-[50px]"
          cover="object-contain"
        />
        <Card
          cardClass="p-2 bg-white rounded-lg cursor-pointer flex item-center justify-center"
          imageAlt="partenrsLogo"
          imageSrc="/partners3.png"
          imageWrapperClass="w-[120px] h-[50px]"
          cover="object-contain"
        />
        <Card
          cardClass="p-2 bg-white rounded-lg cursor-pointer flex item-center justify-center"
          imageAlt="partenrsLogo"
          imageSrc="/partners1.png"
          imageWrapperClass="w-[120px] h-[50px]"
          cover="object-contain"
        />
        <Card
          cardClass="p-2 bg-white rounded-lg cursor-pointer flex item-center justify-center"
          imageAlt="partenrsLogo"
          imageSrc="/partners2.png"
          imageWrapperClass="w-[120px] h-[50px]"
          cover="object-contain"
        />
        <Card
          cardClass="p-2 bg-white rounded-lg cursor-pointer flex item-center justify-center"
          imageAlt="partenrsLogo"
          imageSrc="/partners3.png"
          imageWrapperClass="w-[120px] h-[50px]"
          cover="object-contain"
        />
        <Card
          cardClass="p-2 bg-white rounded-lg cursor-pointer flex item-center justify-center"
          imageAlt="partenrsLogo"
          imageSrc="/partners1.png"
          imageWrapperClass="w-[120px] h-[50px]"
          cover="object-contain"
        />
        <Card
          cardClass="p-2 bg-white rounded-lg cursor-pointer flex item-center justify-center"
          imageAlt="partenrsLogo"
          imageSrc="/partners2.png"
          imageWrapperClass="w-[120px] h-[50px]"
          cover="object-contain"
        />
        <Card
          cardClass="p-2 bg-white rounded-lg cursor-pointer flex item-center justify-center"
          imageAlt="partenrsLogo"
          imageSrc="/partners3.png"
          imageWrapperClass="w-[120px] h-[50px]"
          cover="object-contain"
        />
      </Slider>
    </div>
  );
};

export default Partners;
