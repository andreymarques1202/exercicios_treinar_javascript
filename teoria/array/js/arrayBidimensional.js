const characterAnimes = ["Luffy", "Zoro", [
    "Naruto", "Gaara"], ["Ban", "King"], "Franky"];

//Iterração de array bidimensionais utiliza for dentro de for

for(let i = 0; i < characterAnimes.length; i++) {
    for(let j = 0; j < characterAnimes[i].length; j++) {
        console.log(characterAnimes[j]);
    }
};