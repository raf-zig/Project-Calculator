let first_digit = '';
let second_digit = '';
let sign = '';
let calculation_result = '';

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
        sign = e.target.textContent;
        if (first_digit === ''){
            first_digit = second_digit; 
        } else {
            first_digit = calculation_result;
        };
        second_digit = '';
    });
});

let items = document.querySelectorAll('.number');
    items.forEach((item) => {
        item.addEventListener('click', function(e) {
            let elem = e.target.textContent;
            second_digit += elem;
            insert(elem);
        });
    });

function operate (first_digit, second_digit, sign) {
    if (sign === '+'){
        insert(add(first_digit, second_digit));
        calculation_result = add(first_digit, second_digit);
    } else if (sign === '-') {
        insert(subtract(first_digit, second_digit));
        calculation_result = subtract(first_digit, second_digit);
    } else if (sign === '*') {
        insert(multiply(first_digit, second_digit));
        calculation_result = multiply(first_digit, second_digit);
    } else if (sign === '/') {
        if (second_digit === '0'){
            insert('Error');
            first_digit = '';
            second_digit = '';
            return;
        };
        insert(divide(first_digit, second_digit)); 
        calculation_result = divide(first_digit, second_digit);
    };
};

let equal = document.querySelector('.equal');
equal.addEventListener('click', function() {
    clear();
    operate (first_digit, second_digit, sign);
});

let clear_button = document.querySelector('.erase');
clear_button.addEventListener('click', function() {
    clear();
    first_digit = '';
    second_digit = '';
});

let back = document.querySelector('.back');
back.addEventListener('click', function() {
    let exp = document.form.text_view.value;
    document.form.text_view.value = exp.substring(0, exp.length -1);
    second_digit = document.form.text_view.value;
});