import { React, useState } from "react";
import "../ViewToggleSwitch/ViewToggleSwitch.scss";

// This component represents a toggle switch that takes 2 props.
export default function ViewToggleSwitch({ switchIcon, onToggle, isRoadmap }) {
  // Renders a clickable toggle switch element.
  const [isTooltipVisible, setTooltipVisible] = useState(false);

  const handleMouseEnter = () => {
    setTooltipVisible(true);
  };

  const handleMouseLeave = () => {
    setTooltipVisible(false);
  };

  return (
    <>
      <div className="view-toggle-switch-tooltip-container">
        <button className="view-toggle-switch "
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <span className={switchIcon} onClick={() => onToggle(isRoadmap)}></span>
        </button>
        {isTooltipVisible && <span className="view-toggle-switch-tooltip-text">{isRoadmap ? "Roadmap View" : "List View"}</span>}
      </div>






      {/* <div className="tooltip-container">
        <button
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          Hover me
        </button>
        {isTooltipVisible && <span className="tooltip-text">This is a tooltip</span>}
      </div> */}
    </>
  );
}
