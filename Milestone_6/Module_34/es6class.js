class Vehicle {
    constructor(brand) {
        this.brand = brand;
    }

    move() {
        console.log(this.brand, 'is moving...');
    }
}

class Car extends Vehicle {
    constructor(brand, model) {
        super(brand);
        this.model = model;
    }

    drive() {
        console.log(this);
        this.move()
        console.log(this.model, 'is driving...');
    }
}

const myCar = new Car('Toyota', 'T-73');
myCar.drive();