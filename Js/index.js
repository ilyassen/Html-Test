var compteur = 1;

 function myFunction() {
    
    var_valeur = document.getElementById("exampleInputEmail1").value;
    document.getElementById("exampleInputEmail1").value = "";


    document.getElementById("labelAlert").innerHTML = "The value " +  var_valeur;

    document.getElementById("myAlert").classList.remove("hidden");

    // var element = document.getElementById("myAlert");
    // element.classList.remove("hidden");
    

    AddToCompt();

    document.getElementById("my-title").style.color = "Green"

    setTimeout(myTimeout, 1000)
 
    }

function AddToCompt() {
    document.getElementById("li1").innerHTML = compteur;
    document.getElementById("li2").innerHTML = compteur + 1;
    document.getElementById("li3").innerHTML = compteur + 2;
    compteur = compteur + 3;
}

function myTimeout() {
    document.getElementById("myAlert").classList.add("hidden");
}
