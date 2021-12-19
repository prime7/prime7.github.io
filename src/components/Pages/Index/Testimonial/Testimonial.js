import React from "react"
import { Carousel } from "react-bootstrap"
import * as style from "./Testimonial.module.css"
import config from "../../../../config"

export default function Testimonial() {
    return (
        <>
            <h2>Testimonial</h2>
            <Carousel variant="dark" className={style.container}>
                {config.testimonial.map((item, idx) => (
                    <Carousel.Item key={idx} className={style.item}>
                        <Carousel.Caption>
                            <h5>{item.title}</h5>
                            <p>{item.message}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
        </>
    )
}
