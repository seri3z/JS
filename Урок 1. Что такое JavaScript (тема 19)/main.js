console.log("Домашнее задание:");

let a1 = "" + 1 + 0;
console.log('1) "" + 1 + 0', "(Значение = " + a1,", Тип выражения - " + typeof a1, ")");

let a2 = "" - 1 + 0;
console.log('2) "" - 1 + 0', "(Значение = " + a2,", Тип выражения - " + typeof a2, ")");

let a3 = true + false;
console.log('3) true + false', "(Значение = " + a3,", Тип выражения - " + typeof a3, ")");

let a4 = 6 / "3";
console.log('4) 6 / "3"', "(Значение = " + a4,", Тип выражения - " + typeof a4, ")");

let a5 = "2" * "3";
console.log('5) "2" * "3"', "(Значение = " + a5,", Тип выражения - " + typeof a5, ")");

let a6 = 4 + 5 + "px";
console.log('6) 4 + 5 + "px"', "(Значение = " + a6,", Тип выражения - " + typeof a6, ")");

let a7 = "$" + 4 + 5;
console.log('7) "$" + 4 + 5', "(Значение = " + a7,", Тип выражения - " + typeof a7, ")");

let a8 = "4" - 2;
console.log('8) "4" - 2', "(Значение = " + a8,", Тип выражения - " + typeof a8, ")");

let a9 = "4px" - 2;
console.log('9) "4px" - 2', "(Значение = " + a9,", Тип выражения - " + typeof a9, ")");

let a10 = 7 / 0;
console.log('10) 7 / 0', "(Значение = " + a10,", Тип выражения - " + typeof a10, ")");

let a11 = " -9\n" + 5;
console.log('11) " -9\\n" + 5', "(Значение = " + a11,", Тип выражения - " + typeof a11, ")");

let a12 = " -9\n" - 5;
console.log('12) " -9\\n" - 5', "(Значение = " + a12,", Тип выражения - " + typeof a12, ")");

let a13 = null + 1;
console.log('13) null + 1', "(Значение = " + a13,", Тип выражения - " + typeof a13, ")");

let a14 = undefined + 1;
console.log('14) undefined + 1', "(Значение = " + a14,", Тип выражения - " + typeof a14, ")");

let a15 = null == "\n0\n";
console.log('15) null == "\\n0\\n"', "(Значение = " + a15,", Тип выражения - " + typeof a15, ")");

console.log("");
console.log("Дополнительное задание:");
console.log("Условие:");
let a = prompt('Введите значение "a":');
let b = prompt('Введите значение "b":');
console.log("a =", a);
console.log("b =", b);
console.log("");

function option1(a, b) {
    let temp;
    temp = a;
    a = b;
    b = temp;
    return console.log("a =", a, "b =", b);
}
console.log("Вариант 1 - с помощью дополнительной переменной (для разных типов значений):");
option1(a,b);
console.log("");

function option2(a, b) {
    a = Number(a);
    b = Number(b);
    a = a + b;
    b = b - a;
    b = -b;
    a = a - b;
    return console.log("a =", a, "b =", b);
}
console.log("Вариант 2 - без дополнительной переменной (для числовых значений):");
option2(a,b);
console.log("");

function option3(a, b) {
    a = Number(a);
    b = Number(b);
    a = a ^ b;
    b = b ^ a;
    a = a ^ b;
    return console.log("a =", a, "b =", b);
}
console.log("Вариант 3 - с помощью побитового оператора xor (для числовых значений):");
option3(a,b);
console.log("");

function option4(a, b) {
    [a, b] = [b, a];
    return console.log("a =", a, "b =", b);
}
console.log("Вариант 4 - с помощью деструктурированого сопоставления массивов назначений (для разных типов значений):");
option4(a,b);
console.log("");





