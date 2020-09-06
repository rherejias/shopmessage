import React from "react";
import { Card } from "antd";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Legend,
} from "recharts";

interface Props {
  optinItems: Array<object> | null;
  recipientItems: Array<object> | null;
}

export const ReportGraph: React.FC<Props> = ({
  optinItems,
  recipientItems,
}) => {
  return (
    <Card>
      <ResponsiveContainer width="100%" aspect={5.0 / 1.0}>
        <LineChart>
          <XAxis dataKey="date" allowDuplicatedCategory={false} />
          <YAxis />
          <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
          <Legend verticalAlign="top" height={36} />
          <Line
            name="Optins"
            type="monotone"
            data={optinItems}
            dataKey="count"
            stroke="#3997fe"
          />
          <Line
            name="Recipients"
            type="monotone"
            data={recipientItems}
            dataKey="count"
            stroke="#F52A38"
          />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
};
