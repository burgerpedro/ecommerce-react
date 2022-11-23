import React from "react";

import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import styles from './Footer.module.css'



export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <ul className={styles.social_list}>
        <li>
          <FaFacebook />
        </li>
        <li>
          <FaInstagram />
        </li>
        <li>
          <FaTwitter />
        </li>
      </ul>
      <p className={styles.copy_right}>
        <span>React Ecommerce</span> &copy; 2022
      </p>
    </footer>
  )
}