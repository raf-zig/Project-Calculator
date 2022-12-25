let first_digit = '';
let second_digit = '';
let sign = '+';


function add(first_digit, second_digit){
    return (+first_digit) + (+second_digit);
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

function insert(num) {
    document.form.text_view.value = document.form.text_view.value + num;
};

function clear(){
    document.form.text_view.value = '';
};

let operator = document.querySelectorAll('.sign');
operator.forEach((signs) => {
    signs.addEventListener('click', function(e) {
        clear();
        let el = e.target.textContent;
        sign = el;
        insert(el);
        first_digit = second_digit;
        second_digit = '';
        console.log(first_digit)
        
    })
})

let items = document.querySelectorAll('.number');
    items.forEach((item) => {
        item.addEventListener('click', function(e) {
            let el = e.target.textContent;
            second_digit += el;
            insert(el);
            console.log(second_digit)
        })
    })

function operate (first_digit, second_digit, sign) {
    if (sign === '+'){
        insert(add(first_digit, second_digit));
    } else if (sign === '-') {
        insert(subtract(first_digit, second_digit));
    } else if (sign === '*') {
        insert(multiply(first_digit, second_digit));
    } else if (sign === '/') {
        insert(divide(first_digit, second_digit)); 
    }
}

let equal = document.querySelector('.equal');
equal.addEventListener('click', function() {
    clear();
    operate (first_digit, second_digit, sign);
})