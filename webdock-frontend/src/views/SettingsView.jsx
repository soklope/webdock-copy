import { React, useState, useEffect } from "react";

import { checkAdmin } from "../helper/checkAdmin";
import usePreferenceStore from "../stores/preferenceStore";

export default function SettingsView() {
	const [userSettings, setUserSettings] = useState({});
  const { theme, setTheme, layout, setLayout} = usePreferenceStore();
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	const user = localStorage.getItem("user");
	const authToken = localStorage.getItem("authToken");
	const parsedUser = user ? JSON.parse(user) : null;

	useEffect(() => {
		const fetchUserSettings = async () => {
			try {
				const response = await fetch(
					`${window.apiHostName}/v1/users/${parsedUser.id}/settings`,
					{
						// TODO: Add headers (can i add the jwt token as header to get login? (to remove the login insecurity from frontend))
						method: "GET",
					}
				);
				// Send isadmin true/false med i fetch, for at validere admin permissions (email forward setting)

				if (!response.ok) {
					throw new Error("Failed to fetch users current settings");
				}

				const data = await response.json();

				const transformedData = {};
				data.forEach((item) => {
					transformedData[item.setting] = item.value;
				});

				setUserSettings(transformedData);
        
        if (transformedData.theme != theme ) {
          setTheme(transformedData.theme)
        } 
        
			} catch (error) {
				setError(error.message);
			} finally {
				setLoading(false);
			}
		};

		fetchUserSettings();
	}, []);

  const handleDarkModeChange = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

	if (loading) {
		return <p>Loading user settings...</p>;
	}
  
	if (error) {
		console.log("error:", error);
		return <p>Error: {error}</p>;
	}

	return (
		<div>
			<h2>User Settings</h2>

			<div>
				<strong>Dark Mode:</strong>
				<label>
					<input
						type="checkbox"
						defaultChecked={theme == 'dark'}
            onChange={handleDarkModeChange}
					/>
					Enable Dark Mode
				</label>
			</div>

      <div>
        <p>
          other settings:
          <br />
          * notification behavior (what notifs, get them as emails or on the webpage, osv)
          <br />
          * change "my post" behavior
        </p>
      </div>

			{/* Text Input Field visible only for admins */}
			{checkAdmin(authToken) && (
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
