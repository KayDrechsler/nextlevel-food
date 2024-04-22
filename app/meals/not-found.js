import Link from 'next/link';

export default function NotFound() {
    return (
        <main className="not-found">
            <h1>Meal not found</h1>
            <p style={{ color: 'white', textAlign: 'center' }}>The requested meal was not found.</p>
            <Link href="/" style={{ color: 'white', display: 'block', textAlign: 'center' }}>Return to Home</Link>
        </main>
    );
}