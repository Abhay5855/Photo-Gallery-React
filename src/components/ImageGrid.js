import useFirestore from "../hooks/useFirestore";

import { motion } from "framer-motion";

const ImageGrid = ({ setSelectImage }) => {
  const { docs } = useFirestore("images");

  return (
    <div className="image-grid">
      {docs &&
        docs.map((doc) => (
          <motion.div
            className="image-wrap"
            key={doc.id}
            layout
            whileHover={{ opacity: 1.1 }}
            onClick={() => setSelectImage(doc.url)}
          >
            <motion.img
              src={doc.url}
              alt=""
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            />
          </motion.div>
        ))}
    </div>
  );
};

export default ImageGrid;
