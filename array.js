//Task 1 Writing a function that returned an array stored in variable called boulevardsInParis
function boulevardsWithDe(boulevardsInParis) {
    return boulevardsInParis.filter(boulevard => boulevard.includes(' de ' ));
}

// Example usage:
const boulevardsInParis = [
    "Boulevards of Paris",
    "City walls of Paris",
    "Thiers wall",
    "Wall of Charles V",
    "Wall of Philip II Augustus",
    "City gates of Paris",
    "Haussmann's renovation of Paris",
    "Boulevards of the Marshals",
    "Boulevard Auguste-Blanqui",
    "Boulevard Barbès",
    "Boulevard Beaumarchais",
    "Boulevard de l'Amiral-Bruix",
    "Boulevard Mortier",
    "Boulevard Poniatowski",
    "Boulevard Soult",
    "Boulevard des Capucines",
    "Boulevard de la Chapelle",
    "Boulevard de Clichy",
    "Boulevard du Crime",
    "Boulevard du Général-d'Armée-Jean-Simon",
    "Boulevard Haussmann",
    "Boulevard de l'Hôpital",
    "Boulevard des Italiens",
    "Boulevard Lefebvre",
    "Boulevard de la Madeleine",
    "Boulevard de Magenta",
    "Boulevard Malesherbes",
    "Boulevard Marguerite-de-Rochechouart",
    "Boulevard Montmartre",
    "Boulevard du Montparnasse",
    "Boulevard Raspail",
    "Boulevard Richard-Lenoir",
    "Boulevard Saint-Germain",
    "Boulevard Saint-Michel",
    "Boulevard de Sébastopol",
    "Boulevard de Strasbourg",
    "Boulevard du Temple",
    "Boulevard Voltaire",
    "Boulevard de la Zone",

];

console.log(boulevardsWithDe(boulevardsInParis));


//Task 2
function meanMedian(numbers){
    if (numbers.length === 0){
        return {mean: null, median: null};
    }

    //calculate the mean
    const mean  = numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
    
    //calculate the median
    numbers.sort((a, b) => a - b);
    let median;
    const middleIndex = Math.floor(numbers.length / 2);

    if (numbers.length % 2 === 0) {
        median = (numbers[middleIndex - 1] + numbers[middleIndex] / 2);
    } 
    else {
        median = numbers[middleIndex];
    }
    //Return mean and median rounded to 1 decimal place
    return {
        mean: parseFloat(mean.toFixed(1)),
        median: parseFloat(median.toFixed(1))
    };
}

const numbers = [0, 1, 5, 9, 40, 56, 57, 95, 101, 38, 64]
console.log(meanMedian(numbers))
