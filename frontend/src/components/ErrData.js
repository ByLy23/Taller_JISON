const data = () => {
  const res = localStorage.getItem('TABLA_ERRORES') === null ? [] : JSON.parse(localStorage.getItem('TABLA_ERRORES'));
  return res;
};
export const ErrData = data();
