const div = document.getElementById("root");
const recipeBlock = document.getElementById("recipe"); 
const recipeIngredients = document.getElementById("ingredient");
const navBar = document.getElementById("navBar");
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
//oldal betöltéséért felelős függvény
//elvileg
function load(){
    /**/
}
shoppinglist.addEventListener("click", shopping)
recipes.addEventListener("click", recipebook)
cooking.addEventListener("click", idkmegnemdontottemel)
account.addEventListener("click", profile)