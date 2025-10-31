import React, { useState } from "react";
import { useUser } from "../context/UserContext";
import { toast } from "react-toastify";

const UserProfileModal = ({ isOpen, onClose, userEmail }) => {
  const { user, updateUser } = useUser();
  const [name, setName] = useState(user?.name || "");
  const [mobile, setMobile] = useState(user?.phone || "");
  const [photo, setPhoto] = useState(null);
  const [preview, setPreview] = useState(user?.photo || "");
  const [fileName, setFileName] = useState(""); // ✅ new state for file name

  if (!isOpen) return null;

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPhoto(file);
      setFileName(file.name); // ✅ save file name
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSave = (e) => {
    e.preventDefault();
    const updatedData = {
      name,
      phone: mobile,
      photo: preview || user.photo,
    };
    updateUser(updatedData);
     toast.success(" Profile updated successfully!");
    onClose();
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black/60 z-[9999] p-4">
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-md sm:max-w-lg p-6 relative overflow-y-auto max-h-[90vh]">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 text-xl font-bold hover:text-gray-800"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
          User Profile
        </h2>

        <form onSubmit={handleSave} className="space-y-4">
          {/* Email */}
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              value={userEmail}
              disabled
              className="w-full border rounded-lg px-3 py-2 bg-gray-100 text-gray-600"
            />
          </div>

          {/* Name */}
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-1">
              Full Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border rounded-lg px-3 py-2 focus:ring focus:ring-blue-200"
              placeholder="Enter your name"
              required
            />
          </div>

          {/* Mobile */}
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-1">
              Mobile Number
            </label>
            <input
              type="tel"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              className="w-full border rounded-lg px-3 py-2 focus:ring focus:ring-blue-200"
              placeholder="Enter your mobile number"
              required
            />
          </div>

          {/* Photo */}
          <div>
            <label className="block text-gray-700 text-sm font-medium mb-1">
              Profile Photo
            </label>

            <div className="flex items-center gap-3">
              <input
                type="file"
                accept="image/*"
                onChange={handlePhotoChange}
                className="border p-1 rounded-lg cursor-pointer"
              />
              {fileName && (
                <span className="text-sm text-gray-600 truncate max-w-[120px]">
                  {fileName}
                </span>
              )}
            </div>

            
          </div>

          <div className="flex justify-end gap-3 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-700"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserProfileModal;


