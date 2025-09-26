
let selectElem = document.querySelector('select');
let logo = document.querySelector('img');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current == 'dark') {
        document.body.style.backgroundColor = "#333";
        logo.setAttribute("src", "dark logo.png");
        document.body.style.color = "white";
    } else {
        document.body.style.backgroundColor = "white";
        logo.setAttribute("src", "logo.jpg");
        document.body.style.color = "black";
    }
}           
                    