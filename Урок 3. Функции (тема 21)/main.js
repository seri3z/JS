// Практика
// Напишите функцию, которая получает три числа и возвращает их сумму.
function practise_task1() {
    let a = +prompt("Введите первое число:"),
        b = +prompt("Введите второе число:"),
        c = +prompt("Введите третье число:"),
        sum = a + b + c;
    return console.log(sum);
}

// Напишите функцию, которая подсчитывает сумму чисел от 1 до заданного X.
function practise_task2() {
    let number = prompt("Введите число:"),
        result = 0;
    for(let i = 1; i <= number; i++) {
        result += i;
    }
    return console.log(result);
}

// Напишите функцию, которая подсчитывает сумму цифр числа.
function practise_task3() {
    let number = prompt("Введите число:").toString().split(''),
        sum = 0;
    for(let i = 0; i < number.length; i++) {
        sum += +number[i];
    }
    return console.log(sum);
}
// Написать ещё с помощью математической функции!!!
function practise_task3v2() {
    let number = prompt("Введите число:"),
        sum = 0;
    while(number > 0) {
        sum += number % 10;
        number = (number - number % 10) / 10;
    }
    return console.log(sum)
}

// Напишите функцию, которая считает факториал числа.
function practise_task4() {
    let number = prompt("Введите число:");
    function factorial(number) {
        return (number !== 1) ? number * factorial(number - 1) : 1
    }
    return console.log(factorial(number));
}

// Домашняя работа
// Создайте функцию, которая получает в качестве аргументов три числа и возвращает наименьшее из них.
function homework_task1() {
    let a = +prompt("Введите первое число:"),
        b = +prompt("Введите второй число:"),
        c = +prompt("Введите третье число:")
    function compare(a, b, c) {
        if(a > b) {
            if(b > c) {
                return c;
            }
            return b;
        }
        return a;
    }
    return console.log(compare(a, b, c));
}

// Создайте функцию, которая получает в качестве аргументов значения суток, часов и минут, а
// возвращает соответствующее им количество секунд.
function homework_task2() {
    let a = +prompt("Введите количество дней:"),
        b = +prompt("Введите количество часов:"),
        c = +prompt("Введите количество минут:")
    function toSeconds(a, b, c) {
        return a * 86400 + b * 3600 + c * 60;
    }
    return console.log(toSeconds(a, b, c))
}

// Напишите рекурсивную функцию для подсчёта факториала числа.
function homework_task3() {
    let number = prompt("Введите число:");
    function factorial(number) {
        return (number !== 1) ? number * factorial(number - 1) : 1
    }
    return console.log(factorial(number));
}

// Напишите рекурсивную функцию, которая разворачивает введённое число задом наперёд.
// Например, если на вход функция получает 1234, вернуть она должна 4321.
function homework_task4() {
    let number = prompt("Введите число:").toString().split('').reverse().join('');
    return console.log(+number);

}
// Вариант с использованием математической функции
function homework_task4v2() {
    let number = prompt("Введите число:"),
        result = 0;
    while (number) {
        result *= 10;
        result += number % 10;
        number = Math.floor(number / 10);
    }
    console.log(result);
}

// Напишите функцию для решения квадратных уравнений.
// В качестве параметров она должна принимать коэффиценты a, b и c, возвращать – количество корней.
// Сами корни уравнения (или информацию о их отсутствии) функция должна выводить в консоль.
// Примечание 1. Ищем только решения в действительных числах, комплексные не нужны!
// Примечание 2. Для получения квадратного корня используйте стандартную функцию JS: Math.sqrt().
function homework_task5() {
    let a = prompt("Введите значение a:"),
        b = prompt("Введите значение b:"),
        c = prompt("Введите значение a:"),
        discriminant = ((b * b) - 4 * (a * c)),
        x,
        x1,
        x2;
    console.log("Дискриминант = " + discriminant);
    if (discriminant > 0) {
        x1 = ((-b - Math.sqrt(discriminant)) / (2 * a));
        x2 = ((-b + Math.sqrt(discriminant)) / (2 * a));
        console.log("x1 = " + x1 + ", x2 = " + x2);
    } else if (discriminant < 0) {
        console.log("х не имеет корней")
    } else if (discriminant === 0) {
        x = (-b) / (2 * a);
        console.log("x = " + x);
    }
}



