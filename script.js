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
    let eachCountry = document.createElement('div');

    fetch('https://restcountries.com/v3.1/all?fields')
    .then((respose) => {
        return respose.json();
    })
    .then(function(mosuliInfo){
        
    //    console.log(mosuliInfo)
        for(item of mosuliInfo){
        
        eachCountry.classList.add('eachCountry') 
        continentsContainer.appendChild(eachCountry)
         createName(item.name.common)
        }
    } )



     function createName(country){
       
        let saxeli = document.createElement('h2')
        saxeli.innerText = country;
        eachCountry.appendChild(saxeli)
        // containerOfCountries.appendChild(eachCountry) 
     }
  
   
        
        

    

   


    