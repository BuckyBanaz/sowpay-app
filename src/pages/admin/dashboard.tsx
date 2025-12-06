import React from "react";
import { Card, CardContent } from "../../components/ui/card";
import { Button } from "../../components/ui/button";


import { useNavigate } from "react-router-dom";

const stats = [
  { label: "Total Users", value: 1245 },
  { label: "Total Shops", value: 87 },
  { label: "Total Recharges", value: 3421 },
  { label: "Revenue", value: "₹1,23,000" },
];

const AdminDashboard = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-background dark:to-blue-950 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-blue-900 dark:text-white">Admin Dashboard</h1>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-10">
          {stats.map((stat) => (
            <Card key={stat.label} className="shadow-md border-blue-100 dark:border-blue-900">
              <CardContent className="p-6 flex flex-col items-center">
                <span className="text-2xl font-bold text-blue-700 dark:text-blue-300">{stat.value}</span>
                <span className="text-gray-600 dark:text-gray-300 mt-2">{stat.label}</span>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
          <Card className="shadow-lg">
            <CardContent className="p-8 flex flex-col items-center">
              <h2 className="text-xl font-semibold mb-2 text-blue-800 dark:text-blue-200">Users</h2>
              <p className="mb-4 text-gray-500 dark:text-gray-300 text-center">Manage all users in the system.</p>
              <Button variant="default" onClick={() => navigate("/admin/users")}>View Users</Button>
            </CardContent>
          </Card>
          <Card className="shadow-lg">
            <CardContent className="p-8 flex flex-col items-center">
              <h2 className="text-xl font-semibold mb-2 text-blue-800 dark:text-blue-200">Shops</h2>
              <p className="mb-4 text-gray-500 dark:text-gray-300 text-center">View and manage registered shops.</p>
              <Button variant="default" onClick={() => navigate("/admin/shops")}>View Shops</Button>
            </CardContent>
          </Card>
          <Card className="shadow-lg">
            <CardContent className="p-8 flex flex-col items-center">
              <h2 className="text-xl font-semibold mb-2 text-blue-800 dark:text-blue-200">Recharges</h2>
              <p className="mb-4 text-gray-500 dark:text-gray-300 text-center">Monitor recharge transactions.</p>
              <Button variant="default" onClick={() => navigate("/admin/recharges")}>View Recharges</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
