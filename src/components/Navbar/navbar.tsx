"use client"
import styles from './navbar.module.css'
import Link from 'next/link'

import { faXmark, faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useContext, useEffect } from 'react'
import { ContextValue } from '@/app/provider'


const Navbar = () => {

    const {mobileOpen, setMobileOpen, setCloseButton} = useContext(ContextValue)

    const handleState = () => {
        setMobileOpen(value => !value)
        setCloseButton(true)
    }
    
    return (
        <div className={styles.navbar}>
            <div className={styles.toggleMenuButton}>
                <button className={styles.mobileBtn} onClick={handleState}>
                    <FontAwesomeIcon icon={faBars} size="2x" />
                </button>
            </div>
            <div className={styles.menuNavigation}>
                <div className={styles.logo_container}>
                    <img src='/static/images/Logo.png' width={120} />
                </div>
                <ul className={styles.nav_menu}>
                    <li>
                        <Link href="/">Início</Link>
                    </li>
                    <li>
                        <Link href="/sobre">Sobre</Link>
                    </li>
                    <li>
                        <Link href="/blog">Blog</Link>
                    </li>
                    <li>
                        <Link href="/contato">Contato</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar