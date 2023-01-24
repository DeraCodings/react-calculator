// import { buttons } from './microcomponents/text'
import Button from './microcomponents/Button'

export const Buttons = (props) => {

    const { handleOperand, handleResult, clearInput, addOperator, doCalculation } = props;

    return (
        <div className='buttons'>
            {/* {buttons.map(button => (
                <Button key={button.id} text={ button.text } handleOperand={handleOperand} handleResult={handleResult} />
            ))} */}

            <Button text='AC' handleOperand={clearInput}  />
            <Button text='/' handleOperand={addOperator}  />
            <Button text='*' handleOperand={addOperator}  />
            <Button text={7} handleOperand={handleOperand}  />
            <Button text={8} handleOperand={handleOperand}  />
            <Button text={9} handleOperand={handleOperand}  />
            <Button text='-' handleOperand={addOperator}  />
            <Button text={4} handleOperand={handleOperand}  />
            <Button text={5} handleOperand={handleOperand}  />
            <Button text={6} handleOperand={handleOperand}  />
            <Button text='+' handleOperand={addOperator}  />
            <Button text={1} handleOperand={handleOperand}  />
            <Button text={2} handleOperand={handleOperand}  />
            <Button text={3} handleOperand={handleOperand}  />
            <Button text='=' handleOperand={doCalculation}  />
            <Button text={0} handleOperand={handleOperand}  />
            <Button text='.' handleOperand={handleOperand}  />
        </div>
    )
}
