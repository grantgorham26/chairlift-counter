// document.getElementById("count-el").innerText = 5
// let count = 5 + 7

// console.log(count)

// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count

let countEl = document.getElementById("count-el");
let saveEl = document.getElementById('save-el');

let count = 0;
function increment(){
    count+=1;
    countEl.innerText = count;
};

function save(){
    let save = count + '-';
    saveEl.textContent += save;
    countEl.textContent = 0
    count = 0
};





