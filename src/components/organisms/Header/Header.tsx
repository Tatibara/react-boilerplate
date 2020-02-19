
import React from 'react';

import styles from './styles.module.scss';

interface HeaderProps {
  isUnderline: boolean;
}

const Header: React.FC<HeaderProps> = ({ isUnderline }: HeaderProps) => (
  <header className={isUnderline ? styles.headerWrapper: ''}>
    <h1>Header</h1>
  </header>
);

export default Header;
