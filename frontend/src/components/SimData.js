const data = () => {
  const res = localStorage.getItem('TABLA_SIMBOLOS') === null ? [] : JSON.parse(localStorage.getItem('TABLA_SIMBOLOS'));
  return res;
};
export const SimData = data();
