import { useState } from "react";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import Progressbar from "./Progressbar";

const Upload = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  //Types of images we can upload
  const types = ["image/jpeg", "image/png"];

  function changeHandler(e) {
    let selected = e.target.files[0];

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError("");
    } else {
      setFile(null);
      setError("Please select an image file (jpeg/png");
    }
  }
  return (
    <form>
      <label>
        <input type="file" onChange={changeHandler} />
        <span>
          <AddCircleIcon />
        </span>
      </label>
      <div className="op">
        {error && <div className="error"> {error} </div>}
        {file && <div className="name-file"> {file.name} </div>}
        {file && <Progressbar file={file} setFile={setFile} />}
      </div>
    </form>
  );
};

export default Upload;
