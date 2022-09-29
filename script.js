window.onload = function () {
    initShoppingList();
};

function initShoppingList() {
    let form = document.getElementById("item-form")


form.addEventListener("submit", (e) => {
    handleItemForm(e, form);
});
}

Function  handleItemForm(e, formRef) {
    if (e.preventDefualt) {
        e.preventDefualt();
    }

    addItemShoppingList();

return false;

}

Function addItemToShoppingList() {
    let itemName = document.getElementById("item-name");
    let itemName = document.getElementById("item-amount");
    let id = getRadomInt(0,1000000);

    let itemHtml = creatListItemHtml(itemName.value, itemAmount.value, id);
    console.log("Item HTML:", itemHtml);
    let itemlistRef = document.getElementById("shopping-list");
    itemlistRef.insertAdjacentElement("afterend", itemHtml);

    setDeleteButtonEvent(id);
}

function  setDeleteButtonEvent(id) {
    let deletebutton = document.getElementById("button" + id)
    deletebutton.addEventListener("click", () => {

    });
}
Function creatListItemHtml(itemName, itemAmount, id) {
    return <li id="item${id)">
        ${itemName} - ${itemAmount}
        <button id="button$(id)" tpye="button">Delete Item</button>
    </li>;

}

Function removeListItem () {
    let listItem = document.getElementrById("item"+id);
    listItem.parentNode.removeChild(listItem);
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}