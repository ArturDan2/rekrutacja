import React, { useState } from 'react'
import './PanelStyles.scss'



const Panel = () => {
    const [cardInfo, setCardInfo] = useState(
        {
            email: '',
            card_number: '',
            expire_date: '',
            cvc: '',
            name: '',
            country: '',
        }
    )
    
    const [validated, setValidated] = useState(false)

    const onChangeHandler = (e) => {
        setCardInfo({...cardInfo, [e.target.name]: e.target.value});
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        alert(JSON.stringify(cardInfo));
        setValidated(true);
        setTimeout(()=>setValidated(false), 4500);
        setTimeout(() => e.target.reset(), 2000)
        console.log(cardInfo)
      }

    const onlyNumberHandler = (e) => {
        e.target.value = e.target.value.replace(/[^0-9]/g, '');
    }

    const formatNumber = (every_nth_number, symbol) => (e) => {
            let foo = e.target.value.split(symbol).join("");
            if (foo.length > 0) {
              foo = foo.match(new RegExp(`.{1,${every_nth_number}}`, 'g')).join(symbol);
            }
            e.target.value = foo;
    }

  return (
    <div className='main-container'>
        <h1>Pay<span>Me</span></h1>
        <form onSubmit={onSubmitHandler} className={`form ${validated ? 'validated' : ''}`}>
        <section>
            <label htmlFor='email'>Email</label>
            <input onChange={onChangeHandler} name="email" required maxLength="100" type='email'></input>
        </section>
        <section>
            <label htmlFor='card_information'>Card Information</label>
            <input onInput={onlyNumberHandler} onKeyUp={formatNumber(4,"-")} onChange={onChangeHandler} name="card_number" placeholder="1234 1234 1234 1234" required minLength="19" maxLength={"19"} type='text'></input>
            <div className='row-inputs'>
                <input onInput={onlyNumberHandler} onKeyUp={formatNumber(2,"/")} onChange={onChangeHandler} name="expire_date" required placeholder="MM/YY" minLength="5" maxLength="5" type='text'></input>
                <input onInput={onlyNumberHandler} onChange={onChangeHandler} name="cvc" required placeholder="CVC" minLength="3" maxLength="3" type='text'></input>
            </div>
        </section>
        <section>
            <label htmlFor="name">Name on card</label>
            <input onChange={onChangeHandler} required name="name" type='text'></input>
        </section>
        <section>
            <label htmlFor="country">Country or region</label>
            <select name="country" required onChange={onChangeHandler}>
                <option value=""></option>
                <option value="Poland">Poland</option>
                <option value="Germany">Germany</option>
                <option value="Czech Republic">Czech Republic</option>
                <option value="Ukraine">Ukraine</option>
            </select>
        </section>
        <input type="submit" value="Pay"></input>
        </form>
    </div>
  )
}

export default Panel