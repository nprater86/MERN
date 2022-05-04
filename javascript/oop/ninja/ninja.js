class Ninja {
    constructor(name, health, speed=3, strength=3){
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }

    sayName(){
        console.log(this.name);
        return this;
    }

    showStats(){
        console.log(`Name: ${this.name} | Strength: ${this.strength} | Speed: ${this.speed} | Health: ${this.health}`);
        return this;
    }

    drinkSake(){
        this.health += 10;
        return this;
    }
}

let nathan = new Ninja('Nathan',300);

nathan.sayName();
nathan.showStats();
nathan.drinkSake();
nathan.showStats();