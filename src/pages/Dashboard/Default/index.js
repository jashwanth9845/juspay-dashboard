import React, { lazy, Suspense } from "react"; // Import lazy and Suspense
import {
  BarData,
  LineData,
  revenueLocations,
  SalesChartData,
  statusCard,
  tableData,
} from "../../../utils/helper";
import styles from "./css/MainContent.module.css";
import Loading from "../../../components/Loading";

// Lazy load the components
const StatCards = lazy(() => import("./Components/StatCard"));
const BarProjectionChart = lazy(() =>
  import("./Components/Chart").then((module) => ({
    default: module.BarProjectionChart,
  }))
);
const RevenueChart = lazy(() =>
  import("./Components/Chart").then((module) => ({
    default: module.RevenueChart,
  }))
);
const RevenueMap = lazy(() => import("./Components/RevenueMap"));
const Table = lazy(() => import("./Components/Table"));
const SalesChart = lazy(() =>
  import("./Components/Chart").then((module) => ({
    default: module.SalesChart,
  }))
);

const ErrorBoundary = lazy(() =>
  import("../../../components/ErrorBoundary/ErrorBoundary")
); // Lazy load ErrorBoundary

export default function Dashboard() {
  return (
    <Suspense fallback={<Loading />}>
      {/* Loading state for the entire Dashboard */}
      <ErrorBoundary>
        {/* Wrap the entire Dashboard in ErrorBoundary */}
        <div className={styles.mainContent}>
          <div className={styles.row1}>
            <div className={styles.flexItem}>
              <Suspense fallback={<Loading />}>
                {/* Loading state for StatCards */}
                <StatCards statusCard={statusCard} />
              </Suspense>
            </div>
            <div className={styles.flexItem}>
              <Suspense fallback={<Loading />}>
                {/* Loading state for BarProjectionChart */}
                <BarProjectionChart BarData={BarData} style={styles} />
              </Suspense>
            </div>
          </div>
          <div className={styles.row2}>
            <div className={styles.flexItem}>
              <Suspense fallback={<Loading />}>
                {/* Loading state for RevenueChart */}
                <RevenueChart LineData={LineData} />
              </Suspense>
            </div>
            <div className={styles.flexItem}>
              <Suspense fallback={<Loading />}>
                {/* Loading state for RevenueMap */}
                <RevenueMap locations={revenueLocations} />
              </Suspense>
            </div>
          </div>
          <div className={styles.row3}>
            <div className={styles.flexItem}>
              <Suspense fallback={<Loading />}>
                {/* Loading state for Table */}
                <Table data={tableData} />
              </Suspense>
            </div>
            <div className={styles.flexItem}>
              <Suspense fallback={<Loading />}>
                {/* Loading state for SalesChart */}
                <SalesChart data={SalesChartData} />
              </Suspense>
            </div>
          </div>
        </div>
      </ErrorBoundary>
    </Suspense>
  );
}
