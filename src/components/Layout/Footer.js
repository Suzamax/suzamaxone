/** @jsx jsx */
import { Suspense } from "react";
import { useTranslation } from 'react-i18next';
import { Container, jsx } from 'theme-ui';

function FooterComponent() {
    const { t } = useTranslation();
    let d = new Date().getHours();
    let night = d > 18 || d < 7;

    return (
        <footer>
            <Container sx={{
                maxWidth: 960,
                mx: 'auto',
                px: 3,
                variant: 'container',
            }}>
                <p>{t('footer.copy')}</p>
            </Container>
        </footer>
    );
}
export default function Footer() {
    return (
        <Suspense fallback="...">
            <FooterComponent/>
        </Suspense>
    );
}
