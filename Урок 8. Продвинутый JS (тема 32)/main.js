// Практика
/*
1. Напишите функцию counterFactory(start, step), которая при вызове возвращает
 другую функцию – счётчик tictoc(). start – стартовое значение счётчика, step – его шаг.
 При каждом вызове tictoc увеличивает значение счётчика на step.
*/
function counterFactory(start, step) {
    let counter = start;

    function tictoc() {
        counter += step;
        return counter;
    }

    return tictoc;
}

// Проверка
function practise_task1() {
    console.log("Практика 1:");
    let counter1 = counterFactory(10, 2),
        counter2 = counterFactory(100, 20);

    for (let i = 0; i < 5; i++) {
        console.log("Счётчик 1:", counter1());
    }

    for (let i = 0; i < 5; i++) {
        console.log("Счётчик 2:", counter2());
    }
}

/*
2. Напишите функцию take(tictoc, x), которая вызывает функцию tictoc заданное число (x)
раз и возвращает массив с результатами вызовов.
*/
function take(tictoc, x) {
    let array = [];

    for (let i = 0; i < x; i++) {
        array.push(tictoc());
    }

    return array;
}

// Проверка
function practise_task2() {
    console.log("Практика 2:");
    console.log(take(counterFactory(0, 10), 10))
}

/*
3. Разбейте текст этой задачи на отдельные слова, удаляя по пути точки и запятые,
а полученные слова сложите в массив. Напишите функцию, которая возвращает массив
из тех же слов, но развёрнутых задом наперёд, причём массив должен быть отсортирован
по количеству букв в слове. Напишите другую функцию, которая считает общее количество
букв «с» во всех элементах массива.
*/

// Функция разбивки массива на отдельные слова
function stringToArray(i) {
    return i.split(/[ .,]+/); //«»
}

// Функция реверса
function itemsReverse(i) {
    return i.split("").reverse().join("");
}

// Функция сортировки
function compareLength(a, b) {
    if (a.length > b.length) {
        return 1;
    }
    if (a.length < b.length) {
        return -1;
    }
    return 0;
}

// Функция поиска
function symbolFind(array, symbol) {
    let counter = 0,
        UpperCase = symbol.toUpperCase(),
        LowerCase = symbol.toLowerCase();

    for (let i = 0; i < array.length; i++) { // Элемент массива
        for (let a = 0; a < array[i].length; a++) { // Перебор элемента и поиск символа
            if (array[i][a] === UpperCase || array[i][a] === LowerCase) {
                counter++;
            }
        }
    }

    return counter;
}

let string = "Разбейте текст этой задачи на отдельные слова, удаляя по пути точки и запятые, а полученные слова сложите в массив. Напишите функцию, которая возвращает массив из тех же слов, но развёрнутых задом наперёд, причём массив должен быть отсортирован по количеству букв в слове. Напишите другую функцию, которая считает общее количество букв «с» во всех элементах массива";

//  Проверка
function practise_task3() {
    console.log("Практика 3:");
    console.log(stringToArray(string).map(itemsReverse).sort(compareLength));
    console.log(symbolFind(stringToArray(string), "с"));
}

// Домашняя работа
/*
1. Напишите функцию, которая принимает в качестве параметра строку из одного символа.
Подсчитайте количество таких символов во всех элементах массива, как в задаче 3 из
практики. При подсчёте прописные и строчные буквы считайте одинаковыми.
*/
function homework_task1() {
    console.log("Домашнее задание 1:");
    console.log(symbolFind(stringToArray(string), "р"));
}

/*
2. Напишите функцию, которая будет возвращать частичную функцию от функции из задачи 1,
фиксируя искомый символ. Например:
let countOfE = letterCounter('e');
console.log(countOfD(["abcde", "eerie", "MBE"]));
*/

function homework_task2() {
    console.log("Домашнее задание 2:");
    function letterCounter(symbol) {
        let UpperCase = symbol.toUpperCase(),
            LowerCase = symbol.toLowerCase();

        function iterator(array) {
            let counter = 0;
            for (let i = 0; i < array.length; i++) { // Элемент массива
                for (let a = 0; a < array[i].length; a++) { // Перебор элемента и поиск символа
                    if (array[i][a] === UpperCase || array[i][a] === LowerCase) {
                        counter++;
                    }
                }
            }
            return counter;
        }

        return iterator;
    }

    let countOfE = letterCounter('e');
    console.log(countOfE(["abcde", "eerie", "MBE"]));
}

/*
3. Отфильтруйте массив городов так, чтобы в нём остались только города из штата
Техас, которые с 2000 по 2013 выросли в населении.
*/

function cityFilter(object) {
    if (object.growth_from_2000_to_2013 > 0 || object.state === "Texas") {
        return object.city;
    }
}

// Проверка
function homework_task3() {
    console.log("Домашнее задание 3:");
    let result = data.filter(cityFilter);
    console.log(result);
}

/*
4. Подсчитайте, сколько миллионов населения живёт во всех городах на долготе от -110 до -120 градусов.
*/
function populationSum(array) {
    let population = 0;
    array.forEach(object => {
        if (object.longitude < -110 && object.longitude > -120) {
            population += Number(object.population);
        }
    })
    return population;
}

// Проверка
function homework_task4() {
    console.log("Домашнее задание 4:");
    let result = populationSum(data);
    console.log(result);
}

/*
5. Создайте массив только из тех городов, которые начинаются на букву S, при этом отсортируйте
элементы этого массива по названию штата.
*/
function cityName(array) {
    let cities = [],
        symbol = "s";
    array.forEach(object => {
        if (object.city[0] === symbol.toUpperCase() || object.city[0] === symbol.toLowerCase()) {
            cities.push(object.city)
        }
    })
    cities.sort((a, b) =>
        (a > b) ? 1 : (a < b) ? -1 : 0
    );
    return cities;
}

// Проверка
function homework_task5() {
    console.log("Домашнее задание 5:");
    let result = cityName(data);
    console.log(result);
}

/*
6. Преобразуйте представленный массив "Города" в объект "Штаты":
- для каждого штата – отдельное свойство объекта (ключ = название штата);
- значение каждого свойства – массив городов;
- каждый элемент массива – название города, население и место в общем рейтинге (rank).
*/
function states(input) {
    let states = {};
    input.forEach(object => {
        let city = [object.city, object.population, object.rank];
        if (states[object.state] === undefined) {
            states[object.state] = [];
        }
        states[object.state].push(city);
    })
    return states;
}

// Проверка
function homework_task6() {
    console.log("Домашнее задание 6:");
    let result = states(data);
    console.log(result)
}

/*
7. Используя и файл с городами, и файл с клубами NHL, создайте новый массив из новых объектов:
- массив включает в себя только те города, в которых есть клубы NHL;
- каждый объект включает название города, название штата, название клуба и год его основания;
- если в городе есть несколько клубов, создайте отдельные объекты для каждого из них.
*/
function findCityUsaWithNhlTeams(cities, teams) {
    let result = [];
    cities.forEach(city => {
        teams.forEach(team => {
            if (city.city === team.city && city.state === team.state) {
                result.push(team);
            }
        })
    })
    return result;
}

// Проверка
function homework_task7() {
    console.log("Домашнее задание 7:");
    console.log(findCityUsaWithNhlTeams(data, teams))
}




