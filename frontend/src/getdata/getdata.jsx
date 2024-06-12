// src/components/Dashboard.jsx

import React, { useState, useEffect } from "react";

// Mock API call function
const fetchData = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        employeeCount: 150,
        pendingOrders: 23,
        vehicleRenewals: 3,
        pettyCashStatus: 500,
        employeeLeaves: 5,
        salesOverview: 50000,
        inventoryStatus: 120000,
        supportTickets: 5,
      });
    }, 2000);
  });
};

const Card = ({ title, children, loading }) => (
  <div className="bg-white shadow-md rounded-lg p-6 mb-4">
    <h2 className="text-xl font-bold mb-2">{title}</h2>
    {loading ? (
      <div className="animate-pulse">
        <div className="h-4 bg-gray-300 rounded mb-2"></div>
        <div className="h-4 bg-gray-300 rounded"></div>
      </div>
    ) : (
      children
    )}
  </div>
);

const Dashboard = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        const result = await fetchData();
        setData(result);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };
    fetchDataFromApi();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card title="Employee Count" loading={loading}>
          <p>There are {data.employeeCount} employees.</p>
        </Card>
        <Card title="Pending Orders" loading={loading}>
          <p>You have {data.pendingOrders} pending orders.</p>
        </Card>
        <Card title="Vehicle License Renewal" loading={loading}>
          <p>
            {data.vehicleRenewals} vehicle licenses need renewal this month.
          </p>
        </Card>
        <Card title="Petty Cash Status" loading={loading}>
          <p>The petty cash balance is ${data.pettyCashStatus}.</p>
        </Card>
        <Card title="Employee Leaves" loading={loading}>
          <p>{data.employeeLeaves} employees are on leave today.</p>
        </Card>
        <Card title="Sales Overview" loading={loading}>
          <p>Total sales for this month: ${data.salesOverview}.</p>
        </Card>
        <Card title="Inventory Status" loading={loading}>
          <p>Current inventory value: ${data.inventoryStatus}.</p>
        </Card>
        <Card title="Customer Management" loading={loading}>
          <p>Manage your customers effectively.</p>
        </Card>
        <Card title="Supplier Management" loading={loading}>
          <p>Manage your suppliers here.</p>
        </Card>
        <Card title="Recent Activities" loading={loading}>
          <p>View recent activities and logs.</p>
        </Card>
        <Card title="Top Selling Products" loading={loading}>
          <p>See your top selling products.</p>
        </Card>
        <Card title="Support Tickets" loading={loading}>
          <p>{data.supportTickets} open support tickets.</p>
        </Card>
        <Card title="Announcements" loading={loading}>
          <p>Company announcements and updates.</p>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
