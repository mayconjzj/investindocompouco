export class AccesDeniedError extends Error {
  constructor() {
    super('Acesso Negado!');
    this.name = 'AccesDeniedError';
  }
}
