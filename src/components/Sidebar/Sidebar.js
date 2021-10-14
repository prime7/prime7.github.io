import React from "react"
import About from "./About"
import Category from "./Category"
import Recent from "./Recent"
import * as styles from "./Sidebar.module.css"

export default function Sidebar() {
    return (
        <div className={styles.wrapper}>
            <About />
            <Recent />
            <Category />
        </div>
    )
}
