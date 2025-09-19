import React from 'react'

export default function ListaGastos({ gastos, aoRemover, aoEditar }) {
  return (
    <ul className="list-group">
      {gastos.map((gasto) => (
        <li
          key={gasto.id}
          className="list-group-item d-flex justify-content-between align-items-center"
        >
          {/* Descrição */}
          <span className='me-3'>{gasto.descricao}</span>

          {/* Valor + Tipo */}
          <span
            className={
              gasto.tipo === "Receita"
                ? "text-success fw-bold"
                : "text-danger fw-bold"
            }
          >
            {gasto.valor.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}{" "}
            ({gasto.tipo})
          </span>

          {/* Botões */}
          <div>
            <button
              className="btn btn-sm btn-outline-primary me-2"
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
        </li>
      ))}
    </ul>
  )
}
