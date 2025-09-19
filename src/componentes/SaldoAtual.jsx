import React from 'react'

export default function SaldoAtual({ receitas, despesas, saldo}) {
  return (
    <div className='row text-center mt-4'>

      <div className='col-12 col-md-4'>
      <div className='card shadow-sm border-success rounded mb-3'>
      <div className='card-body'>
      <h5 className='card-title text-success'>Receita</h5>
      <p className='card-text fs-4 fw-bold'>{receitas.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</p>
     </div>
     </div>
     </div>

      <div className='col-12 col-md-4'>
      <div className='card shadow-sm border-danger rounded mb-3'>
      <div className='card-body'>
      <h5 className='card-title text-danger'>Despesas</h5>
      <p className='card-text fs-4 fw-bold'>{despesas.toLocaleString('pt-BR', {style: "currency", currency:'BRL'})}</p>
     </div>
     </div>
     </div>  

      <div className='col-12 col-md-4'>
    <div className={`card shadow-sm rounded mb-3 ${saldo >= 0 ? "border-primary" : "border-danger"}`}>
      <div className='card-body'>
      <h5 className={`card-title ${saldo >=0 ? "text-primary" : "text-danger"}`}>Saldo</h5>
     <p className="card-text fs-4 fw-bold">
  { saldo.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
     </p>

     </div>
     </div>
     </div> 

    </div>
  )
}
