// const myArr=[1,3,4,5];


// myArr.push(6);
// myArr.pop();
// myArr.unshift(0);
// console.log(myArr);

// console.log(myHeroes[0]);

// const newArray=myArr.join();
// console.log(newArray);

const myHeroes=["Batman","Hulk", "Thor", "Groot"];

const myVil=["Joker","Thanos", "Electra", "Lokiji"];

// myHeroes.push(myVil);

// const allHeroes = myHeroes.concat(myVil);

const allHeroes=[...myHeroes,...myVil];

console.log(allHeroes);


