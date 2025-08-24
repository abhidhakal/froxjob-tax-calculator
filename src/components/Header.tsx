import Link from "next/link";
import { FaFacebook, FaYoutube, FaInstagram, FaLinkedin, FaChevronDown } from "react-icons/fa";
import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-black text-gray-300 py-2">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between text-sm">

          <div className="flex items-center space-x-4">
            <span>For Queries: Jobseekers: +977-01-5707271, +977-9801085897</span>
            <span className="text-gray-500">|</span>
            <span>Corporate: +977-01-9801898004</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link href="#" className="hover:text-white transition-colors">
              <FaFacebook size={16} />
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              <FaYoutube size={16} />
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              <FaInstagram size={16} />
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              <FaLinkedin size={16} />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Header*/}
      <div className="bg-gray-100 py-4">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo Section */}
          <Link href="/" className="flex items-center">
            <Image 
              src="/images/froxjob.png" 
              alt="FROXJOB Logo" 
              width={200} 
              height={60} 
              className="h-16 w-auto"
            />
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-1 cursor-pointer group">
              <span className="text-gray-700 font-medium">Find a job</span>
              <FaChevronDown size={12} className="text-gray-500 group-hover:text-gray-700" />
            </div>
            <div className="flex items-center space-x-1 cursor-pointer group">
              <span className="text-gray-700 font-medium">For Employers</span>
              <FaChevronDown size={12} className="text-gray-500 group-hover:text-gray-700" />
            </div>
            <div className="flex items-center space-x-1 cursor-pointer group">
              <span className="text-gray-700 font-medium">Insights</span>
              <FaChevronDown size={12} className="text-gray-500 group-hover:text-gray-700" />
            </div>
            <Link href="#" className="text-gray-700 font-medium hover:text-gray-900">
              Resume Builder
            </Link>
          </nav>

          <button className="bg-orange-600 text-white px-6 py-2 rounded hover:bg-orange-700 transition-colors font-medium">
            Sign In
          </button>
        </div>
      </div>
    </header>
  );
}
