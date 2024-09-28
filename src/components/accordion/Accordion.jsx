import React, { useEffect, useState } from "react";
import "./index.css";

const Accordion = ({ accordionData, defaultImageSrc }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="accordion-container">
      {Array.isArray(accordionData) && accordionData.length > 0 ? (
        accordionData.map((item, index) => (
          <div className="accordion-item" key={index}>
            <div
              className="accordion-header"
              onClick={() => toggleAccordion(index)}
            >
              <h3>{item.title}</h3>
              <span className="accordion-icon">
                {activeIndex === index ? "-" : "+"}
              </span>
            </div>
            <div
              className={`accordion-content ${
                activeIndex === index ? "active" : ""
              }`}
            >
              <img
                src={item.imageSrc ? item.imageSrc : defaultImageSrc}
                alt={`Accordion ${index + 1}`}
              />
              <p className="description">{item.body}</p>
            </div>
          </div>
        ))
      ) : (
        <p>No accordion data available.</p>
      )}
    </div>
  );
};

export default Accordion;
