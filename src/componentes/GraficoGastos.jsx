import {ResponsiveContainer, PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

export default function GraficoGastos({ receitas, despesas }) {
  const dadosGrafico = [
    { name: "Receitas", value: receitas },
    { name: "Despesas", value: despesas },
  ];

  return (
    <div className="p5">
    
<ResponsiveContainer width="100%" height={300}>
  <PieChart>
    <Pie
      data={dadosGrafico}
      dataKey="value"
      nameKey="name"
      cx="50%"
      cy="50%"
      outerRadius="80%"
      label
    >
      <Cell fill="#28a745" />
      <Cell fill="#dc3545" />
    </Pie>
    <Tooltip />
    <Legend />
  </PieChart>
</ResponsiveContainer>
      </div>
  );

}
