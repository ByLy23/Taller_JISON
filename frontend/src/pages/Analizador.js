import React, { useState } from 'react';
import '../css/analizador.css';
import 'codemirror/theme/cobalt.css';
import 'codemirror/keymap/sublime';
import { PopupAn } from '../components/PopupAn';
import { CodeMirrorComponent } from '../components/CodeMirrorComponent';
import { getConsola } from '../helpers/getConsola';
export const Analizador = () => {
  const codigo = `imprimir("hola mundo");`;
  const [popUp, setpopUp] = useState(false);
  const [state = { outputCode: 'salida' }, setstate] = useState({
    outputCode:
      localStorage.getItem('EDITOR') == null ? codigo : JSON.parse(localStorage.getItem('EDITOR')),
  });
  const [salida = { outputCode: 'salida' }, setSalida] = useState({
    outputCode: JSON.parse(localStorage.getItem('SALIDA_CONSOLA')),
  });
  const handleSubmit = () => {
    getConsola(valor).then(({ consola, simbolos, errores }) => {
      localStorage.setItem('SALIDA_CONSOLA', JSON.stringify(consola));
      localStorage.setItem('TABLA_SIMBOLOS', JSON.stringify(simbolos));
      localStorage.setItem('TABLA_ERRORES', JSON.stringify(errores));
      localStorage.setItem('EDITOR', JSON.stringify(valor.estado));
      setSalida({ outputCode: consola });
      setpopUp(true);
    });
  };
  const input = (
    <input type="submit" className="analizar" onClick={handleSubmit} value="Analizar" />
  );
  const valor = {
    estado: state.outputCode,
    colocaEstado: setstate,
  };
  const label = React.createElement('h1', { className: 'con-text' }, 'Consola');
  return (
    <div className="analizer-container">
      <CodeMirrorComponent input={input} codeMirrorValue={valor} writable="true" clase="editor" />
      <CodeMirrorComponent
        input={label}
        codeMirrorOut={salida.outputCode}
        writable="false"
        clase="console"
      />
      {popUp && <PopupAn setpopUp={setpopUp} valor={'Analizado'} />}
    </div>
  );
};
