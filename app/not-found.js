import Link from 'next/link'

export default function NotFound() {
    return (
        <main className="not-found">
            <h1>Not Found</h1>
            <Link href="/" style={{ color: 'white', display: 'block', textAlign: 'center' }}>Return to Home</Link>
        </main>
    );
};
