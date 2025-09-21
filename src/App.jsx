import React, { useState, useEffect, useRef } from 'react';
import FormularioGasto from './componentes/FormularioGasto';
import ListaGastos from './componentes/ListaGastos';
import SaldoAtual from './componentes/SaldoAtual';

// css
import './App.css';
import GraficoGastos from './componentes/GraficoGastos';

export default function App() {
  // estado principal: lista de gastos (carrega do localStorage)
  const [gastos, setGastos] = useState(() => {
    const dadosSalvos = localStorage.getItem("gastos");
    return dadosSalvos ? JSON.parse(dadosSalvos) : [];
  });

  // estado que guarda o gasto selecionado para edição (null quando não há edição)
  const [gastoSelecionado, setGastoSelecionado] = useState(null);

  // estado do alerta (pode ser null ou { mensagem, tipo })
  const [alerta, setAlerta] = useState(null);
  const timeoutRef = useRef(null); // para controlar o timeout do alerta

  const [filtro, setFiltro] = useState('Todos')
  
  const [busca, setBusca] = useState('')

  useEffect(() => {
    localStorage.setItem("gastos", JSON.stringify(gastos));
  }, [gastos]);

  // somatório das receitas
  const totalReceitas = gastos
    .filter((gasto) => gasto.tipo === "Receita")
    .reduce((acumulador, gasto) => acumulador + (Number(gasto.valor) || 0), 0);

  // somatório das despesas
  const totalDespesas = gastos
    .filter((gasto) => gasto.tipo === "Despesa")
    .reduce((acumulador, gasto) => acumulador + (Number(gasto.valor) || 0), 0);

  // saldo final
  const saldo = totalReceitas - totalDespesas;

  // adicionar ou editar gasto
  function gerenciarGasto(gastoRecebido) {
    // Se existe um gasto selecionado, tratamos como edição
    if (gastoSelecionado) {
      const listaAtualizada = gastos.map((g) =>
        g.id === gastoRecebido.id ? gastoRecebido : g
      );
      setGastos(listaAtualizada);
      setGastoSelecionado(null);
      mostrarAlerta("Gasto atualizado!", "warning");
      return;
    }

    // Caso contrário, é um novo gasto
    setGastos((prev) => [...prev, gastoRecebido]);
    mostrarAlerta("Gasto adicionado com sucesso!", "success");
  }

  // remover gasto
  function removerGasto(id) {
    const novaLista = gastos.filter((gasto) => gasto.id !== id);
    setGastos(novaLista);
    mostrarAlerta("Gasto removido!", "danger");
  }

  // abrir gasto em edição
  function abrirEdicao(id) {
    const gasto = gastos.find((parametroGasto) => parametroGasto.id === id);
    setGastoSelecionado(gasto);
  }

  // função de alerta que recebe mensagem e tipo (success, warning, danger, info)
  function mostrarAlerta(mensagem, tipo = "info", duracao = 3000) {
    setAlerta({ mensagem, tipo });

    // limpa timeout anterior, evitando timeouts acumulados
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // agenda limpeza automática do alerta
    timeoutRef.current = setTimeout(() => {
      setAlerta(null);
      timeoutRef.current = null;
    }, duracao);
  }

  // cleanup do timeout quando o componente desmontar
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);


  const gastosFiltrados = gastos
  // filtro por tipo
  .filter((gasto) => filtro === "Todos" || gasto.tipo === filtro)
  // filtro por busca
  .filter((gasto) =>
    gasto.descricao.toLowerCase().includes(busca.toLowerCase())
  );


  return (
    <div className="container d-flex justify-content-center align-items-center ">
      <div className="p-4 shadow rounded bg-white" style={{ maxWidth: "600px", width: "100%" }}>
        <h1 className="text-center mb-4">Controle de gastos</h1>

        {/* Alerta aqui */}
        {alerta && (
          <div className={`alert alert-${alerta.tipo} text-center`} role="alert">
            {alerta.mensagem}
          </div>
        )}

        {/* Formulário */}
        <FormularioGasto
          aoGerenciar={gerenciarGasto}
          gastoSelecionado={gastoSelecionado}
        />

       
       <div className='btn-group mb-3 w-100" role="group" '>
        <button className={`btn ${filtro === "Todos" ? "btn-primary" : "btn-outline-primary"}`} onClick={() => setFiltro('Todos')}>Todos</button>
        <button className= {` btn ${filtro == 'receita' ? 'btn-success' : 'btn-outline-success'}`} onClick={() => setFiltro('Receita') }>Receitas</button>
        <button className={` btn ${filtro === 'despesa' ? 'btn-danger' : 'btn-outline-danger'}`} onClick={() => setFiltro("Despesa")}>Despesas</button>
       </div>

       <div className='mb-3 text-center'>
         <input type="text"
         placeholder='Digite seu gasto'
         value={busca}
         onChange={(e) => setBusca(e.target.value)}
         className='form-control' />
       </div>
        {/* Lista de gastos */}
        <ListaGastos
          gastos={gastosFiltrados}
          aoRemover={removerGasto}
          aoEditar={abrirEdicao}
        />

        {/* Saldo */}
        <SaldoAtual receitas={totalReceitas} despesas={totalDespesas} saldo={saldo} />

        <GraficoGastos receitas={totalReceitas} despesas={totalDespesas} />
 
     
      </div>
    </div>
  );
}
