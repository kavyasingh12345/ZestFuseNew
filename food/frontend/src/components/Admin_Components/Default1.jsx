import React from 'react';

const Default1 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-orange-200 p-8 flex justify-center items-center">
      <div className="bg-white max-w-lg w-full rounded-lg shadow-lg p-8 text-center">
        <h1 className="text-3xl font-bold text-orange-600 mb-4">Welcome to Your Panel!</h1>
        <p className="text-gray-700 mb-6">
          Manage your dashboard, view updates, and customize your experience.
        </p>
      </div>
    </div>
  );
};

export default Default1;
