type ArrowCircleProps = {
  rotate?: boolean;
  width?: number;
  height?: number;
};

const ArrowCircle = ({ width, height, rotate }: ArrowCircleProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || "36"}
      height={height || "37"}
      fill="none"
      viewBox="0 0 36 37"
      className={rotate ? "transform rotate-180" : ""}
    >
      <path
        fill="#ffff"
        d="M18 .5a18 18 0 1018 18 18.02 18.02 0 00-18-18zm6.853 20.028L18.98 26.4a1.389 1.389 0 01-1.962 0l-5.872-5.872a1.385 1.385 0 011.958-1.958l3.51 3.51V11.578a1.385 1.385 0 012.77 0V22.08l3.51-3.51a1.385 1.385 0 011.958 1.957z"
      ></path>
    </svg>
  );
};

export default ArrowCircle;
