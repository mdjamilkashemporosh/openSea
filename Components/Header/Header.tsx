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
    const searchInputWraper = isOpen2 ? `absolute inset-0 lg:inset-auto h-24 lg:h-auto bg-gray-800` : ``;
    const searchInput = isOpen2 ? `w-[85vw]` : `w-0`;
    return (
        <div className='flex justify-between p-4 lg:p-0 h-24'>
            <Link href="/">
                <a className='flex text-white items-center'>
                    <Image src={openseaLogo} height={50} width={50} />
                    <p className='text-2xl mx-1 font-semibold'>Opensea</p>
                </a>
            </Link>
            <div className='flex items-center text-white'>
            {/* absolute inset-0 lg:inset-auto h-24 lg:h-auto */}
                <div className={`flex items-center 2xl:p-6 2xl:static ${searchInputWraper}`}>
                    <div onClick={isClicked2} className={`rounded-l-md  px-6 2xl:h-14 flex items-center text-3xl lg:bg-white lg:bg-opacity-10 ${openStyle2}`}>
                        <BiSearch />
                    </div>
                    <div onClick={isClicked2} className={`px-6  flex items-center text-3xl  ${closeStyle2}`}>
                        <BiLeftArrowAlt />
                    </div>
                    {/* w-[85vw] */}
                    <input type='text' className={`2xl:rounded-r-md text-lg outline-none pl-4 2xl:pl-0 2xl:w-[32rem] bg-transparent 2xl:bg-white 2xl:bg-opacity-10 2xl:px-4 h-14 ${searchInput}`} placeholder='Search items,collections, and accounts...' />
                </div>
                <div className={`flex 2xl:ml-4 items-start 2xl:items-center  flex-col duration-300 lg:flex-row absolute lg:static inset-0 2xl:inset-auto	bg-gray-800 2xl:bg-transparent z-50 mt-24 2xl:mt-0 font-semibold ${openContentStyle}`}>
                    <Link href=""><a onClick={isClicked} className='my-2 2xl:my-0 hover:bg-white hover:bg-opacity-5 2xl:bg-transparent rounded p-6 hover:mx-2 lg:hover:mx-0 lg:hover:opacity-50 duration-300 text-xl'> Explore </a></Link>
                    {/* <Link href=""><a className=' my-2 hover:bg-white  hover:bg-opacity-5 lg:bg-transparent lg:hover:bg-opacity-0 rounded p-6 hover:mx-2 lg:hover:mx-0 lg:hover:opacity-50 duration-300 text-xl'> Collections </a></Link> */}
                    <Link href=""><a onClick={isClicked} className=' my-2 hover:bg-white  hover:bg-opacity-5 lg:bg-transparent lg:hover:bg-opacity-0 rounded p-6 hover:mx-2 lg:hover:mx-0 lg:hover:opacity-50 duration-300 text-xl'> Stats </a></Link>
                    <Link href=""><a onClick={isClicked} className=' my-2 hover:bg-white  hover:bg-opacity-5 lg:bg-transparent lg:hover:bg-opacity-0 rounded p-6 hover:mx-2 lg:hover:mx-0 lg:hover:opacity-50 duration-300 text-xl'> Resources </a></Link>
                    <Link href=""><a onClick={isClicked} className=' my-2 hover:bg-white  hover:bg-opacity-5 lg:bg-transparent lg:hover:bg-opacity-0 rounded p-6 hover:mx-2 lg:hover:mx-0 lg:hover:opacity-50 duration-300 text-xl'> Create </a></Link>
                    <div className='flex my-2 absolute lg:static bottom-0 lg:bottom-auto lg:ml-4 justify-center items-center w-screen lg:w-auto'>
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