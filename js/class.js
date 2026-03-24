class Resource {
    constructor(name, price, bonus, pp_cost){
        this.name = name;
        this.price = price;
        this.bonus = bonus; // We will split this to 3 different type of bonus in future
        this.pp_cost = pp_cost;
    }
}

// Setting default data for each resource
// WAR ITEMS
const pill = new Resource("Pill", 32.9, 0.2, 400);
const mysterious_plant = new Resource("Mysterious plant", 0.07, 0.3, 1);
const heavy_ammo = new Resource("Heavy ammo", 2.38, 0.5, 32);
const ammo = new Resource("Ammo", 0.67, 0.51, 8);
const light_ammo = new Resource("Light ammo", 0.17, 0.51, 2);
const lead = new Resource("Lead", 0.08, 0.61, 1);

// FOOD ITEMS
const cooked_fish = new Resource("Cooked fish", 6.57, 0.25, 80);
const steak = new Resource("Steak", 3.47, 0.25, 40);
const bread = new Resource("Bread", 1.77, 0.5, 20);
const fish = new Resource("Fish", 3.09, 0.10, 40);
const livestock = new Resource("Livestock", 1.49, 0.30, 20);
const grain = new Resource("Grain", 0.08, 0.30, 1);

// INFRASTRUCTURE ITEMS
const oil = new Resource("Oil", 0.17, 0.4, 2);
const steel = new Resource("Steel", 1.6, 0.63, 20);
const concrete = new Resource("Concrete", 1.58, 0.6225, 20);
const petroleum = new Resource("Petroleum", 0.08, 0.3, 1);
const iron = new Resource("Iron", 0.08, 0.61, 1);
const limestone = new Resource("Limestone", 0.08, 0.625, 1);