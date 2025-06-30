import { useEffect, useState } from 'react';
export default function UseEffectExample() {
  const [data, setData] = useState(null);
  useEffect(() => {
    setTimeout(() => setData("Fetched Data"), 1000);
  }, []);
  return <div>{data ? data : "Loading..."}</div>;
}
