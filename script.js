let body = document.getElementById('body');
let mode = document.querySelector('.modeTitle');
let moon = document.querySelector('.moon');
let sun = document.querySelector('.sun');

let continentsContainer = document.querySelector('.containerOfContinents')

moon.addEventListener('click', function(){
    body.style.backgroundColor = '#202C36';
    moon.style.display = 'none';
    mode.innerHTML = 'Light mode';
    sun.style.display = 'block';
  
  var countries = document.querySelectorAll('.eachCountry');
  countries.forEach(function(country) {
    country.style.backgroundColor = '#2B3844'

  });

  var names = document.querySelectorAll('.nameOfCountry');
  names.forEach(function(name) {
    name.style.color = 'white'
  });

  var titles = document.querySelectorAll('.title');
  titles.forEach(function(title) {
    title.style.color = 'white'
  });

  var values = document.querySelectorAll('.value');
    values.forEach(function(value) {
      value.classList.add('valueColor')
    });

    var moreValues = document.querySelectorAll('.moreValue');
    moreValues.forEach(function(value) {
      value.style.color = 'white'
    });
    var continents = document.querySelectorAll('.continent');
    continents.forEach(function(continent) {
      continent.style.color = 'white'
    });

    let dark = document.querySelector('.containerOfContinents') 
    dark.style.backgroundColor ='#2B3844'


  let darkHeader = document.querySelector('.header-div');
 darkHeader.style.backgroundColor = '#2B3844'

  let darktitleOfHeader = document.querySelector('.titleOfHeader');
  darktitleOfHeader.style.color = 'white'

  let darkTitleMode = document.querySelector('.modeTitle');
  darkTitleMode.style.color = 'white'

  let darkSearchDiv = document.querySelector('.searchDiv');
  darkSearchDiv.style.backgroundColor ='#2B3844'


  let darkFilterRegion = document.querySelector('.filterRegion');
  darkFilterRegion.style.backgroundColor = '#2B3844'



  let darkTitleOfFilter = document.querySelector('.titleOfFilter');
  darkTitleOfFilter.style.color = 'white'


  let pointer = document.querySelector('.pointColor');
  pointer.style.color = 'white'

   

    
} 
)

sun.addEventListener('click', function(){
    body.style.backgroundColor = '#F2F2F2';
    sun.style.display = 'none';
    mode.innerHTML = 'Night mode';
    moon.style.display = 'block';

    var countries = document.querySelectorAll('.eachCountry');
    countries.forEach(function(country) {
      country.style.backgroundColor = '#FFFFFF'
  
    });
  
    var names = document.querySelectorAll('.nameOfCountry');
    names.forEach(function(name) {
      name.style.color = '#111517'
    });
  
    var titles = document.querySelectorAll('.title');
    titles.forEach(function(title) {
      title.style.color = '#111517'
    });
    var values = document.querySelectorAll('.value');
    values.forEach(function(value) {
      value.classList.remove('valueColor')
    });
    

    let darkHeader = document.querySelector('.header-div');
   darkHeader.style.backgroundColor = 'white'
  
    let darktitleOfHeader = document.querySelector('.titleOfHeader');
    darktitleOfHeader.style.color = '#111517'
  
    let darkTitleMode = document.querySelector('.modeTitle');
    darkTitleMode.style.color = '#111517'
  
    let darkSearchDiv = document.querySelector('.searchDiv');
    darkSearchDiv.style.backgroundColor ='white'
  
  
    let darkFilterRegion = document.querySelector('.filterRegion');
    darkFilterRegion.style.backgroundColor = 'white'
  
  
  
    let darkTitleOfFilter = document.querySelector('.titleOfFilter');
    darkTitleOfFilter.style.color = '#111517'

    let pointer = document.querySelector('.pointColor');
    pointer.style.color = 'black'

    var moreValues = document.querySelectorAll('.moreValue');
    moreValues.forEach(function(value) {
      value.style.color = 'black'
    });
    var continents = document.querySelectorAll('.continent');
    continents.forEach(function(continent) {
      continent.style.color = 'black'
    });

    let dark = document.querySelector('.containerOfContinents') 
    dark.style.backgroundColor ='white'
   
})


 let point = document.querySelector('.point')
 point.addEventListener('click', function (){
    if( continentsContainer.style.display == 'none'){
        continentsContainer.style.display = 'flex'
    }
    else{
        continentsContainer.style.display = 'none'
        var countries = document.querySelectorAll('.eachCountry');
        countries.forEach(function(country) {
        if (country.style.display == 'none'){
          country.style.display = 'flex'
        }
  
    });
        }
      }
 )
    
    

    fetch('https://restcountries.com/v3.1/all?fields')
    .then((respose) => {
        return respose.json();
    })

    .then(function(mosuliInfo){
      
        for(item of mosuliInfo){
        //  console.log(item)
        
        let eachCountry = createCountry();
        let countryName = createEmptyCSSClass(item.name.common)
        let continent = createEmptyCSSClass(item.region);
        eachCountry.classList.add(continent)
        eachCountry.classList.add(countryName)

        

        let containerOfCountries = document.querySelector('.containerOfCountries')
        containerOfCountries.appendChild(eachCountry)

        let infoContainer = document.createElement('div');
        infoContainer.classList.add('containerOfInfo'); 

        let moreInformation = document.createElement('div');
        moreInformation.classList.add('containerOfMoreInfo');

        let thirdDivOfInformation = document.createElement('div');
        thirdDivOfInformation.classList.add('thirdInformation')


        let flag = createFlag(item.flags.svg)
        eachCountry.appendChild(flag);
         
        let name = createName(item.name.common)
        eachCountry.appendChild(name);

        let population = createPopulation(item.population)
        infoContainer.appendChild(population);
        
        let region = createRegion(item.region);
        infoContainer.appendChild(region)

        let tld = createtTld(item.tld);
        moreInformation.appendChild(tld)

        

        let subRegion = createSubRegion(item.subregion);
        moreInformation.appendChild(subRegion)
        
        
        

        if(item.currencies){
         let currency = createCurrencies(item.currencies)
              moreInformation.appendChild(currency)}

        if (item.capital)
        {
        let capital = createCapital(item.capital[0]);``
        infoContainer.appendChild(capital)
        }
        else{
            let x = 'Undifined'
            let capital = createCapital( x);
            infoContainer.appendChild(capital)
        }
        


        if(item.languages){
          let language = createLanguages(item.languages)
           moreInformation.appendChild(language)
          }
          

        
        eachCountry.appendChild(infoContainer)
        eachCountry.appendChild(moreInformation)
        eachCountry.appendChild(thirdDivOfInformation)

      
       
        
        
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
        number.classList.add('value')
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
        name.classList.add('value')
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
      capital.classList.add('value')
      div.appendChild(capital)
      return div;

  }
  function createSubRegion(region) {
    let div = document.createElement('div')
    div.classList.add("infoDiv");
    let title = document.createElement('p')
    title.classList.add('title')
    title.innerText = 'Sub Region:  '
    div.appendChild(title)
    let name = document.createElement('p')
    name.innerText = region;
    name.classList.add('moreValue')
    div.appendChild(name)
    return div;

}
function createLanguages(languages){
  
    let div = document.createElement('div')
    div.classList.add("infoDiv");
    let title = document.createElement('p')
    title.classList.add('title')
    title.innerText = 'Languages:  '
    div.appendChild(title)
    
    let languagesDiv = document.createElement('div');
        languagesDiv.classList.add('languagesDiv')
    let x = Object.values(languages)
    // console.log(x)
    count = 0;
    for ( item of x){
  
      let eachLanguage = document.createElement('p');
      eachLanguage.innerHTML = item;
      eachLanguage.classList.add('moreValue')
      languagesDiv.appendChild(eachLanguage)
      if(count != x.length -1 ){
        let space = document.createElement('p');
        space.innerHTML = ',';
        languagesDiv.appendChild(space)
        count++;
        
      }
      
    }
    div.appendChild(languagesDiv);
    return div;
  
}

function createCurrencies(currency){
  
  let div = document.createElement('div')
  div.classList.add("infoDiv");
  let title = document.createElement('p')
  title.classList.add('title')
  title.innerText = 'Currency:  '
  div.appendChild(title)
  let valueOfCurrency = Object.values(currency)[0].name;
  let eachCurrency = document.createElement('p');
  eachCurrency.innerText = valueOfCurrency;
  eachCurrency.classList.add('moreValue')
  div.appendChild(eachCurrency);
  return div;


}
function createtTld(tld) {
  let div = document.createElement('div')
  div.classList.add("infoDiv");
  let title = document.createElement('p')
  title.classList.add('title')
  title.innerText = 'Top Level Domain:  '
  div.appendChild(title)
  let name = document.createElement('p')
  name.innerText = tld;
  name.classList.add('moreValue')
  div.appendChild(name)
  return div;

}

function createEmptyCSSClass(className) {
  var name = className ; 
  var withoutSpaces = name.replace(/\s/g, "");
  return withoutSpaces;
}

  let search = document.querySelector('.searchInput')
  search.addEventListener('input' , function(){
    let inputValue = search.value;
    let lowerCaseValue = inputValue.toLowerCase();
    var countries = document.querySelectorAll('.eachCountry');
    countries.forEach(function(country) {
      let secondClassName = country.classList.item(2);
      let lowerCaseName = secondClassName.toLowerCase();
      if(!lowerCaseName.includes(lowerCaseValue)){
        country.style.display ='none'
      }
      else if(country.style.display == 'none'){
        country.style.display = 'flex';
      }
      
  
    });

 
      
    

  })
  var continents = document.querySelectorAll('.continent');
    continents.forEach(function(continent) {
        continent.addEventListener('click' , function(){
          let x = continent.innerHTML;
          var countries = document.querySelectorAll('.eachCountry');
          countries.forEach(function(country) {
          let thirdClassName = country.classList.item(1);
          if(x != thirdClassName){
            country.style.display ='none'
          }
          else if(country.style.display == 'none'){
            country.style.display = 'flex';
          }
          
      
        });

        })
    });


 
    

   
   
 
  
  
  
  
  
  
        

    

   


    