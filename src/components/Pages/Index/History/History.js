import React from "react"
import * as styles from "./History.module.css"

const contents = [
    {
        year: 2021,
        events: [
            {
                headline: "Looking for job",
                news: "Currently, I'm looking for a Software Developer or Data Analyst job.",
            },
            {
                headline: "Graduating as a Data Analyst",
                news: "After 2 years of struggle and living without my family finally I will be graduating in december",
            },
        ],
    },
    {
        year: 2019,
        events: [
            {
                headline: "Got Admission in Douglas College",
                news: "While doing my thesis I got interest in Machine Learning and Data Science which lead me to pursue my Post Graduation Diploma in Data Analytics. I was little nervous as well because this was the first time I will be living without my family.",
            },
            {
                headline: "Joined Cookups technology",
                news: "Started my first job in a local startup company. I learned a lot from the team and this experience has pushed me a lot in my career. Mostly I was a frontend react developer though I learned backend stuffs as well.",
            },
            {
                headline: "University Graduation",
                news: "I graduated in 2019.",
            },
        ],
    },
    {
        year: 2013,
        events: [
            {
                headline: "University Admission",
                news: "Got admitted into Ahsanullah University of Science and Technology in Computer Science. I was so excited to get my own computer/laptop rather than the University.",
            },
            {
                headline: "Highschool Graduation",
                news: "I graduated from highschool with highest CGPA.",
            },
        ],
    },
]
export default function History() {
    return (
        <div className={styles.container}>
            <div className={styles.timeline}>
                {contents.map((content, idx) => (
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
