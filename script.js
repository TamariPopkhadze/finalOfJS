let body = document.getElementById('body');
let mode = document.querySelector('.modeTitle');
let moon = document.querySelector('.moon');
let sun = document.querySelector('.sun');

let continentsContainer = document.querySelector('.containerOfContinents')

moon.addEventListener('click', function(){
    body.style.backgroundColor = 'black';
    moon.style.display = 'none';
    mode.innerHTML = 'Light mode';
    sun.style.display = 'block';
})

sun.addEventListener('click', function(){
    body.style.backgroundColor = '#F2F2F2';
    sun.style.display = 'none';
    mode.innerHTML = 'Night mode';
    moon.style.display = 'block';
})


 let point = document.querySelector('.point')
 point.addEventListener('click', function(){
    if( continentsContainer.style.display == 'none'){
        continentsContainer.style.display = 'flex'
    }
    else{
        continentsContainer.style.display = 'none'
    }
 })
    
    let containerOfCountries = document.querySelector('.containerOfCountries')

    fetch('https://restcountries.com/v3.1/all?fields')
    .then((respose) => {
        return respose.json();
    })

    .then(function(mosuliInfo){
        
        console.log(mosuliInfo)
        for(item of mosuliInfo){
        let eachCountry = createCountry();
        containerOfCountries.appendChild(eachCountry)
        let flag = createFlag(item.flags.svg)
        eachCountry.appendChild(flag);
         let name = createName(item.name.common)
         eachCountry.appendChild(name);
        let population = createPopulation(item.population)
        eachCountry.appendChild(population);
        let region = createRegion(item.region);
        eachCountry.appendChild(region)
        if (item.capital)
        {
        let capital = createCapital(item.capital[0]);
        eachCountry.appendChild(capital)
        }
        else{
            let x = 'Undifined'
            let capital = createCapital( x);
            eachCountry.appendChild(capital)
        }
        }
    } )
    function createCountry() {
        let eachCountry = document.createElement('div');
        eachCountry.classList.add('eachCountry')
        return eachCountry
    }

    function createFlag(urlOfFlag) {
        let flag = document.createElement('img');
        flag.src = urlOfFlag;
        return flag;

    }
    
    function createName(country) {
        let name = document.createElement('h2')
        name.innerText = country;
        return name;

    }
    function createPopulation(population) {
        let number = document.createElement('p')
        number.innerText = population;
        return number;

        
    }
    function createRegion(region) {
        let name = document.createElement('p')
        name.innerText = region;
        return name;

    }
function createCapital(city) {
    let capital = document.createElement('p')
    capital.innerText = city;
    return capital;

}
  
   
        
        

    

   


    