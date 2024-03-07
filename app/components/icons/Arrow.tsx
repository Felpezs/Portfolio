import React from "react";

type ArrowProps = {
  rotate?: boolean;
  onClick: React.MouseEventHandler<HTMLDivElement>;
};

const Arrow = ({ rotate, onClick }: ArrowProps) => {
  return (
    <div onClick={onClick} className="cursor-pointer">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="18"
        fill="none"
        viewBox="0 0 20 18"
        className={rotate ? "transform rotate-180" : ""}
      >
        <path
          fill="#B4B4B4"
          fillRule="evenodd"
          d="M6.621 7.5H19.5v3H6.621l4.94 4.94-2.122 2.12L.88 9 9.439.44l2.122 2.12L6.62 7.5z"
          clipRule="evenodd"
        ></path>
      </svg>
    </div>
  );
};

export default Arrow;
