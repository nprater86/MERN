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

class Sensei extends Ninja {
    constructor(name, wisdom=10){
        super(name, 200, 10, 10);
        this.wisdom = wisdom;
    }

    speakWisdom() {
        console.log("What one programmer can do in one month, two programmers can do in two months.");
        super.drinkSake();
        return this;
    }
}

let rabh = new Sensei('Rabh');
console.log(rabh);
rabh.speakWisdom();
console.log(rabh);
