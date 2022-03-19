import { Instruccion } from '../abstracto/Instruccion';
import Errores from '../excepciones/Errores';
import Arbol from '../simbolo/Arbol';
import tablaSimbolo from '../simbolo/tablaSimbolo';
import Tipo, { tipoDato } from '../simbolo/Tipo';

export default class Imprimir extends Instruccion {
  private expresion: Instruccion;

  constructor(expresion: Instruccion, linea: number, columna: number) {
    super(new Tipo(tipoDato.CADENA), linea, columna);
    this.expresion = expresion;
  }
  public interpretar(arbol: Arbol, tabla: tablaSimbolo) {
    let valor = this.expresion.interpretar(arbol, tabla);
    if (valor instanceof Errores) return valor;
    arbol.actualizaConsola(valor + '');
  }
}
