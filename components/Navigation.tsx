import Link from 'next/link';
import styled from 'styled-components';

export function Navigation() {
    return (
        <S.Container>
            <Link href='/'>Accueil</Link>
            <Link href='/'>À propos</Link>
        </S.Container>
    );
}

const S: any = {};
S.Container = styled.nav`
    display: flex;
    padding: 20px;
    width: 100%;
    margin-bottom: 80px;

    a:first-child {
        margin-right: auto;
    }

    a::after {
        content: '';
        display: block;
        width: 0;
        height: 5px;
        background: var(--color-secondary);
        transition: width 0.3s;
    }

    a:hover::after {
        width: 100%;
    }
`;
