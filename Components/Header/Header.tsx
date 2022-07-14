import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BiSearch,BiLeftArrowAlt } from 'react-icons/bi';
import { CgProfile } from 'react-icons/cg';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaTimes } from 'react-icons/fa';
import { MdOutlineAccountBalanceWallet } from 'react-icons/md';
import openseaLogo from '../../Assets/opensea.png';


function Header() {
    const [isOpen, setIsOpen] = React.useState(false);
    const [isOpen2, setIsOpen2] = React.useState(false);
    const isClicked = () => {
        setIsOpen(!isOpen);
    }
    const isClicked2 = () => {
        if(window.innerWidth <= 1024){
            setIsOpen2(!isOpen2);
        }
    }
    const openStyle = isOpen ? `` : `hidden`;
    const openStyle2 = isOpen2 ? `hidden` : ``;
    const openContentStyle = isOpen ? `-translate-x-0` : `-translate-x-full lg:-translate-x-0`;
    const closeStyle = isOpen ? `hidden` : ``;
    const closeStyle2 = isOpen2 ? `` : `hidden`;
    const searchInputWraper = isOpen2 ? `absolute inset-0 lg:inset-auto h-24 lg:h-auto` : ``;
    const searchInput = isOpen2 ? `w-[85vw]` : `w-0`;
    return (
        <div className='flex bg-[#04111d] justify-between items-center py-4 px-6 lg:px-12 h-24'>
            <Link href="/">
                <a className='flex text-white items-center'>
                    <Image src={openseaLogo} height={50} width={50} />
                    <p className='text-2xl mx-1 font-semibold'>Opensea</p>
                </a>
            </Link>
            <div className='flex items-center justify-between text-white lg:w-[75vw]'>
            {/* absolute inset-0 lg:inset-auto h-24 lg:h-auto */}
                <div className={`flex items-center   bg-[#04111d] lg:static ${searchInputWraper}`}>
                    <div onClick={isClicked2} className={`rounded-l-md lg:pl-6  px-6 bg-[#04111d] lg:pr-2 h-14 flex items-center text-3xl lg:bg-white lg:bg-opacity-10 ${openStyle2}`}>
                        <BiSearch />
                    </div>
                    <div onClick={isClicked2} className={`rounded-l-md lg:pl-6  px-6 bg-[#04111d] lg:pr-2 h-14 flex items-center text-3xl lg:bg-white lg:bg-opacity-10 ${closeStyle2}`}>
                        <BiLeftArrowAlt />
                    </div>
                    {/* w-[85vw] */}
                    <input type='text' className={`rounded-r-md text-lg outline-none pl-2 lg:pl-0 lg:w-[40rem] bg-transparent lg:bg-white lg:bg-opacity-10 lg:px-4 h-14 ${searchInput}`} placeholder='Search items,collections, and accounts...' />
                </div>
                <div className={`flex  flex-col duration-300 lg:flex-row absolute lg:static inset-0 lg:inset-auto	bg-[#04111d] lg:bg-transparent bg-opacity-95 z-50 mt-24 lg:mt-0 font-semibold overflow-hidden ${openContentStyle}`}>
                    <Link href=""><a onClick={isClicked} className=' my-2 hover:bg-white  hover:bg-opacity-5 lg:bg-transparent lg:hover:bg-opacity-0 rounded p-6 hover:mx-2 lg:hover:mx-0 lg:hover:opacity-50 duration-300 text-xl'> Explore </a></Link>
                    {/* <Link href=""><a className=' my-2 hover:bg-white  hover:bg-opacity-5 lg:bg-transparent lg:hover:bg-opacity-0 rounded p-6 hover:mx-2 lg:hover:mx-0 lg:hover:opacity-50 duration-300 text-xl'> Collections </a></Link> */}
                    <Link href=""><a onClick={isClicked} className=' my-2 hover:bg-white  hover:bg-opacity-5 lg:bg-transparent lg:hover:bg-opacity-0 rounded p-6 hover:mx-2 lg:hover:mx-0 lg:hover:opacity-50 duration-300 text-xl'> Stats </a></Link>
                    <Link href=""><a onClick={isClicked} className=' my-2 hover:bg-white  hover:bg-opacity-5 lg:bg-transparent lg:hover:bg-opacity-0 rounded p-6 hover:mx-2 lg:hover:mx-0 lg:hover:opacity-50 duration-300 text-xl'> Resources </a></Link>
                    <Link href=""><a onClick={isClicked} className=' my-2 hover:bg-white  hover:bg-opacity-5 lg:bg-transparent lg:hover:bg-opacity-0 rounded p-6 hover:mx-2 lg:hover:mx-0 lg:hover:opacity-50 duration-300 text-xl'> Create </a></Link>
                    <div className='flex my-2 absolute lg:static bottom-0 lg:bottom-auto lg:ml-12 justify-center items-center w-screen lg:w-auto'>
                        <Link href=""><a onClick={isClicked} className='text-4xl p-6 text-white hover:text-opacity-50 duration-300'><CgProfile /></a></Link>
                        <Link href=""><a onClick={isClicked} className='text-4xl p-6 text-white hover:text-opacity-50 duration-300'><MdOutlineAccountBalanceWallet /></a></Link>
                    </div>
                </div>
                {/* <p>Icon Kinks</p> */}
                {/* Search icon and cross icon here */}
                {/* <div onClick={isClicked}> onClick={isClicked} */}


                <Link href=""><a onClick={isClicked} className={`lg:hidden text-4xl p-6 text-white hover:text-opacity-50 duration-300 ${openStyle}`}><FaTimes /></a></Link>
                <Link href=""><a onClick={isClicked} className={`lg:hidden text-4xl p-6 text-white hover:text-opacity-50 duration-300 ${closeStyle}`}><GiHamburgerMenu /></a></Link>

                {/* </div> onClick={isClicked} */}
            </div>
        </div>
    )
}

export default Header;