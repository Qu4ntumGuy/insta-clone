import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react/cjs/react.production.min";
import { useRecoilState } from "recoil";
import { modalState } from "../atom/modalAtom";

const Modal = () => {
  const [open, setOpen] = useRecoilState(modalState);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-10 inset-0 overflow-y-auto"
        onClose={setOpen}
      >
         <div className="flex items-end justify-center min-h-[800px] sm:min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <Transition.Child
               as={Fragment}
               enter="ease-out duration-300"
               enterFrom="opacity-0"
               enterTo="opacity-100"
               leave="ease-in duration-200"
               leaveFrom="opacity-100"
               leaveTo="opacity-0"
            >
               <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity z-20" />
            </Transition.Child>

            <span className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
            >
            </span>

            <Transition.Child
               as={Fragment}
               enter="ease-out duration-300"
               enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
               enterTo="opacity-100 translate-y-0 sm:scale-100"
               leave="ease-in duration-200"
               leaveForm="opacity-100 translate-y-0 sm:scale-100"
               leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
               <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 text-left
                overflow-hidden shadow transform transition-all sm:my-8 sm:align-middle sm:max-w-sm
                 sm:w-full sm:p-6">
                  <h1>
                     Hello
                  </h1>
               </div>
            </Transition.Child>

         </div>
      </Dialog>
    </Transition.Root>
  );
};

export default Modal;
