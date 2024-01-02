import { useState } from "react";
import ViewToggleSwitch from "../ViewToggleSwitchContainer/ViewToggleSwitch/ViewToggleSwitch";
import "./ViewToggleSwitchContainer.scss";
import useRoadmapStore from "../../stores/viewStore";

// Component managing toggle switches between Roadmap and List views.
export default function ViewToggleSwitchContainer() {
  const { toggleRoadmapView } = useRoadmapStore();
  const [isRoadmapView, setIsRoadmapView] = useState(true);

  // Function to toggle between Roadmap and List views
  const toggleView = (isRoadmap) => {
    if (isRoadmap != isRoadmapView) {
      setIsRoadmapView(!isRoadmapView);
      toggleRoadmapView()
    }
  };

  // Renders toggle switches with dynamic class names based on current view
  return (
    <div className="toggle-switches-container">
      <ViewToggleSwitch
        switchIcon={
          `view-toggle-switch__roadmap${isRoadmapView ? "--active" : ""
          }`}
        onToggle={toggleView}
        isRoadmap={true}
      />
      <ViewToggleSwitch
        switchIcon={
          `view-toggle-switch__list${isRoadmapView ? "" : "--active"
          }`}
        onToggle={toggleView}
        isRoadmap={false}
      />
    </div>
  );
}
