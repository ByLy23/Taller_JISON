import React from 'react';
import '../css/popup.css';
export const PopupAn = (props) => {
  const { setpopUp, valor } = props;
  return (
    <div className="popup animate__animated animate__fadeIn">
      <button className="xname " onClick={() => setpopUp(false)}>
        {valor}
      </button>
    </div>
  );
};
