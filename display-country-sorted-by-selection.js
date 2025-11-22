export function sortRepons(repons){
    const sortBy = document.querySelector("#sort-by").value; 
    
    if (sortBy === "Population") {
        repons.sort((a, b) => b.population - a.population); 
    } 
    else if (sortBy === "Area") {
        repons.sort((a, b) => b.area - a.area); 
    }

    return repons
}