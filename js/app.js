// Constantes
const WORK_HOURS = [];
var count = 0;
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

var lookSpace = (myTeam, probando, i) => {
    for (var z = 0; z < myTeam[i].availability.length; z++) {
        if (myTeam[i].availability[z] === "Sí") {
            probando[i].availability[z] = "Si";
        } else {
            probando[i].availability[z] = "No";
        }
    }
    //console.log(probando);
};


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
        lookSpace(myTeam, probando, i);

        /* for (var can of probando[i].availability) {
            if(can === "Sí"){

            }
        } */
    }
    //console.log(probando);

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
var canWeMeet = (temporal, index) => {
    var meeting;
    if (temporal[index] === 4) {
        for (var x = 0; x < timetable.length; x++) {
            meeting = timetable[index];
        }
        message = "Se pueden reunir en la hora de " + meeting;
        /* count = 0; */
        return console.log(message);
    } else {
        message = "No se pueden reunir hoy, pruebe otro día";
        count++;
    }
    if (count <= 1) return console.log(message);

    return count;
};
var temporal = [0, 0, 0, 0, 0, 0, 0, 0];
var lookingSpace = (mates) => {
    for (var i = 0; i < mates.availability.length; i++) {
        if (mates.availability[i] === "Sí") {
            temporal[i]++;
        }
        /* if (temporal[i] === 4) {

        } */



        canWeMeet(temporal, i);
    }

};

var takeRandom = (myTeam) => {
    for (mates of myTeam) {
        mates.availability = random(1, 1, 10);
        lookingSpace(mates);
    }

    printNames(myTeam);
    return myTeam;
};

takeRandom(myTeam);


// BUSCAR HUECO LIBREs