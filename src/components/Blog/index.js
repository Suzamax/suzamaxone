/** @jsx jsx */
import { Suspense } from "react";
import { useTranslation } from 'react-i18next';
import { Container, jsx, Styled } from 'theme-ui';
import {
    HashRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
} from "react-router-dom";

function BlogComponent() {
    const { t } = useTranslation();

    return (
        <Container sx={{
            maxWidth: 960,
            mx: 'auto',
            px: 3,
            variant: 'container',
        }}>
            <Styled.h1>{t('blog.title')}</Styled.h1>

        </Container>
    );
}
export default function Blog() {
    return (
        <Suspense fallback="...">
            <BlogComponent/>
        </Suspense>
    );
}
