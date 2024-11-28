const searchInput = document.getElementById("search_input");

const crossContainer = document.getElementById("cross_container");

const cross = document.getElementById("cross");

function showhidecross() {
    if (searchInput.value.length > 0) {
        crossContainer.style.visibility = "visible";
    } else {
        crossContainer.style.visibility = "collapse";
    }
}

function clearInputText() {
    searchInput.value = "";
    crossContainer.style.visibility = "collapse"
}

searchInput.oninput = showhidecross;

cross.onclick = clearInputText;