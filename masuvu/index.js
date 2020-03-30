// foreach
// let arr = [5, 6, 7, 8, 9];
// let result = 0;
// arr.forEach(function (item) {
//    result += item;
// })
// console.log(result);

// map
// let arr = [5, 6, 7, 8, 9];
// let newArr = arr.map(arr=>Math.pow(arr,2));
// console.log(newArr);
//    2 sposib Map
// newArr.forEach(function (item) {
//     console.log(Math.pow(item,2));
//  })
//  ;

// Evry/some

// let arr = [{
//       name: 'Ivan',
//       country: 'Ukraine'
//    },
//    {
//       name: 'Petro',
//       country: 'Ukraine'
//    },
//    {
//       name: 'Miguel',
//       country: 'Cuba'
//    }
// ]

// const countryUkraine = arr.every(arr => arr.country === "Ukraine")
// console.log(countryUkraine);

// const countrySomeUkraine = arr.some(arr => arr.country === "Ukraine")
// console.log(countrySomeUkraine);

// filter
// let arr = [1, 'string', [3, 4], 5, [6, 7]];

// const i = arr.filter( arr=>arr.length===2 )
// console.log(i);

// reduce

// let arr = [1,2,3,0,4,6];
// const sum = arr.reduce((acc, el, index) => {
//     if (index < 3) {
//         acc += el;
//     }
//     return acc;
// }, 0)
// console.log(sum);


// dovilnuj sposib
let arr = [1, -2, 3, 0, 6, -5, 6, -11];
arr.forEach(function(item){
    if (item>=0) {
        console.log(item);
        
    }
 })


