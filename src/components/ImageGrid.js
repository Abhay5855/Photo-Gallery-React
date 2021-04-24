import useFirestore from "../hooks/useFirestore";

const ImageGrid = ({ setSelectImage }) => {
  const { docs } = useFirestore("images");
  // console.log(docs);

  return (
    <div className="image-grid">
      {docs &&
        docs.map((doc) => (
          <div
            className="image-wrap"
            key={doc.id}
            onClick={() => setSelectImage(doc.url)}
          >
            <img src={doc.url} alt="" />
          </div>
        ))}
      ;
    </div>
  );
};

export default ImageGrid;
