
'use strict';



let imageDiv = document.getElementById('imgesDiv');

let showResultsButton = document.getElementById('showResults');
//console.log(showResultsButton);

let leftImageElement = document.getElementById('left-image');

let centerImageElement = document.getElementById('center-image');

let rightImageElement = document.getElementById('right-image');


//console.log(leftImageElement, rightImageElement, centerImageElement);

let maxAttempts = 25;

let userAttemptsCounter = 0;

let leftImageIndex;
let centerImageIndex;
let rightImageIndex;

let nameArr = [];

let votesArr = [];
let shwonArr = [];



function Products(name, imgPath) {

  this.name = name;
  this.imgPath = imgPath;
  this.votes = 0;
  this.shown = 0;
  Products.allProducts.push(this);
  nameArr.push(this.name);




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
new Products('sweep', 'img/sweep.png');
new Products('tauntaun', 'img/tauntaun.jpg');
new Products('unicorn', 'img/unicorn.jpg');
new Products('water-can', 'img/water-can.jpg');
new Products('wine-glass', 'img/wine-glass.jpg');

//console.log(products);

//from lab11 Demo 

function getRandomIndex() {

  return Math.floor(Math.random() * Products.allProducts.length);
}

//console.log(getRandomIndex());



let showPics = [];

function renderThreeRandmImages() {


  leftImageIndex = getRandomIndex();
  centerImageIndex = getRandomIndex();
  rightImageIndex = getRandomIndex();

  while (leftImageIndex === centerImageIndex || leftImageIndex === rightImageIndex || rightImageIndex === centerImageIndex || showPics.includes(leftImageIndex) ||
    showPics.includes(centerImageIndex) || showPics.includes(rightImageIndex)) {

    centerImageIndex = getRandomIndex();
    leftImageIndex = getRandomIndex();
    rightImageIndex = getRandomIndex();



  }
  /*console.log(products[leftImageIndex].name);
 console.log(products[centerImageIndex].name);
  console.log(products[rightImageIndex].name);
  console.log(leftImageElement);*/
  showPics = [leftImageIndex, centerImageIndex, rightImageIndex],


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

    saveLocalStorge();

    imagesDiv.removeEventListener('click', handleUserClick);

    showResultsButton.hidden = false;


    showResultsButton.addEventListener('click', showResults);


    showChart();
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
  showResultsButton.hidden = true;


}



///// form dome lab 

function showChart() {


  for (let i = 0; i < Products.allProducts.length; i++) {

    console.log(Products.allProducts[i].votes);
    votesArr.push(Products.allProducts[i].votes);
    shwonArr.push(Products.allProducts[i].shown);
  }


  const data = {
    labels: nameArr,
    datasets: [{
      label: 'Votes',
      data: votesArr,
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 205, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(201, 203, 207, 0.2)'
      ],
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
        'rgb(153, 102, 255)',
        'rgb(201, 203, 207)'
      ],
      borderWidth: 1
    },
    {
      label: 'Shown',
      data: shwonArr,

      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 205, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(201, 203, 207, 0.2)'
      ],
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
        'rgb(153, 102, 255)',
        'rgb(201, 203, 207)'
      ],
      borderWidth: 1
    }

    ]
  };

  const config = {
    type: 'bar',
    data: data,
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    },
  };


  var myChart = new Chart(
    document.getElementById('myChart'),
    config
  );

}


////////


function  saveLocalStorge(){

  let data=JSON.stringify (Products.allProducts);
  localStorage.setItem('product',data);

}


function loadLocalStorge() {
  let data = localStorage.getItem('product');


  let parseArr = JSON.parse(data);

  if (parseArr !== null) {


  Products.allProducts=parseArr;
    



  }
}

loadLocalStorge();


