
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

            console.log( button.innerText )

            return numberButton.innerText

        })

    })

    operatorButton.forEach( ( button ) => {

        button.addEventListener( 'click', () => {

            console.log( button.innerText )

            return 

        })

    })

    equalButton.forEach( ( button ) => {

        button.addEventListener( 'click', () => {

            console.log( button.innerText )
            throw Error( 'No implementado' )

        })

    })

    deleteButton.forEach( ( button ) => {

        button.addEventListener( 'click', () => {

            console.log( button.innerText )
            throw Error( 'No implementado' )

        })

    })

}