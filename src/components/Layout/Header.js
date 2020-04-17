/** @jsx jsx */
import {Container, jsx, NavLink as Link } from "theme-ui";
import {useTranslation} from "react-i18next";
import Flag from "react-flags";

export default function Header() {
    const { t } = useTranslation();

    return (
        <header sx={{
        }}>
            <Container sx={{
                maxWidth: 960
            }}>
                <div
                    sx={{
                        display: 'grid',
                        gridGap: 2,
                        gridTemplateColumns: 'repeat(2, 1fr)',
                        px: 3,
                        py: 3,
                        alignItems: 'center',
                        borderBottom: '1px solid #fce8ea'
                    }}>
                    <div sx={{
                        display: 'flex',
                        alignItems: 'left',
                        justifyContent: 'flex-start',
                    }}>
                        <Link href="#" sx={{
                            textDecoration: 'none',
                            fontWeight: 700,
                            ml: 3,
                            py: 3,
                        }}>Suzamax</Link>
                    </div>
                    <div sx={{
                            display: 'flex',
                            ml: 'auto',
                            alignItems: 'right',
                            justifyContent: 'flex-end',
                        }}>
                        <div id="scrollers" >
                            <Link href="#skills" sx={{
                                textDecoration: 'none',
                                fontWeight: 700,
                                ml: 5,
                                py: 3,
                            }}>{t('skills.title')}</Link>
                            <Link href="#cv" sx={{
                                textDecoration: 'none',
                                fontWeight: 700,
                                ml: 4,
                                py: 3,
                            }}>{t('cv.title')}</Link>
                            <Link href="javascript:window.print()" sx={{
                                textDecoration: 'none',
                                fontWeight: 700,
                                ml: 4,
                                py: 3,
                            }}>{t('print')}</Link>
                            
                        </div>
                        <Link href={"/?lng="+ t('switchLang.lang')} sx={{
                            textDecoration: 'none',
                            fontWeight: 700,
                            ml: 4,
                            py: 3,
                        }}>
                            {t('switchLang.name')}
                        </Link>
                    </div>
                </div>
            </Container>
        </header>
    )
}