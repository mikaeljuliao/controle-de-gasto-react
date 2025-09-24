import React from 'react'

export default function ListaGastos({ gastos, aoRemover, aoEditar }) {
  
  return (
    <ul className="list-group">
      {gastos.map((gasto) => (
       <li key={gasto.id} className="list-group-item">
  <div className="row align-items-center">
    
    {/* Coluna Descrição */}
   <div className="col-4 text-break">
  {gasto.descricao}
   </div>

    {/* Coluna Valor */}
    <div className="col-3">
      <span className={gasto.tipo === "Receita" ? "text-success fw-bold" : "text-danger fw-bold"}>
        {gasto.valor.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </span>
    </div>

    {/* Coluna Tipo */}
    <div className="col-3">
      <span>{gasto.tipo}</span>
    </div>

    {/* Coluna Ações */}
    <div className="col-2 d-flex justify-content-end gap-2">
      <button
        className="btn btn-sm btn-outline-primary"
        onClick={() => aoEditar(gasto.id)}
      >
        ✏️
      </button>
      <button
        className="btn btn-sm btn-danger"
        onClick={() => aoRemover(gasto.id)}
      >
        ❌
      </button>
    </div>
  </div>
</li>

      ))}
    </ul>
  )
}
