/** @jsx jsx */
import { Suspense } from "react";
import { useTranslation } from 'react-i18next';
import { Container, jsx, Styled } from 'theme-ui';

function CVComponent() {
    const { t } = useTranslation();

    return (
        <Container sx={{
            maxWidth: 960,
            mx: 'auto',
            px: 3,
            variant: 'container',
        }} id="cv">
            <Styled.h3>{t('cv.title')}</Styled.h3>
        </Container>
    );
}
export default function CV() {
    return (
        <Suspense fallback="...">
            <CVComponent/>
        </Suspense>
    );
}
