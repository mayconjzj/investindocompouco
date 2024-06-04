export class UnexpectedError extends Error {
  constructor(message = 'Ops, algo deu errado!') {
    super();
    this.name = 'UnexpectedError';
    this.message = message;
  }
}
