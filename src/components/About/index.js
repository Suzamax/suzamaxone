/** @jsx jsx */
import { Suspense } from "react";
import { useTranslation } from 'react-i18next';
import { Container, jsx, Styled } from 'theme-ui';

function AboutComponent() {
    const { t } = useTranslation();

    return (
        <Container sx={{
            maxWidth: 960,
            mx: 'auto',
            px: 3,
            variant: 'container',
        }}>
            <Styled.p>{t('about.p1')}</Styled.p>
            <Styled.p>{t('about.p2')}</Styled.p>
            <Styled.p>{t('about.p3')}</Styled.p>
        </Container>
    );
}
export default function About() {
    return (
        <Suspense fallback="...">
            <AboutComponent/>
        </Suspense>
    );
}
