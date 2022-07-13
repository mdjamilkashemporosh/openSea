import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineSearch } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import { BiSearch } from 'react-icons/bi';
import { MdOutlineAccountBalanceWallet } from 'react-icons/md';
import { GiHamburgerMenu } from 'react-icons/gi';
import openseaLogo from '../../Assets/opensea.png';

const style = {
    wrapper: `flex py-4 md:px-4 lg:px-12 justify-between items-center`,
    logoContainer: `flex items-center justify-center w-[200px]`,
    logoText: ` mx-[0.5rem] text-white font-semibold text-2xl`,
    searchBar: `flex items-center lg:bg-[#363840] rounded-[0.5rem] lg:hover:bg-[#4c505c]`,
    searchIcon: `text-[#8a939b] mx-3 text-3xl lg:text-2xl`,
    searchInput: `h-[3rem] w-0 lg:w-[50rem] text-lg border-0 bg-transparent outline-none pr-2 duration-300 text-[#e6e8eb] placeholder:text-[#8a939b]`,
    headerItems: ` flex items-center`,
    headerItem: `text-white text-lg px-4 font-semibold text-[#c8cacd] hover:text-white`,
    headerIcon: `text-[#8a939b] text-4xl px-6 hover:text-white`,
}

const Header = () => {
    return (
        <div className={style.wrapper}>
            <Link href="/">
                <a className={style.logoContainer}>
                    <Image src={openseaLogo} height={50} width={50} />
                    <div className={style.logoText}>Opensea</div>
                </a>
            </Link>
            <div className="flex justify-center items-center">
            <div className={style.searchBar}>
                <div className={style.searchIcon}>
                    <AiOutlineSearch />
                </div>
                <input className={style.searchInput} placeholder="Search items, collections, and accounts" />
            </div>
            <div className="hidden">
            <div className={style.headerItems}>
                <Link href=""><a className={style.headerItem}> Collections </a></Link>
                <Link href=""><a className={style.headerItem}> Stats </a></Link>
                <Link href=""><a className={style.headerItem}> Resources </a></Link>
                <Link href=""><a className={style.headerItem}> Create </a></Link>
            </div>
            <div className={style.headerItems}>
                <Link href=""><a className={style.headerIcon}><CgProfile /></a></Link>
                <Link href=""><a className={style.headerIcon}><MdOutlineAccountBalanceWallet /></a></Link>
            </div>
            </div>
                {/* <div className="flex"> */}
                {/* <Link href=""><a className={style.headerIcon}><BiSearch /></a></Link> */}
                <Link href=""><a className={style.headerIcon}><GiHamburgerMenu /></a></Link>
                {/* </div> */}
                </div>
        </div>
    )
}

export default Header;
