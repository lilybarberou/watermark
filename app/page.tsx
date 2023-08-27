'use client';

import { useRef } from 'react';
import styled from 'styled-components';

export default function Home() {
    const inputFile = useRef<HTMLInputElement>(null);

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files![0];

        const formData = new FormData();
        formData.append('file', file);
        const res = await fetch('/api', { method: 'POST', body: formData });
        if (!res.ok) return;
        const { base64 } = await res.json();

        // download base64
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
        </S.Container>
    );
}

const S: any = {};
S.Container = styled.div``;
