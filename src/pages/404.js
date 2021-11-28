import { Link } from "gatsby"
import React from "react"
import * as styles from "../styles/404.module.css"

export default function NotFound() {
    return (
        <div className="vw-100 vh-100 bg-white">
            <div className="container">
                <div className="row">
                    <div className="col-8 offset-2 text-center">
                        <div className={styles.four_zero_four_bg} />
                        <div>
                            <h3>Look like you're lost</h3>
                            <p>the page you are looking for not avaible!</p>
                            <Link to="/">Go to Home</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
