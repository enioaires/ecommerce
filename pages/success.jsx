import React, { useEffect } from 'react'
import Link from 'next/link'
import { BsBagCheckFill } from 'react-icons/bs'
import { runFireworks } from '../lib/utils'
import { useStateContext } from '../context/StateContext'

const Success = () => {
    const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext()

    useEffect(() => {
        localStorage.clear();
        setCartItems([])
        setTotalPrice(0)
        setTotalQuantities(0)
        runFireworks()
    }, [])


    return (
        <div className="success-wrapper">
            <div className="success">
                <p className="icon">
                    <BsBagCheckFill />
                </p>
                <h2>Obrigado pela compra!</h2>
                <p className="email-msg">Verifique seu e-mail para visualizar seu recibo.</p>
                <p className="description">
                    Se possuir alguma dúvida, envia um e-mail para
                    <a className="email" href="mailto:enio.aires@hotmail.com">
                        enio.aires@hotmail.com
                    </a>
                </p>
                <Link href='/'>
                    <button
                        type="button"
                        width="300px"
                        className="btn"
                    >
                        Continuar comprando
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Success