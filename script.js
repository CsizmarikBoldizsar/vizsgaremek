const test = document.getElementById("demo");
const div = document.getElementById("root");
const recipeBlock = document.getElementById("recipe"); 
const recipeIngredients = document.getElementById("ingredient");
const navBar = document.getElementById("navBar");
const searchBar = document.getElementById("searchBar");
const menu = document.getElementById("menu");
const recipeBook = document.getElementById("recipeBook");
const shoppinglist = document.getElementById("shoppinglist");
//kell Id neveket kitalálni, de később még változtathatunk rajta
function shopping(){
    open("index/shopping.html")
    console.log("okay")
}
shoppinglist.addEventListener("click", shopping)