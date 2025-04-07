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
    <div className='bg-[#E10919]  rounded-full'>
        <Hamburger rounded toggled={isOpen} toggle={setOpen} size={20} color="#FFFFFF"  />
    </div>

    <AnimatePresence>
    {isOpen && (
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed left-0  right-0 top-[6rem] "
      >
    <nav className="flex flex-col gap-2 sticky  text-xl bg-white ">

        <ul className='flex flex-col gap-[px] text-[#1C2736] '>
            <motion.li
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: 0.1,
                }}
                className='flex items-center  gap-[20px] text-sm font-medium py-[20px] px-[27px]  hover:bg-[#E10919] hover:text-white  '
                >
                    <a href='#home'> ACCUEIL </a>
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
                className='flex items-center  gap-[20px] text-sm font-medium  py-[20px] px-[27px] hover:bg-[#E10919] hover:text-white'
                >
                    <a href='#about-me'> A PROPOS </a>
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
                className='flex items-center  gap-[20px] text-sm font-medium py-[20px] px-[27px] hover:bg-[#E10919] hover:text-white'
                >
                <a href='#services'> RÉALISATIONS </a>
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
                className='flex items-center  gap-[20px] text-sm font-medium py-[20px] px-[27px] hover:bg-[#E10919] hover:text-white'
                >
                <a href='#experiences'> SERVICE </a>
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
                className='flex items-center  gap-[20px] text-sm font-medium py-[20px] px-[27px] hover:bg-[#E10919] hover:text-white'
                >
                <a href='#experiences'> ÉQUIPE </a>
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
                className='flex items-center  gap-[20px] text-sm font-medium py-[20px] px-[27px] hover:bg-[#E10919] hover:text-white'
                >
                <a href='#contact-me'> BLOGS </a>
        </motion.li>

        </ul>

    </nav>
    </motion.div>
    )}
    </AnimatePresence>

</div>

)
}
export default MenuBurger;  