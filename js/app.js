//EJERCICIO DE LA AGENDA

// Constantes

const WORK_HOURS = [];
const timetable = [
    "08:00 - 09:00",
    "09:00 - 10:00",
    "10:00 - 11:00",
    "11:00 - 12:00",
    "12:00 - 13:00",
    "13:00 - 14:00",
    "15:00 - 16:00",
    "16:00 - 17:00"
];

// Datos
var check = [0, 0, 0, 0, 0, 0, 0, 0];
var message = "No se pueden reunir hoy, pruebe otro día";
var myTeam = [{
        name: "María",
        availability: WORK_HOURS.fill(true)
    },
    {
        name: "Pedro",
        availability: WORK_HOURS.fill(true)
    },
    {
        name: "Esther",
        availability: WORK_HOURS.fill(true)
    },
    {
        name: "Marcos",
        availability: WORK_HOURS.fill(true)
    },
];

// GENERACION ALEATORIA

// Imprime por consola el horario y la disponibilidad de los compañeros del equipo
var printNames = (myTeam) => {
    for (var i = 0; i < myTeam.length; i++) {
        console.log("Disponibilidad de " + myTeam[i].name);
        for (var x = 0; x < timetable.length; x++) {
            console.log("      " + timetable[x] + ": " + myTeam[i].availability[x]);
        }
    }
};

// Asigna la disponibilidad de reunión de los compañeros a través de números aleatorios
var random = (n, min, max) => {
    var yesOrNot = new Array(8);
    for (var z = 0; z < yesOrNot.length; z++) {
        const range = max - min + 1;
        const whatIs = Math.floor(Math.random() * range) + min;
        whatIs < 5 ? yesOrNot[z] = "Sí" : yesOrNot[z] = "No";
    }
    return yesOrNot;
};

// Recorre el array check y cambia el mensaje si los compañeros pueden reunirse
var canWeMeet = (check) => {
    for (var f = 0; f < check.length; f++) {
        if (check[f] === 4) {
            message = "Se pueden reunir en la hora de " + timetable[f];
        }
    }
    return message;
};

// Busca un hueco libre en el horario de cada compañero asignando valores al array check
var lookingSpace = (mates) => {
    for (var i = 0; i < mates.availability.length; i++) {
        if (mates.availability[i] === "Sí") {
            check[i]++;
        }
    }
};

// Recorre los datos de la variable myTeam, asigna la disponibilidad de cada compañero, 
// llama a las funciones que tienen que buscar el espacio e imprimir por consola el horario y la reunión

var takeRandom = (myTeam) => {
    for (var mates of myTeam) {
        mates.availability = random(1, 1, 10);
        lookingSpace(mates);
    }
    printNames(myTeam);
    console.log(canWeMeet(check));
    return myTeam;
};

takeRandom(myTeam);

//EJERCICIO DE LA CALCULADORA
//Array con el tipo de billetes/monedas
const billets = [200, 100, 50, 20, 10, 5, 2, 1, 0.50, 0.20, 0.10, 0.05, 0.02, 0.01];

var type;

//divide el precio del producto y el dinero pagado
var paymentChange = (money, change) => change / money;

// Imprime el cambio del dinero entregado en una lista 
var printList = (message) => {
    var list = document.getElementById("list");
    var item = document.createElement("li");
    item.innerText = message;
    return list.appendChild(item);
};

// Calcula cuanto hay que devolver

var calculate = () => {
    var total = document.getElementById("total").value;
    var pay = document.getElementById("paying").value;
    var change = pay - total;

    //busca en el array de los distintos billetes/monedas
    for (var money of billets) {
        var count = paymentChange(money, change);
        //si la división es mayor o igual que 1, formula el mensaje a imprimir y llama a la función que imprime el mensaje en la web
        if (count >= 1) {
            change = change - parseInt(count) * money;
            money <= 2 ? type = "moneda/s" : type = "billete/s";
            var message = parseInt(count) + " " + type + " de " + money + " euros";
            printList(message);
        }
    }
    return change;
};

//Imprime por pantalla los inputs y el botón de calcular resultado
var printInputs = () => {
    // selecciona el div inputs en el que se van a mostrar los elementos
    var inputs = document.getElementById("inputs");

    // crea un div y un input para mostrar los elementos de la lista
    var divTotal = document.createElement("div");
    var divPay = document.createElement("div");
    var inputTotal = document.createElement("input");
    var inputPay = document.createElement("input");
    var labelTotal = document.createElement("label");
    var button = document.createElement("button");
    var labelPay = document.createElement("label");

    // asigna valores al input
    inputTotal.setAttribute("type", "number");
    inputTotal.setAttribute("id", "total");
    inputPay.setAttribute("type", "number");
    inputPay.setAttribute("id", "paying");
    button.setAttribute("id", "calculate");
    labelTotal.innerText = "Total a pagar";
    labelPay.innerText = "Importe recibido";
    button.innerText = "Calcular";

    // finalmente, muestra la lista por pantalla
    inputs.appendChild(divTotal).appendChild(labelTotal);
    inputs.appendChild(divTotal).appendChild(inputTotal);
    inputs.appendChild(divPay).appendChild(labelPay);
    inputs.appendChild(divPay).appendChild(inputPay);
    inputs.appendChild(button);

    //dispara la función calculate al hacer click en el botón
    button.addEventListener("click", calculate);
};

printInputs();