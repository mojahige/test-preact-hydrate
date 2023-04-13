import { signal } from "@preact/signals";

const count = signal(0);

export function Counter() {
  const increment = () => {
    count.value++;
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>increment</button>
    </div>
  );
}
