import React from "react";

import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
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
          <FaLinkedin />
        </li>
      </ul>
      <p className={styles.copy_right}>
        <span>React Ecommerce</span> &copy; 2022
      </p>
      <p>
        <span>Endereco: Rua x , n° X, Petropolis,Rio de Janeiro</span>
      </p>
      <p>
        <span>CNPJ: XX. XXX. XXX/0001-XX</span>
      </p>
    </footer>
  )
}
