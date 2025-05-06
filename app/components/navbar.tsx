"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import Logo from "../../public/images/afrimatrix.png";
import { ShiftingDropDown } from "../components/dropdown/shiftingmenu";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 top-0 start-0 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
    }`}>
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        {/* Logo */}
        <Link href="/" className="relative z-50">
          <Image
            src={Logo}
            alt="Afrimatrix Logo"
            className={`w-40 md:h-12 h-9 transition-all duration-300 ${
              isScrolled ? 'brightness-100' : 'brightness-0 invert'
            }`}
            priority
          />
        </Link>

        {/* Navigation Menu */}
        <div className="relative z-50">
          <ShiftingDropDown />
        </div>
      </div>
    </nav>
  );
}

// "use client";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { useState, useRef, useEffect } from "react";

// export default function Navbar() {
//   const pathname = usePathname();
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const menuRef = useRef<HTMLDivElement | null>(null);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   useEffect(() => {
//     const handleClickAway = (event: MouseEvent) => {
//       if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
//         setIsMenuOpen(false);
//       }
//     };

//     document.addEventListener("mousedown", handleClickAway);
//     return () => {
//       document.removeEventListener("mousedown", handleClickAway);
//     };
//   }, []);

//   return (
//     <nav className="fixed w-full z-20 top-0  shadow-md">
//       <div className="container mx-auto flex justify-between items-center p-4">
//         {/* Logo */}
//         <Link href="/" className="text-xl font-bold text-[#414D75]">
//           Logo
//         </Link>

//         {/* Mobile Menu Button */}
//         <button
//           onClick={toggleMenu}
//           className="md:hidden text-[#414D75] focus:outline-none"
//           aria-label="Toggle Menu"
//         >
//           {isMenuOpen ? (
//             <svg
//               className="w-6 h-6"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M6 18L18 6M6 6l12 12"
//               />
//             </svg>
//           ) : (
//             <svg
//               className="w-6 h-6"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M4 6h16M4 12h16m-7 6h7"
//               />
//             </svg>
//           )}
//         </button>

//         {/* Menu Items */}
//         <div
//           ref={menuRef}
//           className={`absolute top-full left-0 w-full bg-white md:bg-transparent shadow-md md:shadow-none transition-transform transform ${
//             isMenuOpen ? "translate-y-0" : "-translate-y-full md:translate-y-0"
//           } md:relative md:flex md:items-center md:w-auto`}
//         >
//           <ul className="flex flex-col md:flex-row md:space-x-6 text-center md:text-left">
//             {[
//               { href: "/", label: "Home" },
//               { href: "/about", label: "About" },
//               { href: "/practice", label: "Practice Areas" },
//               { href: "/attorney", label: "Our Team" },
//               { href: "/blog", label: "Media Centre" },
//               { href: "/contact", label: "Contact" },
//             ].map((item) => (
//               <li key={item.href}>
//                 <Link
//                   href={item.href}
//                   className={`block py-3 px-6 md:px-0 font-semibold ${
//                     pathname === item.href
//                       ? "text-white bg-[#414D75] md:bg-transparent md:text-[#414D75]"
//                       : "text-[#8D9593] hover:text-[#414D75] transition"
//                   }`}
//                 >
//                   {item.label}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// }
