'use client';

import { Text } from '../assets/Text';
import { ServiceTexts } from '../../utils/staticData';

import Card from '../assets/Card';
import { useCallback } from 'react';
import Icon1 from '../../../public/icon1.png';
import Icon2 from '../../../public/icon2.png';
import Icon3 from '../../../public/icon3.png';
import Icon4 from '../../../public/icon4.png';

import Image from 'next/image';

const Services = () => {
  const renderServiceIcon = useCallback(
    (element: number): string | undefined => {
      switch (element) {
        case 0:
          return Icon1.src as string;
        case 1:
          return Icon2.src as string;
        case 2:
          return Icon3.src as string;
        case 3:
          return Icon4.src as string;
        default:
          return '';
      }
    },
    []
  );
  return (
    <div className="max-width lg:px24 md:px20 px6 relative flex h-auto w-full flex-col items-center justify-center">
      <Image
        src="/plusGroup.png"
        width={200}
        height={200}
        alt="Vector"
        className="absolute right-4 top-0 h-24 lg:h-36"
      />
      <div className="flex w-full flex-col items-center justify-center gap-3 pt-32">
        <Text
          as="p"
          className="text-color3/80 text-base font-semibold tracking-widest"
        >
          {ServiceTexts.firstText}
        </Text>
        <Text
          as="h2"
          className="text-color3 text-2xl font-semibold capitalize md:text-4xl"
        >
          {ServiceTexts.secondText}
        </Text>

        <div className="z-20 my-12 grid h-auto w-full gap-7 px-8 md:grid-cols-2 md:gap-10 md:px-0 lg:grid-cols-4 lg:gap-7">
          {ServiceTexts.cards.map((card, index) => (
            <Card
              cardClass="w-full bg-white flex flex-col items-center justify-center py-6 cursor-pointer transition duration-300 hover:shadow-2xl px-5 rounded-xl cardPseudo after:bg-color1"
              imageWrapperClass="w-28 h-28 relative z-10 before:content-[''] before:absolute before:top-3 before:right-3 before:w-16 before:h-16 before:bg-color2/30 before:-z-10 before:rounded-tl-3xl before:rounded-br-3xl"
              cover="object-cover"
              imageAlt={card.firstText}
              imageSrc={renderServiceIcon(index)}
              textWrapperClass="w-full flex flex-col items-center gap-2"
              key={index}
            >
              <Text
                as="h4"
                className="text-color3 rounded text-base font-medium"
              >
                {card.firstText}
              </Text>
              <Text
                as="p"
                className="text-color3  text-center text-sm font-light"
              >
                {card.secondText}
              </Text>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
