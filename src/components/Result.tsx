const Result = (props: { value1: number, symbol: string, value2: number, value3: number, symbolEgale: string }) => {

    // console.log ("symbolEgale", props.symbolEgale)
    console.log ("value1", props.value1)
    console.log ("value2", props.value2)
    console.log ("value3", props.value3.toString())
    console.log ("symbol", props.symbol)
    
    let valueFinale = "" ;

    if (props.value1 != 0 && props.symbol === "" && props.value2 === 0  && props.symbolEgale === "") {
       
        valueFinale = props.value1.toString()
    }
    else if (props.value1 != 0 && props.symbol != "" && props.value2 === 0  && props.symbolEgale === "" ) {
        valueFinale = props.value1.toString() + props.symbol
    }
    else if (props.value1 != 0 && props.symbol != "" && props.value2 != 0  && props.value3 === 0) {
        valueFinale = props.value1.toString() + props.symbol + props.value2.toString() 
    }else if (props.value3!=0) {
        valueFinale = props.value3.toString()
    }

    console.log ("valueFinale", valueFinale)   
        return (

            <div>
                {/* <input type="text" name="resultInputName" id="resultInputId" value={props.value1 + ' ' + props.symbol + ' ' + props.value2 + ' ' + props.symbolEgale + ' ' + props.value3} /> */}
                <input type="text" name="resultInputName" id="resultInputId" value={valueFinale} />
            </div>
        );
   
}

export default Result