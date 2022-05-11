const Modal = () => {

   const [open, setOpen] = useRecoilState(modalState); 

  return (
    <div>
      <h1>I am A Modal</h1>
    </div>
  );
};

export default Modal;
