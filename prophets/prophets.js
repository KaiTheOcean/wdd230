// ASYNC AWAIT Fetch
const requestURL = "https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json";

async function getProphets(requestURL){
    const response = await fetch(requestURL); // Await is designed for waiting for the server of the json file response
    console.log(response);
    if(response.ok){ // to make sure the server is running
        const jsonObject = await response.json();
        console.log(jsonObject);
        const prophets = jsonObject['prophets'];
        prophets.forEach(displayProphets);
    }
};

getProphets(requestURL);

function displayProphets(prophet) {
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let dob = document.createElement('p');
    let pob = doucment.createElement('p');
    let img = document.createElement('img');

    dob.textContent = item.birthdate;
    pob.textContent = item.birthplace;
    img.setAttribute('src', item.imageurl);
    img.setAttribute('src', item.name + ' ' + item.lastname);
    h2.textContent = prophet.name + " " + prophet.lastname;
    card.appendChild(h2);
    card.appendChild(dob);
    card.appendChild(pob);
    card.appendChild(img);
    document.querySelector(".cards").appendChild(card);
}