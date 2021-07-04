// Практика
// Часть 1
// Создайте объект obj = {a: 1, b: 2, c: 3}. Выведите в консоль элемент с ключом 'c' двумя
// способами: через квадратные скобки и через точку. Затем выведите все свойства объекта
// через цикл for..in.
function practise_task1() {
    let obj = {
        a: 1,
        b: 2,
        c: 3
    };

    console.log("Вариант 1: ", obj["c"])
    console.log("Вариант 2: ", obj.c)

    for (let item in obj) {
        console.log("obj." + item + " = ", obj[item]);
    }
}

// Создайте объект city, добавьте ему свойства name (название города, строка) и
// population (население, число).
function practise_task2() {
    let city = {
        name: "Минск",
        population: 2020600,
    }
    console.log(city);
}

// Создайте массив из шести объектов такого же вида, как city из задачи 2 – по одному
// для каждого областного города Беларуси.
function practise_task3() {
    let cities = [
        {
            name: "Брест",
            population: 339700,
        },
        {
            name: "Витебск",
            population: 364800,
        },
        {
            name: "Гомель",
            population: 510300,
        },
        {
            name: "Гродно",
            population: 356900,
        },
        {
            name: "Минск",
            population: 2020600,
        },
        {
            name: "Могилёв",
            population: 357100,
        }
    ]
    console.log(cities)
    return cities;
}

// Напишите функцию, которая принимает массив из задачи 3 в качестве параметра и выводит
// в консоль информацию о каждом городе.
function practise_task4() {
    let cities = part1_task3();
    cities.forEach(
            function(object) {
                console.log("Город: " + object.name + ". Население: ", object.population);
            }
        );
}

// Часть 2
// Создайте в объектах с городами из задачи 3 метод getInfo, который возвращает строку
// с информацией о городе (например, в таком формате: "Город Добруш, население – 18760 человек").
function practise_task5() {
    let city = prompt("Введите название областного центра:")
    let cities = [
        {
            name: "Брест",
            population: 339700,
            getInfo() {
                console.log("Город " + this.name + ", население –", this.population, " человек")
            }
        },
        {
            name: "Витебск",
            population: 364800,
            getInfo() {
                console.log("Город " + this.name + ", население –", this.population, " человек")
            }
        },
        {
            name: "Гомель",
            population: 510300,
            getInfo() {
                console.log("Город " + this.name + ", население –", this.population, " человек")
            }
        },
        {
            name: "Гродно",
            population: 356900,
            getInfo() {
                console.log("Город " + this.name + ", население –", this.population, " человек")
            }
        },
        {
            name: "Минск",
            population: 2020600,
            getInfo() {
                console.log("Город " + this.name + ", население –", this.population, " человек")
            }
        },
        {
            name: "Могилёв",
            population: 357100,
            getInfo() {
                console.log("Город " + this.name + ", население –", this.population, " человек")
            }
        }
    ]

    function chose(object) {
        if (object.name === city)
        return object.getInfo()
    }

    return cities.find(chose)
}

// Создайте объект с информацией о себе (имя, фамилия, любимое занятие). Добавьте в него
// метод, который выводит эту информацию в консоль в удобочитаемом формате.
function practise_task6() {
    let me = {
        name: "Олег",
        surname: "Пуцило",
        hobby: "Кодить",
        getInfo() {
            console.log("Меня зовут " + this.name + " " + this.surname);
            console.log("Моё хобби: " + this.hobby);
        }
    }
    me.getInfo()
}

// Домашняя работа
// Напишите функцию, которая получает в качестве аргументов объект и строку и проверяет,
// есть ли в этом объекте свойство с именем, равным этой строке.
function homework_task1() {
    let object = {
        name: "Минск",
        population: 2020600,
    }
    let string = "name"
    console.log("Искомое значение: " + string)

    function findKey(object, string) {
        let array = Object.keys(object)
        console.log("Содержимое объекта: ", array)
        if (array.indexOf(string) !== -1) {
            console.log("В объекте есть свойство с таким именем.")
        } else {
            console.log("В объекте нет свойства с таким именем!")
        }
    }

    findKey(object, string)
}

// Создайте объект для хранения своего любимого кулинарного рецепта. Он должен содержать
// название, ингредиенты и их необходимое количество (в виде вложенного объекта), а также
// количество порций (больше 1). Напишите функцию, которая получает "рецепт", подсчитывает,
// сколько каждого ингредиента нужно на одну порцию, и выводит информацию об этом в консоль.
function homework_task2() {
    let name = "Постный банановый пирог"
    let quantity = prompt("Введите количество порций:")
    let recipes = [
        {
            name: "Постный банановый пирог",
            ingredients: [
                {
                    name: "Бананы",
                    quantity: 300,
                    units: "грамм"
                },
                {
                    name: "Сахар",
                    quantity: 120,
                    units: "грамм"
                },
                {
                    name: "Растительное масло",
                    quantity: 1 / 2,
                    units: "чайная ложка"
                },
                {
                    name: "Молотая корица",
                    quantity: 1 / 2,
                    units: "чайная ложка"
                },
                {
                    name: "Разрыхлитель",
                    quantity: 1,
                    units: "чайная ложка"
                },
                {
                    name: "Сода",
                    quantity: 1 / 3,
                    units: "чайная ложка"
                },
                {
                    name: "Мука",
                    quantity: 200,
                    units: "грамм"
                },
                {
                    name: "Изюм",
                    quantity: 100,
                    units: "грамм"
                }
            ]
        }
    ]

    function getRecipe(name, quantity) {
        function chose(object) {
            if (object.name === name)
                return object
        }

        let recipe = recipes.find(chose)

        console.log("Рецепт блюда - " + recipe.name + " на " + quantity + " порции.")
        console.log("Состав:")
        for (let i = 0; i < recipe.ingredients.length; i++) {
            console.log(recipe.ingredients[i].name + " в количестве " + (recipe.ingredients[i].quantity * quantity).toFixed(1) + " " + recipe.ingredients[i].units)
        }
    }

    getRecipe(name, quantity)
}

// Создайте объект "Цилиндр" (свойства – радиус и высота). Добавьте в него метод,
// который считает объём цилиндра (используя this).
// + объём цилиндра в рамках определённого угла (дополнительно)
function homework_task3() {
    let cylinder = {
        radius: 10,
        height: 20,
        angle: 15,
        getVolume() {
            let volume = +(Math.PI * Math.pow(this.radius, 2) * this.height).toFixed(3)
            let angle = +(volume / 360 * this.angle).toFixed(3)
            console.log("Радиус цилиндра:", this.radius)
            console.log("Высота цилиндра:", this.height)
            console.log("Объём цилиндра составляет:", volume)
            console.log("Дополнительно:")
            console.log("Объём цилиндра ограниченного", this.angle, "градусами составляет", angle)
        }
    }
    cylinder.getVolume();
}

// Выберите пингвина из списка вымышленных пингвинов на Википедии и опишите его в виде
// объекта (не менее трёх полей; например, имя, создатель и источник). Добавьте этому объекту
// свойство canFly. Добавьте два метода: sayHello, который выводит в консоль приветствие и
// представление вашего пингвина, и fly, который в зависимости от значения свойства canFly
// (true или false) определяет, может ли пингвин летать, и сообщает об этом в консоль.
function homework_task4() {
    let penguin = {
        name: "Misha",
        creator: "Andrey Kurkov",
        source: "Death and the Penguin, Penguin Lost",
        canFly: false,
        sayHello() {
            console.log("Hello. I'm penguin. My name is " + this.name + ".")
            console.log("I was created by " + this.creator + ".")
            console.log("I am main character in a book " + this.source + ".")
        },
        fly() {
            if (this.canFly === true) {
                console.log("I can fly ^_^")
            } else {
                console.log("I can't fly :(")
            }
        }
    }
    penguin.sayHello()
    penguin.fly()
}

// Создайте несколько (3-4) объектов одинаковой структуры, которые описывают ваши
// любимые книги (автор, название, год издания + любые другие свойства на ваше усмотрение).
// Добавьте в каждый из них метод для вывода в консоль краткой информации
// о книге (например, в формате Автор — Название).
function homework_task5() {
    let books = [
        {
            name: "451° по Фаренгейту",
            author: "Рей Брэдбери",
            year: "2008",
            description: "Мастер мирового масштаба, совмещающий в литературе несовместимое. Создатель таких ярчайших шедевров, как \"Марсианские хроники\", \"451° по Фаренгейту\", \"Вино из одуванчиков\" и так далее и так далее. Лауреат многочисленных премий. Это Рэй Брэдбери. Его увлекательные истории прославили автора не только как непревзойденного рассказчика, но и как философа, мыслителя и психолога. Магический реализм его прозы, рукотворные механизмы радости, переносящие человека из настоящего в волшебные миры детства, чудо приобщения к великой тайне Литературы, щедро раздариваемое читателю, давно вывели Брэдбери на высокую классическую орбиту. Собранные в этой книге произведения - достойное тому подтверждение.",
            getInfo() {
                console.log("Название:", this.name)
                console.log("Автор:", this.author)
                console.log("Год издания:", this.year)
                console.log("Краткое описание:", this.description)
            }
        },
        {
            name: "1984",
            author: "Джордж Оруэлл",
            year: "1949",
            description: "Своеобразный антипод второй великой антиутопии XX века - \"О дивный новый мир\" Олдоса Хаксли. Что, в сущности, страшнее: доведенное до абсурда \"общество потребления\" - или доведенное до абсолюта \"общество идеи\"? По Оруэллу, нет и не может быть ничего ужаснее тотальной несвободы...",
            getInfo() {
                console.log("Название:", this.name)
                console.log("Автор:", this.author)
                console.log("Год издания:", this.year)
                console.log("Краткое описание:", this.description)
            }
        },
        {
            name: "Мастер и Маргарита",
            author: "Михаил Булгаков",
            year: "2006",
            description: "Один из самых загадочных и удивительных романов XX века. Роман \"Мастер и Маргарита\" - визитная карточка Михаила Афанасьевича Булгакова. Более десяти лет Булгаков работал над книгой, которая стала его романом-судьбой, романом-завещанием. В \"Мастере и Маргарите\" есть все: веселое озорство и щемящая печаль, романтическая любовь и колдовское наваждение, магическая тайна и безрассудная игра с нечистой силой.",
            getInfo() {
                console.log("Название:", this.name)
                console.log("Автор:", this.author)
                console.log("Год издания:", this.year)
                console.log("Краткое описание:", this.description)
            }
        },
        {
            name: "Шантарам",
            author: "Грегори Дэвид Робертс",
            year: "2003",
            description: "Представляем читателю один из самых поразительных романов начала XXI века (в 2015 году получивший долгожданное продолжение – «Тень горы»). Эта преломленная в художественной форме исповедь человека, который сумел выбраться из бездны и уцелеть, разошлась по миру тиражом четыре миллиона экземпляров (из них полмиллиона – в России) и заслужила восторженные сравнения с произведениями лучших писателей Нового времени, от Мелвилла до Хемингуэя. Подобно автору, герой этого романа много лет скрывался от закона. Лишенный после развода с женой родительских прав, он пристрастился к наркотикам, совершил ряд ограблений и был приговорен австралийским судом к девятнадцати годам заключения. Бежав на второй год из тюрьмы строгого режима, он добрался до Бомбея, где был фальшивомонетчиком и контрабандистом, торговал оружием и участвовал в разборках индийской мафии, а также нашел свою настоящую любовь, чтобы вновь потерять ее, чтобы снова найти…",
            getInfo() {
                console.log("Название:", this.name)
                console.log("Автор:", this.author)
                console.log("Год издания:", this.year)
                console.log("Краткое описание:", this.description)
            }
        }
    ]
    for (let i = 0; i < books.length; i++) {
        console.log("Книга "+ (i + 1) + ".")
        books[i].getInfo()
        console.log(" ")
    }
}

// Создайте функцию, которая получает в качестве аргументов два объекта
// с книгами (из задачи 3) и возвращает ту книгу, которая издана раньше.
function homework_task6() {
    let books = [
        {
            name: "451° по Фаренгейту",
            author: "Рей Брэдбери",
            year: "2008",
            description: "Мастер мирового масштаба, совмещающий в литературе несовместимое. Создатель таких ярчайших шедевров, как \"Марсианские хроники\", \"451° по Фаренгейту\", \"Вино из одуванчиков\" и так далее и так далее. Лауреат многочисленных премий. Это Рэй Брэдбери. Его увлекательные истории прославили автора не только как непревзойденного рассказчика, но и как философа, мыслителя и психолога. Магический реализм его прозы, рукотворные механизмы радости, переносящие человека из настоящего в волшебные миры детства, чудо приобщения к великой тайне Литературы, щедро раздариваемое читателю, давно вывели Брэдбери на высокую классическую орбиту. Собранные в этой книге произведения - достойное тому подтверждение.",
            getInfo() {
                console.log("Название:", this.name)
                console.log("Автор:", this.author)
                console.log("Год издания:", this.year)
                console.log("Краткое описание:", this.description)
            }
        },
        {
            name: "1984",
            author: "Джордж Оруэлл",
            year: "1949",
            description: "Своеобразный антипод второй великой антиутопии XX века - \"О дивный новый мир\" Олдоса Хаксли. Что, в сущности, страшнее: доведенное до абсурда \"общество потребления\" - или доведенное до абсолюта \"общество идеи\"? По Оруэллу, нет и не может быть ничего ужаснее тотальной несвободы...",
            getInfo() {
                console.log("Название:", this.name)
                console.log("Автор:", this.author)
                console.log("Год издания:", this.year)
                console.log("Краткое описание:", this.description)
            }
        },
        {
            name: "Мастер и Маргарита",
            author: "Михаил Булгаков",
            year: "2006",
            description: "Один из самых загадочных и удивительных романов XX века. Роман \"Мастер и Маргарита\" - визитная карточка Михаила Афанасьевича Булгакова. Более десяти лет Булгаков работал над книгой, которая стала его романом-судьбой, романом-завещанием. В \"Мастере и Маргарите\" есть все: веселое озорство и щемящая печаль, романтическая любовь и колдовское наваждение, магическая тайна и безрассудная игра с нечистой силой.",
            getInfo() {
                console.log("Название:", this.name)
                console.log("Автор:", this.author)
                console.log("Год издания:", this.year)
                console.log("Краткое описание:", this.description)
            }
        },
        {
            name: "Шантарам",
            author: "Грегори Дэвид Робертс",
            year: "2003",
            description: "Представляем читателю один из самых поразительных романов начала XXI века (в 2015 году получивший долгожданное продолжение – «Тень горы»). Эта преломленная в художественной форме исповедь человека, который сумел выбраться из бездны и уцелеть, разошлась по миру тиражом четыре миллиона экземпляров (из них полмиллиона – в России) и заслужила восторженные сравнения с произведениями лучших писателей Нового времени, от Мелвилла до Хемингуэя. Подобно автору, герой этого романа много лет скрывался от закона. Лишенный после развода с женой родительских прав, он пристрастился к наркотикам, совершил ряд ограблений и был приговорен австралийским судом к девятнадцати годам заключения. Бежав на второй год из тюрьмы строгого режима, он добрался до Бомбея, где был фальшивомонетчиком и контрабандистом, торговал оружием и участвовал в разборках индийской мафии, а также нашел свою настоящую любовь, чтобы вновь потерять ее, чтобы снова найти…",
            getInfo() {
                console.log("Название:", this.name)
                console.log("Автор:", this.author)
                console.log("Год издания:", this.year)
                console.log("Краткое описание:", this.description)
            }
        }
    ]

    function randomInteger(min, max) {
        // случайное число от min до (max+1)
        let random = min + Math.random() * (max + 1 - min);
        return Math.floor(random);
    }

    let a = randomInteger(0, 3)
    let b = randomInteger(0, 3)

    function versus(books, a, b) {
        if (books[a].year < books[b].year) {
            console.log("Книга " + books[a].name + " издана раньше (" + books[a].year + "), чем книга " + books[b].name + " (" + books[b].year + ")")
        } else if (books[a].year > books[b].year) {
            console.log("Книга " + books[b].name + " издана раньше (" + books[b].year + "), чем книга " + books[a].name + " (" + books[a].year + ")")
        } else if (books[a].year === books[b].year) {
            console.log("Книга " + books[b].name + " издана в тот же год (" + books[b].year + "), что и книга " + books[a].name + " (" + books[a].year + ")")
        }
    }

    versus(books, a, b)
}


// Дополнительно
// Задача с кругом. В объекте указать одну переменную и на основании неё создать методы в объекте для
// вычисления площади круга, длинны окружности, длинный внешней части сектора, площади сектора,
// периметра сектора.
function homework_task7() {
    let circle = {
        radius: 10,
        // Площадь круга (метод) S = Pr2
        getCircleArea() {
            return +(Math.PI * Math.pow(this.radius, 2)).toFixed(3)
        },
        // Длинна окружности (метод) L = 2Pr
        getCircleLength() {
            return +(2 * Math.PI * this.radius).toFixed(3)
        },
        // Длинна внешней части сектора (метод) L = 2Pr / 360 * angle
        getCirclePartLength(angle) {
            return +((2 * Math.PI * this.radius) / 360 * angle).toFixed(3)
        },
        // Площадь сектора (метод) S = Pr2 / 360 * angle
        getCirclePartArea(angle) {
            return +((Math.PI * Math.pow(this.radius, 2)) / 360 * angle).toFixed(3)
        },
        // Периметр сектора (метод) P = 2r + L
        getCirclePartPerimeter(angle) {
            return +(2 * this.radius + this.getCirclePartLength(angle)).toFixed(3)
        },
    }
    let angle = +prompt("Введите угол:")
    console.log("Радиус круга", circle.radius)
    console.log("Площадь круга", circle.getCircleArea())
    console.log("Длинна окружности", circle.getCircleLength())
    console.log("Длинна части окружности, ограниченной углом", circle.getCirclePartLength(angle))
    console.log("Площадь сектора, ограниченного углом", circle.getCirclePartArea(angle))
    console.log("Периметр сектора, ограниченного углом", circle.getCirclePartPerimeter(angle))
}
