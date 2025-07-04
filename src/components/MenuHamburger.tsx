import Hamburger from 'hamburger-react'
import { useEffect, useRef, useState } from 'react';
import Link from "next/link";
import { AnimatePresence, motion } from 'framer-motion';


function MenuBurger() {
const [isOpen, setOpen] = useState(false);
const hamburgerRef = useRef(null);

useEffect (() => {
    const handleClickOutside = (event: MouseEvent) => {
        if (hamburgerRef.current && !(hamburgerRef.current as HTMLElement).contains(event.target as Node)) {
            setOpen(false);
        }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
        document.removeEventListener("mousedown", handleClickOutside);
    };
}, []);

// const navigate = useNavigate();
// const handleClick = (path) => {
//     navigate(path);
// }

return(
<div ref={hamburgerRef}  className=' block lg:hidden top-2'>
    <div className='bg-[#E10919] hover:bg-[#B00813]  rounded-full'>
        <Hamburger rounded toggled={isOpen} toggle={setOpen} size={20} color="#FFFFFF"  />
    </div>

    <AnimatePresence>
    {isOpen && (
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed left-0  right-0 top-[5.6rem] "
      >
    <nav className="flex flex-col sticky border-t  border-t-[#E5E5E5]  text-xl bg-white ">

        <ul className='flex flex-col divide-y-1 divide-[#E5E5E5] items-center gap-[px] text-[#1C2736] '>
            <motion.li
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: 0.1,
                }}
                className='flex w-full justify-center items-center text-center gap-[20px] text-sm font-medium py-[20px] px-[27px] hover:bg-[#E10919] hover:text-white'
                >
                    <Link href='/'> ACCUEIL </Link>
            </motion.li>

            <motion.li
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: 0.1,
                }}
                className='flex w-full justify-center items-center text-center gap-[20px] text-sm font-medium py-[20px] px-[27px] hover:bg-[#E10919] hover:text-white'
                >
                    <Link href='/about'> A PROPOS </Link>
            </motion.li>

            <motion.li
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: 0.1,
                }}
                className='flex w-full justify-center items-center text-center gap-[20px] text-sm font-medium py-[20px] px-[27px] hover:bg-[#E10919] hover:text-white'
                >
                <Link href='/realizations'> RÉALISATIONS </Link>
            </motion.li>

            <motion.li
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: 0.1,
                }}
                className='flex w-full justify-center items-center text-center gap-[20px] text-sm font-medium py-[20px] px-[27px] hover:bg-[#E10919] hover:text-white'
                >
                <Link href='/services'> SERVICES </Link>
            </motion.li>

            <motion.li
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: 0.1,
                }}
                className='flex w-full justify-center items-center text-center gap-[20px] text-sm font-medium py-[20px] px-[27px] hover:bg-[#E10919] hover:text-white'
                >
                <Link href='/team'> ÉQUIPE </Link>
            </motion.li>

            <motion.li
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: 0.1,
                }}
                className='flex w-full justify-center items-center text-center gap-[20px] text-sm font-medium py-[20px] px-[27px] hover:bg-[#E10919] hover:text-white'
                >
                <Link href='/blogs'> BLOGS </Link>
            </motion.li>
        </ul>
        {/* <button className='bg-[#E10919] hover:bg-[#B00813] px-4 py-4 text-white text-sm font-medium cursor-pointer'>
            CONTACTEZ-NOUS
        </button> */}
    </nav>


    </motion.div>
    )}
    </AnimatePresence>

</div>

)
}
export default MenuBurger;  