import Link from 'next/link';

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer>
            <p>
                Créé par {`\t`}
                <Link href='https://lilybarberou.fr' legacyBehavior>
                    <a target='_blank' rel='noopener noreferrer'>
                        Lily Barberou
                    </a>
                </Link>
                {`\t`} © {currentYear}
            </p>
        </footer>
    );
}
