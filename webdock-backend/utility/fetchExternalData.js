async function fetchExternalData(externalEndpoint, externalData) {
  try {
    const response = await fetch(externalEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(externalData),
    });

    if (!response.ok) {
      throw new Error(`External API request failed with status ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching external data:", error);
    throw new Error("Error fetching external data");
  }
}

module.exports = { fetchExternalData };
