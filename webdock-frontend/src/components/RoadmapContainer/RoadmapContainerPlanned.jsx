import { useState, useEffect } from "react";
import fetchPostsByStatus from "../../services/fetchPostByStatusService";
import "./RoadmapContainer.scss";
import RoadmapChildren from "../RoadmapChildren/RoadmapChildren";

export default function RoadmapContainerPlanned() {
  const [containerIsOpen, setContainerIsOpen] = useState(false);
  const [postCount, setPostCount] = useState(0);
  const [plannedArray, setPlannedArray] = useState([])

  useEffect(() => {
    const fetchDataAndSetState = async () => {
      try {
        const fetchedData = await fetchPostsByStatus("planned");
        setPostCount(fetchedData.length)
        setPlannedArray(fetchedData)
      } catch (error) {
        console.error('Error setting state:', error);
      }
    };
    fetchDataAndSetState();
  }, []); 

  const openContainer = () => {
    setContainerIsOpen(!containerIsOpen);
  };

  const renderRoadmapChildren = () => {
    return plannedArray.map((post) => (
      <div key={post.id} className="roadmap-child-container">
        <RoadmapChildren
          title={post.title}
          category={post.Category.category}
          numberOfComments={post.Comments.length}
          totalUpvotes={post.upvoteCount}
          id={post.id}
        />
      </div>
    ));
  };
  
  return (
    <div className="roadmap-container">
      <div className="roadmap-container__tooltip" onClick={openContainer}>
        <p>Planned</p>
        <span className={`roadmap-container__dropdown-icon ${containerIsOpen ? "rotate" : ""}`}></span>
        <p className="roadmap-container__postcount">{postCount}</p>
        <div className="roadmap-container__color-indicator-planned" />
      </div>

      {containerIsOpen && (
        <div className="roadmap-container__dropdown">{renderRoadmapChildren()}</div>
      )}

      { plannedArray ?
        ( <div className="roadmap-container__children">{renderRoadmapChildren()}</div> )
        :
        <div>Loading...</div>
      }
    </div>
  )
}
