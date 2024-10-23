class User {
  public name: string;
  public age: number;
  public email: string;

  constructor(name: string, age: number, email: string) {
    this.name = name;
    this.age = age;
    this.email = email;
  }
}

class WelcomeEmail {
  constructor(private user: User) {}

  public notify(): void {
    throw new Error("Method not implemented.");
  }
}

// BAD EXAMPLE
// class User {
//   public name: string;
//   public age: number;
//   public email: string;

//   constructor(name: string, age: number, email: string) {
//     this.name = name;
//     this.age = age;
//     this.email = email;
//   }

//   this method adds the extra responsibility of sending an e-mail
//   sendWelcomeEmail(): void {
//     console.log("Welcome Email Sent");
//   }
// }
