import Animals from "./modules/animal.js";

class Cats extends Animals {
    constructor(name, age, legs, fur, tail){
        super(name, age);
        this.legs = legs;
        this.fur = fur;
        this.tail = tail;
    }

    getInfo(){
        super.PrintInfo()
        console.log(this.legs, this.fur, this.tail)
    }

}

const cat1 = Cats("Nickels", 5, 4, "light brown", "long")
console.log(cat1)
cat1.getInfo()

export default Cats