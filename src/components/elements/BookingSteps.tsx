"use client"

import { useCallback } from "react";

import { List } from "../assets/List";
import { Text } from "../assets/Text";
import { BookingStepsTexts } from "../../utils/staticData";

import { SlPlane } from "react-icons/sl";
import { IoWalletOutline } from "react-icons/io5";
import { PiAirplaneInFlight, PiBuildingsBold, PiReceiptDuotone  } from "react-icons/pi";
import { CiMap } from "react-icons/ci";


import Card from "../assets/Card";


interface BookingStepsProps {
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
}

interface CardProps {
    className?: string;
    imageWrapperClass?: string;
    imageAlt?: string | undefined;
    imageSrc?: string | undefined
    textWrapperClass?: string;
    cover?: string;
    children?: React.ReactNode;
}


const BookingSteps: React.FC<BookingStepsProps> = (
  props: BookingStepsProps
) => {
  props = {

    ...props,
  };

  const renderIcons = useCallback((element: number) => {
    switch (element) {
      case 0:
        return <CiMap size={15} color="currentColor" weight="fill" />;
      case 1:
        return <IoWalletOutline size={15} color="currentColor" weight="fill" />;
      case 2:
        return (
          <PiAirplaneInFlight size={15} color="currentColor" weight="fill" />
        );
      default:
        return "";
    }
  }, []);

  return (
    <div className="max-width w-full h-auto flex flex-col items-start justify-center relative lg:px-24 md:px-10 px-6 my-28 gap-5">
      <Text
        as="p"
        className="font-light text-base text-color3/80 tracking-widest"
      >
        {BookingStepsTexts.firstText}
      </Text>
      <div className="w-full grid md:grid-cols-2 lg:gap-6 gap-12 md:gap-5">
        {/* Text and Steps Container  */}
        <div className="w-full flex flex-col gap-6 order-2 md:order-1">
          <Text
            as="h1"
            className="lg:text-5xl md:text-3xl text-4xl text-color3 font-medium"
          >
            {BookingStepsTexts.secondText}
          </Text>
          <ul className="flex flex-col gap-8 lg:mt-5 mt-3">
            {BookingStepsTexts.listOfSteps.map((step, index) => (
              <List
                className="flex gap-5 items-center justify-start"
                key={index}
                
              >
                <Text
                  as="p"
                  className={`text-white ${
                    index === 0
                      ? "bg-color2"
                      : index === 1
                      ? "bg-color1"
                      : "bg-color3"
                  } p-2 rounded-md`}
                >
                  {renderIcons(index)}
                </Text>
                <Text as="p" className="text-sm text-color3 font-light">
                  {step.text}
                </Text>
              </List>
            ))}
          </ul>
        </div>
        {/* Card Container  */}
        <div className="w-full flex flex-col justify-center lg:items-center items-start relative order-1 md:order-2">
          {/* First Card  */}
          <Card
            cardClass="lg:w-[70%] md:w-[80%] w-[90%] shadow-2xl shadow-sky-500/70 p-4 rounded-xl flex flex-col gap-4"
            imageAlt={BookingStepsTexts.cardOne.name}
            imageSrc={BookingStepsTexts.cardOne.imageSrc}
            imageWrapperClass="h-[150px] overflow-hidden rounded-xl shadow"
            cover="object-cover object-top"
            textWrapperClass="flex flex-col gap-3"
          >
            <Text as="h4" className="text-base font-medium text-color3">
              {BookingStepsTexts.cardOne.name}
            </Text>
            <Text as="p" className="text-sm font-light text-color3">
              {BookingStepsTexts.cardOne.date}
            </Text>
            <div className="flex items-center gap-6">
              <Text
                as="span"
                className="text-color3 font-light bg-color3/5 p-2.5 rounded-full"
              >
                <PiReceiptDuotone size={18} color="currentColor" weight="light" />
              </Text>
              <Text
                as="span"
                className="text-color3 font-light bg-color3/5 p-2.5 rounded-full"
              >
                <CiMap size={18} color="currentColor" weight="light" />
              </Text>

              <Text
                as="span"
                className="text-color3 font-light bg-color3/5 p-2.5 rounded-full"
              >
                <SlPlane size={18} color="currentColor" weight="light" />
              </Text>
            </div>
            <Text
              as="p"
              className="text-sm font-light text-color3 flex items-center gap-3"
            >
              <PiBuildingsBold size={18} color="currentColor" weight="light" />
              {BookingStepsTexts.cardOne.people}
            </Text>
          </Card>

          {/* Second Absolute Card  */}
          <Card
            cardClass="flex gap-3 justify-start items-start absolute lg:right-0 -right-4 bottom-10 bg-white py-3 px-4 border-2 border-color3/5 shadow-md rounded-xl"
            imageAlt={BookingStepsTexts.cardTwo.destination}
            imageSrc={BookingStepsTexts.cardTwo.imageSrc}
            cover="object-cover object-top"
            imageWrapperClass="h-16 w-16 rounded-full overflow-hidden"
            textWrapperClass="flex flex-col gap-2"
          >
            <Text as="p" className="text-xs font-light text-color3">
              {BookingStepsTexts.cardTwo.status}
            </Text>
            <Text as="h4" className="text-base font-medium text-color3">
              {BookingStepsTexts.cardTwo.destination}
            </Text>
            <Text
              as="p"
              className="text-xs font-light text-color3 pb-2 relative before:w-[40%] before:h-1 before:absolute before:bottom-0 before:left-0 before:bg-color1"
            >
              {BookingStepsTexts.cardTwo.completion}
            </Text>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default BookingSteps;
