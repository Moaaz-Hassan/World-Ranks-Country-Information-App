export class creatCountry {
    constructor(name, flag, capital, area, currencies, population, subregion, map) {
        this.name = name;
        this.flag = flag;
        this.capital = capital;
        this.area = area;
        this.currencies = currencies;
        this.population = population;
        this.subregion = subregion;
        this.map = map;
    }
    getCountry() {
        const rowDiv = document.createElement("div");
        rowDiv.classList.add("row", "country");

        const flagImg = document.createElement("img");
        flagImg.src = this.flag;
        flagImg.classList.add("flag-col");

        const nameP = document.createElement("p");
        nameP.textContent = this.name;
        nameP.classList.add("info-text-sm", "name-col");

        const populationP = document.createElement("p");
        populationP.textContent = this.population;
        populationP.classList.add("info-text-sm", "population-col");

        const areaP = document.createElement("p");
        areaP.textContent = this.area;
        areaP.classList.add("info-text-sm", "area-col");

        const regionP = document.createElement("p");
        regionP.textContent = this.subregion;
        regionP.classList.add("info-text-sm", "region-col");

        rowDiv.appendChild(flagImg);
        rowDiv.appendChild(nameP);
        rowDiv.appendChild(populationP);
        rowDiv.appendChild(areaP);
        rowDiv.appendChild(regionP);

        rowDiv.addEventListener("click" ,()=> this.creatDetails() )

        return rowDiv;
    }
    creatDetails(){
        
        document.querySelector(".countryDetails .Details-content #imge-country").src = this.flag ;
        document.querySelector(".countryDetails #name").textContent = this.name ;
        document.querySelector(".countryDetails #population").textContent = this.population ;
        document.querySelector(".countryDetails #area").textContent = this.area ;

        document.querySelector(".countryDetails #Capital").textContent = this.capital ;
        document.querySelector(".countryDetails #Subregion").textContent = this.subregion ;

        document.querySelector(".countryDetails #map").href = this.map ;

        document.querySelector(".countryDetails #Currencies").textContent = this.currencies;
        
        document.querySelector("body").classList.add("stop-scroling") ;
        document.querySelector(".countryDetails").classList.remove("d-none") ;

    }
}