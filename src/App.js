import "./styles.css";
import Title from "./components/Title";
import Upload from "./components/Uploadform";
import ImageGrid from "./components/ImageGrid";
import Modal from "./components/Modal";
import { useState } from "react";

export default function App() {
  const [selectImage, setSelectImage] = useState(null);
  return (
    <div className="App">
      <Title />

      <Upload />

      <ImageGrid setSelectImage={setSelectImage} />

      {selectImage && <Modal selectImage={selectImage} />}
    </div>
  );
}
