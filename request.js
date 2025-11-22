import { clearCountriesList , isRegionSelected } from "./index.js";
import { sortRepons } from "./display-country-sorted-by-selection.js";
import { creatCountry } from "./creat-country.js";

export async function loadAllCountries() {
    
    try{
        document.querySelector(".loder").classList.remove("d-none") ;
        let repons = await fetch("https://restcountries.com/v3.1/all?fields=name,flags,population,area,capital,subregion,languages,currencies,maps,region");
        repons = await repons.json();

        repons=sortRepons(repons) ;

        for (const data of repons) {

                if(!isRegionSelected(data.region)){
                        continue ;
                }

                const name = data.name.common;
                const flag = data.flags.png;
                const capital = data.capital ? data.capital[0] : "No capital";
                const area = data.area;


                let currencies = "Unknown";
                if (data.currencies) {
                        const key = Object.keys(data.currencies)[0];
                        currencies = data.currencies[key]?.name || "Unknown";
                }

                const population = data.population;
                const subregion = data.subregion;
                const map = data.maps.googleMaps;


                const country = new creatCountry(name, flag, capital, area, currencies, population, subregion, map);

                document.querySelector("#output-countries").appendChild(country.getCountry());

        }
        document.querySelector("#numberOfcountries").innerHTML = document.querySelectorAll(".row.country").length;
    }catch(eror){
        const errorMsg = document.createElement("p");
        errorMsg.textContent = "There is something wrong.";
        errorMsg.classList.add("error-message");

        const output = document.querySelector("#output-countries");
        output.innerHTML = "";  
        output.appendChild(errorMsg);
    }
    finally{
        document.querySelector(".loder").classList.add("d-none") ;
    }

}



export async function searchCountries(name) {

    try{
        document.querySelector(".loder").classList.remove("d-none") ;
        clearCountriesList();

        if (!name.trim()) {
            loadAllCountries();
            return;
        }

        let repons = await fetch(`https://restcountries.com/v3.1/name/${name}`)

        if (!repons || !repons.ok) {
            throw new Error("Fetch failed");
        }

        repons = await repons.json();

        repons=sortRepons(repons) ;


        for (const data of repons) {

                if(!isRegionSelected(data.region)){
                    continue ;
                }

                const countryName = data.name.common;
                const flag = data.flags.png;
                const capital = data.capital ? data.capital[0] : "No capital";
                const area = data.area;


                let currencies = "Unknown";
                if (data.currencies) {
                        const key = Object.keys(data.currencies)[0];
                        currencies = data.currencies[key].name; 
                }


                const population = data.population;
                const subregion = data.subregion;
                const map = data.maps.googleMaps;

                const country = new creatCountry(countryName, flag, capital, area, currencies, population, subregion, map);

                document.querySelector("#output-countries").appendChild(country.getCountry());

        }
        document.querySelector("#numberOfcountries").innerHTML = document.querySelectorAll(".row.country").length;
    }catch(eror){
        const errorMsg = document.createElement("p");
        errorMsg.textContent =`No country found with the name "${name}".`;
        errorMsg.classList.add("error-message");

        const output = document.querySelector("#output-countries");
        output.innerHTML = "";  
        output.appendChild(errorMsg);
    }
    finally{
        document.querySelector(".loder").classList.add("d-none") ;
    }

}