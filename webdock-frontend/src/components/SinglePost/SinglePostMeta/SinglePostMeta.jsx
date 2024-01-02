import { React } from "react";

import "./SinglePostMeta.scss";
import Username from "../../Username/Username";
import LabelTag from "../../LabelTag/LabelTag";
import { getColorTagFromStatus } from "../../../helper/colorFromStatus";
import { checkAdmin } from "../../../helper/checkAdmin";

export default function SinglePostMeta({ images, upvoters }) {
	return (
		<>
			<div className="single-post-meta">
				<div className="single-post-meta__images">
					{images}
				</div>
				<div>
					<h3>People liked</h3>
					<div>
						{upvoters ?
							upvoters.map((user, index) => (
								<div className="comment-user" key={index}>
									<div className={`comment-user__avatarURL${user.User && checkAdmin(user.User.email) ? "--admin" : ""}`}>
										{user.User.name.charAt(0)} <br />
									</div>
									<Username user={user.User.name} isAdmin={checkAdmin(user.User.email)} />
								</div>
							))
							:
							<div>
								loading...
							</div>
						}
						<br />
					</div>
				</div>

				{/* <div>
					<h4>
						This post has been marked as <LabelTag LabelColor={getColorTagFromStatus('Complete')} LabelStatus={'Complete'} />
					</h4>
				</div> */}
			</div>
		</>
	);
}
