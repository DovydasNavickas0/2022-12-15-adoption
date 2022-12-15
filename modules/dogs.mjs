import Animals from "./modules/animal.js";

class Dogs extends Animals {
    constructor(name, age, legs, fur, tail, breed){
        super(name, age);
        this.legs = legs;
        this.fur = fur;
        this.tail = tail;
        this.breed = breed;
    }

    getInfo(){
        super.getInfo()
        console.log(this.legs, this.fur, this.tail, this.breed)
    }

}

const dog1 = new Dogs("Rikis", 3, 4, "baltas", "neturi", "wolf");
console.log(dog1)
dog1.getInfo()

export default Dogs