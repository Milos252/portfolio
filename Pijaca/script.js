let ukupniTotal = 0;

function addToCart(element){
    let mainElement = element.closest('.single-item');
    let proizvod = mainElement.querySelector("h3").innerText;
    let cijena = parseInt(mainElement.querySelector('.price').innerText.substring(1,));
    let cartItems = document.querySelector('.cart-items');
    let brojProizvoda = parseInt(mainElement.querySelector('input').value);

    if (brojProizvoda > 0){

        let total = cijena * brojProizvoda;
        ukupniTotal += total;

        cartItems.innerHTML += `<div class="cart-single-item">
                                    <h3>${proizvod}</h3>
                                    <p>${cijena}$ * ${brojProizvoda} = <span>${total}</span>$</p>
                                    <button class="remove-item" onClick="removeFromCart(this)">Ukloni</button>
                                </div>`;
        element.innerText = "Dodato";
        element.setAttribute("disabled", "true");

        document.querySelector(".total").innerText = `Total: ${ukupniTotal}$`; 
    }

    else{
        alert('Odaberi količinu');
    }
}

function removeFromCart(element){
    let mainElement = element.closest('.cart-single-item');
    let cijena = parseInt(mainElement.querySelector("p span").innerText);
    let ime = mainElement.querySelector("h3").innerText;
    let povrce = document.querySelectorAll(".single-item")



    ukupniTotal -= cijena;
    document.querySelector(".total").innerText = `Total: ${ukupniTotal}$`; 


    mainElement.remove();

    povrce.forEach(function (vege){
        if(vege.querySelector(".si-content h3").innerText === ime){
            vege.querySelector(".actions button").removeAttribute("disabled")
            vege.querySelector(".actions input").value = "0"
        }
    })
}