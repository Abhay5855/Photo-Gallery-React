import "./styles.css";
import Title from "./components/Title";
import Upload from "./components/Uploadform";
import ImageGrid from "./components/ImageGrid";

export default function App() {
  return (
    <div className="App">
      <Title />

      <Upload />

      <ImageGrid />
    </div>
  );
}
