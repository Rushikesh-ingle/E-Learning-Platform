import React from 'react';
import { TrendingUp, Clock, Award } from 'lucide-react';

interface ProgressCardProps {
  title: string;
  value: string | number;
  subtitle: string;
  icon: React.ReactNode;
  color: string;
  trend?: string;
}

const ProgressCard: React.FC<ProgressCardProps> = ({
  title,
  value,
  subtitle,
  icon,
  color,
  trend
}) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300">
      <div className="flex items-center justify-between mb-4">
        <div className={`p-3 rounded-lg ${color}`}>
          {icon}
        </div>
        {trend && (
          <div className="flex items-center space-x-1 text-green-600">
            <TrendingUp className="w-4 h-4" />
            <span className="text-sm font-medium">{trend}</span>
          </div>
        )}
      </div>
      
      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-1">{value}</h3>
        <p className="text-sm text-gray-600 mb-1">{title}</p>
        <p className="text-xs text-gray-500">{subtitle}</p>
      </div>
    </div>
  );
};

export default ProgressCard;