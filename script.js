const div = document.getElementById("root");
const recipeBlock = document.getElementById("recipe"); 
const recipeIngredients = document.getElementById("ingredient");
const settings = document.getElementById("settings");
const searchBar = document.getElementById("searchBar");
const menu = document.getElementById("menu");
const recipes = document.getElementById("recipes");
const cooking  = document.getElementById("cooking");
const account = document.getElementById("account");
const shoppinglist = document.getElementById("shoppinglist");
//kell Id neveket kitalálni, de később még változtathatunk rajta

//bevásárlólista oldalának nyitása
function shopping(){
    open("shopping.html", "_self")
    console.log("okay👍")
}
//nemtudom hogy minek az oldalának nyitása
function idkmegnemdontottemel(){
    open("idkmegnemdontottemel.html", "_self")
    console.log("okay👍")
}
//receptek oldalának nyitása
function recipebook(){
    open("recipes.html", "_self")
    console.log("okay👍")
}
//profil oldalának nyitása
function profile(){
    open("account.html", "_self")
    console.log("okay👍")
}
function setting(){
    /*let list = document.createElement("ul")
    list.appendChild(document.createElement("il"))
    div.innerHTML += list
    */
    div.innerHTML += `<div id="list">
                <ul>
                    <li>no one is here to see this</li>
                    <li>checking</li>
                </ul>    
            </div>`
    console.log("done")
}
//oldal betöltéséért felelős függvény
//elvileg
function load(){
    
}
shoppinglist.addEventListener("click", shopping);
recipes.addEventListener("click", recipebook);
cooking.addEventListener("click", idkmegnemdontottemel);
account.addEventListener("click", profile);
settings.addEventListener("click", setting);