



let datas = JSON.parse(localStorage.getItem(`${affiche}`));

console.log(datas);




let val;



// Récupère les paramètres de l'URL
const params = new URLSearchParams(window.location.search);
const id = params.get('id');

console.log(id); // Affiche la valeur de l'ID récupérée depuis l'URL





























// let phrase = `<i class="fa-regular fa-star"></i>`;
// console.log(phrase.repeat(4))

function repetervrai(phrase, nombre) {
    return phrase.repeat(nombre)
}
function repeterfaux(phrase, nombre) {
    var newnombre = 5 - nombre
    return phrase.repeat(newnombre)
}

if (datas !== null) {

    
    for (var [key, value] of Object.entries(datas)) {
        // console.log(`${value[1]}`)



        if (affiche === "article") {
            if (key === id) {
                let div = document.createElement("div")
                div.setAttribute("class", "card border-0 mb-3")
                div.innerHTML = `
            <div class="row g-0 aligne">
            <div class="col-3 direct slide">
                        
                         <div id="element">
                            <img src="${value[1][0]}"
                                 alt="logo">
                                <img src="${value[1][1]}"
                                 alt="logo">
                                <img src="${value[1][2]}"
                                 alt="logo">
                                </div>
                                <i id="prev" class="fas fa-chevron-left" aria-hidden="true"></i>
                                <i id="next" class="fas fa-chevron-right" aria-hidden="true"></i>
                        </div>

            <div class="col-md-7 py-5">
              <div class="card-body">
                <h5 class="card-title">${value[0]}</h5>
                <p class="card-text">${value[4]}</p>
                <div class="hidee">
                        <h6 class="ok">
                            ${repetervrai('<i class="fa-solid fa-star"></i>', value[2])}
                            ${repeterfaux('<i class="fa-regular fa-star"></i>', value[2])}
                        </h6>
                        <a href="article.html?id=${key}" id="toto" class="btn btn-primary">ajouter au panier</a>
                        
                    </div>
                <p class="card-text"><small class="text-body-secondary">Livraison GRATUITE par FMK-store</small></p>
              </div>
            </div>
          </div>`

                let row = document.querySelector(".insert");

                row.insertAdjacentElement("afterbegin", div)
            } else {
                console.log("ekieee")
            }

        }else if(affiche === "articles"){

            let div = document.createElement("div")
            div.setAttribute("class", "col-3")
            div.innerHTML = `
                <div class="card border-0 card-container"
                style="width: 18rem; position: relative; overflow: hidden; ">
                <div class="image-container">
                    <img src="${value[1][0]}" class="image-fluid" alt="todo"
                        style="width: 100%; height: auto;">
                    <div class="gradient-overlay"></div> <!-- Overlay pour le dégradé -->
                </div>
                <div class="card-body bag" style="position: relative;">
                    <h5 class="card-title">${value[0]}</h5>
                    <p class="card-text">${value[3]}€</p>
                    <div class="hide">
                        <h6 class="ok">
                            ${repetervrai('<i class="fa-solid fa-star"></i>', value[2])}
                            ${repeterfaux('<i class="fa-regular fa-star"></i>', value[2])}
                        </h6>
                        <a href="article.html?id=${key}" class="btn btn-primary">voir plus</a>
                        
                    </div>
                </div>
    
                </div>`

            let row = document.querySelector(".insert");

            row.insertAdjacentElement("afterbegin", div)
            

        } 
        else {
            let div = document.createElement("div")
            div.setAttribute("class", "col-3")
            div.innerHTML = `
                <div class="card border-0 card-container"
                style="width: 18rem; position: relative; overflow: hidden; ">
                <div class="image-container">
                    <img src="${value[1]}" class="image-fluid" alt="todo"
                        style="width: 100%; height: auto;">
                    <div class="gradient-overlay"></div> <!-- Overlay pour le dégradé -->
                </div>
                <div class="card-body bag" style="position: relative;">
                    <h5 class="card-title">${value[0]}</h5>
                    <p class="card-text">${value[3]}€</p>
                    <div class="hide">
                        <h6 class="ok">
                            ${repetervrai('<i class="fa-solid fa-star"></i>', value[2])}
                            ${repeterfaux('<i class="fa-regular fa-star"></i>', value[2])}
                        </h6>
                        <a href="article.html?id=${key}" class="btn btn-primary">voir plus</a>
                        
                    </div>
                </div>
    
                </div>`

            let row = document.querySelector(".insert");

            row.insertAdjacentElement("afterbegin", div)


        }




    }






} else {
    console.log("pas bon")
}


