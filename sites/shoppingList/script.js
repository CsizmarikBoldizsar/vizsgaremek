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








let dataList;
function Save() {
    localStorage.setItem("save", JSON.stringify(dataList));
}

function Load() {
    dataList = JSON.parse(localStorage.getItem("save") ?? "[]");
}

function removeItem(itemE, itemD, groupE, groupD) {
    itemE.remove();
    groupD.items.splice(indexOf(groupD.items, itemD), 1);
    if (groupD.items.length == 0) {
        dataList.splice(indexOf(dataList, groupD), 1);
        groupE.remove();
    }
    Save();
}

function newItem(name, extra, amount, bought = false) {
    const id = name.substring(0, 5) + Math.round(Math.random() * 10000);
    return { id: id, name: name, extra: extra, amount: amount, bought: bought };
}

const elementList = document.getElementById("list") ?? NEW("div");

function Draw() {
    Save();
    elementList.innerHTML = "";

    dataList.forEach(groupD => {
        const groupE = NEW("ul", { class: "group" });

        const title = NEW("div", { class: "title", text: groupD.group });

        title.addEventListener("click", () => {
            groupE.classList.toggle("closed");
        });

        groupE.appendChild(title);

        groupD.items.forEach(itemD => {

            const itemE = NEW("li", { class: "element" + (itemD.bought ? " bought" : "") });

            itemE.addEventListener("click", () => {
                itemE.classList.toggle("bought");
                itemD.bought = !itemD.bought
                Save();
            });

            const amount = NEW("span", { class: "amount", text: `${itemD.amount}` });
            itemE.appendChild(amount);
            const product = NEW("span", { class: "name", text: `${itemD.name}` });
            itemE.appendChild(product);
            const extra = NEW("span", { class: "extra", text: (itemD.extra == "" ? "" : `(${itemD.extra})`) });
            itemE.appendChild(extra);
            const del = NEW("div", { class: "delete", text: "🗑️" });
            itemE.appendChild(del);

            del.addEventListener("click", () => {
                removeItem(itemE, itemD, groupE, groupD);
            });

            groupE.appendChild(itemE);

        });

        elementList.appendChild(groupE);

    });
}

const addBtn = document.getElementById("addBtn");
const amountI = document.getElementById("amount");
const nameI = document.getElementById("name");
const extraI = document.getElementById("extra");
const groupI = document.getElementById("group");

addBtn.onclick = () => {
    const obj = newItem(nameI.value, extraI.value, Number(amountI.value));
    let a = false;
    for (const group of dataList) {
        if (group.group == groupI.value) {
            group.items.push(obj);
            Draw();
            return;
        }
    }
    dataList.push({ group: groupI.value, items: [obj] });
    Draw();
};
Load();
Draw();
