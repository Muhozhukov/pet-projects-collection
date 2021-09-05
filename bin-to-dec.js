const input = document.querySelector('.input-form__input');
const calculateButton = document.querySelector('.input-form__submit-button');
const result = document.querySelector('.input-form__result-field');
const errorBlock = document.querySelector('.input-form__result-error');

function binToDec(str) {
    if (!str) {
        result.textContent = 'Result';
    } else {
        const regex = /[2-9]/;
        const nonBinaryDigit = regex.test(str);
        if (nonBinaryDigit) {
            activeErrorBlock()
            input.oninput = function() {
                this.value = this.value.replace(regex, '');
            }
        } else {
            deactiveErrorBlock()
            const arr = str.split('');
            const reverseArray = arr.reverse();
            result.textContent = calculateBinToDec(reverseArray);
        }

    }
}
function activeErrorBlock() {
    errorBlock.classList.add('input-form__result-error_active');
}
function deactiveErrorBlock() {
    errorBlock.classList.remove('input-form__result-error_active');
}

function calculateBinToDec(arr) {
    let sum = 0;
    arr.forEach((item, index) => {
        const bitDegree = Math.pow(2, index);
        const multiplication = bitDegree * item;
        sum = sum + multiplication;
    })
    return sum;
}
input.addEventListener('input', (e) => {
    e.preventDefault();
    const regex = /[2-9]/;
    input.oninput = function() {
        this.value = this.value.replace(regex, '');
    }
    binToDec(input.value);
})