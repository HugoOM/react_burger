import React from "react";
import Logo from "../Logo/Logo";
import NavigationItems from "../Navigation/NavigationItems/NavigationItems";
import styles from "./Toolbar.module.css";

const toolbar = props => (
  <header className={styles.Toolbar}>
    <div
      className={[styles.BurgerIconWrapper, styles.MobileOnly].join(" ")}
      onClick={() => props.toggleSidebar(true)}
    >
      <div />
      <div />
      <div />
    </div>
    <Logo />
    <nav className={styles.DesktopOnly}>
      <NavigationItems />
    </nav>
  </header>
);

export default toolbar;
