import { HTMLProps, MouseEventHandler, ReactElement } from "react";
import Spin from "./icons/Spin";

type Props = {
  onClick?: MouseEventHandler;
  icon?: ReactElement;
  children: string;
  variant: "primary" | "secondary";
  className?: HTMLProps<HTMLElement>["className"];
  isLoading?: boolean;
};

const Button = ({
  onClick,
  icon,
  children,
  variant,
  className,
  isLoading,
}: Props) => {
  return (
    <button
      onClick={onClick}
      className={
        "rounded-full text-white h-[60px] px-2 py-[10px] text-base w-fit transition-colors flex items-center gap-[8px] disabled:bg-surface-400 " +
        (variant === "primary"
          ? "bg-primary-700 hover:bg-primary-500"
          : "bg-secondary-500 hover:bg-secondary-300") +
        " " +
        (className ? className : "")
      }
      disabled={isLoading}
    >
      {isLoading && <Spin />}
      {children}
      {icon && icon}
    </button>
  );
};

export default Button;
