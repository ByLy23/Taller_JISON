import { Instruccion } from '../abstracto/Instruccion';
import Arbol from '../simbolo/Arbol';
import tablaSimbolo from '../simbolo/tablaSimbolo';
import Tipo from '../simbolo/Tipo';

export default class Nativo extends Instruccion {
  valor: any;

  constructor(tipo: Tipo, valor: any, fila: number, columna: number) {
    super(tipo, fila, columna);
    this.valor = valor;
  }

  interpretar(arbol: Arbol, tabla: tablaSimbolo) {
    return this.valor;
  }
}
