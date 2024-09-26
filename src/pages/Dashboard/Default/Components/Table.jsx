import React from "react";
import styles from "../css/table.module.css";
import { motion } from "framer-motion";

const Table = ({ data }) => {
  const { heading, TableData } = data || {};
  return (
    <motion.div className={styles?.TableContainer}>
      <h3 className="semibold-14">{heading}</h3>
      <table>
        <thead>
          <tr className="regular-12">
            <th className="regular-12">Name</th>
            <th className="regular-12">Price</th>
            <th className="regular-12">Quantity</th>
            <th className="regular-12">Amount</th>
          </tr>
        </thead>
        <tbody>
          {TableData?.map((item, index) => (
            <tr className="regular-12" key={index}>
              <td className="regular-12">{item.name}</td>
              <td className="regular-12">{item.price}</td>
              <td className="regular-12">{item.quantity}</td>
              <td className="regular-12">{item.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </motion.div>
  );
};

export default Table;
