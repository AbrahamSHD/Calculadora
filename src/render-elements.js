
let inputValue = document.querySelector( '#result' )
let previusValue = ''
let currentValue = ''
let result = ''
let operator = ''

export const renderElement = ( element ) => {

    inputValue.value += element

}

export const clearInput = ( inputValue ) => {

    inputValue.value = ''

}

/**
 * 
 * @param { String } value 
 */
export const saveElement = ( value ) => {

    previusValue = Number(value)
    clearInput( inputValue )

}

export const restartOperation = () => {

    inputValue.value = ''
    previusValue = ''
    currentValue = ''
    operator = ''

}

/**
 * 
 * @param { String } symbol 
 */
export const selectOperator = ( symbol ) => {

    operator = symbol
    console.log( previusValue )
    return operator

}

export const generateReult = () => {

    currentValue = Number(inputValue.value)

    console.log( currentValue )

    clearInput( inputValue )
    
    switch( operator ){
        case '+':
            result = previusValue + currentValue
            break
        case '-':
            result = previusValue - currentValue
            break
        case '/':
            result = previusValue / currentValue
            break
        case 'x':
            result = previusValue * currentValue
            break
    }

    renderElement( result )

}