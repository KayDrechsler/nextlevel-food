'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './nav-link.module.css';

export default function NavLink({ href, label }) {
    const path = usePathname();
    const isActivePath = path === href;

    return (
        isActivePath ? (
            <strong
                className={`${styles.link} ${styles.active}`}
                aria-current={styles.active}
            >
                {label}
            </strong>
        ) : (
            <Link href={href} className={styles.link}>{label}</Link>
        )
    );
};
