interface IPlusIconProps {}

const PlusIcon = ({ ...rest }: IPlusIconProps) => {
  return (
    <svg {...rest} width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect y="5.29297" width="12" height="1.5" fill="#fff" />
      <rect x="5.29419" y="12" width="12" height="1.5" transform="rotate(-90 5.29419 12)" fill="#fff" />
    </svg>
  );
};

export default PlusIcon;
