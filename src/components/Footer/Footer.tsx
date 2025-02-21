import styles from './Footer.module.scss';
import Logo from '../Logo/Logo';

import SVG from 'react-inlinesvg';
import githubIcon from '../../assets/icons/github.svg';
import instagramIcon from '../../assets/icons/instagram.svg';
import linkedinIcon from '../../assets/icons/linkedin.svg';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Logo logoSize={3.6} />
      <ul className={styles.socialLinksList}>
        <li className={styles.socialLinkItem}>
          <a href='https://github.com/AmmaMatar47' target='_blank'>
            <SVG src={githubIcon} />
          </a>
        </li>
        <li className={styles.socialLinkItem}>
          <a href='https://www.instagram.com/lq1ql/?__pwa=1' target='_blank'>
            <SVG src={instagramIcon} />
          </a>
        </li>
        <li className={styles.socialLinkItem}>
          <a href='https://www.linkedin.com/in/ammar-matar-ab1b5b32a/' target='_blank'>
            <SVG src={linkedinIcon} />
          </a>
        </li>
      </ul>
      <p className={styles.footerText}>
        Coded and designed by Ammar Matar
        <br /> © 2025 Skizzi. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
