import styles from "./CommonHeader.module.scss"
import { IoMenuOutline } from "react-icons/io5";
import Link from "next/link";
import { Button } from "reactstrap";
import { useState } from "react";
import { Offcanvas, OffcanvasBody, OffcanvasHeader } from "reactstrap";

export default function CommonHeader() {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => setIsOpen(!isOpen)

    return (
        <nav>
            <Link href={"/"}>
                <img
                    src="/logo.png"
                    alt="Logo"
                    className={styles.logo} 
                />
            </Link>
            <Button
                className={styles.offcanvasButton}
                onClick={toggle}
            >
                <IoMenuOutline className={styles.offcanvasIcon} />
            </Button>

            <div>
                <Offcanvas
                    isOpen={isOpen}
                    toggle={toggle}
                    direction="end"
                >
                    <OffcanvasHeader toggle={toggle}>
                        Offcanvas
                    </OffcanvasHeader>
                    <OffcanvasBody>
                        <strong>
                            This is the Offcanvas body.
                        </strong>
                    </OffcanvasBody>
                </Offcanvas>
            </div>
        </nav>
    )
}