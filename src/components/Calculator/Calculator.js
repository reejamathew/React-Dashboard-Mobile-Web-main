import React, {useState} from 'react'
import './Calculator.css';

const Calculator = () => {

    const [result, setResult] = useState('')
    const [resultDone, setResultDone] = useState(false);
//if clicked on any number or operation appending it to previous result
    const handleClick = (e) => {
        if(!resultDone){
            
            setResult(result.concat(e.target.name));
        }else if(e.target.name === "+" || e.target.name === "-" || e.target.name === "*" || e.target.name === "/"){
            setResult(result.concat(e.target.name));
            setResultDone(false);
        }
        else {
            setResult(e.target.name);
            setResultDone(false);
        }
        
    }
//if clicking AC clearing everything
    const clear = () => {
        setResult("")
        setResultDone(false);
    }
//if clicked C deleting last clicked
    const backspace = () => {
        if(resultDone){
        setResult("")
        setResultDone(false);
        }
        else{
        setResult(result.slice(0, result.length - 1));
        setResultDone(false);
        }
    }
//using eval function to get the result
    const calculate = () => {
        try {
            setResult(eval(result).toString());
            setResultDone(true);
        } catch(err){
            setResult("Error")
            setResultDone(true);
        }
    }
//using button for numberations and operation to call onClick function
    return (
        <div className='Calculator container'>
            <form>
                <input type="text" value={result} className="form-control" />
            </form>
            <div className='keyPad'>
                <button onClick={clear} id="clear">AC</button>
                <button onClick={backspace} id="backspace">C</button>
                <button name="/" onClick={handleClick}>/</button>
                <button name="7" onClick={handleClick}>7</button>
                <button name="8" onClick={handleClick}>8</button>
                <button name="9" onClick={handleClick}>9</button>
                <button name="*" onClick={handleClick}>*</button>
                <button name="4" onClick={handleClick}>4</button>
                <button name="5" onClick={handleClick}>5</button>
                <button name="6" onClick={handleClick}>6</button>
                <button name="-" onClick={handleClick}>-</button>
                <button name="1" onClick={handleClick}>1</button>
                <button name="2" onClick={handleClick}>2</button>
                <button name="3" onClick={handleClick}>3</button>
                <button name="+" onClick={handleClick}>+</button>
                <button name="0" onClick={handleClick}>0</button>
                <button name="." onClick={handleClick}>.</button>
                <button onClick={calculate} id="result">=</button>
            </div>
        </div>
    )
}

export default Calculator;