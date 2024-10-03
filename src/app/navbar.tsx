import Link from 'next/link';
import { FaBars, FaTimes, FaPhone } from 'react-icons/fa';

export default function Navbar() {
    return (
      <>
        <nav className="flex flex-wrap items-center justify-between p-3 bg-[#e8e8e5]" data-aos="fade-down" data-aos-duration="3000">
          <div className="text-xl">IceCream Bliss</div>
          <div className="flex md:hidden">
            <button id="hamburger">
              <FaBars className="toggle block" size={40} />
              <FaTimes className="toggle hidden" size={40} />
            </button>
          </div>
          <div className="toggle hidden w-full md:w-auto md:flex text-right text-bold mt-5 md:mt-0 md:border-none">
            <Link
              href="/"
              className="block md:inline-block hover:text-blue-500 px-3 py-3 md:border-none"
            >
              Home
            </Link>
            <Link
              href="/services"
              className="block md:inline-block hover:text-blue-500 px-3 py-3 md:border-none"
            >
              Services
            </Link>
            <Link
              href="/about"
              className="block md:inline-block hover:text-blue-500 px-3 py-3 md:border-none"
            >
              About us
            </Link>
            <Link
              href="/gallery"
              className="block md:inline-block hover:text-blue-500 px-3 py-3 md:border-none"
            >
              Gallery
            </Link>
            <Link
              href="/visit"
              className="block md:inline-block hover:text-blue-500 px-3 py-3 md:border-none"
            >
              Visit Us
            </Link>
          </div>
          <div className="toggle w-full text-end hidden md:flex md:w-auto px-2 py-2 md:rounded">
            <Link href="/visit">
              <div className="flex justify-end">
                <div className="flex items-center h-10 w-30 rounded-md bg-[#c8a876] text-white font-medium p-2">
                  <FaPhone className="w-6 h-6" />
                  Call now
                </div>
              </div>
            </Link>
          </div>
        </nav>
      </>
    );
}
