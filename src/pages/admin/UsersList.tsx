import React, { useEffect, useState } from "react";
import { Card, CardContent } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
// import { getAllUserList, deleteUser } from "../../services/users.service"; // TODO: Connect real API

const mockUsers = [
  { userId: 1, name: "Amit Kumar", email: "amit@email.com", phone: "9876543210", createdAt: "2025-12-01" },
  { userId: 2, name: "Priya Singh", email: "priya@email.com", phone: "9123456780", createdAt: "2025-11-28" },
  { userId: 3, name: "Rahul Verma", email: "rahul@email.com", phone: "9988776655", createdAt: "2025-11-20" },
];

const UsersList = () => {
  // const [users, setUsers] = useState([]); // For real API
  const [users, setUsers] = useState(mockUsers);
  const [search, setSearch] = useState("");

  // useEffect(() => {
  //   getAllUserList().then(setUsers);
  // }, []);

  const handleDelete = (userId) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      setUsers((prev) => prev.filter((u) => u.userId !== userId));
      // deleteUser(userId);
    }
  };

  const filtered = users.filter(
    (u) =>
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase()) ||
      u.phone.includes(search)
  );

  return (
    <div className="max-w-5xl mx-auto py-4 px-2 sm:px-4">
      <h2 className="text-2xl font-bold mb-6">Users List</h2>
      <div className="mb-4 flex flex-col sm:flex-row gap-2 sm:gap-0 justify-between items-center">
        <Input
          placeholder="Search by name, email, or phone"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-80"
        />
      </div>
      <div className="overflow-x-auto rounded-lg">
        <Card className="shadow-md min-w-[600px]">
          <CardContent className="p-0">
            <table className="min-w-full divide-y divide-gray-200 text-sm">
              <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Phone</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Joined</th>
                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={5} className="text-center py-8 text-gray-400">No users found.</td>
                </tr>
              )}
              {filtered.map((user) => (
                <tr key={user.userId}>
                  <td className="px-6 py-4 whitespace-nowrap">{user.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{user.phone}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{user.createdAt}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    <Button variant="outline" size="sm" className="mr-2">View</Button>
                    <Button variant="destructive" size="sm" onClick={() => handleDelete(user.userId)}>Delete</Button>
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

export default UsersList;
