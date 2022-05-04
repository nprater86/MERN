class Unit {
    constructor(cost, power, resilience){
        this.cost = cost;
        this.power = power;
        this.resilience = resilience;
    }

    cardStats(){
        console.log(`Cost: ${this.cost} | Power: ${this.power} | Resilience: ${this.resilience}`);
        return this;
    }
}

class Effect {
    constructor(cost,text,stat,magnitude){
        this.cost = cost;
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
    }

    effect(unit){
        unit[this.stat] += this.magnitude;
        return this;
    }
}

//Ninja Cards
let redBeltNinja = new Unit(3,3,4);
let blackBeltNinja = new Unit(4,5,4);

//Effect Cards
let hardAlgo = new Effect(2,`increase target's resilience by 3`,`resilience`,3);
let unhandledPromiseRejection = new Effect(1,`reduce target's resilience by 2`,`resilience`,-2);
let pairProgramming = new Effect(3,`increase target's power by 2`,`power`,2);

blackBeltNinja.cardStats();
pairProgramming.effect(blackBeltNinja);
blackBeltNinja.cardStats();