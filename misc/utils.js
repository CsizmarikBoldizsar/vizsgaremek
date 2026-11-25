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

