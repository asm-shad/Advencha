import Image from "next/image";
import React from "react";

type Props = {
  image: string;
  title: string;
  para: string;
};

const WhyChooseCard = ({ image, title, para }: Props) => {
  return (
    <div>
      <Image
        src={image}
        alt="image"
        width={70}
        height={70}
        className="mx-auto"
      ></Image>
      <h1 className="mt-6 text-center text-gray-900 font-medium text-lg">
        {title}
      </h1>
      <p className="mt-2 text-center text-xs font-medium text-gray-700">
        {para}
      </p>
    </div>
  );
};

export default WhyChooseCard;
