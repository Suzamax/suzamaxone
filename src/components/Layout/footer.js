import React, {Suspense} from "react";
import { useTranslation } from 'react-i18next';
import { Container } from 'theme-ui';

function FooterComponent() {
    const { t } = useTranslation();

    return (
        <Container sx={{
            maxWidth: 960,
            mx: 'auto',
            px: 3,
            variant: 'container',
        }}>
            <p>{t('footer.copy')} @<a href='https://twitter.com/suzamax'>suzamax</a></p>
        </Container>
    );
}
export default function Footer() {
    return (
        <Suspense fallback="...">
            <FooterComponent/>
        </Suspense>
    );
}
