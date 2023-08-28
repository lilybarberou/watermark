'use client';

import styled from 'styled-components';
import FileManagement from '@components/FileManagement';

export default function HomeHeader() {
    return (
        <S.Container>
            <h1>
                <span>Ajoutez</span> facilement un <span>filligrane</span> sur vos fichiers de façon <span>sécurisée</span>
            </h1>
            <FileManagement />
        </S.Container>
    );
}

const S: any = {};
S.Container = styled.div`
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 1000px;

    h1 {
        font-size: 3.2em;
        text-align: center;
        font-family: var(--outfit);
        margin-bottom: 30px;

        span {
            text-transform: capitalize;
            color: var(--color-secondary);
        }
    }

    input {
        display: none;
    }

    label {
        padding: 10px 20px;
        width: fit-content;
        color: #fff;
        background: var(--color-primary);
        border-radius: 5px;
        font-weight: 500;
    }
`;
