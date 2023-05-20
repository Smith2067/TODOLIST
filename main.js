const list = document.getElementById("list");

document.getElementById("userItemSubmit").addEventListener("click", function(){
    event.preventDefault();
    var newListItem = document.createElement("div");
    newListItem.setAttribute("class", "list-item")
    var newListHeading = document.createElement("h2");
    newListHeading.innerText = document.getElementById("userItemInput").value;
    newListItem.appendChild(newListHeading);
    var newDeleteButton = document.createElement("button");
    newDeleteButton.innerText = "Delete";
    newDeleteButton.setAttribute("class", "delete-button");
    newDeleteButton.addEventListener("click", deleteListItem);
    newListItem.appendChild(newDeleteButton);
    list.appendChild(newListItem)
})

function deleteListItem(){
    var listItemToDelete = this.parentNode;
    listItemToDelete.remove();
}