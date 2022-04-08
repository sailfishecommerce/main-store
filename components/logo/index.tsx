import Link from "next/link";
import Image from "next/image";

export default function Logo({className}) {
  return (
    <Link href="/" passHref>
      <a title="welcome to live healthy" className={className}>
        <Image
          src="/logo.webp"
          alt="logo"
          height={50}
          width={130}
          layout="responsive"
        />
      </a>
    </Link>
  );
}
