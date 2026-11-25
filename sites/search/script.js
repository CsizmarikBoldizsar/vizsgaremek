function indexOf(array, element) {
    let _counter = 0;
    for (const e of array) {
        if (e == element)
            return _counter;
        _counter++;
    }
    return -1;
}

function NEW(type, params, events) {
    const element = document.createElement(type);
    if (params?.id) element.id = params.id;
    if (params?.class) element.classList = params.class;
    if (params?.value) element.value = params.value;
    if (params?.type) element.type = params.type;
    if (params?.for) element.for = params.for;
    if (params?.text) element.appendChild(TEXT(params.text));

    if (params?.children){
        params.children.forEach(child => {
            ADD(element,child)
        });
    }

if (events){
    events.forEach(e=>{
        element.addEventListener(e.type,e.event)
    })
}


    
    return element;
}

function ADD(parent,child) {
    parent.appendChild(child)
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



