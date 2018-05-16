//Домашнее задание к лекции 2.2 «Обертки для примитивов»
'use strict'

//task 1
function showSpecialPrice() {
  console.log('Введен секретный код. Все цены уменьшены вдвое!');
}

function fixAmount(amount) {
   const formattedAmount = Number(String(amount).trim().split(' ')[0].replace(',', '.'));
   
   if (isNaN(formattedAmount)) {
     return -1;
   }
   
   return formattedAmount;
}

const orders = [
  { price: 21, amount: 4 },
  { price: 50, amount: '17 штук' },
  { price: 7, amount: '1,5 килограмма' },
  { price: 2, amount: ' 2.7 метра ' },
  { price: 1, amount: 'семь единиц' }
];

for (let order of orders) {
  let result = fixAmount(order.amount);
  console.log(`Заказ на сумму: ${result * order.price} Q`);
}

//task 2
let buffer = '';

function handleKey(char) {
  const secretKey = 'r2d2';
  const lowerChar = char.toLowerCase();
  buffer += lowerChar;
  if (buffer.slice(-4) === secretKey) {
    showSpecialPrice(); 
  }
};

var keys = ['2', '4', 'R', '2', 'd', '2'];
for (let key of keys) {
  handleKey(key);
}

//task 3
function parseData (keys, arr, separator) {
    if (separator === undefined) {
      separator = ',';
    }
    
    let resultArray = [];
    let result = [];
    
    for (let item of arr) {
      const separated = item.split(separator);
    
    for(let i = 0; i < keys.length; ++i){
      resultArray[keys[i]] = separated[i];
    }
    result.push(resultArray);
  }
  return result
};

const data = [
  '12,Телепорт бытовой VZHIH-101 ,17,10000',
  '77, Меч световой FORCE (синий луч), 2,57000'
];

let items = parseData(['id', 'name', 'amount', 'price'], data);
console.log(items);