import ModalItem from "components/ModalItem";
import SpenseIcon from "public/Spense_Icon.svg";
import FiberIcon from "public/Fiber_Icon.svg";
import GradieIcon from "public/Gradie_Icon.svg";
import Close from "public/Close.svg";

interface ModalProps {
  onClickCancel: () => void;
  showModal: boolean;
}

const Modal = ({ onClickCancel, showModal }: ModalProps) => {
  return (
    <div
      className={`absolute w-full lg:w-[423px] left-0 lg:left-[-58.5px] top-0 lg:top-12 text-gray text-left ${
        showModal ? "block" : "hidden"
      }`}
    >
      <div className="hidden lg:block w-[68px] h-6 absolute left-[58.5px] top-[-24px]"></div>
      <div className="hidden lg:block w-0 h-0 absolute left-[83px] top-[-8px] border-x-transparent border-x-[9.5px] border-b-[10px] border-white bg-transparent" />
      <div className={`w-full rounded-[14px] p-9 bg-white`}>
        <div className="lg:hidden flex justify-between mb-6">
          <div className="font-semibold text-[#8898AA]">PRODUCTS</div>
          <button onClick={onClickCancel}>
            <Close />
          </button>
        </div>
        <div className="flex flex-col space-y-6">
          <ModalItem
            Icon={SpenseIcon}
            title="Spense"
            description="Spense is a landing page for writers. Great for practicing absolute positioning and flex layouts."
          />
          <ModalItem
            Icon={FiberIcon}
            title="Fiber Landing Page"
            description="An online portfolio generator. Great to practice flex/grid layouts, and absolute positioning."
          />
          <ModalItem
            Icon={GradieIcon}
            title="Gradie Sign Up Page"
            description="Gradie is a simple sign up page, great to practice centering layouts."
          />
        </div>
      </div>
    </div>
  );
};

export default Modal;
