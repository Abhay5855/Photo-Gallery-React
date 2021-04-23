import useFirestore from "../hooks/useFirestore";

const ImageGrid = () => {
  const { docs } = useFirestore("images");
  console.log(docs);

  return <div className="images-grid">
    {docs && docs.map(doc => (

      <img src={doc.url} alt="sketches abhay" />
    ))};
  </div>;
};

export default ImageGrid;
