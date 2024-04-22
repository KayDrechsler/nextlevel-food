'use client';

export default function Error({ error }) {
    return (
        <main className="error">
            <h1 style={{ color: 'white', textAlign: 'center' }}>Error</h1>
            <p style={{ color: 'white', textAlign: 'center' }}>An unexpected error occurred. Please try again later.</p>
            <p style={{ color: 'white', textAlign: 'center' }}>{error.message}</p>
        </main>
    );
}