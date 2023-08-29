import type { Metadata } from 'next';
import { Poppins, Outfit } from 'next/font/google';
import StyledComponentsRegistry from '@lib/registry';
import { Navigation } from '@components/Navigation';
import './globals.scss';
import { Footer } from '@components/Footer';

const outfit = Outfit({ subsets: ['latin'], weight: ['700', '900'], variable: '--outfit' });
const poppins = Poppins({ weight: ['400', '500'], subsets: ['latin'], variable: '--poppins' });

export const metadata: Metadata = {
    title: 'Fillifree | Protégez vos documents',
    description: 'Ajoutez gratuitement un filigrane à vos documents, de façon simple et sécurisée.',
    openGraph: {
        type: 'website',
        locale: 'fr_FR',
        url: 'https://fillifree.lilybarberou.fr',
        title: 'Fillifree | Protégez vos documents',
        description: 'Ajoutez gratuitement un filigrane à vos documents, de façon simple et sécurisée.',
        images: [
            {
                url: 'https://api.lilybarberou.fr/assets/screenshots/fillifree.lilybarberou.fr/fillifree.lilybarberou.fr.png',
            },
        ],
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='fr'>
            <body className={`${poppins.className} ${poppins.variable} ${outfit.variable}`}>
                <StyledComponentsRegistry>
                    <Navigation />
                    {children}
                    <Footer />
                </StyledComponentsRegistry>
            </body>
        </html>
    );
}
