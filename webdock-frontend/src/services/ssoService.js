export const fetchData = async () => {
    try {
        const urlParams = new URLSearchParams(window.location.search)
        const ssoToken = urlParams.get('ssoToken')

        const response = await fetch("http://localhost:8080/verify", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({ ssoToken }),
        })

        const userData = await response.json()

        localStorage.setItem('user', JSON.stringify(userData));
        localStorage.setItem('authToken', JSON.stringify(ssoToken));

        return userData;
    } catch (error) {
        console.error("error fetching data:", error);
        throw error;
    }
}

export const redirectToWebdock = async () => {
    // const encodedURL = encodeURIComponent('http://kmfpgroup5.vps.webdock.cloud:5173/')
    const encodedURL = encodeURIComponent('http://localhost:5173/')
    const redirectURL = `https://webdock.io/en/login?companyID=ucl_feedback_tool&redirect=${encodedURL}`
    window.location.href = redirectURL
}
