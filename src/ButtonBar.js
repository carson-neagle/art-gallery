const ButtonBar = (props) => {
    return(
        <div>
            <button value={-5} onClick={props.handleIterate}>Far Back</button>
            <button value={-1} onClick={props.handleIterate}>Back</button>
            <button value={1} onClick={props.handleIterate}>Forward</button>
            <button value={5} onClick={props.handleIterate}>Far Out</button>
        </div>
    )
}

export default ButtonBar