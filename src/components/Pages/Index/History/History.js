import React from "react"
import * as styles from "./History.module.css"
import config from "../../../../config"

export default function History() {
    return (
        <div className={styles.container}>
            <div className={styles.timeline}>
                {config.history.map((content, idx) => (
                    <ul key={idx}>
                        <h2>{content.year}</h2>
                        {content.events.map((row, idx) => (
                            <li key={idx}>
                                <h3>{row.headline}</h3>
                                <p>{row.news}</p>
                            </li>
                        ))}
                    </ul>
                ))}
            </div>
        </div>
    )
}
