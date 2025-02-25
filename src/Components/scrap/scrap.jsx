import { useState, useEffect } from "react";

export default function Counter({ n=5 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (n <= 0) return;
    const duration = 1000; // 2 seconds
    const intervalTime = duration / n;
    let current = 0;
    
    const interval = setInterval(() => {
      current += 1;
      setCount(current);
      if (current >= n) clearInterval(interval);
    }, intervalTime);

    return () => clearInterval(interval);
  }, [n]);

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-4xl font-bold text-blue-600">{count}</div>
    </div>
  );
}
