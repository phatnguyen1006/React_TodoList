import React, { useContext } from 'react';
import Typography from '@material-ui/core/Typography';

// import Provider
import { SpanTheme } from './SpanTheme'

const Header = () => {

    // Catch Context
    const { spanState } = useContext(SpanTheme)
    // console.log(spanState)
    const { isColor } =  spanState ;
    // Assign to Style
    // console.log(color);

    return (
        <Typography className='h1' component='h1' variant='h2'>
            Todos
            <span style={{ color: isColor ? "white" : "blue" }} >Get things done, one item at a time.</span>
        </Typography>
    )
}

export default Header;