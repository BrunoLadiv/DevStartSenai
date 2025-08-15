import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0);

  const incrementarContador = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Contador: {count}</h1>
      <button onClick={incrementarContador}>Incrementar Contador</button>
    </div>
  );
}

export default App
