import Preview from "./Preview";

export default function App() {
  const lesson = "01-jsx-basics/1.2-react-element.jsx"; // 👈 Change this to preview any lesson

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Live Lesson Preview</h1>
      <Preview path={lesson} />
    </div>
  );
}
