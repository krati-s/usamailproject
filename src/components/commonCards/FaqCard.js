import React, { useState } from "react";

const AccordionItem = ({ question, answer }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const toggleAccordion = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button
          className={`accordion-button ${isCollapsed ? "" : "collapsed"}`}
          type="button"
          onClick={toggleAccordion}
        >
          <span>{question}</span>
        </button>
      </h2>
      <div
        className={`accordion-collapse collapse ${isCollapsed ? "show" : ""}`}
      >
        <div className="accordion-body">
        {answer.map((ans , key) => <p>
          {key === 0 && <strong>A: </strong>}{ans}
        </p>)}
          
        </div>
      </div>
    </div>
  );
};

export default AccordionItem;
