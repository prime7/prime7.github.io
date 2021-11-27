import React from "react"
import { Card, Row } from "react-bootstrap"
import {
    SiDjango,
    SiScikitlearn,
    SiReact,
    SiGatsby,
    SiDocker,
    SiAmazonaws,
    SiPostgresql,
    SiAmazons3,
    SiPowerbi,
    SiTableau,
    SiPandas,
    SiGit,
} from "react-icons/si"
import Icon from "./Icon"
import * as styles from "./Languages.module.css"

export default function Languages() {
    return (
        <React.Fragment>
            <Card body className={styles.container}>
                <Row className={styles.row}>
                    <Icon wrapper={SiDjango} color="green" text="Django" />
                    <Icon wrapper={SiReact} color="blue" text="React.js" />
                    <Icon wrapper={SiReact} color="blue" text="Native" />
                    <Icon wrapper={SiGatsby} color="purple" text="Gatsby" />
                </Row>
                <hr />
                <Row className={styles.row}>
                    <Icon wrapper={SiGit} color="grey" text="Git" />
                    <Icon wrapper={SiDocker} color="skyblue" text="Docker" />
                    <Icon wrapper={SiAmazonaws} color="black" text="AWS" />
                    <Icon
                        wrapper={SiPostgresql}
                        color="darkblue"
                        text="Postgresql"
                    />
                    <Icon wrapper={SiAmazons3} color="darkblue" text="AWS S3" />
                </Row>
                <hr />
                <Row className={styles.row}>
                    <Icon
                        wrapper={SiScikitlearn}
                        color="orange"
                        text="SkLearn"
                    />
                    <Icon wrapper={SiTableau} color="purple" text="Tableau" />
                    <Icon wrapper={SiPowerbi} color="yellow" text="PowerBI" />
                    <Icon wrapper={SiPandas} color="orange" text="Pandas" />
                </Row>
            </Card>
        </React.Fragment>
    )
}
