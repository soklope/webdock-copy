import { React, useState, useEffect } from "react";

import "./view-styles/SettingsView.scss";

import { checkUserRole } from "../helper/checkAdmin";
import usePreferenceStore from "../stores/preferenceStore";

export default function SettingsView() {
	const [userSettings, setUserSettings] = useState({});
	const { theme, setTheme, layout, setLayout } = usePreferenceStore();
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	const authToken = localStorage.getItem("authToken");

	useEffect(() => {
		const fetchUserSettings = async () => {
			try {
				const response = await fetch(
					`${window.apiHostName}/v1/user/settings`,
					{
						method: "GET",
						headers: {
							"Content-Type": "application/json",
							'Authorization': `Bearer ${authToken}`,
						},
					}
				);

				if (!response.ok) {
					throw new Error("Failed to fetch users current settings");
				}

				const data = await response.json();

				const transformedData = {};
				data.forEach((item) => {
					transformedData[item.setting] = item.value;
				});
				setUserSettings(transformedData);
				
				if (transformedData.theme != theme) {
					setTheme(transformedData.theme);
				}
				if (transformedData.layout != layout) {
					setLayout(transformedData.layout);
				}
			} catch (error) {
				setError(error.message);
			} finally {
				setLoading(false);
			}
		};

		fetchUserSettings();
	}, []);

	const handleSettingChange = (setting, newValue) => {
		switch (setting) {
		  case "theme":
			setTheme(newValue);
			break;
		  case "layout":
			setLayout(newValue);
			break;
		  default:
			console.warn(`Unsupported setting: ${setting}`);
		}
	  };

	if (loading) {
		return <p>Loading user settings...</p>;
	}

	if (error) {
		console.log("error:", error);
		return <p>Error: {error}</p>;
	}

	return (
		<div className="wrap">
			<h2>User Settings</h2>

			<div>
				<strong>Dark Mode:</strong>
				<label className="switch" >
					<input
						type="checkbox"
						defaultChecked={theme === "dark"}
						onChange={() => handleSettingChange("theme", theme === "light" ? "dark" : "light")}
					/>
					<span className="slider"></span>
				</label>
			</div>
			<div>
				<strong>Layout Mode:</strong>
				<label className="switch" >
					<input
						type="checkbox"
						defaultChecked={layout === "enabled"}
						onChange={() => handleSettingChange("layout", layout === "enabled" ? "disabled" : "enabled")}
					/>
					<span className="slider"></span>
				</label>
			</div>

			<div>
				<p>
					other settings:
					<br />
					* notification behavior (what notifs, get them as emails or
					on the webpage, osv)
					<br />* change "my post" behavior
				</p>
			</div>

			{/* Text Input Field visible only for admins */}
			{checkUserRole(authToken) && (
				<div>
					<hr />
					<h2>Admin Only Settings:</h2>
					<label> redirect email </label>
					<input type="checkbox" />
					<br />
					<label> redirect to </label>
					<input type="text" placeholder="example@webdock.io" />
					<br />
					<label> redirect untill </label>
					<input type="date" />
				</div>
			)}
		</div>
	);
}
// TODO: Setup /api/v1/users/:userId/settings call to backend
// TODO: Admin options for redirecting email

// Notes:
// no need to check if logged in, can only acces option when logged in
