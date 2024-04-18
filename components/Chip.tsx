export type ChipProps = {
  children: string;
};

const Chip = ({ children }: ChipProps) => {
  return (
    <div className="flex h-[20px] w-fit items-center rounded-full border-[2px] border-secondary-300 bg-secondary-200 px-[16px]">
      <p className="text-sm font-medium text-black">{children}</p>
    </div>
  );
};

export default Chip;
