interface Parking {
  park(): void;
  unpark(): void;
}

interface FreeParking extends Parking {}

interface PaidParking extends Parking {
  pay(): void;
  calculatePrice(): number;
}

class FreeParkingImpl implements FreeParking {
  park(): void {
    console.log("Parking");
  }
  unpark(): void {
    console.log("Unparking");
  }
}
class PaidParkingImpl implements PaidParking {
  park(): void {
    console.log("Parking");
  }
  unpark(): void {
    console.log("Unparking");
  }
  pay(): void {
    console.log("Paying");
  }

  calculatePrice(): number {
    return 123;
  }
}

// BAD EXAMPLE
// interface parking  {
//   park(): void;
//   unpark(): void;
//   pay(): void;
//   calculatePrice(): number;
// }

// class FreeParking implements parking {
//   park(): void {
//     console.log("Parking");
//   }
//   unpark(): void {
//     console.log("Unparking");
//   }
//   pay(): void {
//     throw new Error("Method not implemented.");
//   }
//   calculatePrice(): void {
//     return 0
//   }
// }
// class PaidParking implements parking {
//   park(): void {
//     console.log("Parking");
//   }
//   unpark(): void {
//     console.log("Unparking");
//   }
//   pay(): void {
//     console.log("Paying");
//   }
//   calculatePrice(): void {
//     console.log("Calculating Price");
//   }
// }
