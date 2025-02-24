"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";

export default function Navbar() {
  const pathname = usePathname(); // Get the current pathname
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle the menu
  const menuRef = useRef<HTMLDivElement | null>(null); // Reference to the menu

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close the menu if clicked outside
  useEffect(() => {
    const handleClickAway = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickAway);
    return () => {
      document.removeEventListener("mousedown", handleClickAway);
    };
  }, []);

  return (
    <nav className="  fixed w-full z-20 top-0 start-0  ">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-[#414D75]">
          Logo
        </Link>
        <div className="md:max-w-screen-xl w-full space-x-3 rtl:space-x-reverse sm:w-auto flex items-center justify-between p-[0.75rem]">
          <div></div>
          <button
            onClick={toggleMenu}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm bg-[#0F233AC9] mix-blend-multiply text-white rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5 text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            ref={menuRef}
            className={`${
              isMenuOpen ? "block" : "hidden"
            } absolute top-full  w-full  text-[#f4f4f4] shadow-md md:static md:top-auto md:shadow-none md:flex md:items-center md:justify-between md:w-auto`}
            id="navbar-sticky"
          >
            <ul className="flex flex-col bg-white md:bg-transparent md:p-0 border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About" },
                { href: "/practice", label: "Practice Areas" },
                // { href: "/casestudies", label: "Case Studies" },
                { href: "/attorney", label: "Our Team" },
                { href: "/blog", label: "Media Centre" },
                { href: "/contact", label: "Contact" },
              ].map((item) => (
                <li key={item.href} className="relative">
                  <Link
                    href={item.href}
                    className={`block py-2 px-3 rounded font-semibold md:p-0 ${
                      pathname === item.href
                        ? " bg-[#414D75] md:bg-transparent  md:text-[#414D75]"
                        : "md:text-[#ffffff] text-[#495484] font-bold hover:bg-gray-100  md:hover:bg-transparent md:hover:text-[#414D75]"
                    }`}
                  >
                    {item.label}
                  </Link>
                  {pathname === item.href && (
                    <hr className="my-1 h-[1.5px] bg-[#B79765] border-0 w-20 mx-auto md:mx-0" />
                  )}
                </li>
              ))}
            </ul>
          </div>
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
