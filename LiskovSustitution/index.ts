// BAD EXAMPLE
// class Vehicle {
//   doors: number;

//   constructor(doors: number) {
//     this.doors = doors;
//   }
// }

// class Car implements Vehicle {
//   doors: number;

//   constructor(doors: number) {
//     this.doors = doors;
//   }
// }

// class Motorcycle implements Vehicle {
//   // motorcycles have no doors
// }

interface IVehicle {
  wheels: number;
}

interface ICar extends IVehicle {
  doors: number;
}

interface IMotorcycle extends IVehicle {
  // motorcycles have no doors
}

class Vehicle implements IVehicle {
  wheels: number;

  constructor(wheels: number) {
    this.wheels = wheels;
  }
}

class Car extends Vehicle implements ICar {
  doors: number;

  constructor(doors: number) {
    super(4);
    this.doors = doors;
  }
}

class Motorcycle extends Vehicle implements IMotorcycle {
  constructor() {
    super(2);
  }
}
