import React, { useState } from "react";
import styles from "./sideBar.module.css";
import Link from "next/link";
import {
  FaHome,
  FaUser,
  FaClipboardList,
  FaBriefcase,
  FaCommentDots,
  FaBars,
} from "react-icons/fa";

const SideBar = () => {
  let toggle = false;
  const [sideBarActive, setSideBarActive] = useState(toggle);
  const sideBarHandler = () => {
    setSideBarActive((toggle) => !toggle);
  };
  return (
    <div className={styles.sideBar}>
      <div className={styles.toggleSideBar} onClick={sideBarHandler}>
        <FaBars />
      </div>
      {!sideBarActive && (
        <Link href="/">
          <a className={styles.logo}>
            <span>A. </span>Esmaili
          </a>
        </Link>
      )}
      <ul>
        <li>
          <Link href="/">
            <a className={styles.active}>
              <FaHome />
              {!sideBarActive && <span>Home</span>}
            </a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>
              <FaUser />
              {!sideBarActive && <span>About</span>}
            </a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>
              <FaClipboardList />
              {!sideBarActive && <span>Services</span>}
            </a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>
              <FaBriefcase />
              {!sideBarActive && <span>Portfolio</span>}
            </a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>
              <FaCommentDots />
              {!sideBarActive && <span>Contact</span>}
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
