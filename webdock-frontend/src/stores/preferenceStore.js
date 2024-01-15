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
        // const data = await response.json();
        // TODO: add popup or similar to confirm to user, that changes are saved in backend (could use same library as Alvi)
        console.log(`succesfully updated ${settingName} to ${value} `);
      } else { 
        const errorData = await response.json();
        console.error(errorData.error);
      }
    } catch (error) {
      console.error(`Error updating ${settingName} on the backend:`, error);
    }
  };

const usePreferenceStore = create((set) => ({
  theme: localStorage.getItem('theme') || 'light',
  layout: localStorage.getItem('layout' || 'disabled'),

  setTheme: async (newTheme) => {
    set({ theme: newTheme });
    localStorage.setItem('theme', newTheme);

    await updateSettingInDatabase('theme', newTheme);
},

  setLayout: async (newLayout) => {
    set({ layout: newLayout });
    localStorage.setItem('layout', newLayout);

    await updateSettingInDatabase('layout', newLayout);
  },

}));
export default usePreferenceStore;
