

let NumberBox = document.querySelector("#NumberBox"); 
const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
const reset = document.querySelector("#reset");

let initial_number = 0;

plus.addEventListener('click', function () {
    // initial_number = initial_number + 1;
    let user_number = NumberBox.value;
    initial_number = user_number;
    initial_number++;
    NumberBox.value = initial_number;

});

minus.addEventListener('click', function () {
    // initial_number = initial_number - 1;
    let user_number = NumberBox.value;
    initial_number = user_number;
    initial_number--;
    NumberBox.value = initial_number;

});

reset.addEventListener('click', function () {
    initial_number = 0 ;
    NumberBox.value = initial_number;
});