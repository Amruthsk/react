import { createContext, useContext } from 'react';
const ThemeContext = createContext('light');
function ThemedText() {
  const theme = useContext(ThemeContext);
  return <p>The theme is {theme}</p>;
}
export default function ContextExample() {
  return (
    <ThemeContext.Provider value="dark">
      <ThemedText />
    </ThemeContext.Provider>
  );
}
