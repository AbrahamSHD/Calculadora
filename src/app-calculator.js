import { saveElement, restartOperation, renderElement, selectOperator, generateReult } from "./render-elements"

const ElementIds = {

    elementsNumber: '.button-number',
    elementsOperator: '.button-calc',
    elementEqual: '#button-Equal',
    elementDelete: '#button-Delete',
    elementInput: '#result',

}

export const Calculator = () => {

    
    const numberButton = document.querySelectorAll( ElementIds.elementsNumber )
    const operatorButton = document.querySelectorAll( ElementIds.elementsOperator )
    const equalButton = document.querySelector( ElementIds.elementEqual )
    const deleteButton = document.querySelector( ElementIds.elementDelete )
    const inputValue = document.querySelector( ElementIds.elementInput )

    let operator = selectOperator

    // clearInput()

    numberButton.forEach( ( button ) => {

        button.addEventListener( 'click', () => {

            renderElement( button.innerText )

        })

    })

    operatorButton.forEach( ( button ) => {

        button.addEventListener( 'click', () => {

            saveElement( inputValue.value )
            selectOperator( button.innerText )
            console.log( button.innerText )

        })

    })

    equalButton.addEventListener( 'click', () => {
        generateReult( operator )

        })

    deleteButton.addEventListener( 'click', () => {

            restartOperation( inputValue )

        })
}