/** @jsx jsx */
import { jsx } from 'theme-ui'
import Footer from './footer'

export default props =>
    <div
        sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '95vh',
            variant: 'layout.root',
        }}>
        {props.children}
        <Footer
            sx={{
                width: '100%',
                variant: 'layout.footer',
            }}/>
    </div>