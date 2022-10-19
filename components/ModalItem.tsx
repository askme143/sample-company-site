interface ModalItemProp {
  Icon: (props: { className: string }) => JSX.Element;
  title: string;
  description: string;
}

const ModalItem = ({ Icon, title, description }: ModalItemProp) => {
  return (
    <div className="flex">
      <Icon className="mr-2 shrink-0" />
      <div className="flex flex-col text-sm">
        <div className="font-bold text-blue-black">{title}</div>
        <div className="text-blue-gray">{description}</div>
      </div>
    </div>
  );
};

export default ModalItem;
