let first_digit = '';
let second_digit = '';



function add(first_digit, second_digit){
    return first_digit + second_digit;
};
function subtract(first_digit, second_digit) {
    return first_digit - second_digit;
};
function multiply(first_digit, second_digit) {
    return first_digit * second_digit;
};
function divide(first_digit, second_digit) {
    return first_digit / second_digit;
};

function insert (num) {
    document.form.text_view.value = document.form.text_view.value + num;
}

let items = document.querySelectorAll('.item');
items.forEach((item) => {
    item.addEventListener('click', function(e) {
        let el = e.target.textContent;
        first_digit += el
        console.log(first_digit)
        insert(el)
    })
})


