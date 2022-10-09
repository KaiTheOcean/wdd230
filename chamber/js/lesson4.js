var date = new Date();
var realTime = date.getTime()
var year = date.getFullYear();
document.getElementById("year").textContent = year;
document.getElementById("lastModified").textContent = document.lastModified;


let button = document.querySelector("#button")
let navigation = document.querySelector("#navigation")
navigation.style.display = "none"
function toggle() {
    if (navigation.style.display == "none") {
        navigation.style.display = "block"
    }
    else {
        navigation.style.display = "none"
    }
}

button.addEventListener("click", toggle)

// select the elements to manipulate (output to)
const datefield = document.querySelector(".date");

// derive the current date using a date object
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);

datefield.innerHTML = `<em>${fulldate}</em>`;
