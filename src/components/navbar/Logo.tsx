import Image from "next/image";
import Link from "next/link";

type Props = {
  scrolled?: boolean;
};

const Logo = ({ scrolled }: Props) => {
  return (
    <Link href={"/"} className="flex items-center gap-x-5">
      <Image
        src={"/DigitizeSupport.png"}
        width={60}
        height={60}
        alt={"DigitizeSupport - Psychology Health Services"}
        className={`w-auto h-auto ${scrolled ? "" : "drop-shadow-md"}`}
      />
      <h1 className="text-lg block tracking-wider">DigitizeSupport</h1>
    </Link>
  );
};

export default Logo;
