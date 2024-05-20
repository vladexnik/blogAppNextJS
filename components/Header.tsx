import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className='container'>
        <Link className="" href='/'>
            Home
        </Link>
        <Link className="" href='/blog'>
            Blog
        </Link>
        <Link className="" href='/about'>
            About
        </Link>
    </header>
  )
}

export default Header;