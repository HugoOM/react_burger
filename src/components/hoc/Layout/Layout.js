import React, { useState } from "react";
import Toolbar from "../../Toolbar/Toolbar";
import SideDrawer from "../../Navigation/SideDrawer/SideDrawer";
import styles from "./Layout.module.css";

const Layout = props => {
  const [showSideDrawer, setShowSideDrawer] = useState(false);

  return (
    <>
      <Toolbar toggleSidebar={setShowSideDrawer} />
      <SideDrawer
        closed={() => setShowSideDrawer(false)}
        showSideDrawer={showSideDrawer}
      />
      <main className={styles.Content}>{props.children}</main>
    </>
  );
};

export default Layout;
