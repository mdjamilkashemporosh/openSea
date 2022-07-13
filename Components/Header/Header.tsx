import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BiSearch } from 'react-icons/bi';
import { CgProfile } from 'react-icons/cg';
import {GiHamburgerMenu } from 'react-icons/gi';
import {FaTimes } from 'react-icons/fa';
import { MdOutlineAccountBalanceWallet } from 'react-icons/md';
import openseaLogo from '../../Assets/opensea.png';


function Header() {
    const [isOpen, setIsOpen] = React.useState(false);
    const isClicked = () => {
        setIsOpen(!isOpen);
    }
    const openStyle = isOpen ? `` : `hidden`;
    const openContentStyle = isOpen ? `-translate-x-0` : `-translate-x-full`;
    const closeStyle = isOpen ? `hidden` : ``;
    return (
        <div className='flex bg-[#04111d] justify-between items-center py-4 px-6 lg:px-12 h-24'>
            <Link href="/">
                <a className='flex text-white items-center'>
                    <Image src={openseaLogo} height={50} width={50} />
                    <p className='text-2xl mx-1 font-semibold'>Opensea</p>
                </a>
            </Link>
            <div className='flex flex-col items-center lg:flex-row text-white'>
                {/* <div className='flex items-center'>
                    <BiSearch />
                    <input placeholder='Search items, collections, and accounts...' />
                </div> */}
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

 
                <Link  href=""><a onClick={isClicked} className={`lg:hidden text-4xl p-6 text-white hover:text-opacity-50 duration-300 ${openStyle}`}><FaTimes /></a></Link>
                <Link  href=""><a onClick={isClicked} className={`lg:hidden text-4xl p-6 text-white hover:text-opacity-50 duration-300 ${closeStyle}`}><GiHamburgerMenu /></a></Link>
            
            {/* </div> onClick={isClicked} */}
            </div>
        </div>
    )
}

export default Header;