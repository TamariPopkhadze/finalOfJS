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
    
 









    fetch('https://restcountries.com/v3.1/all?fields', {
        method:'GET'
        
    })
    .then(function(x){
        if(x.status != 200){
            throw x.status;
        }
        let info = x.json();
        console.log(info)

    })
    
   
        
        

    

   


    