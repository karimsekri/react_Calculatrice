const Result = (props : {value1: number, symbol: string, value2 : number  }) => {


    return (

        <div>
            <input type="text" name="resultInputName" id="resultInputId"  value={props.value1 + ' ' + props.symbol  +' ' + props.value2 } />
        </div>
    );
}

export default Result