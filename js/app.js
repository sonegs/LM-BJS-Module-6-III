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

var printNames = (myTeam) => {
    var probando = [{
            availability: WORK_HOURS.fill(true)
        },
        {
            availability: WORK_HOURS.fill(true)
        },
        {
            availability: WORK_HOURS.fill(true)
        },
        {
            availability: WORK_HOURS.fill(true)
        },
    ];
    for (var i = 0; i < myTeam.length; i++) {
        console.log("Disponibilidad de " + myTeam[i].name);
        for (var x = 0; x < timetable.length; x++) {
            console.log("      " + timetable[x] + ": " + myTeam[i].availability[x]);
        }
        for (var z = 0; z < myTeam[i].availability.length; z++) {
            if (myTeam[i].availability[z] === "Sí") {
                probando[i].availability[z] = "SIIII";
            } else {
                probando[i].availability[z] = "NOOO";
            }
        }
    }
    console.log(probando);

};

var random = (n, min, max) => {
    var yesOrNot = new Array(8);
    for (var z = 0; z < yesOrNot.length; z++) {
        const range = max - min + 1;
        const whatIs = Math.floor(Math.random() * range) + min;
        whatIs < 5 ? yesOrNot[z] = "Sí" : yesOrNot[z] = "No";
    }
    return yesOrNot;
};

var takeRandom = (myTeam) => {
    for (mates of myTeam) {
        mates.availability = random(1, 1, 10);
    }
    printNames(myTeam);
    return myTeam;
};


takeRandom(myTeam);


// BUSCAR HUECO LIBRE