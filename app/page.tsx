'use client';

import { useRef, useState } from 'react';
import styled from 'styled-components';
import { checkFileClient } from './functions/clientUtils';
import Api from './functions/Api';

export default function Home() {
    const inputFile = useRef<HTMLInputElement>(null);
    const [error, setError] = useState('');

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files![0];

        // CHECK FILE -----------
        const checkRes = await checkFileClient(file);
        if (checkRes) return setError(checkRes);
        else setError('');

        // SEND FILE TO SERVER -----------
        const formData = new FormData();
        formData.append('file', file);
        const res = await Api('/api', { method: 'POST', body: formData });
        const { base64, error } = res;
        if (error) return setError(error);
        else setError('');

        // DOWNLOAD FILE -----------
        const a = document.createElement('a');
        a.href = base64;
        a.download = file.name;
        document.body.appendChild(a);
        a.click();
        a.remove();

        e.target.value = '';
    };

    return (
        <S.Container>
            <input ref={inputFile} type='file' onChange={handleFileChange} accept='.pdf, image/png, image/jpeg' />
            {error && <p>{error}</p>}
        </S.Container>
    );
}

const S: any = {};
S.Container = styled.div``;
