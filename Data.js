
//nom de l'article, src de l'image,le nombre d'etoile, le prix , la description. 
const articles = {
    original: ["Tshirt-original",["/Pictures/tshirt3.jpg","Pictures/oA.jpg","Pictures/oB.jpg"], 4,121, "Redéfinissez votre style avec le T-shirt Original et faites de votre tenue une déclaration personnelle. Soyez original, soyez authentique, et laissez ce t-shirt être le reflet de votre individualité et de votre créativité."],
    noname: ["Un Tshirt-Noname", ["/Pictures/tshirt1.jpg","/Pictures/TshirtA.jpg","/Pictures/TshirtB.jpg"], 3,117, "Le T-shirt Noname offre la liberté d'expression sans l'étiquette d'une marque, permettant à chacun de faire parler son style sans aucune restriction. Sa simplicité est sa force, offrant une base parfaite pour créer un look décontracté et authentique, reflétant votre personnalité sans contrainte"],
    Cargo: ["Pantalon Cargo gucci", ["/Pictures/pantalon.jpg","/Pictures/pA (1).jpg","/Pictures/pA (2).jpg"], 5, 30, "Fabriqué à partir de matériaux de première qualité, ce pantalon offre non seulement un look luxueux, mais aussi une sensation de confort incomparable. Son design innovant combine l'aspect pratique des poches cargo avec l'empreinte distinctive de Gucci, créant ainsi une pièce unique en son genre"],
    warash: ["warash 360 flip", ["/Pictures/shoe3.jpg","Pictures/sA.jpg","Pictures/sB.jpg"], 4, 150, "Découvrez le warash 360 flip, une figure de skateboard emblématique qui combine agilité, précision et style. Aussi connu sous le nom de 'tre flip', ce mouvement audacieux consiste à faire tourner la planche à 360 degrés tout en réalisant un flip. Le résultat est une figure spectaculaire qui demande maîtrise et habileté"],
    allowa: ["chemise 4eus", ["/Pictures/chemise1.jpg","Pictures/chA.jpg","Pictures/chB.jpg"], 1, 20, "Découvrez notre chemise à la fois élégante et abordable, conçue pour vous offrir style et confort à un prix exceptionnel. Fabriquée avec des matériaux de qualité, cette chemise incarne l'alliance parfaite entre la mode contemporaine et l'accessibilité.Sa coupe soigneusement étudiée et son design moderne en font un incontournable de votre garde-robe. Que ce soit pour une journée décontractée ou une occasion spéciale, cette chemise polyvalente s'adapte à toutes les situations. Ses détails raffinés "],
    curtal: ["Talon watford", ["/Pictures/shoef1.jpg","Pictures/shA.jpg","Pictures/shB.jpg"], 5, 250, " Les talons Watford incarnent l'élégance intemporelle et le raffinement à chaque pas. Conçus avec un mélange subtil de sophistication et de confort, ces talons sont l'incarnation parfaite de l'artisanat exquis et du style exaltant. Leur silhouette élancée allie habilement l'audace moderne à une touche classique, offrant à chaque femme une allure à la fois sophistiquée et glamour. "],
    
}

const promo = {
    original: ["Tshirt-original","/Pictures/tshirt3.jpg", 4,  121, "Redéfinissez votre style avec le T-shirt Original et faites de votre tenue une déclaration personnelle. Soyez original, soyez authentique, et laissez ce t-shirt être le reflet de votre individualité et de votre créativité."],
    noname: ["Un Tshirt-Noname", "/Pictures/tshirt1.jpg", 3, 115, "Le T-shirt Noname offre la liberté d'expression sans l'étiquette d'une marque, permettant à chacun de faire parler son style sans aucune restriction. Sa simplicité est sa force, offrant une base parfaite pour créer un look décontracté et authentique, reflétant votre personnalité sans contrainte"],
    Cargo: ["Pantalon Cargo gucci", "/Pictures/pantalon.jpg", 5, 30, "Fabriqué à partir de matériaux de première qualité, ce pantalon offre non seulement un look luxueux, mais aussi une sensation de confort incomparable. Son design innovant combine l'aspect pratique des poches cargo avec l'empreinte distinctive de Gucci, créant ainsi une pièce unique en son genre"],
    warash: ["warash 360 flip", "/Pictures/shoe3.jpg", 4, 150, "Découvrez le warash 360 flip, une figure de skateboard emblématique qui combine agilité, précision et style. Aussi connu sous le nom de 'tre flip', ce mouvement audacieux consiste à faire tourner la planche à 360 degrés tout en réalisant un flip. Le résultat est une figure spectaculaire qui demande maîtrise et habileté"],
  
    
} 
const article = {
    original: ["Tshirt-original",["/Pictures/tshirt3.jpg","Pictures/oA.jpg","Pictures/oB.jpg"] , 4, 121, "Redéfinissez votre style avec le T-shirt Original et faites de votre tenue une déclaration personnelle. Soyez original, soyez authentique, et laissez ce t-shirt être le reflet de votre individualité et de votre créativité."],
    noname: ["Un Tshirt-Noname",["/Pictures/tshirt1.jpg","/Pictures/TshirtA.jpg","/Pictures/TshirtB.jpg"], 3,117, "Le T-shirt Noname offre la liberté d'expression sans l'étiquette d'une marque, permettant à chacun de faire parler son style sans aucune restriction. Sa simplicité est sa force, offrant une base parfaite pour créer un look décontracté et authentique, reflétant votre personnalité sans contrainte"],
    Cargo: ["Pantalon Cargo gucci",["/Pictures/pantalon.jpg","/Pictures/pA (1).jpg","/Pictures/pA (2).jpg"], 5, 30, "Fabriqué à partir de matériaux de première qualité, ce pantalon offre non seulement un look luxueux, mais aussi une sensation de confort incomparable. Son design innovant combine l'aspect pratique des poches cargo avec l'empreinte distinctive de Gucci, créant ainsi une pièce unique en son genre"],
    warash: ["warash 360 flip", ["/Pictures/shoe3.jpg","Pictures/sA.jpg","Pictures/sB.jpg"], 4, 180, "Découvrez le warash 360 flip, une figure de skateboard emblématique qui combine agilité, précision et style. Aussi connu sous le nom de 'tre flip', ce mouvement audacieux consiste à faire tourner la planche à 360 degrés tout en réalisant un flip. Le résultat est une figure spectaculaire qui demande maîtrise et habileté"],
    allowa: ["chemise 4eus", ["/Pictures/chemise1.jpg","Pictures/chA.jpg","Pictures/chB.jpg"], 1, 20, "Découvrez notre chemise à la fois élégante et abordable, conçue pour vous offrir style et confort à un prix exceptionnel. Fabriquée avec des matériaux de qualité, cette chemise incarne l'alliance parfaite entre la mode contemporaine et l'accessibilité.Sa coupe soigneusement étudiée et son design moderne en font un incontournable de votre garde-robe. Que ce soit pour une journée décontractée ou une occasion spéciale, cette chemise polyvalente s'adapte à toutes les situations. Ses détails raffinés "],
    curtal: ["Talon watford", ["/Pictures/shoef1.jpg","Pictures/shA.jpg","Pictures/shB.jpg"], 5, 25, " Les talons Watford incarnent l'élégance intemporelle et le raffinement à chaque pas. Conçus avec un mélange subtil de sophistication et de confort, ces talons sont l'incarnation parfaite de l'artisanat exquis et du style exaltant. Leur silhouette élancée allie habilement l'audace moderne à une touche classique, offrant à chaque femme une allure à la fois sophistiquée et glamour. "],
    
}


localStorage.setItem("articles", JSON.stringify(articles));
localStorage.setItem("article", JSON.stringify(articles));


localStorage.setItem("promo",JSON.stringify(promo));







$("#email").focusout(function(e){

    let useremail = $(this).val();
    console.log(useremail)
    
    
   // let Currentusers = JSON.parse(localStorage.getItem("currentuser")) ||[];   
    
      localStorage.setItem("Currentuser", JSON.stringify(useremail));
    
    
    })



 let user=   localStorage.getItem("Currentuser")
    
    




    let users = JSON.parse(localStorage.getItem(user)) || [];   
    
   localStorage.setItem(user, JSON.stringify(users));


    $("#toto").click(function(e){
    e.preventDefault();
    const params = new URLSearchParams(window.location.search);
const id = params.get('id');
alert("element ajouter dans le panier");
    let infos = JSON.parse(localStorage.getItem(user)) || [];
       
            if(Array.isArray(infos)){
                infos.push(id);
                localStorage.setItem(user, JSON.stringify(infos));
            }else{
                // inf.push(infos);
                let inf = [infos]
                inf.push(id)
                localStorage.setItem(user, JSON.stringify(inf));
            }


})



let i = localStorage.getItem(user)
console.log(i)







function repetervrai(phrase, nombre) {
    return phrase.repeat(nombre)
}
function repeterfaux(phrase, nombre) {
    var newnombre = 5 - nombre
    return phrase.repeat(newnombre)
}




let attributes = JSON.parse(localStorage.getItem(user)) || [];
console.log(attributes)

if(attribute !== null){
for(var attribute of attributes ){
    console.log(attribute)

    
    console.log(article[attribute][1])


if(affiche === "panier"){
    console.log("ok")

    let tr = document.createElement("tr")
           
            tr.innerHTML = `
            <th scope="row" class="col-9"> 
            <div class="row g-0">
              <div class="col-2">
                <img src="${article[attribute][1][0]}" class="img-fluid rounded-start" alt="...">
              </div>
              <div class="col-7 ms-5">
                <div class="card-body">
                  <h5 class="card-title">${article[attribute][0]}</h5>
                  <div class="hidee">
                        <h6 class="ok">
                            ${repetervrai('<i class="fa-solid fa-star"></i>', article[attribute][2])}
                            ${repeterfaux('<i class="fa-regular fa-star"></i>', article[attribute][2])}
                        </h6>
                        <select  name="tes" id="${attribute}" >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>

                      </select>
                        
                    </div>

                <p class="card-text"><small class="text-body-secondary">Livraison GRATUITE par FMK-store</small></p>
              </div>
                 
                  <p class="card-text"><small class="text-body-secondary">En stock</small></p>
                </div>
              </div>
            
    </th>
    <td class="col-2">
      <h5 class="fw-bold"> ${article[attribute][3]}€</h5>
      <button type="button" class="btn btn-danger deletee" id="${attribute}">supprimer</button>
    </td>
    
    `

            let tbody = document.querySelector(".enter");

            tbody.insertAdjacentElement("afterbegin", tr)
    
}



}

}
else{
    console.log("tableau null")
}





if(affiche === "panier"){

let prixtotal=0;


 let verified = false;
let atts = JSON.parse(localStorage.getItem(user)) || [];

for(var att of atts ){
    prixtotal += article[att][3];
   
}
console.log(prixtotal)


function isoptionselected(cle, options){
    return cle.value === options
}


let attrs = JSON.parse(localStorage.getItem(user)) || [];


let selectedElements = document.querySelectorAll('select[name="tes"]');


selectedElements.forEach(selectedElement =>{
    selectedElement.addEventListener("change",function(event){
        let quantity = parseInt(event.target.value);
        let articleId = event.target.id;


       let oldValue = event.target.oldValue;
       let newvalue = event.target.value;


       event.target.oldValue = newvalue;   //pour avoir le old on devait d'abord passer le new mais pas directement pas une attribution dirrect ce que ca allait juste etre une attribut et new et old aller etre identique au meme moment ca vraiemnt avoir un new et un old value. 

       console.log(`Ancienne valeur: ${oldValue}`);
       console.log(`Nouvelle valeur: ${newvalue}`);

       if(oldValue){
        let  op = (oldValue-1) *article[articleId][3];
                prixtotal = prixtotal - op;
       }

        let  leprix = article[articleId][3];

        let operation = (quantity -1) *leprix
            
            prixtotal = prixtotal + operation


            console.log(prixtotal);

            let divv = document.createElement("div");
            divv.innerHTML = `<h4>Prix Total: ${prixtotal}€</h4>`;
            
            let toto = document.querySelector(".total");
            toto.innerHTML = ''; // Efface le contenu existant avant de le remplacer
            toto.insertAdjacentElement("afterbegin", divv);
            
    })
   
})



let divv = document.createElement("div");
divv.innerHTML = `<h4>Prix Total: ${prixtotal}€</h4>`;

let toto = document.querySelector(".total");
toto.innerHTML = ''; // Efface le contenu existant avant de le remplacer
toto.insertAdjacentElement("afterbegin", divv);


function verifiedexiste(array,element){
    return array.includes(element);

}

function deleteelement(array, element){
    let index = array.indexOf(element)
    if(index !== -1){
    array.splice(index, 1);
    }
    return array;
}



let recupalls = document.querySelectorAll(".deletee");


recupalls.forEach(recupall=>{
     recupall.addEventListener("click", function(e){
     let recpdelete = e.target.id
        console.log(recpdelete)

      let tableau = JSON.parse(localStorage.getItem(user));
      console.log(tableau)

      if(verifiedexiste(tableau, recpdelete)){
          tableau=  deleteelement(tableau,recpdelete);
      }

      localStorage.setItem(user,JSON.stringify(tableau))
      location.reload();
    })
})







    


 
   
}




























































