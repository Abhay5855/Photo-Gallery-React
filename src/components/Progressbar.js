import useStorage from "../hooks/useStorage";

const Progressbar = ({ file, setFile }) => {
  const { url, progress } = useStorage(file);
  console.log(progress, url);
  return (
    <>
      <div className="bar-progress" style={{ width: progress + "%" }}>
        progress
      </div>
    </>
  );
};

export default Progressbar;
