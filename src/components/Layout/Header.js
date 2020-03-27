/** @jsx jsx */
import {Container, jsx} from "theme-ui";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";

export default function Header() {
    const { t } = useTranslation();

    let d = new Date().getHours();
    let night = d > 19 || d < 7;

    return (
        <header sx={{
            bg: 'muted',
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
                        variant: 'styles.header',
                    }}>
                    <div sx={{
                        display: 'flex',
                        alignItems: 'left',
                        justifyContent: 'flex-start',
                    }}>
                        <Link to="/"
                              css={{
                                  background: night ? 'linear-gradient(45deg, rgba(255,255,255,1) 0%, rgba(233,233,233,1) 35%, rgba(210,210,210,1) 100%)' : 'linear-gradient(90deg, rgba(253,29,29,1) 33%, rgba(252,176,69,1) 100%)',
                                  '-webkit-background-clip': 'text',
                                  color: 'transparent'
                              }} sx={{
                            variant: 'styles.navlink',
                            px: 3,
                            py: 1,
                            textTransform: 'uppercase',
                            textDecoration: 'none',
                            letterSpacing: '0.1em',
                            border: '4px solid transparent',
                            borderImage: night ? 'linear-gradient(45deg, rgba(180,180,180,1) 0%, rgba(233,233,233,1) 35%, rgba(255,255,255,1) 100%) 1 round' : 'linear-gradient(90deg, rgba(253,29,29,1) 33%, rgba(252,176,69,1) 100%) 1 round',
                            color: 'primary'
                        }}>Suzamax</Link>
                    </div>
                    <div sx={{
                        display: 'flex',
                        ml: 'auto',
                        alignItems: 'right',
                        justifyContent: 'flex-end',
                    }}>
                        <Link to="/skills" sx={{
                            variant: 'styles.navlink',
                            textDecoration: 'none',
                            color: night ? 'white' : 'primary',
                            fontWeight: 700,
                            ml: 3,
                            py: 3,
                        }}>{t('skills.title')}</Link>
                        <Link to="/cv" sx={{
                            variant: 'styles.navlink',
                            textDecoration: 'none',
                            color: night ? 'white' : 'primary',
                            fontWeight: 700,
                            ml: 3,
                            py: 3,
                        }}>Curriculum Vitae</Link>
                        <Link to="/about" sx={{
                            variant: 'styles.navlink',
                            textDecoration: 'none',
                            color: night ? 'white' : 'primary',
                            fontWeight: 700,
                            ml: 3,
                            py: 3,
                        }}>{t('about.title')}</Link>
                    </div>
                </div>
            </Container>
        </header>
    )
}