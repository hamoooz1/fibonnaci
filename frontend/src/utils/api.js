export const fetchAnswer = async question => {
    try {
        // const response = await fetch('https://f1bonacc1s3q.xyz/api/question', { // Replace URL if using a subdomain
        const response = await fetch('http://localhost:5001/api/question', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ question }),
        });
        const data = await response.json();
        return data.answer + ".";
    } catch (error) {
        console.error('API error:', error);
        return 'Failed to fetch answer.';
    }
};
