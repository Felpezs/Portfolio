import Image from "next/image";
import Github from "../icons/GIthub";
import Linkedin from "../icons/Linkedin";

const Avatar = () => {
  return (
    <>
      <Image
        src={"/avatar_bg.svg"}
        alt="Felipe's Photo"
        width={159}
        height={159}
        className="rounded-full bg-[url('/photo.png')]"
      />
      <div>
        <p className="text-white text-lg mb-1 tracking-wider">
          Interested in working with me ?
        </p>
        <p className="text-neutral-500 text-base mb-1">
          I’m always looking forward for new opportunities. Send an email to
          felipeedfreire@gmail.com or reach me out in a social media.
        </p>
        <div className="flex gap-[8px]">
          <span className="w-[48px] h-[48px] p-[12px] bg-surface-500 rounded-[8px]">
            <Linkedin />
          </span>
          <span className="w-[48px] h-[48px] p-[12px] bg-surface-500 rounded-[8px]">
            <Github />
          </span>
        </div>
      </div>
    </>
  );
};

export default Avatar;
