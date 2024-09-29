import React, { useState } from "react";
import { FaHome, FaTools, FaCalendarAlt, FaBullhorn, FaMoneyBillWave, FaChartBar, FaUserAlt, FaSearch } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import DashboardContent from "./DashboardContent/DashboardContent";
import UnitManagementContent from "./UnitManagementContent/UnitManagementContent";
import MaintenanceRequestContent from "./MaintenanceRequestContent/MaintenanceRequestContent";
import EventCalendarContent from "./EventCalendarContent/EventCalendarContent";
import AnnouncementBoardContent from "./AnnouncementBoardContent/AnnouncementBoardContent";
import FinancialManagementContent from "./FinancialManagementContent/FinancialManagementContent";


const ResidentialManagementInterface = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: "dashboard", label: "Dashboard", icon: <FaChartBar /> },
    { id: "units", label: "Units", icon: <FaHome /> },
    { id: "maintenance", label: "Maintenance", icon: <FaTools /> },
    { id: "events", label: "Events", icon: <FaCalendarAlt /> },
    { id: "announcements", label: "Announcements", icon: <FaBullhorn /> },
    { id: "financial", label: "Financial", icon: <FaMoneyBillWave /> },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <DashboardContent />;
      case "units":
        return <UnitManagementContent />;
      case "maintenance":
        return <MaintenanceRequestContent />;
      case "events":
        return <EventCalendarContent />;
      case "announcements":
        return <AnnouncementBoardContent />;
      case "financial":
        return <FinancialManagementContent />;
      default:
        return <DashboardContent />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar for larger screens */}
      <aside className="hidden md:flex md:flex-shrink-0 md:w-64 bg-white shadow-lg">
        <div className="flex flex-col w-full">
          <div className="flex items-center justify-center h-16 bg-indigo-600">
            <span className="text-white font-semibold text-lg">Residential Management</span>
          </div>
          <nav className="mt-5 flex-1 px-2 bg-white space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`${
                  activeTab === item.id
                    ? "bg-indigo-100 text-indigo-900"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                } group flex items-center px-2 py-2 text-sm font-medium rounded-md w-full focus:outline-none focus:ring-2 focus:ring-indigo-500`}
              >
                <span className="mr-3 h-6 w-6">{item.icon}</span>
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </aside>

      {/* Mobile menu */}
      <div className="md:hidden">
        <div className="bg-indigo-600 px-4 py-2 flex items-center justify-between">
          <span className="text-white font-semibold">Residential Management</span>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white focus:outline-none focus:text-gray-300"
          >
            <IoMdArrowDropdown className={`h-6 w-6 transform ${isMobileMenuOpen ? "rotate-180" : ""}`} />
          </button>
        </div>
        {isMobileMenuOpen && (
          <nav className="bg-white shadow-lg">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setIsMobileMenuOpen(false);
                }}
                className={`${
                  activeTab === item.id
                    ? "bg-indigo-100 text-indigo-900"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                } group flex items-center px-4 py-2 text-base font-medium w-full focus:outline-none focus:ring-2 focus:ring-indigo-500`}
              >
                <span className="mr-3 h-6 w-6">{item.icon}</span>
                {item.label}
              </button>
            ))}
          </nav>
        )}
      </div>

      {/* Main content area */}
      <main className="flex-1 overflow-y-auto p-5">
        <div className="max-w-7xl mx-auto">{renderContent()}</div>
      </main>
    </div>
  );
};

export default ResidentialManagementInterface;