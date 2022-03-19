import React from 'react';
import '../css/analizador.css';
import CodeMirror from '@uiw/react-codemirror';
import 'codemirror/theme/cobalt.css';
import 'codemirror/keymap/sublime';

export const CodeMirrorComponent = ({
  input,
  codeMirrorValue,
  codeMirrorOut,
  writable,
  clase,
}) => {
  const WriteO = writable === 'true' ? false : true;
  return (
    <div className="analizer animate__animated animate__fadeInUp">
      <div className="analizer-card">
        {input}
        <div className={clase}>
          <CodeMirror
            value={clase === 'editor' ? codeMirrorValue.estado : codeMirrorOut}
            options={{
              theme: 'cobalt',
              keyMap: 'sublime',
              mode: 'julia',
              viewportMargin: Infinity,
              autofocus: false,
              readOnly: WriteO,
            }}
            onChange={(editor, data, value) => {
              clase === 'editor' &&
                codeMirrorValue.colocaEstado({
                  outputCode: editor.getValue(),
                });
            }}
          />
        </div>
      </div>
    </div>
  );
};
