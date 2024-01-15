import { useState, useEffect } from "react";
import fetchPostsByStatus from "../../services/fetchPostByStatusService";
import "./RoadmapContainer.scss";
import RoadmapChildren from "../RoadmapChildren/RoadmapChildren";

export default function RoadmapContainerPlanned() {
	const [containerIsOpen, setContainerIsOpen] = useState(false);
	const [postCount, setPostCount] = useState(0);
	const [myPostArray, setMyPostArray] = useState([]);
    const authToken = localStorage.getItem('authToken')

	useEffect(() => {
		const fetchDataAndSetState = async () => {
			try {
				const fetchedData = await fetch(
					`${window.apiHostName}/v1/posts`,
					{
						method: "GET",
						headers: {
							"Content-Type": "application/json",
							Authorization: `Bearer ${authToken}`,
						},
					}
				);
                const data = await fetchedData.json();
				setPostCount(data.length);
				setMyPostArray(data);
			} catch (error) {
				console.error("Error setting state:", error);
			}
		};
		fetchDataAndSetState();
	}, []);

	const openContainer = () => {
		setContainerIsOpen(!containerIsOpen);
	};
    
	const renderRoadmapChildren = () => {
		return myPostArray.map((post) => (
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
				<p>My Posts</p>
				<span
					className={`roadmap-container__dropdown-icon ${
						containerIsOpen ? "rotate" : ""
					}`}
				></span>
				<p className="roadmap-container__postcount">{postCount}</p>
				<div className="roadmap-container__color-indicator-planned" />
			</div>

			{containerIsOpen && (
				<div className="roadmap-container__dropdown">
					{renderRoadmapChildren()}
				</div>
			)}

			{myPostArray ? (
				<div className="roadmap-container__children">
					{renderRoadmapChildren()}
				</div>
			) : (
				<div>Loading...</div>
			)}
		</div>
	);
}
