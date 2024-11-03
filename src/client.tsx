// src/client.tsx
import { useState } from 'hono/jsx';
import { render } from 'hono/jsx/dom';
import ApiDataFetcher from './components/ApiDataFetcher';

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mt-4">
      <p className="text-lg">Count: {count}</p>
      <button 
        onClick={() => setCount(count + 1)}
        className="mt-2 bg-green-500 hover:bg-green-900 text-white font-bold py-2 px-4 rounded"
      >
        Increment
      </button>
      <br />
      <ApiDataFetcher/>
    </div>
  );
}

function App() {
  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold text-center">Welcome to Hono with Client Components!</h1>
      <Counter />
    </div>
  );
}

const root = document.getElementById('root');
if (root) {
  render(<App />, root);
}
