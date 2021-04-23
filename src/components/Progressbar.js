import useStorage from "../hooks/useStorage";
import { useEffect } from "react";

const Progressbar = ({ file, setFile }) => {
  const { url, progress } = useStorage(file);

  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url, setFile]);

  return (
    <>
      <div className="bar-progress" style={{ width: progress + "%" }}></div>
    </>
  );
};

export default Progressbar;
