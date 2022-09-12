import Link from "next/link";
import styles from '../styles/Navbar.module.scss'
import Image from "next/image";

export default function Navbar(){
    return(
        <ul className={styles.navbar}>
            <Image src="/images/pokebola.png" width="30px" height="40px" alt="pkb" />
            <li>
                <Link href="/">Home</Link>
            </li>
            <li>
                <Link href="/about">About</Link>
            </li>
        </ul>
    )
}