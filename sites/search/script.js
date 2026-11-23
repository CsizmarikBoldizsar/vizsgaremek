function indexOf(array, element) {
    let _counter = 0;
    for (const e of array) {
        if (e == element)
            return _counter;
        _counter++;
    }
    return -1;
}

function NEW(type, params) {
    const element = document.createElement(type);
    element.id = params?.id ?? "";
    element.classList = params?.class ?? "";
    if (params?.text != undefined)
        element.appendChild(TEXT(params.text));
    return element;
}

function TEXT(string) {
    return document.createTextNode(string);
}







let results = [
    {
        id: 0, 
        name: "Kakaós csiga", 
        desc: "nagyon fincsi, nagyon kakaós csiga", 
        images: [
            "https://rupanerkonyha.hu/wp-content/uploads/2017/10/DSC_0426k.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZf4_fCAz3jf5xw-M5e6T3XBIpM2O7RV7olBdzud2SZJnDMnzfyhqhItk&s=10"
        ], 
        recipe: 
        {
            steps: [
                {name: "só", amount: "1 csipet", leírás: "add hozzá a sót"},
                {name: "kakaó", amount: "2 ek", leírás: "tedd bele a kakaót"},
            ],
            totalTime: "60 perc"
        } 
    }
]

for (let index = 0; index < 30; index++) {

    results.forEach(resultD => {
        
        resultE = NEW("div", {class: "result"})
        nameBox = NEW("div", {class: "nameBox"})
        title = NEW("span", {class: "title", text: resultD.name})
        desc = NEW("div", {class: "desc", text: resultD.desc})
    
        resultE.style.backgroundImage = `url(${resultD.images[0]})`
    
        resultE.appendChild(nameBox)
        nameBox.appendChild(title)
        nameBox.appendChild(desc)
    
        base.appendChild(resultE)
    });
    
}



