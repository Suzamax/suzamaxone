import React, {Suspense} from "react";
import { useTranslation } from 'react-i18next';

function FooterComponent() {
    const { t } = useTranslation();

    return (
        <p>{t('footer.copy')} @<a href='https://twitter.com/suzamax'>suzamax</a></p>
    );
}
export default function Footer() {
    return (
        <Suspense fallback="...">
            <FooterComponent/>
        </Suspense>
    );
}
