import { Request, Response } from 'express';
import Errores from './analizador/excepciones/Errores';
import Arbol from './analizador/simbolo/Arbol';
import tablaSimbolo from './analizador/simbolo/tablaSimbolo';
export let listaErrores: Array<Errores>;
//tablas arboles y excepcciones
class IndexController {
  public index(req: Request, res: Response) {
    //res.send('Mensaje');
    res.json({ text: 'Bienvenido al ejemplo' });
  }
  public interpretar(req: Request, res: Response) {
    listaErrores = new Array<Errores>();
    let parser = require('./Analizador/analizador');
    const { peticion } = req.body;
    try {
      let ast = new Arbol(parser.parse(peticion));
      var tabla = new tablaSimbolo();
      ast.settablaGlobal(tabla);
      for (let i of ast.getinstrucciones()) {
        if (i instanceof Errores) {
          listaErrores.push(i);
          ast.actualizaConsola((<Errores>i).returnError());
        }

        var resultador = i.interpretar(ast, tabla);
        if (resultador instanceof Errores) {
          listaErrores.push(resultador);
          ast.actualizaConsola((<Errores>resultador).returnError());
        }

        res.json({ consola: ast.getconsola(), errores: listaErrores, simbolos: [] });
      }
    } catch (err) {
      res.json({ consola: '', error: err, errores: listaErrores, simbolos: [] });
    }
  }
}
export const indexController = new IndexController();
