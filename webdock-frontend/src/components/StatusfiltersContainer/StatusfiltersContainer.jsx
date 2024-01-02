// Import the 'Statusfilter' component and the associated SCSS file.
import Statusfilter from "../Statusfilters/Statusfilters";
import "./StatusfiltersContainer.scss";
// import { postArrayDb } from "../../dummyDb";
// import ListViewPostItem from '../ListViewPostItem/ListViewPostItem';
import React, { useState, useEffect } from "react";
import usePostArrayStore from "../../stores/postArrayStore";

export default function StatusfiltersContainer() {
  const { statusFilter, filterAllPosts } = usePostArrayStore();

  const [selectedFilters] = useState([]);
  const [posts, setPosts] = useState([]);
  const statusArray = [];
  const [postsWithFilter, setPostsWithFilter] = useState([]);

  // Function to handle filter selection and filter posts based on the selected status.
  const handleFilterSelect = (filterStatus) => {
    // Check for valid input
    if (
      selectedFilters !== null &&
      filterStatus !== null &&
      filterStatus !== ""
    ) {
      // Find the index of the newly selected filter
      const filterIndex = selectedFilters.findIndex((x) => x === filterStatus);
      const filterStatusIndex = statusFilter.findIndex(
        (x) => x === filterStatus
      );

      // If the filter does not exist in the array, the index will be -1
      if (filterStatusIndex !== -1) {
        // Remove the existing filter from the array
        selectedFilters.splice(filterIndex, 1);
        statusFilter.splice(filterIndex, 1);
      } else {
        // Add the new filter to the array
        selectedFilters.push(filterStatus);
        statusFilter.push(filterStatus);
      }
    }

    setPostsWithFilter(
      posts.filter(
        (x) => statusArray.length === 0 || statusArray.includes(x.status)
      )
    );
  };

  return (
    <>
      <div className="flex-container">
        <Statusfilter
          indicationColor={"MyPost"}
          borderColor={"MyPost-border-color"}
          backgroundColor={"MyPost-background-color"}
          title="My Post"
          isSelected={selectedFilters.includes("My Post")}
          onSelect={handleFilterSelect}
        />
        <Statusfilter
          indicationColor={"Review"}
          borderColor={"Review-border-color"}
          backgroundColor={"Review-background-color"}
          title="Review"
          isSelected={selectedFilters.includes("Review")}
          onSelect={handleFilterSelect}
        />
        <Statusfilter
          indicationColor={"Planned"}
          borderColor={"Planned-border-color"}
          backgroundColor={"Planned-background-color"}
          title="Planned"
          isSelected={selectedFilters.includes("Planned")}
          onSelect={handleFilterSelect}
        />
        <Statusfilter
          indicationColor={"InProgress"}
          borderColor={"InProgress-border-color"}
          backgroundColor={"InProgress-background-color"}
          title="In_Progress"
          isSelected={selectedFilters.includes("In_Progress")}
          onSelect={handleFilterSelect}
        />
        <Statusfilter
          indicationColor={"Complete"}
          borderColor={"Complete-border-color"}
          backgroundColor={"Complete-background-color"}
          title="Complete"
          isSelected={selectedFilters.includes("Complete")}
          onSelect={handleFilterSelect}
        />
      </div>
    </>
  );
}
