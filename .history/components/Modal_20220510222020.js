import { Dialog, Transition } from "@headlessui/react";
import { CameraIcon } from "@heroicons/react/outline";
import { Fragment, useRef } from "react";
import { useRecoilState } from "recoil";
import { modalState } from "../atom/modalAtom";

const Modal = () => {
  const [open, setOpen] = useRecoilState(modalState);
  const filePickerRef = useRef(null);

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
            <Dialog.Overlay className="fixed inset-0 bg-gray-800 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          ></span>

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveForm="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div
              className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 text-left
                overflow-hidden shadow transform transition-all sm:my-8 sm:align-middle sm:max-w-sm
                 sm:w-full sm:p-6">
              <div>
                 <div
                  //onClick={() => filePickerRef.current.click()}
                  className="mx-auto flex items-center justify-center h-12 w-12
                  rounded-full bg-red-100 cursor-pointer"
                 >
                    <CameraIcon
                     className="h-6 w-6 text-red-600"
                     aria-hidden="true"
                    />
                 </div>
                <div>
                  <div className="mt-3 text-center sm:mt-5">
                    <Dialog.Title
                      as="hs"
                      className="text-lg leading-6 font-medium
                           text-gray-900"
                    >
                      Upload a Photo
                    </Dialog.Title>
                    <div>
                      <input
                        ref={filePickerRef}
                        type="file"
                        hidden
                        //onChange={addImageToPost}
                      />
                    </div>

                     <div className="mt-2">
                        <input
                        className="border-none focus:ring-0 w-full text-center"
                        type="text"
                        //ref={captionRef}
                        placeholder="Please Enter a Caption.."
                        />
                     </div>

                  </div>
                </div>
                <div className="mt-5 sm:mt-6">
                  <button
                    type="button"
                    className="inline-flex justify-center w-full rounded-md border border-transparent
                        shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700
                        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:text-sm disabled:bg-gray-300
                        disabled:cursor-not-allowed hover:disabled:border-gray-300"
                  >
                    Upload Post
                  </button>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default Modal;