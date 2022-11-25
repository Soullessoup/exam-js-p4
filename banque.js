var compte = document.getElementById("compte");
var somme = document.getElementById("somme");
var msg = document.getElementById("msg");

compte.addEventListener('input', ()=> {
    if(compte.value.length != 16){
        msg.style.display="block";
    }
        else{
            msg.style.display = "none";
        }
})

somme.addEventListener('input', ()=>{
    

})

