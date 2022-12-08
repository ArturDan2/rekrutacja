import React, { useState } from 'react'
import './PanelStyles.scss'



const Panel = () => {
    const [cardInfo, setCardInfo] = useState(
        {
            email: '',
            cardnumber: '',
            expiredate: '',
            cvc: '',
            name: '',
            country: '',
        }
    )
    
    const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log(cardInfo)
      }
    

  return (
    <div className='main-container'>
        <h1>Pay<span>Me</span></h1>
        <form onSubmit={onSubmitHandler} className='form'>
        <section>
            <label htmlFor='Email'>Email</label>
            <input onChange={ (e) => {setCardInfo({...cardInfo, email: e.target.value })}} required maxlength="20" type='email'></input>
        </section>
        <section>
            <label htmlFor='Email'>Card Information</label>
            <input onChange={ (e) => {setCardInfo({...cardInfo, cardnumber: e.target.value })}} placeholder="1234 1234 1234 1234" required maxlength="16" type='text'></input>
            <div className='row-inputs'>
                <input onChange={ (e) => {setCardInfo({...cardInfo, expiredate: e.target.value })}} required placeholder="MM/YY" maxlength="5" type='text'></input>
                <input onChange={ (e) => {setCardInfo({...cardInfo, cvc: e.target.value })}} required placeholder="CVC" maxlength="20" type='text'></input>
            </div>
        </section>
        <section>
            <label htmlFor="Name on card">Name on card</label>
            <input onChange={ (e) => {setCardInfo({...cardInfo, name: e.target.value })}} type='text'></input>
        </section>
        <section>
            <label htmlFor="Country or region">Country or region</label>
            <select onChange={ (e) => {setCardInfo({...cardInfo, country: e.target.value })}}>
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