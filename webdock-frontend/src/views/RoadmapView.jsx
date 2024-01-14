import { useEffect } from "react";

import { fetchData } from "../services/ssoService";

import "./view-styles/RoadmapView.scss";

import CreatePostBtn from "../components/CreatePostBtn/CreatePostBtn";
import ViewToggleSwitchContainer from "../components/ViewToggleSwitchContainer/ViewToggleSwitchContainer";
import RoadmapContainerPlanned from "../components/RoadmapContainer/RoadmapContainerPlanned";
import RoadmapContainerInProgress from "../components/RoadmapContainer/RoadmapContainerInProgress";
import RoadmapContainerComplete from "../components/RoadmapContainer/RoadmapContainerComplete";

import useRoadmapStore from "../stores/viewStore";
import useLoginStore from "../stores/loginStore";
import ListView from "./ListView";

export default function RoadmapView() {
  const { roadmapView } = useRoadmapStore();
  const { setAuthState } = useLoginStore();

  useEffect(() => {
    // Function to check if there's an ssoToken in the URL
    const checkSSOToken = async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const ssoToken = urlParams.get("ssoToken");

      if (ssoToken) {
        try {
          const fetchedData = await fetchData(ssoToken);
          setAuthState(fetchedData);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
    };

    checkSSOToken();
  }, []); 
  
  return (
    <>
      <div className="wrap">
        <div className="heading">
          <h1 className="heading__title">Roadmap</h1>
        </div>

        <main>
          <section className="filter-grid-container">
            <div className="filter-grid-create-btn">
              <CreatePostBtn />
            </div>

            <div className="filter-grid-toggle-btn">
              <ViewToggleSwitchContainer />
            </div>
          </section>

          {
            roadmapView ?

            <div className="roadmap-flex-container slide-right-animation">
              <RoadmapContainerPlanned />
              <RoadmapContainerInProgress />
              <RoadmapContainerComplete />
            </div>

            :

            <div className="slide-left-animation">
              <ListView />
            </div>
          }
        </main>
      </div>
    </>
  );
}
