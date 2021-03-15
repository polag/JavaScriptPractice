let player;

function Player(name, health, strength, hunger){
    this.name = name;
    this.health = health;
    this.strength = strength;
    this.hunger = hunger;
}

let PlayerMoves = {
    calcAttack: function() {
        //Who attacks first?
        let getPlayerHunger = player.hunger;
        let getEnemyHunger = enemy.hunger;
        console.log(getPlayerHunger);
        //Player attacks
        let playerAttack = function(){
            let calcBaseDamage = player.strength * player.health / 1000;
            let offsetDamage = Math.floor(Math.random() * Math.floor(10));
            let calcOutputDamage = calcBaseDamage + offsetDamage;
            //Number of hits
            let numberOfHits = Math.floor(Math.random() * Math.floor(player.health/10)/2)+1;
            let attackValues = [calcOutputDamage, numberOfHits];
            return attackValues;
        };
        //Enemy attacks
        let enemyAttack = function(){
            let calcBaseDamage = enemy.strength * enemy.health / 1000;
            let offsetDamage = Math.floor(Math.random() * Math.floor(10));
            let calcOutputDamage = calcBaseDamage + offsetDamage;
            //Number of hits
            let numberOfHits = Math.floor(Math.random() * Math.floor(enemy.health/10)/2)+1;
            let attackValues = [calcOutputDamage, numberOfHits];
            return attackValues;
        };
        let getPlayerHealth = document.querySelector(".health-player");
        let getEnemyHealth = document.querySelector(".health-enemy");

        //Initiate attacks
        if(getPlayerHunger >= getEnemyHunger){
            let playerAttackValues = playerAttack();
            let totalDamage = playerAttackValues[0]*playerAttackValues[1];
            enemy.health = parseInt(enemy.health - totalDamage);
            alert("You hit " + playerAttackValues[0] + " damage " + playerAttackValues[1]+" times.");
            if (enemy.health <= 0){
                alert("You win!");
                getPlayerHealth.innerHTML = 'Health:' + player.health;
                getEnemyHealth.innerHTML = 'Health: 0';
            }
            else {
                getEnemyHealth.innerHTML = 'Health:' + enemy.health;
                //Enemy Attacks
                let enemyAttackValues = enemyAttack();
                let totalDamage = enemyAttackValues[0]*enemyAttackValues[1];
                player.health = parseInt(player.health - totalDamage);
                alert("Enemy hit " + enemyAttackValues[0] + " damage " + enemyAttackValues[1]+" times.");
                if (player.health <= 0){
                    alert("You loose!");
                    getEnemyHealth.innerHTML = 'Health:' + enemy.health;
                    getPlayerHealth.innerHTML = 'Health: 0';
                }
                else{
                    getPlayerHealth.innerHTML = 'Health:' + player.health;
                }
            }
        }
        else{
            let enemyAttackValues = enemyAttack();
            let totalDamage = enemyAttackValues[0]*enemyAttackValues[1];
            player.health = parseInt(player.health - totalDamage);
            alert("Enemy hit " + enemyAttackValues[0] + " damage " + enemyAttackValues[1]+" times.");
            if (player.health <= 0){
                alert("You loose!");
                getEnemyHealth.innerHTML = 'Health:' + enemy.health;
                getPlayerHealth.innerHTML = 'Health: 0';
            }
            else {
                getPlayerHealth.innerHTML = 'Health:' + player.health;
                //Enemy Attacks
                let playerAttackValues = playerAttack();
                let totalDamage = playerAttackValues[0]*playerAttackValues[1];
                enemy.health = parseInt(enemy.health - totalDamage);
                alert("You hit " + playerAttackValues[0] + " damage " + playerAttackValues[1]+" times.");
                if (enemy.health <= 0){
                    alert("You win!");
                    getPlayerHealth.innerHTML = 'Health:' + player.health;
                    getEnemyHealth.innerHTML = 'Health: 0';
                }
                else{
                    getEnemyHealth.innerHTML = 'Health:' + enemy.health;
                }
            }
        }

        
    }
}