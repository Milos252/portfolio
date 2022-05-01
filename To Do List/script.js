//Funkcija koja stvara nove zadatke u listi, 
//dodaje im dugme close, daje funkciju dugmetu,
//i mjenja ih u čekirane, ovo radi samo za dodate putem dugmeta dodaj
function dodajListItem(){
    noviElement = document.createElement("li");
    if(document.getElementById("unos").value === ""){
        alert("Moraš unijeti nešto")
    }
    else{
        noviElement.innerText = document.getElementById("unos").value;
        document.querySelector("#zadaci").appendChild(noviElement);
        document.getElementById("unos").value = null;
        let listaLi = document.getElementsByTagName("li");

        //dodaje x
        let span = document.createElement("span");
        span.innerText = "\u00D7";
        span.className = "close";

        //polje za izbor datuma
        let datum = document.createElement("input");
        datum.type = "date"
        datum.className = "datum"

        //izbor važnosti
        let selectMeni = document.createElement("select");
        selectMeni.className = "select-meni";
        selectMeni.name = "izbor";

        let vazno = document.createElement("option");
        vazno.innerText = "Važno";
        vazno.value = "vazno"
        selectMeni.appendChild(vazno);
        let nijeVazno = document.createElement("option");
        nijeVazno.innerText = "Nije važno"
        nijeVazno.value = "nijevazno"
        selectMeni.appendChild(nijeVazno);

        span.onclick = function(){
            this.parentElement.style.display = "none";
        }
        noviElement.appendChild(span);
        noviElement.appendChild(datum);
        noviElement.appendChild(selectMeni);
    }
}


// //Dodaje x na desnom kraju, dugme
// let listaLi = document.getElementsByTagName("li");
// for(let i = 0; i<listaLi.length;i++){
//     let span = document.createElement("span");
//     span.innerText = "\u00D7";
//     span.className = "close";
//     listaLi[i].appendChild(span);
// }


// //Daje funkciju dugmetu x, odnosno da obriše
// let close = document.getElementsByClassName("close")
// for(let i = 0; i < listaLi.length; i++){
//     close[i].onclick = function(){
//         let div = this.parentElement;
//         div.style.display = "none";
//     }
// }


// //Pretvara ih u čekirane
// var list = document.querySelector('ul');
// list.addEventListener('click', function(ev) {
// if (ev.target.tagName === 'LI') {
//     ev.target.classList.toggle('checked');
// }
// }, false);