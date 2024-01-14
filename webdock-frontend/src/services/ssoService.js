 export const fetchData = async () => {
	try {
		const urlParams = new URLSearchParams(window.location.search);
		const ssoToken = JSON.stringify(urlParams.get("ssoToken"));
        
        // verify creates a user in our db, if they dont exist already
		const response = await fetch("http://localhost:8080/verify", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"Authorization": `Bearer ${ssoToken}`,
			},
		});

		const userData = await response.json();
        console.log(userData.message)

		localStorage.setItem("authToken", JSON.stringify(ssoToken));
        return ssoToken
	} catch (error) {
		console.error("error fetching data:", error);
		throw error;
	}
};

export const redirectToWebdock = async () => {
	// const encodedURL = encodeURIComponent('http://kmfpgroup5.vps.webdock.cloud:5173/')
	const encodedURL = encodeURIComponent("http://localhost:5173/");
	const redirectURL = `https://webdock.io/en/login?companyID=ucl_feedback_tool&redirect=${encodedURL}`;
	window.location.href = redirectURL;
};
