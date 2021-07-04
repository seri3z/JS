// Практика
// Часть 1
// Создайте массив и в цикле заполните его чётными числами от 2 до 20.
function practise_task1() {
    let array = [];
    for (let i = 2; i < 20; i++) {
        array[i - 2] = i;
    }
    console.log(array);
}

// Преобразуйте массив из задачи 1 так, чтобы его элементы стали равны своему индексу, умноженному на 5.
function practise_task2() {
    let array = [];
    for (let i = 2; i < 20; i++) {
        array[i - 2] = i * 5;
    }
    console.log(array);
}

// Преобразуйте массив из задачи 2 так, чтобы его элементы расположились в обратном порядке.
function practise_task3() {
    let array = [];
    for (let i = 2; i < 20; i++) {
        array[i - 2] = i * 5;
    }
    console.log(array.reverse());
}

// Получите от пользователя три числа, создайте из них массив. Используя циклы, найдите наибольшее из чисел
// и разделите на него каждый элемент массива.
function practise_task4() {
    let one = +prompt("Введите первое число"),
        two = +prompt("Введите второе число"),
        three = +prompt("Введите третье число"),
        array = [one, two, three],
        bignumber = 0;
    console.log("Первоначальный массив: ", array);
    for (let i = 0; i < array.length; i++) {
        if (array[i] > bignumber) {
            bignumber = array[i];
        }
    }
    console.log("Наибольшее число в массиве: ", bignumber);
    for (let i = 0; i < array.length; i++) {
        array[i] = array[i] / bignumber;
    }
    console.log("Массив после деления каждого числа на наибольшее в массиве: ", array);
}

// Часть 2
// Создайте массив из чисел от 1 до 35. Вырежьте из него первые 10 элементов, а затем добавьте их
// в конец массива. Разверните в обратном порядке элементы с 11 по 20. Удалите элементы с 21 по 25, на
// их место вставьте пять первых степеней двойки. Элементы с 26 по 30 замените на единицы. Элементы
// с 31 по 35 склейте в одну строку, разделяя пробелами, и замените на итоговую строку.
function practise_task5() {
    let array = [],
        length = 35;
    for (let i = 0; i < length; i++) {
        array[i] = i + 1;
    }
    console.log("Исходный массив: ", array);
    let removed = array.splice(0, 10);
    array = array.concat(removed);
    console.log("Массив после удаления первых 10 элементов и перемещении их в конец: ", array);
    let array1 = array.slice(0, 10);
    let array2 = array.slice(10, 20).reverse();
    let array3 = array.slice(20, 35);
    array = array1.concat(array2, array3);
    console.log("Массив после разворота в обратном порядке элементов с 11 по 20: ", array);
    array.splice(20, 5, 1, 2, 4, 8, 16);
    console.log("Массив после удаления элементов с 21 по 25 и вставке на их место пять первых степеней двойки: ", array);
    array.splice(25, 5, 1, 1, 1, 1, 1);
    console.log("Массив после замены элементов с 26 по 30 на единицы: ", array);
    removed = array.splice(30, 5).join(" ");
    array.splice(30, 0, removed);
    console.log("Массивс склейки элементов с 31 по 35 в одну строку, разделяя пробелами, и замените последнего элемента на итоговую строку: ", array);
}

// Напишите функцию, которая удаляет из массива повторяющиеся элементы и возвращает обновлённый массив.
function practise_task6() {
    let array = [
        2, "Три", 7, "Три", 40, "Один", 5, 5, "Один", "Два"
    ];
    console.log("Исходный массив:", array);
    function unique(array) {
        return Array.from(new Set(array));
    }

    console.log(unique(array));
}

// Напишите функцию, удаляющую из массива все элементы, которые при приведении к типу Boolean дают false.
function practise_task7() {
    let array = [
        2, "Три", false, "Три", 40, "Один", undefined, 5, "Один", "Два"
    ];
    console.log("Исходный массив:", array);
    for (let i = 0; i < array.length; i++) {
        array[i] = Boolean(array[i]);
    }
    let counter = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === false) {
            counter++
        }
    }
    console.log("Массив со значениями приведёнными к Boolean значению: ", array, ". Всего элементов false в массиве: ", counter);
    for (let i = 0; i < array.length; i++) {
        if (array[i] === false) {
            array.splice(i, 1);
        }
    }
    console.log("Массив только со значениями true: ", array);
}

// Домашняя работа
// Используя встроенную функцию Math.random(), напишите собственную функцию getRandomArray(len),
// которая возвращает массив случайных чисел длиной len.
function getRandomArray(length) {
    let array = [];
    for (let i = 0; i < length; i++) {
        array[i] = Math.random();
    }
    return array;
}

function homework_task1() {
    let length = prompt("Введите длинну массива:")
    console.log(getRandomArray(length));
}

// Выведите в консоль элементы массива, которые больше среднего арифметического всех элементов.
function homework_task2() {
    let length = 10,
        array = getRandomArray(length),
        sum = 0;
    console.log("Исходный массив: ", array);
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    let middle = sum / array.length;
    console.log("Среднее арифметическое массива: ", middle)
    let result = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] > middle) {
            result.push(array[i])
        }
    }
    console.log("Элементы массива, которые больше среднего арифметического всех элементов: ", result);
}

// Найдите два наименьших элемента массива.
function homework_task3() {
    let length = 10,
        array = getRandomArray(length);
    console.log("Исходный массив: ", array);

    let bigint = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > bigint) {
            bigint = array[i];
        }
    }
    console.log("Самое большое число в массиве: ", bigint);

    let smallint1 = bigint;
    for (let i = 0; i < array.length; i++) {
        if (array[i] < smallint1) {
            smallint1 = array[i];
        }
    }
    console.log("Самое маленькое первое число в массиве: ", smallint1);


    let smallint2 = bigint;
    for (let i = 0; i < array.length; i++) {
        if (array[i] < smallint2) {
            if (smallint1 < array[i])
                smallint2 = array[i];
        }
    }
    console.log("Самое маленькое второе число в массиве: ", smallint2);

}

// Удалите из массива все элементы, меньшие 0.3. Сдвиньте все оставшиеся элементы вперёд,
// а на освободившиеся места вставьте нули.
function homework_task4() {
    let length = 10,
        array = getRandomArray(length),
        goal = 0.3;
    console.log("Исходный массив: ", array);

    for (let i = 0; i < array.length; i++) {
        if (array[i] < goal) {
            array.splice(array[i], 1)
        }
    }
    console.log("Массив после удаления всех элементов меньше 0.3: ", array);

    let removedlength = length - array.length;
    console.log("Из массива было удалено ", removedlength, "элементов.");

    for (let i = array.length; i < length; i++) {
        array[i] = 0;
    }
    console.log("Полученный массив после добавления нулей: ", array);
}

// Попарно сложите элементы двух массивов равной длины: первый массива 1 с последним массива 2,
// второй массива 1 с предпоследним массива 2 и так далее. Верните массив с результатами сложения.
function homework_task5() {
    let length = 10,
        array1 = getRandomArray(length),
        array2 = getRandomArray(length),
        array3 = [];
    console.log("Исходный массив 1: ", array1);
    console.log("Исходный массив 2: ", array2);

    array2.reverse();

    for (let i = 0; i < length; i++) {
        array3.push(array1[i] + array2[i])
    }
    console.log("Полученный массив: ", array3);
}

// Отсортируйте массив методом пузырька. О самом алгоритме можно почитать на википедии.
// А ещё можно посмотреть, как его танцуют в Венгрии.
function homework_task6() {
    let length = 10,
        array = getRandomArray(length);
    console.log("Исходный массив: ", array);

    for (let i = 0; i < array.length; i++) {
        for (let i = 0; i < array.length - 1; i++) {
            if (array[i] > array[i + 1]) {
                let temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp;
            }
        }
    }
    console.log("Отсортированный массив: ", array);
}

// (*) Проверьте, есть ли в массиве два числа, сумма которых очень близка к 1 (0.999 < sum < 1.001).
// Если такая пара (или такие пары) есть, выведите их в консоль.
function homework_task7() {
    let length = 10,
        array = getRandomArray(length);
    console.log("Исходный массив: ", array);

    for (let i = 0; i < array.length; i++) {
        for (let i = 0; i < array.length - 1; i++) {
            if (0.999 < array[i] + array[i + 1] && array[i] + array[i + 1] < 1.001) {
                console.log("Найдена пара", array[i], " + ", array[i + 1], " = ", array[i] + array[i + 1]);
            }
        }
    }
}

// (*) Создайте массив той же длины, что исходный. На месте самого большого числа исходного
// массива в новом вставьте число 1, на месте второго по величине – 2 и так далее.
function homework_task8() {
    let length = 10,
        array1 = getRandomArray(length),
        array2 = getRandomArray(length),
        numbers = [];
    for (let i = 1; i <= length; i++) {
        numbers[i - 1] = i;
    }
    console.log("Первый массив: ", array1);
    console.log("Второй массив: ", array2);
    //console.log("Массив с числами", numbers);

    // 1) сделать копию первого массива и отсортировать его пузырьком
    let array3 = array1.slice();

    for (let i = 0; i < array3.length; i++) {
        for (let i = 0; i < array3.length - 1; i++) {
            if (array3[i] > array3[i + 1]) {
                let temp = array3[i];
                array3[i] = array3[i + 1];
                array3[i + 1] = temp;
            }
        }
    }
    //console.log("Отсортированный первый массив: ", array3);

    // 2) перебрать числа из отсортированной копии и найти индексы в исходном массиве
    for (let i = 0; i < array3.length; i++) {
        let index = array1.indexOf(array3[i]);
        //console.log("Индекс элемента: ", index)
        // 3) заменить найденные значения на значения из массива с числами
        array2.splice(array1.indexOf(array3[i]), 1, numbers[i])
    }
    console.log("Полученный массив: ", array2);
}

// (*) Сделайте сдвиг массива вправо на X позиций (X передайте в функцию в качестве аргумента).
// Элементы, которые после сдвига "уходят" за пределы его длины, переместите на освободившиеся первые Х позиций.
function homework_task9() {
    let x = 5;
    function shift(x) {
        let length = 10,
            array = getRandomArray(length);
        console.log("Исходный массив: ", array);
        for (let i = 0; i < x; i++) {
            array.unshift(array.pop());
        }
        return array;
    }
    console.log("Полученный массив: ", shift(x))
}
