import React from "react"
import { Col } from "react-bootstrap"
import * as styles from "./Languages.module.css"

export default function Icon(props) {
    const Wrapper = props.wrapper
    return (
        <Col>
            <Wrapper className={styles.icon} style={{ color: props.color }} />
            <p>{props.text}</p>
        </Col>
    )
}
