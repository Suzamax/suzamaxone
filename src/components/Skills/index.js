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
        }} id="skills">
            <Styled.h3>{t('skills.title')}</Styled.h3>
            <Styled.p>{t('skills.p1')}</Styled.p>
            <Styled.h4>{t('skills.subtitle')}</Styled.h4>
            <Styled.h5>{t('skills.systems.title')}</Styled.h5>
            <Styled.p>{t('skills.systems.linux')}</Styled.p>
            <Styled.p>{t('skills.systems.oses')}</Styled.p>
            <Styled.p>{t('skills.systems.virt')}</Styled.p>
            <Styled.p>{t('skills.systems.ops')}</Styled.p>

            <Styled.h5>{t('skills.frontend.title')}</Styled.h5>
            <Styled.h6>{t('skills.frontend.fwjs.title')}</Styled.h6>
            <Styled.ul>
            <Styled.li>{t('skills.frontend.fwjs.list.0')}</Styled.li>
            <Styled.li>{t('skills.frontend.fwjs.list.1')}</Styled.li>
            <Styled.li>{t('skills.frontend.fwjs.list.2')}</Styled.li>
            <Styled.li>{t('skills.frontend.fwjs.list.3')}</Styled.li>
            </Styled.ul>
            <Styled.h6>{t('skills.frontend.fwcss.title')}</Styled.h6>
            <Styled.ul>
                <Styled.li>{t('skills.frontend.fwcss.list.0')}</Styled.li>
                <Styled.li>{t('skills.frontend.fwcss.list.1')}</Styled.li>
                <Styled.li>{t('skills.frontend.fwcss.list.2')}</Styled.li>
                <Styled.li>{t('skills.frontend.fwcss.list.3')}</Styled.li>
            </Styled.ul>
            <Styled.h5>{t('skills.backend.title')}</Styled.h5>
            <Styled.p>{t('skills.backend.general')}</Styled.p>
            <Styled.h6>{t('skills.backend.php.title')}</Styled.h6>
            <Styled.p>{t('skills.backend.php.tech')}</Styled.p>
            <Styled.h6>{t('skills.backend.js.title')}</Styled.h6>
            <Styled.p>{t('skills.backend.js.tech')}</Styled.p>
            

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
