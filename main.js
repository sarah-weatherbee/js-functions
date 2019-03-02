console.log('hello');

buildName = (firstName, lastName)=> {
    console.log(`${firstName} ${lastName}`);
}

buildName('Zoe', 'Ames');

const dogBreed = (dogName) => {
    return `my fav dog breed is ${dogName}`;

};

const nuggetizer = (a) => {
    return `my favorite thing is ${a}`;
};

console.log(dogBreed('lab'));
console.log(dogBreed('a cat'));

// const dogBreedDiv = document.getElementById('dog-breeds');
// dogBreedDiv.innerHTML = dogBreed('lab');

// const nuggetizerDiv = document.getElementById('nuggetizer');
// nuggetizerDiv.innerHTML = nuggetizer('chicken');
// nuggetizerDiv.innerHTML += nuggetizer('kitten');

const printToDom = (divId, textToPrint) => {
const selectedDiv = document.getElementById(divId);
selectedDiv.innerHTML += textToPrint;
};

printToDom('dog-breeds', dogBreed('lab'));
printToDom('nuggetizer', nuggetizer('kitten'));

printToDom('nuggetizer', 'mmmmmm');