let main = document.getElementById('main');
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
    
   
        
        

    

   


    