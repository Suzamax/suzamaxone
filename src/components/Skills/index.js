/** @jsx jsx */
import { Suspense } from "react";
import { useTranslation } from 'react-i18next';
import { Container, jsx, Styled } from 'theme-ui';

function SkillsComponent() {
    const { t } = useTranslation();

    return (
        <Container sx={{
            maxWidth: 960,
            mx: 'auto',
            px: 3,
            variant: 'container',
        }}>
            <Styled.h1>{t('skills.title')}</Styled.h1>
        </Container>
    );
}
export default function Skills() {
    return (
        <Suspense fallback="...">
            <SkillsComponent/>
        </Suspense>
    );
}
