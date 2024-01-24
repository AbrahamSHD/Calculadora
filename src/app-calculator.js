import { addElemets, clearInput, } from "./render-elements"

const ElementIds = {

    elementsNumber: '.button-number',
    elementsOperator: '.button-calc',
    elementEqual: '#button-Equal',
    elementDelete: '#button-Delete',

}

export const Calculator = () => {

    
    const numberButton = document.querySelectorAll( ElementIds.elementsNumber )
    const operatorButton = document.querySelectorAll( ElementIds.elementsOperator )
    const equalButton = document.querySelectorAll( ElementIds.elementEqual )
    const deleteButton = document.querySelectorAll( ElementIds.elementDelete )

    numberButton.forEach( ( button ) => {

        button.addEventListener( 'click', () => {

            addElemets( button.innerText )

        })

    })

    operatorButton.forEach( ( button ) => {

        button.addEventListener( 'click', () => {

            addElemets( button.innerText )

        })

    })

    equalButton.forEach( ( button ) => {

        button.addEventListener( 'click', () => {

            throw Error( 'No implementado' )

            calcResult()
            renderResult()

        })

    })

    deleteButton.forEach( ( button ) => {

        button.addEventListener( 'click', () => {

            clearInput()

        })

    })

}