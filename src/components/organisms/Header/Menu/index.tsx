import React, { useState } from 'react'
import NextLink from 'next/link'
import { MenuIcon } from '../MenuIcon'
import styles from './menu_list_icon.module.scss'

const HeaderComponent: React.FC = () => {
  const [isOpenMenu, setMenu] = useState(false)

  const menuClick = () => {
    setMenu(!isOpenMenu)
  }

  return (
    <div className="flex items-center">
      <div>
        <MenuIcon isOpen={isOpenMenu} onClick={menuClick}></MenuIcon>
      </div>
      <div className="flex items-center justify-center">
        <div
          className={`mx-4 ${styles.menuListIcon} ${
            isOpenMenu ? styles.active : ''
          }`}
        >
          <NextLink href="/">Register</NextLink>
        </div>
        <div
          className={`mx-4 ${styles.menuListIcon} ${
            isOpenMenu ? styles.active : ''
          }`}
        >
          <NextLink href="/scan">Scan</NextLink>
        </div>
      </div>
    </div>
  )
}

export default HeaderComponent
