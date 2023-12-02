'use client';

import SubscribeForm from '../assets/Subscribe';
import { NewsletterTexts } from '../../utils/staticData';
import Image from 'next/image';

const NewsLetter = () => {
  return (
    <div className="max-width">
      <div className="maxwidth relative my-32 flex h-[400px] w-full items-start justify-between">
        <div className="bg-color3/10 h-[70%] w-[30%] self-end rounded-r-xl"></div>
        <div className="bg-color3/10 h-[70%] w-[30%] rounded-l-xl"></div>
        <div
          className="bg-color3/5 absolute flex h-[100%] w-full flex-col items-center
            justify-center gap-10 px-5 md:gap-16"
        >
          <h1 className="text-color3/70 w-full text-center text-xl md:text-2xl lg:w-3/5 lg:text-3xl">
            {NewsletterTexts.firstText}
          </h1>
          <SubscribeForm />
        </div>
        <Image
          src="/plusGroup2.png"
          width={200}
          height={200}
          alt="Plus"
          className="absolute -bottom-16 right-2 h-32"
        />
      </div>
    </div>
  );
};

export default NewsLetter;
