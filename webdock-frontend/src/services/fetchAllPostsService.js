const fetchAllPostData = async (statusValue) => {
    try {
        const response = await fetch(`${window.apiHostName}/v1/postswithstatus`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

export default fetchAllPostData;