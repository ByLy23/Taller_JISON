import Simbolo from './Simbolo';
import Tipo, { tipoDato } from './Tipo';
export default class tablaSimbolo {
  private tablaAnterior: tablaSimbolo | any;
  private tipoDato: Tipo;
  private tablaActual: Map<String, Simbolo>;
  constructor(anterior?: tablaSimbolo) {
    this.tablaAnterior = anterior;
    this.tablaActual = new Map<String, Simbolo>();
    this.tipoDato = new Tipo(tipoDato.ENTERO);
  }
  public getAnterior() {
    return this.tablaAnterior;
  }
  public setAnterior(anterior: tablaSimbolo) {
    this.tablaAnterior = anterior;
  }
  public getTabla() {
    return this.tablaActual;
  }
  public setTabla(Tabla: Map<String, Simbolo>) {
    this.tablaActual = Tabla;
  }
}
