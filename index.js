/*for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
}
*/
const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
        debugger;
    }
    return gifts;
}

function writeCards(names, occasion) {
    const messages = [];
    for (let i = 0; i < names.length; i++) {
    messages.push(`Thank you, ${names[i]}, for the wonderful ${occasion} gift!`); 
    debugger;
    }
    return messages;
}

function countDown(num) {
    let i = num + 1;
    while (i > 0) {
        console.log(num--);
        i = i - 1;
    }
}