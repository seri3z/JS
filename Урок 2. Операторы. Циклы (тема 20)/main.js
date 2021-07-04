// Практика
// Получить два числа (через prompt), вывести в консоль большее из них.
function practise_task1() {
    let a = prompt("Введите первое число:");
    let b = prompt("Введите второе число:");
    if (a > b) {
        console.log("p1t1 -", a);
        alert(a);
    } else {
        console.log("p1t1 -", b);
    }
}

//Получить три числа, вывести их в консоль в порядке возрастания.
function practise_task2() {
    let a = prompt("Введите первое число:");
    let b = prompt("Введите второе число:");
    let c = prompt("Введите третье число:");
    let arr = [a, b, c];
    arr.sort((a, b) => a - b);
    let result = arr.toString();
    console.log("p1t2 -", result);
}

// Переписать задачу 1, заменив if на тернарный оператор.
function practise_task3() {
    let a = prompt("Введите первое число:");
    let b = prompt("Введите второе число:");
    return (a > b) ? console.log("p1t3 -", a) : console.log("p1t3 -", b);
}

// Получить число. Используя switch, вывести в консоль сообщение: для чисел от 1 до 3 – разные, для остальных – одинаковое.
function practise_task4() {
    let a = prompt("Введите число:");
    switch (+a) {
        case 1:
            console.log('Сообщение для числа 1');
            break;
        case 2:
            console.log('Сообщение для числа 2');
            break;
        case 3:
            console.log('Сообщение для числа 3');
            break;
        default:
            console.log("Сообщение для всех чисел, кроме 1, 2 и 3");
            break;
    }
}

// Подсчитать и вывести в консоль сумму чисел от 1 до x.
function practise_task5() {
    let number = prompt("Введите число:")
    let result = 0;
    let i = 1;
    while (i <= number) {
        result += i;
        i++;
    }
    console.log(result);
}

// Вывести в консоль все чётные числа от x до 0 (в порядке убывания).
function practise_task6() {
    let number = prompt("Введите число:")
    for (let i = number; i > 0; i--) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}

// Переписать задачу 1, используя while вместо for (или наоборот, если использовали while).
function practise_task7() {
    let number = prompt("Введите число:")
    let result = 0;
    for (let i = 1; i <= number; i++) {
        result += i;
    }
    console.log(result);
}

// Переписать задачу 2, используя while вместо for (или наоборот, если использовали while).
function practise_task8() {
    let number = prompt("Введите число:")
    while (number > 0) {
        if (number % 2 === 0) {
            console.log(number);
        }
        number--;
    }
}

// Домашняя работа
/* В доме 5 подъездов по 20 квартир каждый. Получите от пользователя номер
квартиры и взамен выдайте в консоль номер подъезда. Учитывайте, что пользователь
может ввести число меньше 1 или больше 100. */
function homework_task1() {
    let flat = +prompt("Введите номер квартиры:");
    if (flat >= 1 && flat <= 20) {
        alert('Квартира находиться в подъезде № 1');
    } else if (flat >= 21 && flat <= 40) {
        alert('Квартира находиться в подъезде № 2');
    } else if (flat >= 41 && flat <= 60) {
        alert('Квартира находиться в подъезде № 3');
    } else if (flat >= 51 && flat <= 80) {
        alert('Квартира находиться в подъезде № 4');
    } else if (flat >= 81 && flat <= 100) {
        alert('Квартира находиться в подъезде № 5');
    } else {
        alert("Такой квартиры в доме нет!");
    }
}

/* Получите от пользователя строку с названием марки автомобиля.
Напишите конструкцию switch/case, которая будет обрабатывать
6-7 самых известных марок (BMW, Ford, Peugeot etc.) и выдавать
в консоль введённую строку + страну происхождения автомобиля
(например, "Ford – страна происхождения США"). Для остальных
строк выдавайте сообщение "some_input – страна происхождения неизвестна".*/
function homework_task2() {
    let auto = prompt("Введите марку автомобиля:");
    switch (auto) {
        case "Lada":
        case "Лада":
            console.log(auto, " - страна происхождения Российская Федерация");
            break;
        case "Toyota":
        case "Nissan":
        case "Mitsubishi":
            console.log(auto, " - страна происхождения Япония");
            break;
        case "Hyundai":
        case "Kia":
            console.log(auto, " - страна происхождения Южная Корея");
            break;
        case "Renault":
            console.log(auto, " - страна происхождения Франция");
            break;
        case "Volkswagen":
            console.log(auto, " - страна происхождения Германия");
            break;
        case "Chevrolet":
        case "Ford":
            console.log(auto, " - страна происхождения США");
            break;
        default:
            console.log(auto, " – страна происхождения неизвестна");
            break;
    }
}

// Пользователь вводит год. Определите, является ли этот год високосным.
function homework_task3() {
    let year = +prompt("Введите год:");
    if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
        return console.log(year, " - этот год високосный")
    }
    return console.log(year, " - этот год невисокосный")
}

/* Пользователь вводит число от 1 до 20. Выведите в консоль
таблицу умножения этого числа. Например, для числа 7:
7x1=7 7x2=14 ... 7x10=70*/
function homework_task4() {
    let number = +prompt("Введите число от 1 до 20:");
    if (number >= 1 && number < 20) {
        for (let i = 1; i <= 10; i++) {
            let result = number * i;
            let string = number + " * " + i + " = " + result;
            console.log(string);
        }
    } else if (number < 1) {
        console.log("Вы ввели число меньше 1")
    } else if (number > 19)
    console.log("Вы ввели число больше 19")
}

/* Выведите в консоль сумму всех нечётных чисел от 1 до 50.
Дополнительно: решите эту задачу, используя оператор continue.*/
function homework_task5() {
    let result = 0;
    for (let i = 0; i < 50; i++) {
        if (i % 2 === 0) continue;
        result += i;
    }
    console.log(result)
}

// Используя циклы, выведите в консоль первые 15 чисел Фибоначчи.
function homework_task6() {
    let number = 13;
    let a = 0;
    console.log(a);
    let b = 1;
    console.log(b);
    for (let i = 1; i <= number; i++) {
        let c = a + b;
        a = b;
        b = c;
        console.log(b);
    }
}

// Используя циклы (и операцию конкатенации), выведите в консоль "шахматную доску":
function homework_task7() {
    let a = " ";
    let b = "#";
    for(let i = 1; i <= 8; i++) {
        if(i % 2 === 0) {
            console.log(b + a + b + a + b + a + b + a);
        } else {
            console.log(a + b + a + b + a + b + a + b);
        }
    }
}
