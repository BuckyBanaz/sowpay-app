import React from "react";
import { Card } from "../ui";

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <Card className="max-w-4xl mx-auto p-8 shadow-lg">
        <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>
        <p className="mb-6 text-gray-600">Welcome, Admin! Here you can manage users, shops, and view statistics.</p>
        {/* Navigation and widgets will be added here after component migration */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-2">Users</h2>
            <p>View and manage all users.</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-2">Shops</h2>
            <p>View and manage all shops.</p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default AdminDashboard;
