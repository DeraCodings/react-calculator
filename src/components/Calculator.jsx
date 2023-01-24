import { useState } from 'react'
import { Buttons } from './subcomponents/Buttons'
import { Display } from './subcomponents/Display'

export const Calculator = () => {

    const [operand, setOperand] = useState(0);
    const [result, setResult] = useState('');
    const [finalResult, setFinalResult] = useState(0);

    function handleOperand(e) {
        let data = operand + String(e.target.innerText);
        if (data.startsWith('0')) {
            data = data.substring(1);
        }
        setOperand(data);
    };

    function handleResult(e) {
        setResult(operand + e.target.innerText);
    }

    const clearInput = () => {
        setOperand(0);
        setResult('');
    }

    function addOperator(e) {
        let operator = e.target.innerText;
        let expression = operand + operator;
        if (result) {
            expression = result + operator;
        }
        if (expression.match(/[+-/*]/) && expression.length > 1) {
            operator = '';
        }
        setOperand(expression);
        // setResult(expression);
        // if (expression.indexOf(operator) === 0) {
        //     setOperand(expression);
        // }
        // else {
        //     setOperand(expression.substring(expression.indexOf(operator)));
        //     setResult(operand + e.target.innerText);
        // }

    }

    function doCalculation(){
        let currentExpression = eval(operand);
        if (currentExpression < 1 && currentExpression > 0) {
            currentExpression = Number(currentExpression.toPrecision(3));
        }
        if (currentExpression === Infinity) {
            setResult('Math Error');
        }
        else {
            setResult(currentExpression);
        }
        setOperand(0);
    }

    return (
        <div className='calculator'>
            <>
                <Display operand={ result } />
                <Display operand={operand} />
            </>
            <Buttons handleOperand={handleOperand} handleResult={handleResult} doCalculation={doCalculation} addOperator={addOperator} clearInput={clearInput} />
        </div>
    )
}
