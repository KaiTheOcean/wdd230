const requestURL = "./data.json";

async function getBusiness(requestURL){
    const response = await fetch(requestURL); // Await is designed for waiting for the server of the json file response
    console.log(response);
    if(response.ok){ // to make sure the server is running
        const jsonObject = await response.json();
        console.log(jsonObject);
        const business = jsonObject['business'];
        business.forEach(displayBusinessTable);
        business.forEach(displayBusinessCard);
    }
};

getBusiness(requestURL);

function displayBusinessTable(item)
{
    let tr = document.createElement("tr");
    let tdName = document.createElement("td");
    let tdAddress = document.createElement("td");
    let tdNumber = document.createElement("td");
    let tdWebsite = document.createElement("a");
    
    tdName.textContent = item.name;
    tdAddress.textContent = item.address;
    tdNumber.textContent = item.number;
    tdWebsite.textContent = item.website;

    tdWebsite.href = item.website;  // Add the link to it 

    tr.appendChild(tdName);
    tr.appendChild(tdAddress);
    tr.appendChild(tdNumber);
    tr.appendChild(tdWebsite);

    document.querySelector(".businessTable").appendChild(tr);
}

function displayBusinessCard(item)
{
    let section = document.createElement("section");
    let pAddress = document.createElement('p');
    let pNumber = document.createElement('p');
    let pWebsite = document.createElement('a');
    let img = document.createElement('img');

    pAddress.textContent = item.address;
    pNumber.textContent = item.number;
    pWebsite.textContent = item.website;

    pWebsite.href = item.website;  // Add the link to it 

    img.setAttribute('src', item.img);

    section.appendChild(img);
    section.appendChild(pAddress);
    section.appendChild(pNumber);
    section.appendChild(pWebsite);

    document.querySelector(".businessCards").appendChild(section);
}

function hideTable()
{
    let card = document.querySelector(".businessCards");
    let cardStyle = getComputedStyle(card);
    let table = document.querySelector(".businessTable");
    if (cardStyle.display == "none")
    {
        // this is targeting the inline style 
        // pretty much means it will override the css file
        card.style.display = "grid"; // taget the style object and target the display 
        table.style.display = "none"; 
    }
}

function hideCard()
{
    let table = document.querySelector(".businessTable");
    let tableStyle = getComputedStyle(table);
    let card = document.querySelector(".businessCards");
    if (tableStyle.display == "none")
    {
        table.style.display = "block";
        card.style.display = "none";
    }
}

document.querySelector("#cardsButton").addEventListener('click', hideTable); // if add switchButton() meaning calling the button without clicking
document.querySelector("#tableButton").addEventListener('click', hideCard);