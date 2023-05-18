const input = document.getElementById("input");
const button = document.getElementById("button");
const list = document.getElementById("list");


function addChapter() {

    if (input.value != "") {
        // create the list item
        const listItem = document.createElement('li');
        listItem.textContent = input.value;

        const inputText = document.createElement("new");
        inputText.textContent = input.value;

        // create the delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = "❌";


        // append to list item
        listItem.appendChild(inputText);
        listItem.appendChild(deleteButton);

        // append to list
        list.appendChild(listItem);

        // add listener
        deleteButton.addEventListener('click', function() {
            list.removeChild(listItem);
        })

    }

    input.focus();
    input.value = "";
    

}

button.addEventListener("click", addChapter);