/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import styles from '../../styles/logo.module.scss';

const Logo = ({ marginBottom }: { marginBottom?: number }) => <Link href='/'>
    <img src="/img/logo.svg" alt="logo" className={styles.logo} style={{ marginBottom }} />
</Link>

export default Logo;