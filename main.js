let LeftList = document.getElementById('#leftcard');
let RightList = document.getElementById('#rightlist');

let foodList = [
  {
    id: 1,
    imgUrl: 'https://quizzical-murdock-fa5953.netlify.app/img/pizza1.png',
    name: 'Pepperoni',
    price: 2.23
  },
  {
    id: 2,
    imgUrl: 'https://quizzical-murdock-fa5953.netlify.app/img/pizza3.jpg',
    name: 'Chessy',
    price: 5.99
  },
  {
    id: 3,
    imgUrl: 'https://quizzical-murdock-fa5953.netlify.app/img/pizza2.jpg',
    name: 'Margarits',
    price: 7.48
  },
  {
    id: 4,
    imgUrl: 'https://quizzical-murdock-fa5953.netlify.app/img/pizza3.jpg',
    name: 'Hawaiian',
    price: 9.32
  }
]

for (let i = 0; i < foodList.length; i++) {
  let li = document.createElement("li");
  li.classList.add("pitsa__list");
  li.innerHTML `
    <img scr="${foodList[i].imgUrl}" alt="pizza">
    <div class="pitsa__info">
    <p class="pitsa__name"${foodList[i].name}></p>
    <p class="pitsa__cost"${foodList[i].price}>$</p>
    <button "class="pitsa__btn" ${foodList[i].id}>Add to cart</button>
  </div>
  `
  LeftList.appendChild(li)
}
