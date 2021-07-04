// Практика
// Часть 1
// Напишите функцию, которая создаёт и возвращает массив длиной 20 элементов,
// каждый из которых – случайное число от 1 до 50.
function practise_task1() {
    let array = []
    let length = 20
    let min =  1
    let max = 50
    function random(min, max) {
        return Math.floor(min + Math.random() * (max + 1 - min));
    }
    for (let i = 0; i < length; i++) {
        array[i] = random(min, max)
    }
    console.log("Полученный массив: ", array)
}

// Перепишите функцию из задачи 1, так, чтобы она принимала три аргумента: длину
// нужного массива, минимальное и максимальное значения элементов.
function practise_task2() {
    let length = +prompt("Введите длинну массива:")
    let min =  +prompt("Введите минимальное число диапазона:")
    let max = +prompt("Введите максимальное число диапазона:")

    function randomArray(length, min, max) {
        let array = []
        function random(min, max) {
            return Math.floor(min + Math.random() * (max + 1 - min));
        }
        for (let i = 0; i < length; i++) {
            array[i] = random(min, max)
        }
        return array
    }
    console.log("Полученный массив: ", randomArray(length, min, max))
}

// Напишите функцию, которая проверяет, начинается ли строка на https:// и заканчивается
// ли она на .html. Если оба условия выполнены, функция возвращает true, в ином случае – false.
function practise_task3() {
    let html = "https://adukar.html"
    function checkAddress(html) {
        let start = html.indexOf("https://")
        let end = html.indexOf(".html")
        if (start !== -1 && end !== -1) {
            return true
        } else {
            return false
        }
    }
    console.log("Исходная строка:", html)
    console.log("Строка начинается на https:// и заканчивается на .html?")
    console.log("Результат проверки:", checkAddress(html))
}

// Напишите функцию, которая считает, сколько раз определённый символ встречается в строке.
function practise_task4() {
    function randomString(length) {
        let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдеёжзийклмнопрстуфхцчшщъыьэюя';
        let string = '';
        for (let i = 0; i < length; i++) {
            string += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return string;
    }

    let length = +prompt("Введите длинну строки: ")
    let string = randomString(length)
    console.log("Исходная строка", string)
    let symbol = prompt("Введите символ для поиска в строке")
    let regexp = new RegExp(symbol, "gi");
    if (string.toLowerCase().match(regexp) !== null || string.toUpperCase().match(regexp) !== null) {
        console.log("Количество совпадений:", string.match(regexp).length)
    } else {
        console.log("Совпадений не найдено.")
    }
}

// Перепишите функцию из задачи 4 так, чтобы она считала большие и маленькие буквы одним
// и тем же символом (например, 'A' == 'a').
function practise_task5() {
    practise_task4()
}

// Напишите функцию, которая выводит в консоль текущие дату, месяц и год в формате «24 января 2019».
function practise_task6() {
    let date = new Date()
    let options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    };
    let output = date.toLocaleString("ru", options).slice(0, -3)
    console.log(output)
}

// Напишите функцию, которая выводит в консоль количество секунд, прошедших с начала текущего дня.
function practise_task7() {
    let start = new Date()
    start.setHours(0)
    start.setMinutes(0)
    start.setSeconds(0)
    start.setMilliseconds(0)
    let now = new Date()
    now.setMilliseconds(0)
    console.log("Количество секунд, прошедших с начала текущего дня, составляет", (now - start) / 1000)
}


// Часть 2
// Напишите функцию, которая принимает от пользователя строку. Если эта строка не содержит
// буквы «ф», сгенерируйте собственную ошибку. Вызовите функцию так, чтобы при возникновении
// «поймать» ошибку в try/catch.
function practise_task8() {
    let string = prompt("Введите строку:")
    console.log("Исходная строка", string)

    let element = "ф"

    let check = string.indexOf(element)

    function customError(input) {
        if (input === -1) {
            throw new Error("Ошибка! В исходной строке отсутствует символ ф или Ф")
        }
        console.log("В исходной строке есть символ ф или Ф!")
    }

    try {
        customError(check)
    } catch (error) {
        console.log(error.message)
    }
}

// Домашняя работа
// Напишите функцию, которая принимает три числа, и определяет, можно ли построить треугольник со сторонами, длина
// которых равна этим числам. Возвращать функция должна объект из двух свойств: possible (true или false) и angles
// (объект с тремя свойствами, равными углам полученного треугольника в градусах)
function homework_task1() {
    let a = +prompt("Введите длинну стороны a:"),
        b = +prompt("Введите длинну стороны b:"),
        c = +prompt("Введите длинну стороны c:")

    function createTriangle(a, b, c) {
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
        if (a + b > c && a + c > b && b + c > a) {
            result.possible = true
        } else {
            result.possible = false
        }
        result.angles.a = (Math.acos((Math.pow(b, 2) + Math.pow(c, 2) - Math.pow(a, 2)) / (2*b*c)) * 180 / Math.PI).toFixed(2)
        result.angles.b = (Math.acos((Math.pow(a, 2) + Math.pow(c, 2) - Math.pow(b, 2)) / (2*a*c)) * 180 / Math.PI).toFixed(2)
        result.angles.c = (Math.acos((Math.pow(a, 2) + Math.pow(b, 2) - Math.pow(c, 2)) / (2*a*b)) * 180 / Math.PI).toFixed(2)
        return result
    }

    console.log(createTriangle(a, b, c))
}

// Напишите функцию, которая определяет, является ли строка палиндромом. Учитывайте, что пробелы и знаки препинания не
// влияют на «палиндромность» строки!
function homework_task2() {
    let string = prompt("Введите строку для проверки на палиндром:")
    let stringDefault = string.slice(0).split(/[ .:;?!~,`"&|()<>{}\[\]\r\n/\\]+/).join("").toLowerCase()
    let stringReverse = stringDefault.split("").reverse().join("")
    let result = stringDefault === stringReverse ? "Введённая строка является палиндромом!" : "Введённая строка не является палиндромом."
    console.log("Введённая строка:", string)
    console.log(result)
}

// Напишите функцию, которая принимает строку и возвращает символ, который встречается в ней чаще всего. Если таких
// символов несколько, функция должна возвращать строку из этих символов.
function homework_task3() {
    // Генерация рандомной строки
    function randomString(length) {
        let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдеёжзийклмнопрстуфхцчшщъыьэюя';
        let string = '';
        for (let i = 0; i < length; i++) {
            string += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return string;
    }

    // Генерация рандомного числа для длинны строки
    function randomInteger(min, max) {
        let random = min + Math.random() * (max + 1 - min);
        return Math.floor(random);
    }

    let length = randomInteger(1, 100)
    let string = randomString(length)
    let stringDefault = string.slice()
    console.log("Исходная строка:", string)

    // Сортировка строки
    function sortBubble(string) {
        let array = string.split('')
        for (let i = 0; i < array.length; i++) {
            for (let i = 0; i < array.length - 1; i++) {
                if (array[i].charCodeAt(0) > array[i + 1].charCodeAt(0)) {
                    let temp = array[i];
                    array[i] = array[i + 1];
                    array[i + 1] = temp;
                }
            }
        }
        return array
    }

    let array = sortBubble(string)
    console.log("Отсортированная строка: ", sortBubble(string).join(''))

    // Удаление одиночных элементов
    function unique(array) {
        return Array.from(new Set(array));
    }

    // Строка после удаления одиночных символов
    array = unique(array)

    // Проверка скоько раз встречаются повторяющиеся символы в строке
    let stringOutput = []
    for (let i = 0; i < array.length; i++) {
        let symbol = array[i]
        let counter = 0
        for (let j = 0; j < stringDefault.length; j++) {
            if (array[i] === stringDefault[j]) {
                counter++
            }
        }
        if (counter > 1) {
            console.log("Символ:", symbol, ", встречается", counter, "раз.")
            stringOutput.push(symbol)
        }
    }

    let message = "Символы которые повторяются: "
    let result = stringOutput.length > 0 ? message + stringOutput.join('') : message + "Нет"
    console.log(result)
}

// Напишите функцию, которая замяняет первую букву каждого слова в строке на такую же большую.
function homework_task4() {
    let string = prompt("Введите предложение:")
    console.log("Введённое предложение: ", string)
    let array = string.split(" ")
    for (let i = 0; i < array.length; i++) {
        if (array[i].length > 0) {
            array[i] = array[i][0].toUpperCase() + array[i].slice(1)
        }
    }
    string = array.join(" ")
    console.log(string);
}

// Напишите функцию, которая заменяет все повторяющиеся буквы в строке на звёздочки. Например, строка "я учусь
// программированию" должна преобразоваться в "я уч*сь прог*ам*и**в*н*ю".
function homework_task5() {
    let stringInput = prompt("Введите строку:")
    console.log("Исходная строка:", stringInput)

    // Создание переменное массива из исходной строки
    let stringDefault = stringInput.split(' ')

    // Создание переменной массива со всеми уникальными символами в исходной строке
    let stringSort = Array.from(new Set(stringInput.toLowerCase().split('')))

    // Перебор каждой переменной массива со всеми уникальными символами в исходной строке
    for (let a = 0; a < stringSort.length; a++) {

        // На каждый уникальный элемент перебераем элементы массива из исходной строки
        for (let b = 0; b < stringDefault.length; b++) {

            // Если массив состоит не из одного символа, то элемент разбираем на массив
            if (stringDefault[b].length > 1) {
                let counter = 0
                let array = stringDefault[b].split('')

                // Перебираем каждый элемент массива на соответствие каждому уникальному элементу в нижнем
                // и верхнем регистре и заменяем повторяющиеся в слове на *
                for (let c = 0; c < array.length; c++) {
                    if (array[c] === stringSort[a] || array[c] === stringSort[a].toUpperCase()) {
                        counter++
                        if (counter > 1) {
                            array[c] = "*"
                        }
                    }
                }

                // Заменяем элемент исходного массива на массив полученный с заменёнными элементами на *
                stringDefault[b] = array.join('')
            }
        }
    }

    // Преобразуем массив со * в строку
    let result = stringDefault.join(' ')
    console.log(result)
}

// Напишите функцию, которая возвращает текущий день недели на русском языке.
function homework_task6() {
    let date = new Date()
    let options = {
        weekday: 'long'
    };
    let string = date.toLocaleString("ru", options)
    let output = string[0].toUpperCase() + string.slice(1)
    console.log(output)
}

// Напишите функцию, которая принимает у пользователя дату в формате "ДД-ММ-ГГГГ" и, используя функцию из задачи 6,
// выдаёт в консоль день недели для этой даты.
function homework_task7() {
    let string = prompt("Введите дату в формате \"ДД-ММ-ГГГГ\"")
    let [day, month, year] = string.split("-")
    let date = new Date()
    date.setFullYear(+year)
    date.setMonth(+month - 1)
    date.setDate(+day)
    function getWeekdayName(date) {
        let options = {
            weekday: 'long'
        };
        let string = date.toLocaleString("ru", options) // Signature mismatch
        let output = string[0].toUpperCase() + string.slice(1)
        return output
    }
    console.log(getWeekdayName(date))
}

// Примите у пользователя день его рождения в формате "ДД-ММ-ГГГГ". Напишите функцию, которая выводит в консоль
// количество дней, оставшихся до его дня рождения. Напишите другую функцию, которая возвращает дату, в которую
// пользователь отметит ближайший 1000-дневный юбилей (например, когда ему исполнится 12000 дней).
function homework_task8() {
    let string = prompt("Введите дату в формате \"ДД-ММ-ГГГГ\"")
    let [day, month, year] = string.split("-")
    // День рождения
    let date = new Date(+year, +month - 1, +day)
    console.log("Дата рождения:", date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear())

    function getDaysLeftToNextBirthday(date) {
        let today = new Date()

        let todayDay = today.getDate()
        let todayMonth = today.getMonth()

        let thisYear = today.getFullYear()
        let nextYear = today.getFullYear() + 1

        let birthdayDay = date.getDate()
        let birthdayMonth = date.getMonth()

        // Текущая дата
        let todayDate = new Date(+thisYear, +todayMonth, +todayDay)

        // День рождения в текущем году
        let thisYearBirthdayDate = new Date(+thisYear, +birthdayMonth, +birthdayDay)

        // День рождения в следующем году
        let nextYearBirthdayDate = new Date(+nextYear, +birthdayMonth, +birthdayDay)

        if (thisYearBirthdayDate < todayDate) {
            let milliseconds = nextYearBirthdayDate - todayDate
            let seconds = milliseconds / 1000
            let minutes = seconds / 60
            let hours = minutes / 60
            let days = hours / 24
            console.log("Осталось дней до следующего дня рождения", Math.ceil(days), "дней.")
        } else if (thisYearBirthdayDate > todayDate) {
            let milliseconds = thisYearBirthdayDate - todayDate
            let seconds = milliseconds / 1000
            let minutes = seconds / 60
            let hours = minutes / 60
            let days = hours / 24
            console.log("Осталось дней до следующего дня рождения", Math.ceil(days), "дней.")
        } else {
            console.log("С днём рождения!")
        }
    }
    getDaysLeftToNextBirthday(date)

    function getDaysTo1000DaysAnniversary(date) {
        let today = new Date()

        let todayDay = today.getDate()
        let todayMonth = today.getMonth()
        let thisYear = today.getFullYear()

        // Текущая дата
        let todayDate = new Date(+thisYear, +todayMonth, +todayDay)

        // Создание массива с 1000 дневными юбилеями начиная с даты рождения
        let anniversary = []
        anniversary[0] = date
        for (let i = 1; i < 25; i++) {
            anniversary[i] = (new Date (date.getFullYear(), date.getMonth(), 1000 * i))
        }

        // Создание массива с 1000 дневными юбилеями которые идут после текущей даты
        let nextAnniversary = [];
        for (let i = 0; i < anniversary.length; i++) {
            if (anniversary[i] > todayDate) {
                nextAnniversary.push(anniversary[i])
            }
        }

        // Рассчитываем сколько дней с текущей даты до следующего 1000 дневного юбилея
        let milliseconds = nextAnniversary[0] - todayDate
        let seconds = milliseconds / 1000
        let minutes = seconds / 60
        let hours = minutes / 60
        let days = hours / 24

        console.log("Осталось дней до следующего 1000 дневного юбилея", Math.ceil(days), "дней.")
    }
    getDaysTo1000DaysAnniversary(date)
}

