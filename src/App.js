import './App.css';
import React, { useState } from "react"

function App() {
  const [output, setOutput] = useState('');

  document.addEventListener('keydown', (e) => {
    console.log(e)
    e.cancelBubble=true
    e.preventDefault()
    e.stopPropagation()
    console.log(e.key)
  });

  function calculateResult() {
    let numbers = [];
    let tempString = '';
    for (let i = 0; i < output.length; i++) {
      if (!isNaN(parseInt(output[i]))) {
        tempString += output[i];
      } else {
        numbers.push(tempString);
        tempString = '';
        numbers.push(output[i]);
      }
    }
    numbers.push(tempString);

    let result = !isNaN(parseInt(numbers[0])) ? parseInt(numbers[0]) : parseInt(output);
    for (let i = 1; i < numbers.length; i+=2) {

      if (numbers[i] === '-') {
        result = result - parseInt(numbers[i + 1]);
        console.log(result)
      } else if (numbers[i] === '+') {
        result = result + parseInt(numbers[i + 1]);
      } else if (numbers[i] === '*') {
        result = result * parseInt(numbers[i + 1]);
      } else if (numbers[i] === '/') {
        result = result / parseInt(numbers[i + 1]);
    }
    setOutput(JSON.stringify(result));
  }
}

  function buttonClicked(clickedButton) {

    if(clickedButton === '0' && output.length > 0){
      if (output.split('').every(char => char === '0')) {
        setOutput('0');
        return;
      }
    }

    if(
      clickedButton !== '0' &&
      output.length > 0 &&
      !['+', '-', '*', '/'].includes(clickedButton)
    ){
      if (output.split('').every(char => char === '0')) {
        setOutput(clickedButton);
        return;
      }
    }

    if (clickedButton !== '=') {
      setOutput((oldValue) => {
        return oldValue + clickedButton;
      });
    } else if (clickedButton === '=') {
      calculateResult();
    }
  }

  let validKeys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '+', '-', '/', '*', '=']

  return (
    <div>
      {/* input/output box */}
      <div className="flex">
        <div className="output">
          {output && (
            <div>
              <h1 className="outputText" style={{ color: 'white' }}>{output}</h1>
            </div>
          )}
        </div>
      </div>
      {/* top layer */}
      <div  className="flex">
        <div>
          <div onClick={() => setOutput('')} className="clear div">
            <h1>clear</h1>
          </div>
        </div>
            <div className="div" onClick={() => buttonClicked('0')}>
              <h1>0</h1>
          </div>
        <div>
          <div onClick={() => buttonClicked('=')} className="symbol div">
            <h1 className="symbolText">=</h1>
          </div>
        </div>
        <div>
          <div onClick={() => buttonClicked('+')} className="symbol div">
            <h1 className="symbolText">+</h1>
          </div>
        </div>
      </div>
      {/* 2nd layer */}
      <div  className="flex">
        <div>
          <div className="div" onClick={() => buttonClicked('7')}>
            <h1>7</h1>
          </div>
        </div>
        <div>
          <div className="div" onClick={() => buttonClicked('8')}>
            <h1>8</h1>
          </div> 
        </div>
        <div>
          <div className="div" onClick={() => buttonClicked('9')}>
            <h1>9</h1>
          </div>
        </div>
        <div>
          <div onClick={() => buttonClicked('-')} className="symbol div">
            <h1 className="symbolText">-</h1>
          </div>
        </div>
      </div>
      {/* 3rd layer */}
      <div  className="flex">
        <div>
          <div className="div" onClick={() => buttonClicked('4')}>
            <h1>4</h1>
          </div>
        </div>
        <div>
          <div className="div" onClick={() => buttonClicked('5')}>
           <h1>5</h1>
          </div> 
        </div>
        <div>
          <div className="div" onClick={() => buttonClicked('6')}>
            <h1>6</h1>
          </div>
        </div>
        <div>
          <div onClick={() => buttonClicked('*')} className="symbol div">
            <h1 className="symbolText">×</h1>
          </div>
        </div>
      </div>
      {/* bottom layer */}
      <div  className="flex">
        <div>
          <div className="div"onClick={() => buttonClicked('1')}>
          <h1>1</h1>
          </div>
        </div>
        <div>
          <div className="div" onClick={() => buttonClicked('2')}>
            <h1>2</h1>
          </div> 
        </div>
        <div>
          <div className="div" onClick={() => buttonClicked('3')}>
            <h1>3</h1>
          </div>
        </div>
        <div>
          <div onClick={() => buttonClicked('/')} className="symbol div" >
            <h1 className="symbolText">÷</h1>
          </div>
        </div>
      </div>
    </div>
  );
          }


  export default App;