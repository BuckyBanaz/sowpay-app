import React, { useEffect, useState } from "react";
import { Card, CardContent } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
// import { getAllPayments } from "../../services/payment.service"; // TODO: Connect real API

const mockRecharges = [
  { id: 1, user: "Amit Kumar", amount: 500, method: "UPI", status: "Success", date: "2025-12-01" },
  { id: 2, user: "Priya Singh", amount: 200, method: "Card", status: "Pending", date: "2025-11-28" },
  { id: 3, user: "Rahul Verma", amount: 1000, method: "Wallet", status: "Failed", date: "2025-11-20" },
];

const RechargesList = () => {
  // const [recharges, setRecharges] = useState([]); // For real API
  const [recharges, setRecharges] = useState(mockRecharges);
  const [search, setSearch] = useState("");

  // useEffect(() => {
  //   getAllPayments().then(setRecharges);
  // }, []);

  const filtered = recharges.filter(
    (r) =>
      r.user.toLowerCase().includes(search.toLowerCase()) ||
      r.method.toLowerCase().includes(search.toLowerCase()) ||
      r.status.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-5xl mx-auto py-4 px-2 sm:px-4">
      <h2 className="text-2xl font-bold mb-6">Recharge Transactions</h2>
      <div className="mb-4 flex flex-col sm:flex-row gap-2 sm:gap-0 justify-between items-center">
        <Input
          placeholder="Search by user, method, or status"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-80"
        />
      </div>
      <div className="overflow-x-auto rounded-lg">
        <Card className="shadow-md min-w-[700px]">
          <CardContent className="p-0">
            <table className="min-w-full divide-y divide-gray-200 text-sm">
              <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">User</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Method</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={6} className="text-center py-8 text-gray-400">No recharges found.</td>
                </tr>
              )}
              {filtered.map((rec) => (
                <tr key={rec.id}>
                  <td className="px-6 py-4 whitespace-nowrap">{rec.user}</td>
                  <td className="px-6 py-4 whitespace-nowrap">₹{rec.amount}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{rec.method}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${rec.status === "Success" ? "bg-green-100 text-green-700" : rec.status === "Pending" ? "bg-yellow-100 text-yellow-700" : "bg-red-100 text-red-700"}`}>{rec.status}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{rec.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    <Button variant="outline" size="sm">View</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default RechargesList;
