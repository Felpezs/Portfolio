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
        "flex h-[50px] w-fit items-center gap-[8px] rounded-full px-1 py-[10px] text-base text-white transition-colors disabled:bg-surface-400 md:h-[60px] md:px-2 " +
        (variant === "primary"
          ? "bg-primary-500 hover:bg-primary-700 dark:bg-primary-700 dark:hover:bg-primary-500"
          : "bg-secondary-500 dark:hover:bg-secondary-300 hover:bg-secondary-600") +
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
