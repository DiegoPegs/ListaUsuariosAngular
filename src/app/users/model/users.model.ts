export class User {
  constructor(
    public nome: string,
    public cpf: string,
    public email: string,
    public tipoEnd: string,
    public logradouro: string,
    public numero: number,
    public complemento: string,
    public cep: string
  ) {}
}
