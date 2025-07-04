﻿export default function ReconciliationExample() {
  const items = ['Apple', 'Banana', 'Cherry'];
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}
