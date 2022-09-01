import React from 'react'
import Button from '@mui/material/Button';

const Main = () => {
  return (
    <main>
        <div class="calculator-grid">
    <div class="output">
    <div data-previous-operand class="previous-operand"></div>
    <div data-current-operand class="current-operand"></div>
    </div>
    <Button class="span-two" variant="contained">AC</Button>
    <Button variant="contained">DEL</Button>
    <Button variant="contained">÷</Button>
    <Button variant="contained">1</Button>
    <Button variant="contained">2</Button>
    <Button variant="contained">3</Button>
    <Button variant="contained">*</Button>
    <Button variant="contained">4</Button>
    <Button variant="contained">5</Button>
    <Button variant="contained">6</Button>
    <Button variant="contained">+</Button>
    <Button variant="contained">7</Button>
    <Button variant="contained">8</Button>
    <Button variant="contained">9</Button>
    <Button variant="contained">-</Button>
    <Button variant="contained">.</Button>
    <Button variant="contained">0</Button>
    <Button variant="contained" class="span-two">=</Button>
    </div>
    </main>
  )
}

export default Main