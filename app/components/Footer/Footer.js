import Image from "next/image";
import Link from "next/link";
import Logo from "../../img/logo2.png";
import Instagram from "../../img/instagram.png";
import Facebook from "../../img/facebook.png";
import X from "../../img/X.png";

export default function Footer() {
  return (
    <footer className="px-8 md:px-20 pt-60 py-20 bg-primary">
      <div className="max-w-screen-2xl mx-auto w-full 2xl:px-20">
        <div className="flex flex-col md:flex-row justify-between">
          <Link href="/" className="w-auto">
            <Image
              src={Logo}
              alt="Jobnow logo"
              width={150}
              loading="eager"
              className="hover:opacity-75"
            />
          </Link>
          <div className="flex flex-wrap gap-x-32">
            <div className="flex flex-col text-white">
              <h1>Company</h1>
            </div>
            <div className="flex flex-col text-white">
              <h1>Pages</h1>
            </div>
            <div className="flex flex-col text-white">
              <h1>Contact Us</h1>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
