'use client';

export default function Error({ error }) {
    return (
        <main className="error">
            <h1 style={{ color: 'white', textAlign: 'center' }}>An error occurred!</h1>
            <p style={{ color: 'white', textAlign: 'center' }}>Failed to create meal.</p>
        </main>
    );
}