const Modal = ({ selectImage, setSelectImage }) => {
  const handleClick = (e) => {
    setSelectImage(null);
  };
  return (
    <div className="drop" onClick={handleClick}>
      <img src={selectImage} alt="enlarged pic" />
    </div>
  );
};

export default Modal;
