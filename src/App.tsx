import { useCallback, useMemo, useState } from 'react'
import './App.scss'
import Result from './components/Result'
import Chiffre from './components/Chiffre'

function App() {
  const [resultGaucheP, setResultGaucheP] = useState(0)
  const [resultDroiteP, setResultDroiteP] = useState(0) 
  const [symbolP, setSymbolP] = useState("")

  const afficherNumber = useCallback((nbreP:number) => {
    setResultGaucheP(resultGaucheP*10+nbreP)
  },[resultGaucheP])

  const afficherSigne = useCallback((symbP:string) => {
    setSymbolP(symbP)
  },[symbolP])

  const faireLeCalcul = useMemo(() => {
    if (symbolP === "+") {
      setResultDroiteP(resultGaucheP+resultDroiteP)
    } else if (symbolP === "-") {
      setResultDroiteP(resultGaucheP-resultDroiteP)
    }
  },[resultGaucheP, resultDroiteP, symbolP])


  return (
    <>
      <Result value1={resultGaucheP} symbol={symbolP}  value2={resultDroiteP} />
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
        <button type="button" onClick={faireLeCalcul()}>=</button>
      </div>

    </>
  )
}

export default App
