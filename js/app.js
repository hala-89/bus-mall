
'use strict';


let imageDiv = document.getElementById('imgesDiv');

let showResultsButton = document.getElementById('showResults');
//console.log(showResultsButton);

let leftImageElement = document.getElementById('left-image');

let centerImageElement = document.getElementById('center-image');

let rightImageElement = document.getElementById('right-image');


//console.log(leftImageElement, rightImageElement, centerImageElement);

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
    Products.allProducts.push(this);

}

Products.allProducts = [];

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

//console.log(products);

//from lab11 Demo 

function getRandomIndex() {

    return Math.floor(Math.random() * Products.allProducts.length);
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
    //console.log(products[leftImageIndex].name);
    //console.log(products[centerImageIndex].name);
    //console.log(products[rightImageIndex].name);
    //console.log(leftImageElement);


    leftImageElement.src = Products.allProducts[leftImageIndex].imgPath;
    Products.allProducts[leftImageIndex].shown++;

    centerImageElement.src = Products.allProducts[centerImageIndex].imgPath;
    Products.allProducts[centerImageIndex].shown++;

    rightImageElement.src = Products.allProducts[rightImageIndex].imgPath;
    Products.allProducts[rightImageIndex].shown++;
}

renderThreeRandmImages();

//add handle click



imagesDiv.addEventListener('click', handleUserClick);




function handleUserClick(event) {

    if (userAttemptsCounter < maxAttempts) {

        if (event.target.id === 'left-image') {
              userAttemptsCounter++;
            Products.allProducts[leftImageIndex].votes++;
         renderThreeRandmImages();
        }
        else if
            (event.target.id === 'center-image') {
          userAttemptsCounter++;
            Products.allProducts[centerImageIndex].votes++;
            //  console.log(Products.allProducts[centerImageIndex]);
            renderThreeRandmImages();
        } else if (event.target.id === 'right-image') {
      userAttemptsCounter++;
            Products.allProducts[rightImageIndex].votes++;
            renderThreeRandmImages();
        }

    }
        else {

            showResultsButton.hidden = false;


            showResultsButton.addEventListener('click', showResults);


            imagesDiv.removeEventListener('click', handleUserClick);


                }

            



        }



    
    function showResults() {


        let list = document.getElementById('results-list');
        for (let i = 0; i < Products.allProducts.length; i++) {

            let listItem = document.createElement('li');
            list.appendChild(listItem);
            listItem.textContent = `${Products.allProducts[i].name}  had ${Products.allProducts[i].votes} ,and was seen ${Products.allProducts[i].shown} times .`;

        }


        showResultsButton.removeEventListener('click', showResults);
            }