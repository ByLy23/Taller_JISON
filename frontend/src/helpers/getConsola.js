export const getConsola = async ({ estado }) => {
  const requestOps = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ peticion: estado }),
  };
  const response = await fetch('http://localhost:5000/interpretar', requestOps);
  const data = await response.json();
  console.log(data);
  return data;
};
