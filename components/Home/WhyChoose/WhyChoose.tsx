import SectionHeading from "@/components/Helper/SectionHeading";
import React from "react";
import WhyChooseCard from "./WhyChooseCard";

const WhyChoose = () => {
  return (
    <div className="pt-16 pb-24">
      <SectionHeading
        heading="What Makes Us Different?"
        paragraph="Experience hassle-free travel with expert recommendations, unbeatable deals, and personalized services!"
      ></SectionHeading>
      <div className="grid w-[80%] mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 items-center mt-20">
        {/* Card  */}
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
        >
          <WhyChooseCard
            image="/images/c1.svg"
            title="Best Price Guarranted"
            para="Get the most value for your money with our unbeatable deals. We ensure competitive prices so you can travel more while spending less."
          ></WhyChooseCard>
        </div>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-delay="150"
        >
          <WhyChooseCard
            image="/images/c2.svg"
            title="Easy & Quick Booking"
            para="Seamlessly plan your trips with our fast and user-friendly booking system. A hassle-free process from selection to confirmation in just a few clicks."
          ></WhyChooseCard>
        </div>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-delay="300"
        >
          <WhyChooseCard
            image="/images/c3.svg"
            title="Customer Service 24/7"
            para="We're here for you anytime, anywhere. Our dedicated support team is available 24/7 to assist with any queries, ensuring a stress-free travel experience."
          ></WhyChooseCard>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
