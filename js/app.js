
'use strict';


let productsImage = document.getElementById('imgesDiv');


let leftImageElement = document.getElementById('left-image');
console.log(leftImageElement);
let centerImageElement = document.getElementById('center-image');

let rightImageElement = document.getElementById('right-image');
let showResultsButton=document.getElementById('showResults');
console.log(showResultsButton);

console.log(leftImageElement, rightImageElement, centerImageElement);

let maxAttempts = 10;
let userAttemptsCounter = 0;

let leftImageIndex;
let centerImageIndex;
let rightImageIndex;

function Products(name, imgPath) {

    this.name = name;
    this.imgPath = imgPath;
    this.votes = 0;
    this.shown = 0;
    products.push(this);

}

let products = [];

new Products('bag', 'img/bag.jpg');
new Products('banana', 'img/banana.jpg');
new Products('bathroom', 'img/bathroom.jpg');
new Products('boots', 'img/boots.jpg');
new Products('breakfast', 'img/breakfast.jpg');
new Products('bubblegum', 'img/bubblegum.jpg');
new Products('chair', 'img/chair.jpg');
new Products('cthulhu', 'img/cthulhu.jpg');
new Products('dog-duck', 'img/dog-duck.jpg');
new Products('dragon', 'img/dragon.jpg');
new Products('pen', 'img/pen.jpg');
new Products('pet-sweep', 'img/pet-sweep.jpg');
new Products('scissors', 'img/scissors.jpg');
new Products('shark', 'img/shark.jpg');
new Products('sweep', 'img/sweep.jpg');
new Products('tauntaun', 'img/tauntaun.jpg');
new Products('unicorn', 'img/unicorn.jpg');
new Products('water-can', 'img/water-can.jpg');
new Products('wine-glass', 'img/wine-glass.jpg');

console.log(products);

//from lab11 Demo 

function getRandomIndex() {

    return Math.floor(Math.random() * products.length);
}

console.log(getRandomIndex());

function renderThreeRandmImages() {

    leftImageIndex = getRandomIndex();
    centerImageIndex = getRandomIndex();
    rightImageIndex = getRandomIndex();

    while (leftImageIndex === centerImageIndex || leftImageIndex === rightImageIndex || rightImageIndex === centerImageIndex) {

        centerImageIndex = getRandomIndex();
        leftImageIndex = getRandomIndex();
        rightImageIndex = getRandomIndex();
    }
    console.log(products[leftImageIndex].name);
    console.log(products[centerImageIndex].name);
    console.log(products[rightImageIndex].name);
    console.log(leftImageElement);
    leftImageElement.src = products[leftImageIndex].imgPath;
    centerImageElement.src = products[centerImageIndex].imgPath;
    rightImageElement.src = products[rightImageIndex].imgPath;

    products[leftImageIndex].shown++;
    products[centerImageIndex].shown++;
    products[rightImageIndex].shown++;
}

renderThreeRandmImages();

//add handle click
leftImageElement.addEventListener('click', handleUserClick);
centerImageElement.addEventListener('click', handleUserClick);
rightImageElement.addEventListener('click', handleUserClick);
let imagesDiv = document.getElementById('imagesDiv');
imagesDiv.addEventListener('click', handleUserClick);



function handleUserClick(event) {
  
    if (userAttemptsCounter < maxAttempts) {
        renderThreeRandmImages();
        if (event.target.id === 'left-image') {
            userAttemptsCounter++;
            products[leftImageIndex].votes++;
        
            // console.log(products[leftImageIndex]);
        }
        else if
            (event.target.id === 'center-image') {
            userAttemptsCounter++;
            products[centerImageIndex].votes++;
            //  console.log(products[centerImageIndex]);

        } else if (event.target.id === 'right-image') {
            userAttemptsCounter++;
            products[rightImageIndex].votes++;
            //console.log(products[rightImageIndex]);
        }
      }  else {

            imagesDiv.removeEventListener('click', handleUserClick);
            showResultsButton.addEventListener('click', showResults);

        }


    }

function showResults(){


    let list = document.getElementById('results-list');
    for (let i = 0; i < products.length; i++) {

        let listItem = document.createElement('li');
        list.appendChild(listItem);
        listItem.textContent = `${products[i].name}  had ${products[i].votes} ,and was seen ${products[i].shown} times .`;

    }
}