import React, { useState, useEffect } from 'react';

export default function FormularioGasto({ aoGerenciar, gastoSelecionado }) {
  const [descricao, setDescricao] = useState("");
  const [valor, setValor] = useState("");
  const [tipo, setTipo] = useState("Receita");

  useEffect(() => {
    if (gastoSelecionado) {
      setDescricao(gastoSelecionado.descricao);
      setValor(gastoSelecionado.valor);
      setTipo(gastoSelecionado.tipo);
    }
  }, [gastoSelecionado]);

  function salvarGasto(evento) {
    evento.preventDefault();

    const gastoAtualizado = {
      id: gastoSelecionado ? gastoSelecionado.id : Date.now(),
      descricao,
      valor: parseFloat(valor),
      tipo,
      dataHora: new Date().toDateString
    };

    aoGerenciar(gastoAtualizado);

    //limpA O FORMULARIO
    setDescricao("");
    setValor("");
    setTipo("Receita");
  }

  return (
    <form onSubmit={salvarGasto} className="mb-3">
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Descrição"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <input
          type="number"
          className="form-control"
          placeholder="Valor (R$)"
          value={valor}
          onChange={(e) => setValor(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <select
          className="form-select"
          value={tipo}
          onChange={(e) => setTipo(e.target.value)}
        >
          <option value="Receita">Receita</option>
          <option value="Despesa">Despesa</option>
        </select>
      </div>

      <button type="submit" className="btn btn-primary w-100">
        {gastoSelecionado ? "Salvar Alterações" : "Adicionar"}
      </button>
    </form>
  );
}
