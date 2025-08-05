import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Users, Star, Play } from 'lucide-react';
import { Course } from '../types';

interface CourseCardProps {
  course: Course;
  showProgress?: boolean;
}

const CourseCard: React.FC<CourseCardProps> = ({ course, showProgress = false }) => {
  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group">
      <div className="relative">
        <img
          src={course.thumbnail}
          alt={course.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
          <Link
            to={`/course/${course.id}`}
            className="opacity-0 group-hover:opacity-100 bg-white bg-opacity-90 p-3 rounded-full hover:bg-opacity-100 transition-all duration-300"
          >
            <Play className="w-6 h-6 text-purple-600" />
          </Link>
        </div>
        <span className={`absolute top-3 left-3 px-2 py-1 rounded-full text-xs font-medium ${getLevelColor(course.level)}`}>
          {course.level}
        </span>
        {course.completed && (
          <div className="absolute top-3 right-3 bg-green-500 text-white p-1 rounded-full">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
        )}
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-purple-600 font-medium">{course.category}</span>
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-sm text-gray-600">{course.rating}</span>
          </div>
        </div>

        <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">{course.title}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{course.description}</p>

        <div className="flex items-center text-sm text-gray-500 mb-4 space-x-4">
          <div className="flex items-center space-x-1">
            <Clock className="w-4 h-4" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Users className="w-4 h-4" />
            <span>{course.studentsEnrolled.toLocaleString()}</span>
          </div>
        </div>

        {showProgress && course.progress !== undefined && (
          <div className="mb-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-600">Progress</span>
              <span className="text-sm font-medium text-gray-800">{course.progress}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${course.progress}%` }}
              ></div>
            </div>
          </div>
        )}

        <div className="flex items-center justify-between">
          <div className="text-gray-600">
            <span className="text-sm">by </span>
            <span className="text-sm font-medium">{course.instructor}</span>
          </div>
          <div className="text-right">
            <span className="text-lg font-bold text-gray-800">${course.price}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;