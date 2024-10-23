interface MessageService {
  send(message: string): void;
}

class EmailService implements MessageService {
  send(message: string): void {
    throw new Error("Method not implemented.");
  }
}
class SMSService implements MessageService {
  send(message: string): void {
    throw new Error("Method not implemented.");
  }
}

class Application {
  private messageService: MessageService;

  constructor(messageService: MessageService) {
    this.messageService = messageService;
  }

  sendMessage(message: string): void {
    this.messageService.send(message);
  }
}

// BAD EXAMPLE
// class Application {
//   sendMessage(message: string): void {
//     // using framework messaging library
//     // thight coupling to framework
//   }
// }
