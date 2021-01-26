import React, { useContext } from 'react';
import { SpanTheme } from './SpanTheme';

const SpanThemeButton = () => {

    // Catch Context Provider Data
    const { changeSpan } = useContext(SpanTheme)
    // console.log(changeSpan);
    
    
    return (
        <div className="span-theme-btn" onClick={changeSpan} >
            <button>Set Span Color</button>
        </div>
    );

}

export default SpanThemeButton;
