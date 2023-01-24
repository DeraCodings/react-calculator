import './button.css'

const Button = props => {

    const { text, handleOperand } = props;

    return (
        <div className='button' onClick={handleOperand}>
            {text}
        </div>
    )
}


export default Button