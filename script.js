let body = document.getElementById('body');
let mode = document.querySelector('.modeTitle');
let moon = document.querySelector('.moon');
let sun = document.querySelector('.sun');

let continentsContainer = document.querySelector('.containerOfContinents')

moon.addEventListener('click', function(){
    body.style.backgroundColor = '#2B3844';
    
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
        let infoContainer = document.createElement('div');
        infoContainer.classList.add('containerOfInfo');

        let flag = createFlag(item.flags.svg)
        eachCountry.appendChild(flag);

        let name = createName(item.name.common)
        eachCountry.appendChild(name);

        let population = createPopulation(item.population)
        infoContainer.appendChild(population);

        let region = createRegion(item.region);
        infoContainer.appendChild(region)

        if (item.capital)
        {
        let capital = createCapital(item.capital[0]);
        infoContainer.appendChild(capital)
        }
        else{
            let x = 'Undifined'
            let capital = createCapital( x);
            infoContainer.appendChild(capital)
        }
        eachCountry.appendChild(infoContainer)
        }
    } )
    function createCountry() {
        let eachCountry = document.createElement('div');
        eachCountry.classList.add('eachCountry')
        return eachCountry
    }

    function createFlag(urlOfFlag) {
        let flag = document.createElement('img');
        flag.classList.add('flagStyle')
        flag.src = urlOfFlag;
        return flag;

    }
    
    function createName(country) {
        
        let name = document.createElement('h2')
        name.innerText = country;
        name.classList.add('nameOfCountry')
        return name;

    }
    function createPopulation(population) {
    
        let div = document.createElement('div')
        div.classList.add("infoDiv");
        let title = document.createElement('p')
        title.innerText = 'Population:  '
        title.classList.add('title')
        div.appendChild(title)
        let number = document.createElement('p')
        number.innerText = population.toLocaleString();
        div.appendChild(number)
        return div;

        
    }
    function createRegion(region) {
        let div = document.createElement('div')
        div.classList.add("infoDiv");
        let title = document.createElement('p')
        title.classList.add('title')
        title.innerText = 'Region:  '
        div.appendChild(title)
        let name = document.createElement('p')
        name.innerText = region;
        div.appendChild(name)
        return div;

    }
function createCapital(city) {
    let div = document.createElement('div')
        div.classList.add("infoDiv");
        let title = document.createElement('p')
        title.classList.add('title')
        title.innerText = 'Capital:  '
        div.appendChild(title)
    let capital = document.createElement('p')
    capital.innerText = city;
    div.appendChild(capital)
    return div;

}
  
   
        
        

    

   


    