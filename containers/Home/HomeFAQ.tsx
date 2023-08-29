import styled, { css } from 'styled-components';
import questions from '@public/faq.json';
import { useState } from 'react';

export function HomeFAQ() {
    const [selected, setSelected] = useState<number>();

    const toggleSelected = (index: number) => {
        if (selected === index) {
            setSelected(undefined);
        } else {
            setSelected(index);
        }
    };

    return (
        <S.Container>
            <h2>Questions fréquemment posées</h2>
            {questions.map(({ question, answer }, index) => (
                <S.Question key={index} onClick={() => toggleSelected(index)} $active={selected === index}>
                    <div>
                        <h3>{question}</h3>
                        <span>{selected === index ? '-' : '+'}</span>
                    </div>
                    <p>{answer}</p>
                </S.Question>
            ))}
        </S.Container>
    );
}

const S: any = {};
S.Container = styled.div`
    padding-inline: var(--app-padding-inline);
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1000px;

    @media (max-width: 600px) {
        h2 {
            margin-top: 40px;
            margin-bottom: 50px;
        }
    }
`;

S.Question = styled.div<{ $active: boolean }>`
    display: flex;
    flex-direction: column;
    gap: 10px;
    border-bottom: 0.5px solid #a0a0a0;
    padding: 20px 0;

    &:last-child {
        border-bottom: none;
    }

    > div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 20px;
        cursor: pointer;

        span {
            color: var(--color-secondary);
            font-weight: 700;
            font-size: 1.5rem;
        }
    }

    p {
        overflow: hidden;
        max-height: 0;
        transition: max-height 0.3s ease-in-out;
    }

    ${({ $active }) =>
        $active &&
        css`
            p {
                max-height: 300px;
            }
        `}
`;
