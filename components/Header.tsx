import { MouseEventHandler, useState } from "react";
import Modal from "components/Modal";
import Logo from "public/Logo.svg";
import Menu from "public/Menu.svg";
import { useOutsideClick } from "hooks/useOutsideClick";

const Header = () => {
  const [hover, setHover] = useState(false);
  const [menuClicked, setMenuClicked] = useState<boolean>(false);
  const showModal = menuClicked || hover;

  const onClickProduct = () => setMenuClicked((prev) => !prev);
  const onClickOutsideProduct = () => setMenuClicked(false);
  const onMouseEnter = () => setHover(true);
  const onMouseLeave: MouseEventHandler = (event) => setHover(false);

  const ref = useOutsideClick<HTMLDivElement>(onClickOutsideProduct, () => {});

  const onClickMenu = () => setMenuClicked(true);
  const onClickCancel = () => {
    setMenuClicked(false);
    setHover(false);
  };

  return (
    <header className="max-w-[1180px] mx-5 lg:mx-auto lg:px-5 mt-5 lg:mt-10 mb-10 flex justify-between items-center relative">
      <Logo />
      <div className="flex items-center space-x-10 text-gray">
        <div
          ref={ref}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          className="w-fit h-fit lg:relative"
        >
          <button onClick={onClickProduct} className="hidden lg:block">
            Products
          </button>
          <Modal onClickCancel={onClickCancel} showModal={showModal} />
        </div>
        <button className="hidden lg:block">Challenges</button>
        <button className="hidden lg:block">Resources</button>
        <button className="hidden lg:block">Other Links</button>
      </div>
      <div className="hidden lg:flex items-center space-x-6">
        <button className="text-gray">Sign in</button>
        <button className="bg-[#133416] px-9 py-4 rounded text-white font-bold">
          Try for free
        </button>
      </div>

      <button className="w-6 h-6 lg:hidden" onClick={onClickMenu}>
        <Menu />
      </button>
    </header>
  );
};
export default Header;
