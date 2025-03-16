import React from "react";

const ProfilePopup = ({ onLogout }) => {
    return (
        <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg p-4 z-10">
            <p className="text-gray-700 font-semibold mb-2">Xin chào, User123</p>
            <button
                onClick={onLogout}
                className="w-full bg-red-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-600"
            >
                Đăng xuất
            </button>
        </div>
    );
};

export default ProfilePopup;