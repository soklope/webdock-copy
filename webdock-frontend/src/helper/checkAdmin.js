export const checkUserRole = async (authToken) => {
	try {
		const response = await fetch("http://localhost:8080/verify/isadmin", {
			method: "GET", 
			headers: {
				"Content-Type": "application/json",
				'Authorization': `Bearer ${authToken}`,
			},
		});

		if (response.ok) {
			const isAdmin = await response.json();
			return isAdmin;
		} else {
			console.error("Error:", response, response.status);
			return false;
		}
	} catch (error) {
		console.error("Error:", error);
		return false;
	}
};

export const checkAdmin = (userEmail) => {
	if (
		(userEmail !== null && userEmail.endsWith("@edu.ucl.dk")) ||
		userEmail.endsWith("@webdock.io")
	) {
		return true;
	} else {
		return false;
	}
};
