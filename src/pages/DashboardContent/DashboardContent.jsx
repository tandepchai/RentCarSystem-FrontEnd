import React from "react";
import DashboardCard from "../DashboardCard/DashboardCard";
import { FaHome, FaTools, FaCalendarAlt, FaBullhorn, FaMoneyBillWave, FaChartBar, FaUserAlt, FaSearch } from "react-icons/fa";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const data = [
  { name: "Units Occupied", value: 85 },
  { name: "Units Available", value: 15 },
];

const COLORS = ["#0088FE", "#00C49F"];

const DashboardContent = () => (
  <div className="space-y-6">
    <h1 className="text-3xl font-semibold text-gray-900">Dashboard</h1>
    
    {/* Thẻ thống kê */}
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
      <DashboardCard
        title="Total Units"
        value="120"
        icon={<FaHome className="h-6 w-6 text-indigo-600" />}
      />
      <DashboardCard
        title="Occupancy Rate"
        value="85%"
        icon={<FaUserAlt className="h-6 w-6 text-green-600" />}
      />
      <DashboardCard
        title="Maintenance Requests"
        value="8"
        icon={<FaTools className="h-6 w-6 text-yellow-600" />}
      />
      <DashboardCard
        title="Upcoming Events"
        value="3"
        icon={<FaCalendarAlt className="h-6 w-6 text-red-600" />}
      />
    </div>

    {/* Biểu đồ tròn */}
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-2 mt-10">
      <div className="p-6 bg-white shadow rounded-lg">
        <h2 className="text-lg font-medium text-gray-900 mb-4">Occupancy Status</h2>
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx={200}
            cy={200}
            labelLine={false}
            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
            outerRadius={150}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </div>
    </div>

  </div>
);

export default DashboardContent;
