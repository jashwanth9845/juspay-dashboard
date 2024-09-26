import React from "react";
import styles from "../css/orderTable.module.css";
import { motion } from "framer-motion";
const OrderTable = ({
  currentItems,
  handleCheckboxChange,
  checkedItems,
  handleSelectAll,
  handleSort,
}) => {
  return (
    <motion.table
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className={styles?.tableDivContainer}
    >
      <thead>
        <tr>
          <th>
            <label className={styles?.customCheckbox}>
              <input
                style={{ display: "none" }}
                type="checkbox"
                onChange={handleSelectAll}
                checked={
                  currentItems.length > 0 &&
                  currentItems.every((item) => checkedItems[item.orderId])
                }
              />
              <span className={styles.checkmark}></span>
            </label>
          </th>
          <th
            className="regular-12 w-400"
            onClick={() => handleSort("orderId")}
          >
            Order ID
          </th>
          <th
            className="regular-12 w-400"
            onClick={() => handleSort("user.name")}
          >
            User
          </th>
          <th
            className="regular-12 w-400"
            onClick={() => handleSort("project")}
          >
            Project
          </th>
          <th className="regular-12 w-400">Address</th>
          <th className="regular-12 w-400">Date</th>
          <th className="regular-12 w-400">Status</th>
        </tr>
      </thead>
      <tbody>
        {currentItems.map((row) => (
          <tr key={row.orderId}>
            <td className="regular-12 w-400">
              <label
                className={styles?.customCheckbox}
                htmlFor={"check-" + row.orderId}
              >
                <input
                  id={"check-" + row.orderId}
                  type="checkbox"
                  onChange={(e) => handleCheckboxChange(e, row.orderId)}
                  checked={!!checkedItems[row.orderId]} // Use double negation to ensure boolean
                />
                <span className={styles.checkmark}></span>
              </label>
            </td>
            <td className="regular-12 w-400">{row.orderId}</td>
            <td className="regular-12 w-400">
              <div className={styles.userInfo}>
                <img src={row.user.image} alt={row.user.name} />
                {row.user.name}
              </div>
            </td>
            <td className="regular-12 w-400">{row.project}</td>
            <td className="regular-12 w-400">{row.address}</td>
            <td className="regular-12 w-400">
              <div className={styles.dateContainer}>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13 2H11.5V1.5C11.5 1.36739 11.4473 1.24021 11.3536 1.14645C11.2598 1.05268 11.1326 1 11 1C10.8674 1 10.7402 1.05268 10.6464 1.14645C10.5527 1.24021 10.5 1.36739 10.5 1.5V2H5.5V1.5C5.5 1.36739 5.44732 1.24021 5.35355 1.14645C5.25979 1.05268 5.13261 1 5 1C4.86739 1 4.74021 1.05268 4.64645 1.14645C4.55268 1.24021 4.5 1.36739 4.5 1.5V2H3C2.73478 2 2.48043 2.10536 2.29289 2.29289C2.10536 2.48043 2 2.73478 2 3V13C2 13.2652 2.10536 13.5196 2.29289 13.7071C2.48043 13.8946 2.73478 14 3 14H13C13.2652 14 13.5196 13.8946 13.7071 13.7071C13.8946 13.5196 14 13.2652 14 13V3C14 2.73478 13.8946 2.48043 13.7071 2.29289C13.5196 2.10536 13.2652 2 13 2ZM4.5 3V3.5C4.5 3.63261 4.55268 3.75979 4.64645 3.85355C4.74021 3.94732 4.86739 4 5 4C5.13261 4 5.25979 3.94732 5.35355 3.85355C5.44732 3.75979 5.5 3.63261 5.5 3.5V3H10.5V3.5C10.5 3.63261 10.5527 3.75979 10.6464 3.85355C10.7402 3.94732 10.8674 4 11 4C11.1326 4 11.2598 3.94732 11.3536 3.85355C11.4473 3.75979 11.5 3.63261 11.5 3.5V3H13V5H3V3H4.5ZM13 13H3V6H13V13Z"
                    fill="#1C1C1C"
                  />
                </svg>
                <span>{row.date}</span>
              </div>
            </td>
            <td className="regular-12 w-400">
              <span className={`${styles.status} ${styles[row.status.slug]}`}>
                {row.status.text}
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </motion.table>
  );
};

export default OrderTable;
