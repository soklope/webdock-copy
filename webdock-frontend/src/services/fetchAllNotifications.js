const fetchAllNotifications = async (userId) => {
    try {
        const response = await fetch(`${window.apiHostName}/v1/user-notifications/${userId}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

export default fetchAllNotifications;