// import { useState } from "react";

import Accordian from "./Accordian";

const FaqSection = () => {


  const faqData = [
    {
      heading: "do we have any additional discount?",
      body: "Yes, we offer various discounts and promotions throughout the year to provide our customers with the best value. Keep an eye on our website for updates on special offers and discounts.",
    },
    {
      heading: "IS exchange facilty available?",
      body: "Yes we do accept your old batteries provide great exchange value however the price reduced may depend upon the life, health and brand of the battery.",
    },
    {
      heading: "do we  OFFER INSTALLATION SERVICES?",
      body: " Yes we do  offer delivery and installation of batteries and inverters to your home , office or wherever you need!!",
    },
    {
      heading: "do customers get after sale services?",
      body: "Yes we have a well trained staff to provide our customers with best after sale services. our general check-up is absolutely free of charge while our repair services are best in the market at minimal cost!!",
    },
  ];


  return (
    <section className="faq">
      <div className="container">
        <h1>Quick Answers to Common Questions</h1>
        <div className="faq-container">
          {faqData.map((item,index) => (
            <Accordian key={index} heading={item.heading} body={item.body} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
