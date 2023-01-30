// Import the FontAwesomeIcon component
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';

// import the icons you need
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faTiktok,
} from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';

export default function Footer() {
  return (
    <div className="bg-[url('/footer-bg.png')] bg-cover">
      <div className="container mx-auto py-20 px-3 lg:px-10 xl:px-20 ">
        <div className="relative flex mt-10 w-[30%] md:w-[20%] xl:w-[10%] h-32">
          <Image
            src="/slurpee-logo.png"
            alt="Slurpee Logo"
            fill="true"
            className="object-contain object-left"
          />
        </div>

        <h3 className="text-xl font-bold text-white">Follow as @slurpee</h3>

        <div className="text-[2rem] mt-5 text-[color:var(--dark)]">
          <Link href="/">
            <FontAwesomeIcon icon={faFacebook} className="mr-5" />
          </Link>
          <Link href="/">
            <FontAwesomeIcon icon={faInstagram} className="mr-5" />
          </Link>
          <Link href="/">
            <FontAwesomeIcon icon={faTwitter} className="mr-5" />
          </Link>
          <Link href="/">
            <FontAwesomeIcon icon={faTiktok} className="mr-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
