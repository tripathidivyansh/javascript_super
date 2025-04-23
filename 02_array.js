const marvel_heros = ["thor", "Ironam", "spiderman"];
const dc_heros = ["Superman", "flash"]
// console.log(marvel_heros);

const all_hero = marvel_heros.concat(dc_heros);
console.log(marvel_heros);

console.log(all_hero);
const all_new_heros = [...marvel_heros, ...dc_heros];
console.log(all_new_heros);

const antoher_array = [1, 2, 3, [4, 5, 6], 7, [4, 5]];

const real_another_array = antoher_array.flat(Infinity);
console.log(real_another_array);


console.log(Array.from("Malik"));
console.log(Array.from({name: "Malik"}));
// interesting

let Score1 = 100;
let Score2 = 200;
let Score3 = 300;

console.log(Array.of(Score1, Score2, Score3));
