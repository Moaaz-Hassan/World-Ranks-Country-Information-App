import { loadAllCountries , searchCountries } from "./request.js";



document.querySelector("input").addEventListener("input", () => {
    searchCountries(document.querySelector("input").value);
});

export function clearCountriesList() {
    document.querySelector("#numberOfcountries").innerHTML = 0 ;
    document.querySelector("#output-countries").innerHTML = "";
}

document.querySelector("#sort-by").addEventListener("change", () => {
    const searchValue = document.querySelector("input").value.trim();
    clearCountriesList(); 

    if (searchValue) {
        searchCountries(searchValue);
    } else {
        loadAllCountries();
    }
});


let regionList = []
const regions = document.querySelectorAll(".region");

regions.forEach(region => {
    region.addEventListener("click", function() {
        this.classList.toggle("active");

        const regionName = this.textContent.trim();
        if(!regionList.includes(regionName)){
                regionList.push(regionName);
        } else {

            regionList = regionList.filter(r => r !== regionName);
        }

        const searchValue = document.querySelector("input").value.trim();
        clearCountriesList(); 

        if (searchValue) {
            searchCountries(searchValue);
        } else {
            loadAllCountries();
        }
    });
});


export function isRegionSelected(countryRegion) {
    if (regionList.length === 0) return true; 
    return regionList.includes(countryRegion); 
}


document.querySelector(".Back").addEventListener("click" , ()=>{
    document.querySelector("body").classList.remove("stop-scroling") ;
    document.querySelector(".countryDetails").classList.add("d-none") ;
})

loadAllCountries();
