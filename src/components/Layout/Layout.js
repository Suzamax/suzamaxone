/** @jsx jsx */
import { jsx } from 'theme-ui';

export default props =>
    <div
        sx={{
            display: 'flex',
            flexDirection: 'column',
            variant: 'layout.root',
        }}>
        {props.children}
    </div>