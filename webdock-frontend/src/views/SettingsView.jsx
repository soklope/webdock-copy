import React from "react";

import { checkAdmin } from "../helper/checkAdmin";

export default function SettingsView() {
    const user = localStorage.getItem("user");
    const parsedUser = JSON.parse(user)
    console.log(parsedUser.email)
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
      </section>
    </div>
  );
}

// TODO: Setup /api/v1/users/:userId/settings call to backend
// TODO: