import { HTMLProps, MouseEventHandler, ReactElement } from "react";

type Props = {
  onClick?: MouseEventHandler;
  icon?: ReactElement;
  children: string;
  variant: "primary" | "secondary";
  className?: HTMLProps<HTMLElement>["className"];
};

const Button = ({ onClick, icon, children, variant, className }: Props) => {
  return (
    <button
      onClick={onClick}
      className={
        "rounded-full text-white h-[60px] px-2 py-[10px] text-base w-fit transition-colors flex items-center gap-[8px] " +
        (variant === "primary"
          ? "bg-primary-700 hover:bg-primary-500"
          : "bg-secondary-500 hover:bg-secondary-300") +
        " " +
        (className ? className : "")
      }
    >
      {children}
      {icon && icon}
    </button>
  );
};

export default Button;
