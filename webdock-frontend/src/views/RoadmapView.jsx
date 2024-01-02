import "./view-styles/RoadmapView.scss";
import { useEffect } from "react";
import { fetchData } from "../services/ssoService";
import userStore from "../stores/loginStore";

import CreatePostBtn from "../components/CreatePostBtn/CreatePostBtn";
import ViewToggleSwitchContainer from "../components/ViewToggleSwitchContainer/ViewToggleSwitchContainer";
import RoadmapContainerPlanned from "../components/RoadmapContainer/RoadmapContainerPlanned";
import RoadmapContainerInProgress from "../components/RoadmapContainer/RoadmapContainerInProgress";
import RoadmapContainerComplete from "../components/RoadmapContainer/RoadmapContainerComplete";

import useRoadmapStore from "../stores/viewStore";
import ListView from "./ListView";

export default function RoadmapView() {
  const { roadmapView } = useRoadmapStore();
  const { setUserState } = userStore()
  const userIsLoggedIn = JSON.parse(localStorage.getItem('user')) 

  const fetchDataAndHandleUserData = async () => {
      try {
          const userData = await fetchData();
          setUserState(userData)
      } catch (error) {
          console.log(error);
      }
  };
  
  useEffect(() => {
    if (!userIsLoggedIn) {
      fetchDataAndHandleUserData();
    } else {
      setUserState(userIsLoggedIn)
    }
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
