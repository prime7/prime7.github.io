import React from "react"
import * as styles from "./History.module.css"

const contents = [
    {
        year: 2021,
        events: [
            {
                headline: "Looking for job",
                news: "Currently, I'm looking for a Software-developer job.",
            },
            {
                headline: "Graduating as a Data Analyst",
                news: "After 2 years I will be graduating in december",
            },
            {
                headline: "Devasted",
                news: "Lost my father",
            },
        ],
    },
    {
        year: 2011,
        events: [
            {
                headline: "Quit my Job",
                news: "One day, my boss came up to me and asked, Pretty much decided I wasn't ready.",
            },
            {
                headline: "Started New Job",
                news: "Began work at the Button Factory. This was probably the best time of my life. I had a wife, a dog, and a family.",
            },
        ],
    },
]
export default function History() {
    return (
        <div className={styles.container}>
            <div className={styles.timeline}>
                {contents.map(content => (
                    <ul>
                        <h2>{content.year}</h2>
                        {content.events.map(row => (
                            <li>
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
