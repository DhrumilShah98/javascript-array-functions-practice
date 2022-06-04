const characters = [
    {
        name: 'Luke Skywalker',
        height: 172,
        mass: 77,
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: 202,
        mass: 136,
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: 150,
        mass: 49,
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: 188,
        mass: 84,
        eye_color: 'blue',
        gender: 'male',
    },
];

//***MAP***
//1. Get array of all names
const names = characters.map(function(character){ return character.name; });
console.log(names);
//2. Get array of all heights
const heights = characters.map(function(character){ return character.height; });
console.log(heights);
//3. Get array of objects with just name and height properties
const namesHeights = characters.map(function(character){ return {name: character.name, height: character.height}});
console.log(namesHeights);
//4. Get array of all first names
const firstNames = characters.map(function(character){ return character.name.split(" ")[0]});
console.log(firstNames);

//***REDUCE***
//1. Get total mass of all characters
var totalMass = characters.reduce(function(totalMass, character){ return totalMass + character.mass }, 0);
console.log(totalMass);
//2. Get total height of all characters
var totalHeight = characters.reduce(function(totalHeight, character){ return totalHeight + character.height }, 0);
console.log(totalHeight);
//3. Get total number of characters by eye color
var charactersEyeColors = characters.reduce(function(prev, character){ 
    if(character.eye_color in prev){
        prev[character.eye_color] += 1;
    } else {
        prev[character.eye_color] = 1;
    }
    return prev;
}, {});
console.log(charactersEyeColors);
//4. Get total number of characters in all the character names
var totalNumberOfChars = characters.reduce(function(prev, cur){
    return prev + cur.name.length;
}, 0);
console.log(totalNumberOfChars);

//***FILTER***
//1. Get characters with mass greater than 100
const charsMassGreater100 = characters.filter(function(character){
    return character.mass > 100;
});
console.log(charsMassGreater100);
//2. Get characters with height less than 200
const charsHeightLess200 = characters.filter(function(character){
    return character.height < 200;
});
console.log(charsHeightLess200);
//3. Get all male characters
const charactersMale = characters.filter(function(character){
    return character.gender === 'male';
});
console.log(charactersMale);
//4. Get all female characters
const charactersFemale = characters.filter(function(character){
    return character.gender === 'female';
});
console.log(charactersFemale);

//***SORT***
//1. Sort by mass
console.log(characters.sort(function(char1, char2){
    return char1.mass > char2.mass
}));
//2. Sort by height
console.log(characters.sort(function(char1, char2){
    return char1.height > char2.height
}));
//3. Sort by name
console.log(characters.sort(function(char1, char2){
    return char1.name.toUpperCase() > char2.name.toUpperCase()
}));
//4. Sort by gender
console.log(characters.sort(function(char1, char2){
    return char1.gender.toUpperCase() > char2.gender.toUpperCase()
}));


//***EVERY***
//1. Does every character have blue eyes?
console.log(characters.every(function(character){ 
    return character.eye_color === 'blue';
}));
//2. Does every character have mass more than 40?
console.log(characters.every(function(character){ 
    return character.mass > 40;
}));
//3. Is every character shorter than 200?
console.log(characters.every(function(character){ 
    return character.height < 200;
}));
//4. Is every character male?
console.log(characters.every(function(character){ 
    return character.gender === 'male';
}));

//***SOME***
//1. Is there at least one male character?
console.log(characters.some(function(character){ 
    return character.gender === 'male';
}));
//2. Is there at least one character with blue eyes?
console.log(characters.some(function(character){ 
    return character.eye_color === 'blue';
}));
//3. Is there at least one character taller than 210?
console.log(characters.some(function(character){ 
    return character.height > 210;
}));
//4. Is there at least one character that has mass less than 50?
console.log(characters.some(function(character){ 
    return character.mass < 50;
}));