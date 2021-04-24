const Modal = ({ selectImage }) => {
  return (
    <div className="drop">
      <img src={selectImage} alt="enlarged pic" />
    </div>
  );
};

export default Modal;
