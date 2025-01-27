import React, { useState } from "react";

export default function PasswordInputModal() {
  const [isModalOpen, setModalOpen] = useState(true);
  const [password, setPassword] = useState("");

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  const handlePasswordSubmit = () => {
    console.log("Password entered:", password);
    closeModal();
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <button
        onClick={openModal}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
      >
        Open Password Input
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-lg p-6 w-80">
            <h2 className="text-xl font-semibold mb-4">Enter Password</h2>
            <input
              type="password"
              className="w-full border border-gray-300 rounded-lg p-2 mb-4"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="flex justify-end gap-4">
              <button
                onClick={closeModal}
                className="bg-gray-300 px-4 py-2 rounded-lg hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handlePasswordSubmit}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
