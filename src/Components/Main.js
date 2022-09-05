import React from 'react'
import Button from '@mui/material/Button';

const Main = () => {

  const buttonTexts = ['DEL', '÷', 1, 2, 3, '*', 4, 5, 6, '+', 7, 8, 9, '-', '.', 0,];

  return (
    <main>
        <div class="calculator-grid">
    <div class="output">
    <div data-previous-operand class="previous-operand"></div>
    <div data-current-operand class="current-operand"></div>
    </div>
    <Button class="span-two" variant="contained">AC</Button>

    {buttonTexts.map((buttonText) =>
    <Button variant='contained'>{buttonText}</Button> 
    )}

    <Button variant="contained" class="span-two">=</Button>

    </div>
    </main>
  )
}

export default Main