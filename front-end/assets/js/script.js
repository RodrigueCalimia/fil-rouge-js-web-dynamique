/*let idSectionHero = document.getElementById("section-hero")
console.log(idSectionHero)

let classSectionHero = document.getElementsByClassName("section-hero")
console.log(classSectionHero)

let idSectionHeroQuery = document.querySelector("#section-hero")
console.log(idSectionHeroQuery)

let classSectionHeroQuery = document.querySelector(".section-hero")
console.log(classSectionHeroQuery)

let listContent = document.querySelectorAll(".section-content div")
console.log(listContent)

let inputlistContent = document.querySelectorAll("input[name=optionSource]")

let baliseImage = document.querySelector(".section-content img")
console.log(baliseImage)
//baliseImage.setAttribute("src", "./assets/images/logo.png")
baliseImage.src = "./assets/images/logo.png"
baliseImage.setAttribute("alt", "logo de Rc.app")
baliseImage.classList.add("newclass", "class2")
//baliseImage.classList.remove("sup")

// Création d'une balise img
let sectionContent = document.getElementById("section-content")
let newBaliseImg = document.createElement("img")
newBaliseImg.src = "./assets/images/logo.png"
newBaliseImg.alt = "logo de Rc.App"

sectionContent.appendChild(newBaliseImg)

// Injecter du texte
let titreH3 = "Un titre H3"
let pContent = "Le contenu du paragraphe"

let newSection = document.createElement("section")
let newTitleH3 = document.createElement("h3")
let newParagraph = document.createElement("p")

newTitleH3.innerText = titreH3
newParagraph.innerText = pContent

newSection.appendChild(newTitleH3)
newSection.appendChild(newParagraph)

document.querySelector("main").appendChild(newSection)

// Insertion HTML
let maVariable = 1
let codeHTML = "<div>"+ maVariable + " div insérée</div>"
codeHTML = codeHTML + "<span>toto</span>"
let codeHTML =`
    <div>${maVariable} div insérée</div>
    <span>titi</span>
`
//document.querySelector("main").innerHTML = codeHTML
let newSection1 = document.createElement("section")
newSection1.innerHTML = codeHTML
document.querySelector("main").innerHTML = codeHTML
*/
// action
/*
let monBouton = document.getElementById("monBouton")
monBouton.addEventListener("click", function(){
    console.log("Click sur le bouton")
})*/
/*
let form = document.querySelector('form')
let inputNom = document.querySelector('#nom')
let inputNomValue = inputNom.value
form.addEventListener("click", (event) =>{
    event.preventDefault()
    if (inputNomValue.length < 2){
        console.log("le champ nom est vide")
    }else{
        
        console.log("le champ nom est rempli")
    }
})
*/
// Regex
let nom = "nom"
let regex = new RegExp("^[a-z]+$")
let resultat = regex.test(nom)
console.log(resultat)