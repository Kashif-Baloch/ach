import Form from "./Form";

const Modal = ({ handleModal }) => {
  return (
    <div>
      <div
        id="modelConfirm"
        className="fixed z-50 inset-0 bg-[#00000078] overflow-y-auto h-full w-full px-4 "
      >
        <div className="relative top-[50%] translate-y-[-50%] mx-auto shadow-xl rounded-md bg-white max-w-md">
          <div className="flex justify-end p-2">
            <button
              onClick={handleModal}
              type="button"
              className="text-gray-400 cursor-pointer bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>

          <div className="p-6 pt-6 text-center">
            <Form />
            <a
              onClick={handleModal}
              className="text-white cursor-pointer bg-purple-600 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-base inline-flex items-center px-3 py-2.5 text-center mr-2"
            >
              Submit
            </a>
            <a
              onClick={handleModal}
              className="text-gray-900 cursor-pointer bg-white hover:bg-gray-100 focus:ring-4 focus:ring-cyan-200 border border-gray-200 font-medium inline-flex items-center rounded-lg text-base px-3 py-2.5 text-center"
              data-modal-toggle="delete-user-modal"
            >
              Cancel
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
