import { useState, useEffect } from "react";
// import Upload from "../components/Uploadform";
import { Photostorage } from "../Firebase";

const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    //reference
    const storageRef = Photostorage.ref(file.name);
    storageRef.put(file).on(
      "state_changed",
      (snap) => {
        //progress
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(percentage);
      },
      (err) => {
        setError(err);
      },
      async () => {
        const url = await storageRef.getDownloadURL();
        setUrl(url);
      }
    );
  }, [file]);

  return { progress, error, url };
};

export default useStorage;