import React, { useState, lazy, Suspense } from "react"; // Import lazy and Suspense
import styles from "./css/orderTable.module.css";
import { orderData } from "../../../../utils/helper";

// Lazy load components
const FilterNavBar = lazy(() => import("./components/FilterNavBar"));
const FilterDropdown = lazy(() => import("./components/FilterDropdown"));
const OrderTable = lazy(() => import("./components/OrderTable"));
const Pagination = lazy(() => import("./components/Pagination"));
const ErrorBoundary = lazy(() =>
  import("../../../../components/ErrorBoundary/ErrorBoundary")
); // Lazy load ErrorBoundary

const ProjectOrders = () => {
  const [data, setData] = useState(orderData);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState({ column: null, order: "asc" });
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [showFilterDropdown, setShowFilterDropdown] = useState(false);
  const [checkedItems, setCheckedItems] = useState({}); // Track checked checkboxes

  // Handle search
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    const filteredData = orderData.filter(
      (item) =>
        item.user.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
        item.project.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setData(filteredData);
  };

  const handleSelectAll = (e) => {
    const isChecked = e.target.checked;
    const newCheckedItems = {};
    currentItems.forEach((item) => {
      newCheckedItems[item.orderId] = isChecked; // Set checked state for each item
    });
    setCheckedItems(newCheckedItems);
  };

  // Handle sort
  const handleSort = (column) => {
    const newOrder = sortOrder.order === "asc" ? "desc" : "asc";
    setSortOrder({ column, order: newOrder });

    const sortedData = [...data].sort((a, b) => {
      if (newOrder === "asc") {
        return a[column] > b[column] ? 1 : -1;
      }
      return a[column] < b[column] ? 1 : -1;
    });

    setData(sortedData);
  };

  // Handle checkbox change
  const handleCheckboxChange = (e, orderId) => {
    setCheckedItems((prev) => ({
      ...prev,
      [orderId]: e.target.checked,
    }));
  };

  // Handle pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Toggle filter dropdown
  const toggleFilterDropdown = () => {
    setShowFilterDropdown(!showFilterDropdown);
  };

  return (
    <Suspense fallback={<div>Loading Project Orders...</div>}>
      {" "}
      {/* Loading state for the entire component */}
      <ErrorBoundary>
        {" "}
        {/* Wrap the entire ProjectOrders in ErrorBoundary */}
        <div className={styles.tableContainer}>
          <h2 className="semibold-14">Order List</h2>

          <Suspense fallback={<div>Loading Filter Navigation Bar...</div>}>
            {" "}
            {/* Loading state for FilterNavBar */}
            <FilterNavBar
              searchTerm={searchTerm}
              handleSearch={handleSearch}
              toggleFilterDropdown={toggleFilterDropdown}
            />
          </Suspense>

          {showFilterDropdown && (
            <Suspense fallback={<div>Loading Filter Dropdown...</div>}>
              {" "}
              {/* Loading state for FilterDropdown */}
              <FilterDropdown setData={setData} orderData={orderData} />
            </Suspense>
          )}

          <Suspense fallback={<div>Loading Order Table...</div>}>
            {" "}
            {/* Loading state for OrderTable */}
            <OrderTable
              currentItems={currentItems}
              handleCheckboxChange={handleCheckboxChange}
              checkedItems={checkedItems}
              handleSelectAll={handleSelectAll}
              handleSort={handleSort}
            />
          </Suspense>

          {/* Pagination */}
          <Suspense fallback={<div>Loading Pagination...</div>}>
            {" "}
            {/* Loading state for Pagination */}
            <Pagination
              itemsPerPage={itemsPerPage}
              totalItems={data.length}
              paginate={paginate}
              currentPage={currentPage}
            />
          </Suspense>
        </div>
      </ErrorBoundary>
    </Suspense>
  );
};

export default ProjectOrders;
