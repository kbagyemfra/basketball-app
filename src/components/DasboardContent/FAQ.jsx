import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { AiFillCalendar } from "react-icons/ai";
import { MdTimelapse } from "react-icons/md";
import { IoMdCash } from "react-icons/io";

const FAQ = ({ params }) => {
  const faqs = [
    {
      icon: <AiFillCalendar />,
      text: "Find out when he started playing ball",
    },
    {
      icon: <MdTimelapse />,
      text: "How much does he play a game?",
    },
    {
      icon: <IoMdCash />,
      text: "How much does he make a year?",
    },
  ];

  return (
    <div className="faqs-section">
      <div className="title">
        <h2>FAQS</h2>
      </div>

      {/* Content */}
      <div className="faqs">
        {faqs.map((faq, index) => {
          return (
            <div className="faq" key={index}>
              <div className="info">
                {faq.icon}
                <h4>{faq.text}</h4>
              </div>
              <IoIosArrowForward />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FAQ;
