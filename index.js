// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat() {
  cats.push("Ralph");
}

function destructivelyPrependCat() {
  cats.unshift("Bob");
}

function destructivelyRemoveFirstCat() {
  cats.shift();
}

function destructivelyRemoveLastCat() {
  cats.pop();
}

function appendCat() {
  let newArray = [].concat(cats, "Broom");
  return newArray;
}

function prependCat() {
  let newCat = ["Arnold"].concat(cats);
  return newCat;
}

function removeLastCat() {
  removeLastCat = cats.slice(0, -1);
  return removeLastCat
}

function removeFirstCat(){
    // removeFirstCat = cats.slice(0, 0)
    // return removeFirstCat
    let [, ...removeFirstCat] = cats;
    return removeFirstCat
}