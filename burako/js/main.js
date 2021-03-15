function Player(name, points,oldPoints){
    this.name = name;
    this.points = points;
    this.oldPoints = oldPoints;
    this.updatePoints = function(){
        return this.oldPoints+= this.points;
    };
}
let player1;
let player2;

function getNames(){
    name1 = prompt("Ingrese nombre de jugador 1");
    name2 = prompt("Ingrese nombre de jugador 2");

    return [name1,name2];
}


function setPlayers(){
    let players = getNames();
    player1= new Player(players[0],0,0);
    player2= new Player(players[1],0,0);    
    //console.log(player1);

    document.querySelector("#player1").innerHTML = player1.name;
    document.querySelector("#player2").innerHTML = player2.name;
}

function calcularPuntos() {
    let pointsP1 = parseInt(document.querySelector("#points1").value);
    let pointsP2 = parseInt(document.querySelector("#points2").value);
    player1.points =  pointsP1;
    player2.points =  pointsP2;
    //console.log(player1.name);
    player1.updatePoints();
    player2.updatePoints();


    if ( player1.oldPoints >= 3000 || player2.oldPoints >= 3000) {
       if (player1.oldPoints > player2.oldPoints) {
             alert("El ganador es " + player1.name);
        }
        else alert("El ganador es " + player2.name);
    }

    document.querySelector("#result1").innerHTML = player1.oldPoints;
    document.querySelector("#result2").innerHTML = player2.oldPoints;
}

function resetPlayers(){
    player1.oldPoints = 0;
    player2.oldPoints = 0;

    document.querySelector("#result1").innerHTML = player1.oldPoints;
    document.querySelector("#result2").innerHTML = player2.oldPoints;
    document.querySelector("#points1").value = 0;
    document.querySelector("#points2").value = 0;
}

