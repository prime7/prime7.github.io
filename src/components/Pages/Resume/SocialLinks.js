import React from "react"
import { Card } from "react-bootstrap"
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa"

export default function SocialLinks() {
    return (
        <Card body className="mb-4">
            <div className="d-flex justify-content-around">
                <a
                    href="https://github.com/prime7"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FaGithub style={{ fontSize: "2.5rem" }} />
                </a>
                <a
                    href="https://twitter.com/toptechschool"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FaTwitter style={{ fontSize: "2.5rem" }} />
                </a>
                <a
                    href="https://www.linkedin.com/in/tarek5701/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FaLinkedin style={{ fontSize: "2.5rem" }} />
                </a>
            </div>
        </Card>
    )
}
