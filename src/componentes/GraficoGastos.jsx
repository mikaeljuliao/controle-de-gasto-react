import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

export default function GraficoGastos({ receitas, despesas }) {
  const dadosGrafico = [
    { name: "Receitas", value: receitas },
    { name: "Despesas", value: despesas },
  ];

  return (
    <PieChart width={300} height={300}>
      <Pie
        data={dadosGrafico}
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        outerRadius={100}
        label
      >
        <Cell fill="#28a745" /> {/* verde */}
        <Cell fill="#dc3545" /> {/* vermelho */}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  );
}
