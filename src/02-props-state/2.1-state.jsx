import { useState } from 'react';
export default function StateExample() {
  const [message, setMessage] = useState("Hello World");
  return (
    <div>
      <p>{message}</p>
      <button onClick={() => setMessage("State Updated!")}>Update</button>
    </div>
  );
}
