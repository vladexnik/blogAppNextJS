import Link from 'next/link'
import React from 'react'
import Navigation from './Navigation';

const navItems=[
  {label: 'Home', href: '/'},
  {label: 'Blog', href: '/blog'},
  {label: 'About', href: '/about'},
];

const Header = () => {
  return (
    <header className='container'>
        {/* <Link className="" href='/'>
            Home
        </Link>
        <Link className="" href='/blog'>
            Blog
        </Link>
        <Link className="" href='/about'>
            About
        </Link> */}
        <Navigation navLinks={navItems}/>
    </header>
  )
}

export default Header;