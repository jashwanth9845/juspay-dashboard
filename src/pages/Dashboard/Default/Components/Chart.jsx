import React from "react";
import { motion } from "framer-motion";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";
import { PieChart, Pie, Cell } from "recharts";
import moment from "moment";
import styles from "../css/chart.module.css";

export const RevenueChart = ({ LineData }) => {
  const { data = [], heading } = LineData || {};
  const { title, list } = heading || {};
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className={styles?.chartContainer}
    >
      {heading && (
        <div className={styles?.RChartHeadingContainer}>
          <h3 className="semibold-14">{title}</h3>
          <ul className={styles?.RChartHeadingList}>
            {list?.map((e, index) => {
              const { label, value } = e || {};
              return (
                <li key={index}>
                  <span className="regular-12 w-400">{label}</span>{" "}
                  <span className="semibold-12-D">{value}</span>
                </li>
              );
            })}
          </ul>
        </div>
      )}
      <ResponsiveContainer width="100%" height={318}>
        <LineChart width={"100%"} height={318} data={data}>
          <CartesianGrid
            strokeDasharray="0"
            vertical={false}
            strokeOpacity={0.2}
          />
          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            padding={{ left: 40 }}
            tickMargin={10}
            tickFormatter={(date) => moment(date).format("MMM")} // Format date as month
          />
          <YAxis
            domain={[0, 30]} // Set Y-axis range to 0-30M
            axisLine={false}
            tickLine={false}
            tickMargin={10}
            padding={{ left: 40 }}
            ticks={[0, 10, 20, 30]} // Custom tick values for 10M, 20M, 30M
            tickFormatter={(value) => `${value}M`} // Format y-axis with "M" for million
          />
          <Tooltip
            contentStyle={{
              borderRadius: "10px",
              border: "none",
              color: "#fff",
              background: "#1C1C1CCC",
              fontFamily: "var(--inter-font)",
            }}
            itemStyle={{
              color: "#fff",
              fontFamily: "var(--inter-font)",
              fontSize: "12px",
              fontWeight: "400",
            }}
            wrapperStyle={{
              background: "#1C1C1CCC",
              color: "#fff",
              borderRadius: "10px",
            }}
          />

          {/* Actual data for current week */}
          <Line
            type="basis"
            dataKey="currentActual"
            stroke="#000"
            dot={false}
            strokeWidth={3}
            name="Current Week"
          />

          {/* Predicted data for current week */}
          <Line
            type="basis"
            dataKey="currentPredicted"
            stroke="#000"
            dot={false}
            strokeDasharray="6 8"
            strokeWidth={3}
            name="Predicted"
          />

          {/* Previous week data */}
          <Line
            type="basis"
            dataKey="previous"
            stroke="#A8C5DA"
            dot={false}
            strokeWidth={3}
            name="Previous Week"
          />
        </LineChart>
      </ResponsiveContainer>
    </motion.div>
  );
};

export const BarProjectionChart = ({ BarData }) => {
  const { data = [], title } = BarData || {};
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className={styles?.chartContainer}
    >
      <div className={styles?.BChartHeadingContainer}>
        <h3 className="semibold-14">{title}</h3>
      </div>
      <ResponsiveContainer width="100%" height={252}>
        <BarChart width={600} height={"100%"} data={data}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis
            dataKey="name"
            axisLine={false}
            tickFormatter={(date) => moment(date).format("MMM")} // Format date as month
            padding={{ left: 20 }} // Add padding between 0 and Jan
            tickLine={false} // Remove tick lines on X-axis
          />

          <YAxis
            domain={[0, 30]} // Set Y-axis range to 0-30M
            axisLine={false}
            ticks={[0, 10, 20, 30]} // Custom tick values
            tickFormatter={(value) => `${value}M`} // Format y-axis with "M" for million
            tickLine={false} // Remove tick lines on Y-axis
          />

          <Tooltip
            contentStyle={{
              borderRadius: "10px",
              border: "none",
              color: "#fff",
              background: "#1C1C1CCC",
              fontFamily: "var(--inter-font)",
            }}
            itemStyle={{
              color: "#fff",
              fontFamily: "var(--inter-font)",
              fontSize: "12px",
              fontWeight: "400",
            }}
            wrapperStyle={{
              background: "#1C1C1CCC",
              color: "#fff",
              borderRadius: "10px",
            }}
          />

          {/* Bar for Actual data */}
          <Bar
            dataKey="actual"
            fill="#A8C5DA"
            name="Actual"
            stackId="a"
            barSize={30}
          />

          {/* Extension for Predicted data (stacked on top of actual) */}
          <Bar
            dataKey="projection"
            radius={[6, 6, 0, 0]}
            fill="#A8C5DA"
            name="Projection"
            stackId="a"
            barSize={30}
            style={{ opacity: "0.5" }}
          />
        </BarChart>
      </ResponsiveContainer>
    </motion.div>
  );
};

export const SalesChart = ({ data = [] }) => {
  const COLORS = [
    "var(--black-100)",
    " var(--Secondary-Mint)",
    " var(--Secondary-Indigo)",
    " var(--Secondary-Blue)",
  ];

  // Framer-motion animation settings
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const totalValue = data.reduce((acc, item) => acc + item.value, 0);

  return (
    <motion.div
      className={styles?.SalesChartContainer}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h2
        className={`${styles?.SalesChartH2} semibold-14`}
        variants={itemVariants}
      >
        Total Sales
      </motion.h2>

      <div className={styles?.SalesPieChart}>
        <PieChart width={120} height={120}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            startAngle={90}
            endAngle={-270}
            innerRadius={35}
            outerRadius={60}
            dataKey="value"
            stroke="var(--chart-stroke)"
            strokeWidth={6}
            paddingAngle={-15}
            cornerRadius={20}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip
            formatter={(value) => `${((value / totalValue) * 100).toFixed(2)}%`}
            contentStyle={{
              borderRadius: "10px",
              border: "none",
              color: "#fff",
              background: "#1C1C1CCC",
              fontFamily: "var(--inter-font)",
            }}
            itemStyle={{
              color: "#fff",
              fontFamily: "var(--inter-font)",
              fontSize: "12px",
              fontWeight: "400",
            }}
            wrapperStyle={{
              background: "#1C1C1CCC",
              color: "#fff",
              borderRadius: "10px",
            }}
          />
        </PieChart>
      </div>

      {/* Sales Breakdown */}
      <motion.div
        className={styles?.SalesPieChartData}
        variants={containerVariants}
      >
        {data.map((item, index) => (
          <motion.p
            className={`${styles?.SalesPieChartDataP} regular-12`}
            key={index}
            variants={itemVariants}
          >
            <span style={{ color: COLORS[index] }}>
              ● <span style={{ color: "var(--black-100)" }}>{item.name}</span>
            </span>
            <span className={"regular-12"}>${item.value.toFixed(2)}</span>
          </motion.p>
        ))}
      </motion.div>
    </motion.div>
  );
};
