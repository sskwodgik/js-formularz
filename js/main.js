let button = document.querySelector("button");
button.onclick= function(){
    let imie = document.querySelector("input[name=imie]").value;
    let nazwisko = document.querySelector("input[name=nazwisko]").value;
    let tel = document.querySelector("input[name=telefon]").value;
    
    let imieP = document.getElementById("name");
    let nazwiskoP = document.getElementById("surname");
    let telP = document.getElementById("phone");

    imieP.textContent = imie;
    nazwiskoP.textContent = nazwisko;
    telP.textContent = tel;
}
