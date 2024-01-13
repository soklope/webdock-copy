import create from 'zustand';

const usePreferenceStore = create((set) => ({
  theme: localStorage.getItem('theme') || 'light',
  layout: 'standard', // TODO: option to add my post to roadmap view

  setTheme: async (newTheme) => {
    set({ theme: newTheme });
    localStorage.setItem('theme', newTheme);

    // update the theme in database/backend
    try {
        const user = localStorage.getItem("user");
        const parsedUser = user ? JSON.parse(user) : null;
        
        const response = await fetch(`${window.apiHostName}/v1/users/${parsedUser.id}/settings`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ theme: newTheme }),
        });

        if (response.ok) {
            const data = await response.json();
            console.log(data.message, data.theme);
        } else { 
            const errorData = await response.json();
            console.error(errorData.error)
            // console.log("Error", response.status, response.statusText)
        }
        
      } catch (error) {
        console.error('Error updating theme on the backend:', error);
        // revert the theme in the local state? since error
      }
  },

  setLayout: (newLayout) => {
    set({ layout: newLayout });
    // set to localstorage perhaps?
  },

}));
export default usePreferenceStore;
