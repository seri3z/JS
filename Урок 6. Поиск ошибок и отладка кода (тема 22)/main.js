// Практика
// Задачи на if / else:
// Создайте функцию, которая принимает три числа: два первых должны быть длиной сторон катетов прямоугольного
// треугольника, а третье – длиной гипотенузы. Функция возвращает true, если такой прямоугольный треугольник
// возможен, и false, если нет.
// + дополнено: использовать объекты + сделать проверку на возможность любого треугольника
function practise_task1() {
    let a = +prompt("Введите длинну катета a:")
    let b = +prompt("Введите длинну катета b:")
    let c = +prompt("Введите длинну гипотенузы c:")

    let rectangle = {
        a: null,
        b: null,
        c: null,
        possible: null,
        check(a, b, c) {
            this.a = a;
            this.b = b;
            this.c = c;
            this.possible = Math.pow(a, 2) + Math.pow(b, 2) === Math.pow(c, 2)
        }
    }

    rectangle.check(a, b, c)

    console.log(rectangle)
    console.log("Катет a: " + rectangle.a + ", катет b: " + rectangle.b + ", гипотенуза c: " + rectangle.c)
    if (rectangle.possible === true) {
        console.log("Такой прямоугольный треугольник возможен!")
    } else {
        console.log("Такой прямоугольный треугольник не возможен!")

        let result = {
            sides: {
                a: a,
                b: b,
                c: c,
            },
            angles: {
                a: null,
                b: null,
                c: null,
            },
            possible: null
        }
        result.possible = a + b > c && a + c > b && b + c > a;
        result.angles.a = (Math.acos((Math.pow(b, 2) + Math.pow(c, 2) - Math.pow(a, 2)) / (2 * b * c)) * 180 / Math.PI).toFixed(2)
        result.angles.b = (Math.acos((Math.pow(a, 2) + Math.pow(c, 2) - Math.pow(b, 2)) / (2 * a * c)) * 180 / Math.PI).toFixed(2)
        result.angles.c = (Math.acos((Math.pow(a, 2) + Math.pow(b, 2) - Math.pow(c, 2)) / (2 * a * b)) * 180 / Math.PI).toFixed(2)

        console.log(result)
        console.log("Сторона а: " + a + ", сторона b: " + b + ", сторона c: " + c)
        if (result.possible === true) {
            console.log("С такими сторонами треугольник возможен!")
        } else {
            console.log("С такими сторонами треугольник не возможен!")
        }
    }
}

// Создайте функцию, которая принимает два числа, и определяет, делится ли одно из них на другое без остатка. Из
// функции верните true или false.
function practise_task2() {
    let a = +prompt("Введите первое число:")
    let b = +prompt("Введите второе число:")

    function checkNumbers(a, b) {
        if (a % b === 0) {
            console.log("a делится на b без остатка!")
            return true
        } else if (b % a === 0) {
            console.log("b делится на a без остатка!")
            return true
        } else {
            console.log("a не делится на b без остатка и b не делится на a без остатка.")
            return false
        }
    }

    checkNumbers(a, b)
}

// Задачи на switch:
// Создайте функцию, которая получает в качестве аргумента оценку по 10-балльной шкале. Для ошибочных аргументов
// (0, «B») функция возвращает текстовую ошибку, для верных – их текстовое описание из Википедии.
function practise_task3() {
    let a = +prompt("Введите оценку от 1 до 10")

    switch (a) {
        case 1:
        case 2:
            console.log("Unsatisfactory")
            break
        case 3:
        case 4:
            console.log("Satisfactory")
            break
        case 5:
            console.log("Almost good")
            break
        case 6:
            console.log("Good")
            break
        case 7:
            console.log("Very good")
            break
        case 8:
            console.log("Almost excellent")
            break
        case 9:
            console.log("Excellent")
            break
        case 10:
            console.log("Brilliant")
            break
        default:
            console.log("Error. Please input number from 1 to 10!")
            break
    }
}

// Создайте функцию, которая принимает в качестве аргумента целое число, соответствующее порядковому номеру месяца.
// Если месяц с таким номером существует, функция возвращает имя сезона (лето, осень, зима, весна), к которому
// относится месяц. Если нет – сообщение об ошибке.
// + дополнительно: сделать с помощью объекта + по номеру дня установить время года.
function practise_task4() {
    let month = +prompt("Порядковый номер месяца от 1 до 12")
    let day = +prompt("Порядковый номер дня от 1 до 365")

    let seasons = {
        season: null,
        getSeasonWithMonth(month) {
            if (month === 12 || month === 1 || month === 2) {
                return this.season = "Зима"
            } else if (month === 3 || month === 4 || month === 5) {
                return this.season = "Весна"
            } else if (month === 6 || month === 7 || month === 8) {
                return this.season = "Лето"
            } else if (month === 9 || month === 10 || month === 11) {
                return this.season = "Осень"
            } else {
                return this.season = "Ошибка. Месяца с таким порядковым номером не существует! Введите число от 1 до 12."
            }
        },
        getSeasonWithDay(day) {
            if (day >= 1 && day <= 59 || day >= 334 && day <= 365) {
                return this.season = "Зима"
            } else if (day >= 60 && day <= 151) {
                return this.season = "Весна"
            } else if (day >= 152 && day <= 244) {
                return this.season = "Лето"
            } else if (day >= 245 && day <= 333) {
                return this.season = "Осень"
            } else {
                return this.season = "Ошибка. Месяца с таким порядковым номером не существует! Введите число от 1 до 12."
            }
        }
    }

    seasons.getSeasonWithMonth(month)
    console.log(seasons.season)

    seasons.getSeasonWithDay(day)
    console.log(seasons.season)

    switch (month) {
        case 12:
        case 1:
        case 2:
            console.log("Зима")
            break
        case 3:
        case 4:
        case 5:
            console.log("Весна")
            break
        case 6:
        case 7:
        case 8:
            console.log("Лето")
            break
        case 9:
        case 10:
        case 11:
            console.log("Осень")
            break
        default:
            console.log("Ошибка. Месяца с таким порядковым номером не существует! Введите число от 1 до 12.")
            break
    }
}

// Задачи на циклы:
// Используя цикл do..while, создайте функцию, которая принимает числа через prompt(), пока не будет введено число 0.
function practise_task5() {
    let a = null
    do {
        a = +prompt("Введете число:")
        if (a !== 0) {
            console.log("Условие не выполнено!", a, "!== 0")
        }
    } while (a !== 0)
    console.log("Условие выполнено!")
}

// Перепишите функцию из задачи 5 так, чтобы она принимала числа, пока их сумма остаётся меньше 100, выводила эту
// сумму в консоль, а возвращала количество введённых чисел.
function practise_task6() {
    let a = null
    let result = null
    let counter = null
    do {
        a = +prompt("Введете число:")
        result = result + a
        if (result <= 100) {
            counter++
            console.log("Сумма чисел =", result, ", а всего введено", counter, "чисел.")
        }
    } while (result <= 100)
    result = result - a
    console.log("С последним введённым числом сумма введённых чисел стала больше 100.")
    console.log("Последняя сумма чисел до 100 =", result, ", а всего введено", counter, "чисел.")
}

// Создайте функцию, которая выводит в консоль числа от 10 до 99, заканчивающиеся на 7 или делящиеся на 7 (в
// убывающем порядке).
function practise_task7() {
    let array = []
    for (let i = 10; i < 100; i++) {
        array[i - 10] = i
    }
    console.log("Исходный массив:", array)

    let result = []
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 7 === 0 || +(array[i].toString().slice(-1)) === 7) {
            result.push(array[i])
        }
    }
    console.log("Результат:", result)
}

// Разные задачи:
// Создайте функцию, которая принимает два аргумента – количество учеников в классе и количество парт в кабинете.
// Функция возвращает строку вида «не хватает парт: 2» / «лишних парт: 1». Важно: за одной партой может сидеть два
// ученика!
function practise_task8() {
    let pupils = +prompt("Введите количество учеников:")
    let part = +prompt("Введите количество парт:")

    if ((part * 2) === pupils || (part * 2 - 1) === pupils) {
        console.log("Парт хватает для всех учеников.")
    } else if ((part * 2) <= pupils) {
        let partNeed = ((pupils - (part * 2)) / 2)
        console.log("Нужно ещё", partNeed, "парт.")
    } else if ((part * 2) >= pupils) {
        let partExtra = (((part * 2) - pupils) / 2)
        console.log("Лишних", partExtra, "парт.")
    }
}

// Создайте функцию words(), которая в зависимости от переданного в нее целого числа n, будет выводить слово
// «карандаш» с правильным окончанием («12 карандашей», но «22 карандаша»).
function practise_task9() {
    let pencil = +prompt("Введите количество карандашей:")

    if (
        pencil === 0 ||
        pencil > 20 && +(pencil.toString().slice(-1)) === 0 ||
        pencil >= 100 && +(pencil.toString().slice(-1)) === 0 ||
        pencil >= 5 && pencil <= 20 ||
        pencil > 24 && +(pencil.toString().slice(-1)) >= 5 && +(pencil.toString().slice(-1)) <= 9 ||
        pencil > 104 && +(pencil.toString().slice(-2)) >= 5 && +(pencil.toString().slice(-2)) <= 20
    ) {
        console.log(pencil + " карандашей.")
    } else if (
        pencil === 1 ||
        pencil > 20 && +(pencil.toString().slice(-1)) === 1 ||
        pencil > 100 && +(pencil.toString().slice(-2)) === 1
    ) {
        console.log(pencil + " карандаш.")
    } else if (
        pencil >= 2 && pencil <= 4 ||
        pencil > 21 && +(pencil.toString().slice(-1)) >= 2 && +(pencil.toString().slice(-1)) <= 4 ||
        pencil > 101 && +(pencil.toString().slice(-1)) >= 2 && +(pencil.toString().slice(-1)) <= 4
    ) {
        console.log(pencil + " карандаша.")
    }
}

// Создайте функцию, которая получает два числа и возвращает знак их произведения. Если результат равен нулю,
// возвращать ‘+’.
function practise_task10() {
    let a = +prompt("Введите число а:")
    let b = +prompt("Введите число b:")
    let result = (a * b).toString().split('')
    console.log("Число а " + a + ". Число b " + b)

    if (result[0] === "-") {
        console.log("Знак произведения введённых чисел: -")
    } else {
        console.log("Знак произведения введённых чисел: +")
    }
}

// Создайте функцию, которая получает число и выводит в консоль все его делители.
function practise_task11() {
    let number = +prompt("Введите число")
    console.log("Исходное число:", number)

    let result = []
    for (let i = 1; i <= number; i++) {
        if (number % i === 0) {
            result.push(i)
        }
    }
    console.log("Все делители исходного числа:", result.join(','))
}

// Создайте функцию, которая проверяет, можно ли представить число в виде суммы квадратов двух целых однозначных
// чисел.
function practise_task12() {
    let number = +prompt("Введите число")
    let counter = null
    for (let i = 1; i < number; i++) {
        for (let j = 1; j < number; j++) {
            if (number === Math.pow(i, 2) + Math.pow(j, 2)) {
                console.log(i, j);
                counter++
            }
        }
    }
    if (+counter === 0) {
        console.log("Таких чисел нет!")
    }
}
