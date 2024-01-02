import React from "react";

import "./Username.scss";

export default function Username({ isAdmin, user }) {
	return (
		<div>
			{isAdmin ? (
				<div className="admin">
					{user} <span className="admin__logo ">  </span>
				</div>
			) : (
				<div className="user"> {user} </div>
			)}
		</div>
	);
}
