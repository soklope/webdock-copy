import { React, useState, useEffect } from "react";

import { checkAdmin } from "../helper/checkAdmin";

export default function SettingsView() {
  const [userSettings, setUserSettings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const user = localStorage.getItem("user");
  const parsedUser = user ? JSON.parse(user) : null;

  useEffect(() => {
    const fetchUserSettings = async () => {
      try {
        const response = await fetch(`${window.apiHostName}/v1/users/${parsedUser.id}/settings`, {
          // TODO: Add headers (can i add the jwt token as header to get login? (to remove the login insecurity from frontend))
          method: "GET",
        });
        // Send isadmin true/false med i fetch, for at validere admin permissions (email forward setting)

        if (!response.ok) {
          throw new Error("Failed to fetch users current settings");
        }

        const data = await response.json();
        setUserSettings(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUserSettings();
  }, []);

  if (loading) {
    console.log('are we loading?', loading);
    return <p>Loading user settings...</p>;
  }

  if (error) {
    console.log('error:', error);
    return  <p>Error: {error}</p>;
  }
  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <br />
      SettingsView here
      <section>
        {checkAdmin(parsedUser.email) && (
          <div>
            <label>setting numero uno here</label>
            <input type="checkbox" />
          </div>
        )}
        <div>
          <label>setting numero dos here</label>
          <input type="checkbox" />
        </div>
        <div>
          <label>setting numero tres here</label>
          <input type="checkbox" />
        </div>

        <div>
          <input type="submit" value="Confirm changes" />
        </div>
      </section>
    </div>
  );
}

// TODO: Setup /api/v1/users/:userId/settings call to backend
// TODO:

// Notes:
// no need to check if logged in, can only acces option when logged in