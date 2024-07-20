async function getRandomJoke(category) {
    // List of valid categories
        const validCategories = [
            "animal", "career", "celebrity", "dev", "explicit", 
            "fashion", "food", "history", "money", "movie", 
            "music", "political", "religion", "science", "sport", "travel"
         ];
         // Check if the category is valid
         if (!validCategories.includes(category)) {
        return Promise.reject(`Sorry, ${category} is an invalid category.`); }
        try {
        // Fetch a random joke from the specified category
        const response = await fetch(`https://api.chucknorris.io/jokes/random?category=${category}`);

        // Check if the response is okay
        if (!response.ok) {
            throw new Error('Failed to fetch the joke');
        }

        // Parse the JSON response
        const data = await response.json();

        // Return the joke as a string
        return data.value;
    } catch (error) {
        // Handle any errors that occurred during fetch
        return Promise.reject(`Failed to fetch joke: ${error.message}`);
    }
}

// Example usage:
getRandomJoke("dev")
    .then(joke => console.log(joke))
    .catch(error => console.error(error));
            
        