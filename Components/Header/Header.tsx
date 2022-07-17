import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BiSearch, BiLeftArrowAlt } from 'react-icons/bi';
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
        if (window.innerWidth <= 1024) {
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

    const style = {
        container: 'flex justify-between p-4 lg:p-0 h-24',
        logoWrapper: 'flex text-white items-center',
        logoText: 'text-2xl mx-1 font-semibold',
        searchAndLinks: 'flex items-center text-white',
        searchInputWrapper: `flex items-center 2xl:p-6 2xl:static ${searchInputWraper}`,
        searchIcon: `rounded-l-md  px-6 2xl:h-14 flex items-center text-3xl lg:bg-white lg:bg-opacity-10 ${openStyle2}`,
        timesIcon: `px-6  flex items-center text-3xl  ${closeStyle2}`,
        searchInput: `2xl:rounded-r-md text-lg outline-none pl-4 2xl:pl-0 2xl:w-[32rem] bg-transparent 2xl:bg-white 2xl:bg-opacity-10 2xl:px-4 h-14 ${searchInput}`,
        quickLinksWrapper: `flex 2xl:ml-4 items-start 2xl:items-center  flex-col duration-300 lg:flex-row absolute lg:static inset-0 2xl:inset-auto bg-gray-800 2xl:bg-transparent z-50 mt-24 2xl:mt-0 font-semibold ${openContentStyle}`,
        iconLinks: 'text-4xl p-6 text-white hover:text-opacity-50 duration-300',
        quickLinks: 'my-2 2xl:my-0 p-6 hover:mx-2 2xl:hover:mx-0 2xl:hover:opacity-50 duration-300 text-xl',
        quickIconLinksWrapper: 'flex my-2 absolute 2xl:static bottom-0 2xl:bottom-auto 2xl:ml-4 justify-center items-center w-screen lg:w-auto',
    }

    return (
        <div className={style.container}>
            <Link href="/">
                <a className={style.logoWrapper}>
                    <Image src={openseaLogo} height={50} width={50} />
                    <p className={style.logoText}>Opensea</p>
                </a>
            </Link>
            <div className={style.searchAndLinks}>
                <div className={style.searchInputWrapper}>
                    <div onClick={isClicked2} className={style.searchIcon}>
                        <BiSearch />
                    </div>
                    <div onClick={isClicked2} className={style.timesIcon}>
                        <BiLeftArrowAlt />
                    </div>
                    <input type='text' className={style.searchInput} placeholder='Search items,collections, and accounts...' />
                </div>
                <div className={style.quickLinksWrapper}>
                    <Link href=""><a onClick={isClicked} className={style.quickLinks}> Explore </a></Link>
                    <Link href=""><a onClick={isClicked} className={style.quickLinks}> Stats </a></Link>
                    <Link href=""><a onClick={isClicked} className={style.quickLinks}> Resources </a></Link>
                    <Link href=""><a onClick={isClicked} className={style.quickLinks}> Create </a></Link>
                    <div className={style.quickIconLinksWrapper}>
                        <Link href=""><a onClick={isClicked} className={style.iconLinks}><CgProfile /></a></Link>
                        <Link href=""><a onClick={isClicked} className={style.iconLinks}><MdOutlineAccountBalanceWallet /></a></Link>
                    </div>
                </div>
                <Link href=""><a onClick={isClicked} className={`lg:hidden ${style.iconLinks} ${openStyle}`}><FaTimes /></a></Link>
                <Link href=""><a onClick={isClicked} className={`lg:hidden ${style.iconLinks} ${closeStyle}`}><GiHamburgerMenu /></a></Link>
            </div>
        </div>
    )
}

export default Header;