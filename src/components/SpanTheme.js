import React, { useReducer, createContext } from 'react'

// Khi muon su dung mot Context
// Co 3 Step:
// Step 1:   Khoi tao Context -> export Context vua duoc tao
// Step 2:   Dinh nghia Context -> ( State + Func to update State + return Provider )
// Step 3:   Tra ve Kho Chua Context ( Provider )

// Muon dung mot Reducer
// Co 2 Step
// Step 1: Dinh nghia reducer (Kho chua)
// Step 2: Tao mot function de thuc hien hanh dong
// Step 3: Khoi tao Kho chua voi syntax: 
//         const [state.dispatch] = useReducer(reducer, beginVablue: object)

export const SpanTheme = createContext(); // Provider Name

// Provider
const SpanThemeProvider = ({ children }) => {

// ----------- Create Reducer ----------------
    // Khoi tao bien ban dau: Object
    const INITIAL_VALUE = { isColor: false }

    // Dinh nghia reducer
    const spanReducer = ( spanState, spanAction) => {
        switch (spanAction.type) {
            case "CHANGE":
                return {
                    ...spanState,
                    isColor: spanAction.payload.isColor
                }
            default:
                return spanState
        }
    }

    // Function to Active
    const changeSpan = () => {
        dispatch ({
            type: 'CHANGE',
            payload: {
                isColor: spanState.isColor ? false : true
            }
        })
    }

    // Khoi Tao Reducer::
    const [ spanState, dispatch ] = useReducer( spanReducer, INITIAL_VALUE )

// -------------------------------------------------
    
    // Create Provider Data -> dropbox
    // const SpanThemeData = { spanState, changeSpan }
    
    // Return Provider
    return (
        <SpanTheme.Provider value={{ spanState, changeSpan }} >
            { children }
        </SpanTheme.Provider>
    );

}


export default SpanThemeProvider;