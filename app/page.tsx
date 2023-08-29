'use client';

import { HomeCards } from '@containers/Home/HomeCards';
import { HomeFAQ } from '@containers/Home/HomeFAQ';
import HomeHeader from '@containers/Home/HomeHeader';
import styled from 'styled-components';

export default function Home() {
    return (
        <S.Container>
            <HomeHeader />
            <HomeCards />
            <HomeFAQ />
        </S.Container>
    );
}

const S: any = {};
S.Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
