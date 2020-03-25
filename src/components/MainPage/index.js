import React, { Suspense } from "react";
import { useTranslation } from 'react-i18next';
import { Container, Styled } from 'theme-ui';
import logo from '../../assets/logo192.png';

function MainPageComponent() {
    const { t } = useTranslation();

    return (
        <main>
            <Container
                sx={{
                    maxWidth: 960,
                    mx: 'auto',
                    px: 3,
                    variant: 'container',
            }}>
                <img src={logo}/>
                <Styled.h1>{t('mainpage.title')}</Styled.h1>
                <Styled.h2>{t('mainpage.subtitle')}</Styled.h2>
            </Container>
            <Container>

            </Container>
        </main>
    );
}

export default function MainPage() {
    return (
        <Suspense fallback="...">
            <MainPageComponent/>
        </Suspense>
    );
}