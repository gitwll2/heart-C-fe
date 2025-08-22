import styles from "@/components/MenuGroup/inedx.module.css";
import { useState } from "react";
type nodeType = {
  name: string;
};
const MenuGroup = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  //
  function handleZoomIn() {}
  function handleZoomOut() {}
  return (
    <>
      <div
        className={`${styles.sidebar} ${isCollapsed ? styles.collapsed : ""}`}
      >
        <div className={styles.sidebarHeader}>
          <h2>{isCollapsed ? "" : "导航菜单"}</h2>
          <img src="/static/menu.png" alt="菜单" />
        </div>
      </div>
    </>
  );
};
const MenuItem = (node: nodeType) => {};

export default MenuGroup;
