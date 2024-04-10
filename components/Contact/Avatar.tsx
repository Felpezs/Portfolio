import Image from "next/image";

const Avatar = () => {
  return (
    <Image
      src={"/avatar_bg.svg"}
      alt="Felipe's Photo"
      width={159}
      height={159}
      className="rounded-full bg-[url('/photo.png')]"
    />
  );
};

export default Avatar;
