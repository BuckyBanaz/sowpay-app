import React, { useEffect, useState } from "react";
import { Card, CardContent } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
// import { getAllUserList } from "../../services/users.service"; // TODO: Connect real API

const mockShops = [
  { shopId: 1, name: "Super Mart", owner: "Amit Kumar", phone: "9876543210", createdAt: "2025-12-01", status: "Active" },
  { shopId: 2, name: "Fresh Store", owner: "Priya Singh", phone: "9123456780", createdAt: "2025-11-28", status: "Inactive" },
  { shopId: 3, name: "Daily Needs", owner: "Rahul Verma", phone: "9988776655", createdAt: "2025-11-20", status: "Active" },
];

const ShopsList = () => {
  // const [shops, setShops] = useState([]); // For real API
  const [shops, setShops] = useState(mockShops);
  const [search, setSearch] = useState("");

  // useEffect(() => {
  //   getAllUserList().then(setShops);
  // }, []);

  const handleStatusToggle = (shopId) => {
    setShops((prev) =>
      prev.map((s) =>
        s.shopId === shopId ? { ...s, status: s.status === "Active" ? "Inactive" : "Active" } : s
      )
    );
  };

  const filtered = shops.filter(
    (s) =>
      s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.owner.toLowerCase().includes(search.toLowerCase()) ||
      s.phone.includes(search)
  );

  return (
    <div className="max-w-5xl mx-auto py-4 px-2 sm:px-4">
      <h2 className="text-2xl font-bold mb-6">Shops List</h2>
      <div className="mb-4 flex flex-col sm:flex-row gap-2 sm:gap-0 justify-between items-center">
        <Input
          placeholder="Search by shop name, owner, or phone"
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
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Shop Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Owner</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Phone</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Joined</th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase">Status</th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={6} className="text-center py-8 text-gray-400">No shops found.</td>
                </tr>
              )}
              {filtered.map((shop) => (
                <tr key={shop.shopId}>
                  <td className="px-6 py-4 whitespace-nowrap">{shop.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{shop.owner}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{shop.phone}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{shop.createdAt}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${shop.status === "Active" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>{shop.status}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    <Button variant="outline" size="sm" className="mr-2">View</Button>
                    <Button variant="secondary" size="sm" className="mr-2" onClick={() => handleStatusToggle(shop.shopId)}>{shop.status === "Active" ? "Deactivate" : "Activate"}</Button>
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

export default ShopsList;
