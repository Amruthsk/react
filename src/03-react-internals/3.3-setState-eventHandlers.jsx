import { useState } from 'react';
export default function SetStateEventExample() {
  const [visible, setVisible] = useState(true);
  return (
    <div>
      <button onClick={() => setVisible(!visible)}>
        Toggle Visibility
      </button>
      {visible && <p>This content is conditionally rendered.</p>}
    </div>
  );
}
