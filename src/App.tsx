import { useCallback, useEffect, useMemo, useState } from 'react'
import './App.scss'
import Result from './components/Result'
import Chiffre from './components/Chiffre'

function App() {
  const [resultGaucheP, setResultGaucheP] = useState(0)
  const [resultDroiteP, setResultDroiteP] = useState(0)
  const [resultFinalP, setResultFinalP] = useState(0)
  const [symbolP, setSymbolP] = useState("")
  const [symbolEgaleP, setSymbolEgaleP] = useState("")




  const afficherNumber = useCallback((nbreP: number) => {
    if (symbolP === "") {
      setResultGaucheP(resultGaucheP != 0 ? (resultGaucheP * 10 + nbreP):(resultFinalP * 10 + nbreP))
    } else if (symbolP != "" ) {
        setResultDroiteP(resultDroiteP * 10 + nbreP)
    }
    else if (symbolEgaleP === "=") {
        setResultFinalP(resultFinalP * 10 + nbreP)     
    }
  }, [resultGaucheP, resultDroiteP, resultFinalP, symbolP, symbolEgaleP])


  const afficherSigne = useCallback((symbP: string) => {
    setSymbolP(symbP)
    // setResultGaucheP(resultFinalP)
  }, [symbolP])

  const faireLeCalcul = useCallback(() => {
    setSymbolEgaleP("=")
    if (symbolP === "+") {     
      setResultFinalP(resultGaucheP + resultDroiteP)
      setResultGaucheP(resultFinalP)
      setResultDroiteP(0)
      setSymbolP("")
      
    } else if (symbolP === "-") {
      setResultFinalP(resultGaucheP - resultDroiteP)
      setResultGaucheP(resultFinalP)
      setResultDroiteP(0)
      setSymbolP("")
      setSymbolEgaleP("")
    }
  }, [resultGaucheP, resultDroiteP, symbolP, symbolEgaleP,resultFinalP])

  const effacer = useCallback(() => {
    setResultFinalP(0)
    setResultGaucheP(0)
    setResultDroiteP(0)
  }, [])

  return (
    <>
      <Result value1={resultGaucheP} symbol={symbolP} value2={resultDroiteP} symbolEgale='' value3={resultFinalP} />
      <div className='chiffre'>
        <Chiffre numberP={0} onClickNumber={afficherNumber} />
        <Chiffre numberP={1} onClickNumber={afficherNumber} />
        <Chiffre numberP={2} onClickNumber={afficherNumber} />
        <Chiffre numberP={3} onClickNumber={afficherNumber} />
        <Chiffre numberP={4} onClickNumber={afficherNumber} />
        <Chiffre numberP={5} onClickNumber={afficherNumber} />
        <Chiffre numberP={6} onClickNumber={afficherNumber} />
        <Chiffre numberP={7} onClickNumber={afficherNumber} />
        <Chiffre numberP={8} onClickNumber={afficherNumber} />
        <Chiffre numberP={9} onClickNumber={afficherNumber} />
      </div>
      <div className='buttonSigne'>
        <button type="button" onClick={() => afficherSigne("-")}>-</button>
        <button type="button" onClick={() => afficherSigne("+")}>+</button>
        <button type="button" onClick={() => faireLeCalcul()}>=</button>
        <button type="button" onClick={() => effacer()}>C</button>
      </div>

    </>
  )
}

export default App
