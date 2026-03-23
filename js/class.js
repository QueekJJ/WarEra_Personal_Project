class Resource {
    constructor(name, price, bonus){
        this.name = name;
        this.price = price;
        this.bonus = bonus;
    }
}

// Default Resources
const iron = new Resource("Iron", 1.6, 0.63);