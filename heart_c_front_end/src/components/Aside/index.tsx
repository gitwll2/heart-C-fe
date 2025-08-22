import React from "react";
import { useState, useEffect } from "react";
import styles from "@/components/Aside/index.module.css";
import IconMenu from "../Icon/IconMenu";

const Aside = () => {
  // 收缩
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    const saveCollapsed = localStorage.getItem("sidebarCollapsed");
    if (saveCollapsed) setCollapsed(saveCollapsed == "true");
  }, []);

  const toggleSidebar = () => {
    const newCollapsed = !collapsed;
    setCollapsed(newCollapsed);
    localStorage.setItem("sidebarCollapsed", newCollapsed.toString());
  };

  return (
    <aside className={`${styles.sidebar} ${collapsed ? styles.collapsed : ""}`}>
      <div className={styles.sidebarHeader}>
        {!collapsed && <h3>菜单</h3>}
        <button className={styles.toggleBtn} onClick={toggleSidebar}>
          <IconMenu></IconMenu>
        </button>
      </div>
    </aside>
  );
};

export default Aside;
