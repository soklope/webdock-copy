import React from "react";
import "./view-styles/RoadmapView.scss";
import FilterContainer from "../components/SortFunctionAndFilterContainer/FilterContainer/FilterContainer";
import StatusfiltersContainer from "../components/StatusfiltersContainer/StatusfiltersContainer";
import ListViewArray from "../components/ListViewArray/ListViewArray";

export default function ListView() {
  
  return (
    <>
      <div className="filter-flex-container">
        <FilterContainer />
        <StatusfiltersContainer />
      </div>

      <ListViewArray />
    </>
  );
}
