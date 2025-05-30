
import React, { useState } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";

const sampleData = [
  { month: "1월", TIGER: 0.25, KODEX: 0.20, ARK: 0.15, QQQ: 0.30, 금ETF: 0.10 },
  { month: "2월", TIGER: 0.22, KODEX: 0.25, ARK: 0.18, QQQ: 0.25, 금ETF: 0.10 },
  { month: "3월", TIGER: 0.20, KODEX: 0.28, ARK: 0.20, QQQ: 0.22, 금ETF: 0.10 },
  { month: "4월", TIGER: 0.18, KODEX: 0.30, ARK: 0.22, QQQ: 0.20, 금ETF: 0.10 },
];

export default function LUSYDashboard() {
  const [amount, setAmount] = useState("500000");
  const [years, setYears] = useState("12");

  const result = sampleData.map((item, index) => {
    const monthly = parseInt(amount) || 500000;
    const total = ((index + 1) * monthly).toLocaleString();
    return { ...item, 투자액: total };
  });

  return (
    <div style={{ padding: '2rem', background: '#fff', borderRadius: '1rem', maxWidth: '1000px', margin: 'auto' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold' }}>📊 LUSY AI 리밸런싱 대시보드</h1>
      <div style={{ margin: '1rem 0' }}>
        <input type="number" value={amount} onChange={e => setAmount(e.target.value)} placeholder="매월 투자 금액" />
        <input type="number" value={years} onChange={e => setYears(e.target.value)} placeholder="투자 기간(년)" style={{ marginLeft: '1rem' }} />
      </div>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={result}>
          <XAxis dataKey="month" />
          <YAxis domain={[0, 1]} tickFormatter={(v) => `${Math.round(v * 100)}%`} />
          <Tooltip formatter={(value) => `${(value * 100).toFixed(1)}%`} />
          <Legend />
          <Line type="monotone" dataKey="TIGER" stroke="#8884d8" />
          <Line type="monotone" dataKey="KODEX" stroke="#82ca9d" />
          <Line type="monotone" dataKey="ARK" stroke="#ffc658" />
          <Line type="monotone" dataKey="QQQ" stroke="#ff7300" />
          <Line type="monotone" dataKey="금ETF" stroke="#a0a0a0" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
