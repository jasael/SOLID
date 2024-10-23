interface INotifier {
  notify(): void;
}

class EmailNotifier implements INotifier {
  notify(): void {
    throw new Error("Method not implemented.");
  }
}

class SMSNotifier implements INotifier {
  notify(): void {
    throw new Error("Method not implemented.");
  }
}

// BAD EXAMPLE
// class Notifier {
//   notify(type: string): void {
//     if(type === "email") {
//       email logic
//     } else if(type === "sms") {
//       sms logic
//     }
//   }
// }
