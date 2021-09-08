const output = document.querySelector('.calculator__display-entering');
const calculator = document.querySelector('.calculator__buttons');
let num1 = [];
let num2 =[];
let res = 0;
let operation = '';

calculator.addEventListener('click', (e) => {
  if (e.target.classList.contains('calculator__button')) {
    let input = e.target.innerText;
    const regex = /[0-9]/;
      if (regex.test(input)) {
        // Вычисление второй операции после нажатия =
        if (num1 && num2 && res) {
          clearNum1();
          num1.push(res);
          res = 0;
          // clearNum2();
          num2.push(input);
          output.textContent = num2.join('')
        }

        // вычисление операции с изначальным нулём
        else if (num1.length === 0 && operation) {
          num1.push(0);
          num2.push(input);
          output.textContent = num2.join('')
        }

        // первая запись
        else if (num1.length === 0 || !operation) {
          num1.push(input);
          output.textContent = num1.join('')

        // введено первое число, выбрана операция и вводится второе число
        } else if (num1 && operation && !res || num2.length === 0) {
          num2.push(input);
          output.textContent = num2.join('')
        }
      }
    switch (input) {
      case 'AC': clearOutput();
        break;
      case '+': {num2.splice(0, num2.length); operation = '+';}
        break;
      case '–': {num2.splice(0, num2.length); operation = '-';}
        break;
      case '\u00F7': {num2.splice(0, num2.length); operation = '/';} //разделить
        break;
      case '\u00D7': {num2.splice(0, num2.length); operation = '*';} //умножить
        break;
      case ',': {!operation ? num1.push('.') : num2.push('.') };
        break;
      case '=': calculate();
        break;
    }
}
})
function clearOutput() {
  output.classList.remove('calculator__display-entering_small');
  clearNum1();
  clearNum2();
  operation = '';
  res = 0;
  output.textContent = '0';
}
function clearNum2() {
  num2.splice(0, num2.length);
}
function clearNum1() {
  num1.splice(0, num1.length);
}
function calculate() {
  if (res) {
    num1 = res.toString().split('');
  }

  // если не введено хотя бы одно из чисел
  if ((num1.length === 0) || (num2.length === 0)) {
    return
  } else {
    const firstNum = parseFloat(num1.join(''));
    const secNum = parseFloat(num2.join(''));
    switch(operation) {
      case '+': sum(firstNum, secNum);
        break;
      case '-': substraction(firstNum, secNum);
        break;
      case '/': division(firstNum, secNum);
        break;
      case '*': multiplication(firstNum, secNum);
        break;
    }
  }
}
function sum(a, b) {
  res = a + b;
  writeResult(res);
  return res;
}
function substraction(a, b) {
  res = a - b;
  writeResult(res);
  return res;
}
function multiplication(a, b) {
  res = a * b;
  writeResult(res);
  return res;
}
function division(a, b) {
  res = a / b;
  writeResult(res);
  return res;
}
function writeResult(res) {
  if (res.toString().length > 7) {
    res = res.toPrecision(4);
    if (res.length > 7) {output.classList.add('calculator__display-entering_small');}
    output.textContent = res;
  } else {
    output.classList.remove('calculator__display-entering_small');
    output.textContent = res;
  }
}

// вычисления после первой операции (после нажатия =)
// корректная выдача ошибки (обработка NaN)
// ограничение вводимого числа по количеству символов
// начальное значение 0. Если нажать на операцию, то она будет выполнена по отношению к 0
// сценарий - введено первое число знак операции и = (первое число "операция" первое число)
// вычисление второй операции не нажимая кнопку =
