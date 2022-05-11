import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react/cjs/react.production.min";
import { useRecoilState } from "recoil";
import { modalState } from "../atom/modalAtom";

const Modal = () => {
  const [open, setOpen] = useRecoilState(modalState);

  return <Transition.Root show={open} as={Fragment}>
     <Dialog as="div"
     className="fixed z-10 inset-0 overflow-y-auto"
     >

     </Dialog>
  </Transition.Root>;
};

export default Modal;
