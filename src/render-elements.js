
const inputNumber = document.querySelector( '#result' )
let result = document.querySelector( '#result' )
let prevOperation = ''
let currentOperation = ''
let operation = undefined

/**
 * @param { String } elementNumber 
 */
export const addElemets = ( elementNumber ) => {

    if( !elementNumber ) throw Error( 'Introduce un número' )

    currentOperation = currentOperation.toString() + elementNumber.toString()
    renderNumbers()

}

export const renderNumbers = () => {

    result.value = currentOperation

}

export const clearInput = () => {

    result.value = ''
    currentOperation = ''
    operation = undefined

}