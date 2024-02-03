import { Altura, Peso, FaixaEtaria, Origem, Sexo, Sexualidade, Tatuagem} from "./enums";
  

export default class Pessoa{
    id : number;
    nome : string;
    idade : number;
    altura :Altura;
    peso : Peso;
    faixaEtaria : FaixaEtaria;
    origem : Origem;
    sexo : Sexo;
    sexualidade : Sexualidade;
    tatuagem : Tatuagem;
}