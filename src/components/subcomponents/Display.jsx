
export const Display = (props) => {

    const { operand } = props;

    return (
        <div className='display'>
            {operand}
        </div>
    )
}
