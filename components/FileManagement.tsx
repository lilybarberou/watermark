'use client';

import { useRef, useState } from 'react';
import styled from 'styled-components';
import { checkFileClient } from '@functions/clientUtils';
import Api from '@functions/Api';

export default function FileManagement() {
    const file = useRef<File | null>(null);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState({ first: false, second: false });
    const [base64, setBase64] = useState('');

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        file.current = e.target.files![0];
        setLoading({ first: true, second: false });

        // CHECK FILE -----------
        const checkRes = await checkFileClient(file.current);
        if (checkRes) {
            setError(checkRes);
            return setLoading({ ...{ first: false, second: false } });
        } else setError('');

        // WAITS 1S -----------
        await new Promise((resolve) => {
            setTimeout(() => {
                resolve(setLoading({ ...{ first: false, second: true } }));
            }, 2000);
        });

        // SEND FILE TO SERVER -----------
        const formData = new FormData();
        formData.append('file', file.current);
        const res = await Api('/api', { method: 'POST', body: formData });
        const { base64, error } = res;

        if (error) {
            setError(error);
            return setLoading({ ...{ first: false, second: false } });
        } else setError('');

        // WAITS 1S -----------
        await new Promise((resolve) => {
            setTimeout(() => {
                resolve(setLoading({ ...{ first: false, second: false } }));
            }, 2000);
        });

        setBase64(base64);
    };

    const downloadFile = () => {
        if (!file.current) return;

        const a = document.createElement('a');
        a.href = base64;
        a.download = file.current.name;
        document.body.appendChild(a);
        a.click();
        a.remove();

        setBase64('');
    };

    if (loading.first)
        return (
            <S.Container>
                <p>Chargement du fichier...</p>
                <svg
                    style={{ width: 70, height: 100 }}
                    xmlns='http://www.w3.org/2000/svg'
                    width='44'
                    height='44'
                    viewBox='0 0 44 44'
                    stroke='var(--color-secondary)'
                >
                    <g fill='none' fillRule='evenodd' strokeWidth='2'>
                        <circle cx='22' cy='22' r='1'>
                            <animate
                                attributeName='r'
                                begin='0s'
                                dur='1.8s'
                                values='1; 20'
                                calcMode='spline'
                                keyTimes='0; 1'
                                keySplines='0.165, 0.84, 0.44, 1'
                                repeatCount='indefinite'
                            />
                            <animate
                                attributeName='stroke-opacity'
                                begin='0s'
                                dur='1.8s'
                                values='1; 0'
                                calcMode='spline'
                                keyTimes='0; 1'
                                keySplines='0.3, 0.61, 0.355, 1'
                                repeatCount='indefinite'
                            />
                        </circle>
                        <circle cx='22' cy='22' r='1'>
                            <animate
                                attributeName='r'
                                begin='-0.9s'
                                dur='1.8s'
                                values='1; 20'
                                calcMode='spline'
                                keyTimes='0; 1'
                                keySplines='0.165, 0.84, 0.44, 1'
                                repeatCount='indefinite'
                            />
                            <animate
                                attributeName='stroke-opacity'
                                begin='-0.9s'
                                dur='1.8s'
                                values='1; 0'
                                calcMode='spline'
                                keyTimes='0; 1'
                                keySplines='0.3, 0.61, 0.355, 1'
                                repeatCount='indefinite'
                            />
                        </circle>
                    </g>
                </svg>
            </S.Container>
        );
    if (loading.second)
        return (
            <S.Container>
                <p>On s&apos;en occupe, votre fichier arrive bientôt...</p>
                <svg
                    style={{ width: 70, height: 100, marginTop: -8 }}
                    xmlns='http://www.w3.org/2000/svg'
                    width='120'
                    height='30'
                    viewBox='0 0 120 30'
                    fill='var(--color-secondary)'
                >
                    <circle cx='15' cy='15' r='15'>
                        <animate attributeName='r' from='15' to='15' begin='0s' dur='0.8s' values='15;9;15' calcMode='linear' repeatCount='indefinite' />
                        <animate attributeName='fillOpacity' from='1' to='1' begin='0s' dur='0.8s' values='1;.5;1' calcMode='linear' repeatCount='indefinite' />
                    </circle>
                    <circle cx='60' cy='15' r='9' fillOpacity='0.3'>
                        <animate attributeName='r' from='9' to='9' begin='0s' dur='0.8s' values='9;15;9' calcMode='linear' repeatCount='indefinite' />
                        <animate
                            attributeName='fill-opacity'
                            from='0.5'
                            to='0.5'
                            begin='0s'
                            dur='0.8s'
                            values='.5;1;.5'
                            calcMode='linear'
                            repeatCount='indefinite'
                        />
                    </circle>
                    <circle cx='105' cy='15' r='15'>
                        <animate attributeName='r' from='15' to='15' begin='0s' dur='0.8s' values='15;9;15' calcMode='linear' repeatCount='indefinite' />
                        <animate
                            attributeName='fill-opacity'
                            from='1'
                            to='1'
                            begin='0s'
                            dur='0.8s'
                            values='1;.5;1'
                            calcMode='linear'
                            repeatCount='indefinite'
                        />
                    </circle>
                </svg>
            </S.Container>
        );
    if (base64)
        return (
            <S.Container>
                <p>Votre fichier est prêt !</p>
                <button onClick={downloadFile}>Télécharger le fichier</button>
            </S.Container>
        );
    return (
        <S.Container>
            <input id='file' type='file' onChange={handleFileChange} accept='.pdf, image/png, image/jpeg' />
            <label htmlFor='file'>Choisir un fichier</label>
            <span>+ ajouter des options</span>
            {error && <p className='error'>{error}</p>}
        </S.Container>
    );
}

const S: any = {};
S.Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 127px;
    width: fit-content;
    margin: auto;

    p {
        font-size: 1.125rem;
    }

    input {
        display: none;
    }

    label,
    button {
        padding: 12px 40px;
        width: fit-content;
        color: #fff;
        background: var(--color-primary);
        border-radius: 8px;
        font-weight: 500;
        cursor: pointer;
        border: none;
        font-size: 18px;
        font-family: var(--poppins);
    }

    button {
        margin-top: 10px;
    }

    .error {
        color: #df5454;
        margin-top: 15px;
        font-size: 16px;
        font-weight: 500;
    }

    span {
        color: var(--color-secondary);
        align-self: flex-start;
        font-size: 0.9rem;
        font-weight: 700;
        margin-top: 8px;
        cursor: pointer;
    }
`;
