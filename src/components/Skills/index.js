import React, {Suspense} from "react";
import { useTranslation } from 'react-i18next';

function SkillsComponent() {
    const { t } = useTranslation();

    return (
        <h1>{t('skills.title')}</h1>
    );
}

export default function Skills() {
    return (
        <Suspense fallback="...">
            <SkillsComponent/>
        </Suspense>
    );
}