import React from 'react'
import styles from '../page.module.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About App Nepomn Blog",
  description: 'about how we are cool'
};

const About = () => {
  return (
    <h2 className={styles.main}>Select subitem</h2>
  )
}

export default About