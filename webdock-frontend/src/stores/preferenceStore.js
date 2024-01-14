import create from 'zustand';

const updateSettingInDatabase = async (settingName, value) => {
    try {
      const authToken = localStorage.getItem("authToken");
  
      const response = await fetch(`${window.apiHostName}/v1/user/settings`, {
        method: 'PUT',
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${authToken}`,
        },
        body: JSON.stringify({ settingName, value}),
      });
  
      if (response.ok) {
        const data = await response.json();
        console.log(`succesfully updated ${settingName} to ${value} `);
      } else { 
        const errorData = await response.json();
        console.error(errorData.error);
        // Handle error appropriately
      }
  
    } catch (error) {
      console.error(`Error updating ${settingName} on the backend:`, error);
    }
  };

const usePreferenceStore = create((set) => ({
  theme: localStorage.getItem('theme') || 'light',
  layout: 'standard', // TODO: option to add my post to roadmap view

  setTheme: async (newTheme) => {
    set({ theme: newTheme });
    localStorage.setItem('theme', newTheme);

    await updateSettingInDatabase('theme', newTheme);
},

  setLayout: (newLayout) => {
    set({ layout: newLayout });
    // set to localstorage perhaps?
  },

}));
export default usePreferenceStore;
