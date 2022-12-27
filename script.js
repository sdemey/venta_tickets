const button = document.querySelector("#btnres");

const total = document.querySelector("#total"); 
const cat = document.querySelector("#categoria"); 
const cant = document.querySelector("#cantidad"); 



button.onclick = () => { 
    total.value = "Total a pagar:$"+ cant.value*200*cat.value
} 


