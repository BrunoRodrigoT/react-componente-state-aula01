//botoes de soma e subtração
import React, { useState } from "react"


const Botoes = () => {

    const [valor, setValor] = useState(0)

    function somar() {
        setValor(valor + 5)
    }
    function subtrair() {
        setValor(valor - 3)
    }
    return (
        <div>
            <button
                type="button"
                className="btn-somar"
                onClick={somar}
                >
                Somar
            </button>
            <button
                type="button"
                className="btn-subtrair"
                onClick={subtrair}
                >
                Subtrair
            </button>
            <p>Contador = <span>{valor}</span></p>
        </div>
    )
}
export default Botoes