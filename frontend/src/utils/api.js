export const fetchAnswer = async (question) => {
  try {
    const response = await fetch("https://fibonnaci-2yie.vercel.app/api/question", {
      // Replace URL if using a subdomain
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ question }),
    });
    const data = await response.json();
    return data.answer + ".";
  } catch (error) {
    console.error("API error:", error);
    return "Failed to fetch answer.";
  }
};
