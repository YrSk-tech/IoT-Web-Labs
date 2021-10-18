const mList = document.getElementById('m-list');
const searchList = document.getElementById('find-office-tool');
const clearButton = document.getElementById('clear-search');
const name__input = document.getElementById('name');
const producer__input = document.getElementById('producer');
const price__input = document.getElementById('price');
let keys;
let listChemical = [];
let mesList = [];

function setup() {
    let firebaseConfig = {
        apiKey: 'AIzaSyB06j96sTKzyHe0tJZ5aESQWhQ8mnFdjjo',
        authDomain: 'web-labs-26dc7.firebaseapp.com',
        databaseURL: 'https://web-labs-26dc7.firebaseio.com',
        projectId: 'web-labs-26dc7',
        storageBucket: 'web-labs-26dc7.appspot.com',
        messagingSenderId: '959643053929',
        appId: '1:959643053929:web:1853f02d93930b218017f8',
        measurementId: 'G-S95Y92ZTV2'
    };
    firebase.initializeApp(firebaseConfig);
    database = firebase.database();
    console.log('gkdg');
    loadFirebase();
}

function loadFirebase() {
    let ref = database.ref('chemicals');
    ref.on('value', getData, errData);
    ref.orderByChild('name').once('value', function(snapshot) {
        console.log(snapshot.val());
    });
}

function cleanInputs() {
    document.getElementById('name').value = '';
    document.getElementById('producer').value = '';
    document.getElementById('price').value = '';
}

function sendToFirebase() {
    let data = {

        name: name__input.value,
        producer: producer__input.value,
        price: price__input.value
    };
    if (validation() === false) {
        officeToolManager = database.ref('chemicals').push(data, finished);
        console.log('Firebase generated key: ' + officeToolManager.key);
    } else {
        alert('F!');
    }

    cleanInputs();

    function finished(err) {
        if (err) {
            console.log('ooops, something went wrong.');
            console.log(err);
        } else {
            console.log('Data saved successfully');
        }
    }
}

function errData(error) {
    console.log('Something went wrong.');
    console.log(error);
}

setup();
let toolsTest = mesList;
searchList.addEventListener('keyup', (searchedString) => {
    const filterString = searchedString.target.value.toLowerCase();
    const findMByName = mesList.filter(tool => {
        return tool.name.toLowerCase().includes(filterString);
    });
    toolsTest = findMByName;
    console.log(toolsTest);
    displaySearch();
});

clearButton.addEventListener('click', () => {
    searchList.value = '';
    toolsTest = mesList;

    showMListSorted();
});

function validation() {
    if (name__input.value == '') {
        return true;
    } else if (producer__input.value == '') {
        return true;
    } else if (price__input.value == '') {
        return true;
    } else {
        return false;
    }
}

function displaySearch() {
    cleanPage();
    displayTools(toolsTest);
}

function showMListSorted() {
    const sortItem = document.getElementById('sort-select').value;
    console.log(sortItem);
    if (sortItem == 'none') {
        cleanPage();
        displayTools(mesList);
    } else if (sortItem == 'name') {
        listChemical = [];
        loadFirebaseToSort();
        cleanPage();
        listChemical.sort(sortByName);
        displayTools(listChemical);
    } else if (sortItem == 'price') {
        listChemical = [];
        loadFirebaseToSort();
        cleanPage();
        listChemical.sort(sortByPrice);
        displayTools(listChemical);
    }
}

function countPriceOfМ() {
    let priceSum = 0;
    const totalPrice = document.getElementById('total-price');
    mesList.forEach(tool => priceSum += parseInt(tool.price));
    totalPrice.textContent = 'Total price: ' + priceSum + ' ' + 'UAH';
}

function cleanPage() {
    const innerItem = '';
    mList.innerHTML = innerItem;
}

function sortByName(itemF, itemS) {
    const toolNameF = itemF.name.toLowerCase();
    const toolNameS = itemS.name.toLowerCase();
    if (toolNameF < toolNameS) {
        return -1;
    }
    if (toolNameF > toolNameS) {
        return 1;
    }
    return 0;
}

function sortByPrice(priceF, priceS) {
    return priceF.price - priceS.price;
}

const displayTools = (toolsDisplay) => {
    const displayItems = toolsDisplay.map((tool) => {
        return `
        <li class="office-tool-item">
            <h2> ${tool.name}</h2>
            <h3> Producer: ${tool.producer}</h3>
            <h3> Price: ${tool.price} UAH </h3>
            <div class="section-contr-button">
                <button class="edit-btn" id="edit-btn"> Edit </button>
                <button class="delete-btn" id="delete-btn"> Delete </button>
            </div>
        </li>
    `;
    }).join('');
    mList.innerHTML = displayItems;
};

function getData(data) {
    let mes = data.val();
    let innerItem = ' ';

    keys = Object.keys(data.val());
    keys.forEach((tool, index) => {
        key = keys[index];
        tool = mes[key];
        mesList.push(tool);
        innerItem += `
        <li class="office-tool-item">
            <h2> ${tool.name}</h2>
            <h3> Producer: ${tool.producer}</h3>
            <h3> Price: ${tool.price} UAH </h3>
            <div class="section-contr-button">
                <button class="edit-btn" id="edit-btn" onclick="editButton(${index})"> Edit </button>
                <button class="delete-btn" id="delete-btn" onclick="deleteButton(${index})"> Delete </button>
            </div>
        </li>
        `;
    });

    mList.innerHTML = innerItem;
}

function editButton(index) {
    key = keys[index];
    if (validation() === false) {
        firebase.database().ref('chemicals/' + key).set({
            name: name__input.value,
            producer: producer__input.value,
            price: price__input.value
        });
    } else {
        alert('!');
    }

    cleanInputs();
}

function deleteButton(index) {
    key = keys[index];
    database.ref('chemicals/' + key).remove();
}

function readData(data) {
    let mes = data.val();
    keys = Object.keys(data.val());
    keys.forEach((tool, index) => {
        key = keys[index];
        tool = mes[key];
        console.log(tool.price);
        listChemical.push(tool);
    });
}

function loadFirebaseToSort() {
    let ref = database.ref('chemicals');
    ref.on('value', readData, errData);
}