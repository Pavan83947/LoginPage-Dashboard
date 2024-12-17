import React, { useState } from "react";
import { FaBars } from "react-icons/fa"; // Importing Font Awesome icons
import logo from '../assets/react.svg';

function Header() {
  const [orderInfoOpen, setOrderInfoOpen] = useState(false);
  const [reportsOpen, setReportsOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);

  return (
    <header className="bg-gradient-to-b from-header-color2 to-header-color1 text-white flex items-center justify-between px-6 py-4 shadow-lg">
      {/* Logo Section */}
      <div className="flex items-center space-x-4">
        <img
          src={logo}
          alt="Logo"
          className="h-10 w-auto"
        />
        <div>
          <h1 className="text-lg font-bold">SimTech</h1>
          <p className="text-sm font-light">IT Solutions</p>
        </div>
      </div>

      {/* Navigation Section */}
      <nav className="flex items-center space-x-20 relative">
        <div
          className="relative"
          onClick={() => (setSettingsOpen(false), setOrderInfoOpen(false), setReportsOpen(false))}
        >
          <a href="#home" className="hover:text-gray-300">
            Home
          </a>
        </div>
        {/* Order Info Dropdown */}
        <div
          className="relative"
          onClick={() => (setSettingsOpen(false), setOrderInfoOpen(true), setReportsOpen(false))}
        >
          <a href="#order-info" className="hover:text-gray-300">
            Order Info
          </a>
          {orderInfoOpen && (
            <div className="absolute left-0 mt-2 bg-white text-black shadow-lg rounded-md w-48">
              <a href="#order-details" className="block px-4 py-2 hover:bg-gray-200">Order Details</a>
              <a href="#order-status" className="block px-4 py-2 hover:bg-gray-200">Order Status</a>
              <a href="#order-history" className="block px-4 py-2 hover:bg-gray-200">Order History</a>
            </div>
          )}
        </div>

        {/* Reports Dropdown */}
        <div
          className="relative"
          onClick={() => (setSettingsOpen(false), setOrderInfoOpen(false), setReportsOpen(true))}
        >
          <a href="#reports" className="hover:text-gray-300">
            Reports
          </a>
          {reportsOpen && (
            <div className="absolute left-0 mt-2 bg-white text-black shadow-lg rounded-md w-48">
              <a href="#sales-report" className="block px-4 py-2 hover:bg-gray-200">Sales Report</a>
              <a href="#financial-report" className="block px-4 py-2 hover:bg-gray-200">Financial Report</a>
              <a href="#inventory-report" className="block px-4 py-2 hover:bg-gray-200">Inventory Report</a>
            </div>
          )}
        </div>

        {/* Settings Dropdown */}
        <div
          className="relative"
          onClick={() => (setSettingsOpen(true), setOrderInfoOpen(false), setReportsOpen(false))}
        >
          <a href="#settings" className="hover:text-gray-300">
            Settings
          </a>
          {settingsOpen && (
            <div className="absolute left-0 mt-2 bg-white text-black shadow-lg rounded-md w-48">
              <a href="#account-settings" className="block px-4 py-2 hover:bg-gray-200">Account Settings</a>
              <a href="#system-settings" className="block px-4 py-2 hover:bg-gray-200">System Settings</a>
              <a href="#preferences" className="block px-4 py-2 hover:bg-gray-200">Preferences</a>
            </div>
          )}
        </div>

        {/* Hamburger Icon */}
        <FaBars className="text-xl cursor-pointer hover:text-gray-300 mt-1" />
      </nav>
    </header>
  );
}

export default Header;
