import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Title from "./Title"
import * as styles from "./About.module.css"

export default function About() {
    return (
        <div className={styles.wrapper}>
            <Title title="about me" />
            <StaticImage
                src="../../assets/banner-about.jpeg"
                layout="fixed"
                width={100}
                height={100}
                alt="Tarek Ahmed"
                className={styles.img}
            />
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum,
                eligendi.
            </p>
        </div>
    )
}
