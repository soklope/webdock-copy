export const checkAdmin = async (authToken) => {

  try {
    const response = await fetch(
      'http://localhost:8080/verify/isadmin',
      {
        method: 'GET', // Use GET for querying data
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authToken}`,
        },
      }
    );

    if (response.ok) {
      const isAdmin = await response.json();
      return isAdmin;
    } else {
      console.error('Error:', response.status);
      return false; // or handle the error accordingly
    }
  } catch (error) {
    console.error('Error:', error);
    return false; // or handle the error accordingly
  }
};