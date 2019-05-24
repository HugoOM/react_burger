import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import Backdrop from "../../UI/Backdrop/Backdrop";
import styles from "./SideDrawer.module.css";

const sideDrawer = props => (
  <>
    <Backdrop show={props.showSideDrawer} clicked={props.closed} />
    <div
      className={[
        styles.SideDrawer,
        props.showSideDrawer ? styles.Open : styles.Close
      ].join(" ")}
    >
      <Logo />
      <nav>
        <NavigationItems />
      </nav>
    </div>
  </>
);

export default sideDrawer;
