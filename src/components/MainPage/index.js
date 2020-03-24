import React, { Suspense } from "react";
import { useTranslation } from 'react-i18next';
import { Container } from 'theme-ui';

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
                <h1>{t('mainpage.title')}</h1>
                <h2>{t('mainpage.subtitle')}</h2>
            </Container>
            <Container>
                lmao
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