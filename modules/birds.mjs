import Animals from "./modules/animal.js";

class Birds extends Animals {
    constructor(name, age, wings, feathers, tail, beak){
        super(name, age);
        this.wings = wings;
        this.feathers = feathers;
        this.tail = tail;
        this.beak = beak;
    }

    asignValue(name, age, wings, feathers, tail, beak){
        super.asignValue(name, age);
        this.wings = wings;
        this.feathers = feathers;
        this.tail = tail;
        this.beak = beak;
    }

}

export default Birds