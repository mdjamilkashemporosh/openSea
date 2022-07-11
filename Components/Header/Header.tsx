import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineSearch } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import { MdOutlineAccountBalanceWallet } from 'react-icons/md';
import openseaLogo from '../../Assets/opensea.png';

const style = {
    wrapper: `flex py-4 px-12 justify-between items-center`,
    logoContainer: `flex items-center`,
    logoText: ` ml-[0.5rem] text-white font-semibold text-2xl`,
    searchBar: `flex items-center bg-[#363840] rounded-[0.5rem] hover:bg-[#4c505c]`,
    searchIcon: `text-[#8a939b] mx-3 text-2xl`,
    searchInput: `h-[3rem] w-[50rem] text-lg border-0 bg-transparent outline-none pr-2 duration-300 text-[#e6e8eb] placeholder:text-[#8a939b]`,
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
            <div className={style.searchBar}>
                <div className={style.searchIcon}>
                    <AiOutlineSearch />
                </div>
                <input className={style.searchInput} placeholder="Search items, collections, and accounts" />
            </div>
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
    )
}

export default Header;