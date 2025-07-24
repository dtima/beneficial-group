import React from 'react';

interface StatCardProps {
  value: string;
  label: string;
  className?: string;
}

export const StatCard: React.FC<StatCardProps> = ({ value, label, className = '' }) => (
  <div className={`bg-white/90 backdrop-blur-sm rounded-xl p-4 text-center shadow-lg hover:shadow-xl transition-shadow duration-300 ${className}`}>
    <div className="text-2xl font-bold text-gray-900 mb-1">{value}</div>
    <div className="text-sm text-gray-600">{label}</div>
  </div>
); 