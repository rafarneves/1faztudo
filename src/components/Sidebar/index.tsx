'use client'
import Image from 'next/image'
import Logo from ''
import styles from './index.module.css'
import Link from 'next/link'
import { useContext, useEffect, useState } from 'react'
import { ContextValue } from '@/app/provider'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

const Sidebar = () => {
    const { mobileOpen, setMobileOpen, closeButton, setCloseButton } = useContext(ContextValue);

    const handleCloseNav = () => {
        setMobileOpen(false)
    }

    useEffect(() => {
        window.addEventListener('resize', () => {
            if(window.innerWidth > 768) {
                setMobileOpen(false)
                setCloseButton(false)
            } else {
                setCloseButton(true)
            }
        })
    }, [])

    return (
        <div className={`${styles.sidebar} ${mobileOpen ? styles.openMenu : ''}`}>

            {closeButton && 
                <div className="sidebar-button">
                    <button onClick={handleCloseNav} type="button">
                        <FontAwesomeIcon icon={faXmark} size="2x" />
                    </button>
                </div>
            }
            
            <ul className={styles.menu}>
                <li>
                    <Link href="/inverter-texto">Inverter texto</Link>
                </li>
                <li>
                    <a href='/remover-espacos'>Remover espaços de texto</a>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar