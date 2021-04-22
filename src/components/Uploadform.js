import { useState } from "react";

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
      setError("Please select an image file jpeg/png");
    }
  }
  return (
    <form>
      <input type="file" onChange={changeHandler} />
      <div className="op">
        {error && <div className="error"> {error} </div>}
        {file && <div> {file.name} </div>}
      </div>
    </form>
  );
};

export default Upload;
