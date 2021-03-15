let GameManager = {
    setGameStart: function(name){
        this.resetPlayer(name);
        this.setPreFight();
    },
    resetPlayer: function(name){
        switch (name){
            case "Bob": 
                player = new Player(name, 300, 150, 200);
                break;
            case "Patricio": 
                player = new Player(name, 100, 200, 300);
                break;
            case "Calamardo": 
                player = new Player(name, 50, 200, 150);
                break;
            case "Arenita": 
                player = new Player(name, 300, 300, 50);
                break;        
            }
        let getInterface = document.querySelector(".interface");
        getInterface.innerHTML = '<img src="img/'+ name.toLowerCase() + 
        '.jpg" class = "img-avatar"><div><h3>'+name+
        '</h3><p class="health-player">Health: '+ player.health +
        '</p><p>Strength: '+ player.strength +
        '</p><p>Hunger: '+ player.hunger +'</p></div>';
    },
    setPreFight: function(){
        let getHeader = document.querySelector(".header");
        let getActions = document.querySelector(".actions");
        let getArena = document.querySelector(".arena");

        getHeader.innerHTML = '<p>Task: Find an Enemy!</p>';
        getActions.innerHTML = '<a href = "#" class = "btn-prefight" onclick="GameManager.setFight()">Search for enemy!</a>';
        getArena.style.visibility = "visible";
    },
    setFight: function() {
        let getHeader = document.querySelector(".header");
        let getActions = document.querySelector(".actions");
        let getEnemy = document.querySelector(".enemy ");
        //Create enemy
        let enemy00 = new Enemy("Plankton", 80, 50, 250);
        let enemy01 = new Enemy("Cangrejo", 150, 100, 100);
        let chooseRandomEnemy = Math.floor(Math.random() * Math.floor(2));
        switch (chooseRandomEnemy){
            case 0:
                enemy = enemy00;
                break;
            case 1: 
                enemy = enemy01;
                break;
        }
        getHeader.innerHTML = '<p>Task: Choose your move</p>';
        getActions.innerHTML = '<a href = "#" class = "btn-prefight" onclick="PlayerMoves.calcAttack()">Attack!</a>';
        getEnemy.innerHTML = '<img src="img/'+ enemy.name.toLowerCase() + 
        '.jpg" class = "img-avatar"><div><h3>'+enemy.name+
        '</h3><p class="health-enemy">Health: '+ enemy.health +
        '</p><p>Strength: '+ enemy.strength +
        '</p><p>Hunger: '+ enemy.hunger +'</p></div>';
    }
    
}