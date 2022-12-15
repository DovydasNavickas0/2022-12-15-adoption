class Animals {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    PrintInfo(){
        console.log(this.name, this.age,)
    }
}

const an1 = new Animals("Rex", 3)
console.log(an1)
an1.PrintInfo()

export default Animals