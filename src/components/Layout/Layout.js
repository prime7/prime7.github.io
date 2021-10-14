import React from "react"
import Navbar from "../Navbar"
import Footer from "../Footer"
import "bootstrap/dist/css/bootstrap.min.css"
import "../../styles/global.css"
import * as styles from "./Layout.module.css"

export default function Layout({ children }) {
    return (
        <div className={styles.container}>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </div>
    )
}
