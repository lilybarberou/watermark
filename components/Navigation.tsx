import Link from 'next/link';

export function Navigation() {
    return (
        <nav>
            <Link href='/'>Accueil</Link>
            <Link href='/'>À propos</Link>
        </nav>
    );
}
