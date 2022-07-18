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
    const [mobileMenu, setMobileMenuStatus] = React.useState(false);
    const [mobileSearchInput, setMobileSearchInputStatus] = React.useState(false);



    const changeMobileMenuStatus = () => {
        if (window.innerWidth <= 1536) {
        setMobileMenuStatus(!mobileMenu);
        }
    }

    const changeMobileSearchStatus = () => {
        if (window.innerWidth <= 1536) {
            setMobileSearchInputStatus(!mobileSearchInput)
        }
    }
    
    const openStyle = mobileMenu ? `` : `hidden`;
    const openStyle2 = mobileSearchInput ? `hidden` : ``;
    const openContentStyle = mobileMenu ? `-translate-x-0` : `-translate-x-full 2xl:-translate-x-0`;
    const closeStyle = mobileMenu ? `hidden` : ``;
    const closeStyle2 = mobileSearchInput ? `` : `hidden`;
    const searchInputWrapper = mobileSearchInput ? `absolute inset-0 lg:inset-auto h-24 lg:h-auto bg-gray-800` : ``;
    const searchInput = mobileSearchInput ? `w-[85vw]` : `w-0`;

    const style = {
        container: 'flex justify-between p-4 lg:p-0 h-24',
        logoWrapper: 'flex text-white items-center',
        logoText: 'text-2xl mx-1 font-semibold',
        searchAndLinks: 'flex items-center text-white',
        searchInputWrapper: `flex items-center 2xl:p-6 2xl:static ${searchInputWrapper}`,
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
                    <div onClick={changeMobileSearchStatus} className={style.searchIcon}>
                        <BiSearch />
                    </div>
                    <div onClick={changeMobileSearchStatus} className={style.timesIcon}>
                        <BiLeftArrowAlt />
                    </div>
                    <input type='text' className={style.searchInput} placeholder='Search items,collections, and accounts...' />
                </div>
                <div className={style.quickLinksWrapper}>
                    <Link href=""><a onClick={changeMobileMenuStatus} className={style.quickLinks}> Explore </a></Link>
                    <Link href=""><a onClick={changeMobileMenuStatus} className={style.quickLinks}> Stats </a></Link>
                    <Link href=""><a onClick={changeMobileMenuStatus} className={style.quickLinks}> Resources </a></Link>
                    <Link href=""><a onClick={changeMobileMenuStatus} className={style.quickLinks}> Create </a></Link>
                    <div className={style.quickIconLinksWrapper}>
                        <Link href=""><a onClick={changeMobileMenuStatus} className={style.iconLinks}><CgProfile /></a></Link>
                        <Link href=""><a onClick={changeMobileMenuStatus} className={style.iconLinks}><MdOutlineAccountBalanceWallet /></a></Link>
                    </div>
                </div>
                <Link href=""><a onClick={changeMobileMenuStatus} className={`lg:hidden ${style.iconLinks} ${openStyle}`}><FaTimes /></a></Link>
                <Link href=""><a onClick={changeMobileMenuStatus} className={`lg:hidden ${style.iconLinks} ${closeStyle}`}><GiHamburgerMenu /></a></Link>
            </div>
        </div>
    )
}

export default Header;