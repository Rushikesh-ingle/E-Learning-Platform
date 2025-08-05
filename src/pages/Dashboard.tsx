import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Clock, Award, TrendingUp, Play, ArrowRight } from 'lucide-react';
import CourseCard from '../components/CourseCard';
import ProgressCard from '../components/ProgressCard';
import { mockCourses, mockUser } from '../data/mockData';

const Dashboard: React.FC = () => {
  const enrolledCourses = mockCourses.filter(course => 
    mockUser.enrolledCourses.includes(course.id)
  );

  const recentCourses = enrolledCourses.slice(0, 3);
  const completedCount = mockUser.completedCourses.length;
  const totalEnrolled = mockUser.enrolledCourses.length;
  const completionRate = Math.round((completedCount / totalEnrolled) * 100);

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 rounded-2xl p-8 text-white">
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold">Welcome back, {mockUser.name}! 👋</h1>
            <p className="text-purple-100 text-lg">Ready to continue your learning journey?</p>
            <div className="flex items-center space-x-6 mt-4">
              <div className="flex items-center space-x-2">
                <BookOpen className="w-5 h-5" />
                <span>{totalEnrolled} courses enrolled</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5" />
                <span>{mockUser.totalWatchTime}h watched</span>
              </div>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="w-32 h-32 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
              <Award className="w-16 h-16 text-yellow-300" />
            </div>
          </div>
        </div>
      </div>

      {/* Progress Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <ProgressCard
          title="Courses Completed"
          value={completedCount}
          subtitle="Out of your enrolled courses"
          icon={<Award className="w-6 h-6 text-white" />}
          color="bg-gradient-to-r from-green-500 to-emerald-500"
          trend="+2 this month"
        />
        <ProgressCard
          title="Total Watch Time"
          value={`${mockUser.totalWatchTime}h`}
          subtitle="Time spent learning"
          icon={<Clock className="w-6 h-6 text-white" />}
          color="bg-gradient-to-r from-blue-500 to-cyan-500"
          trend="+12h this week"
        />
        <ProgressCard
          title="Completion Rate"
          value={`${completionRate}%`}
          subtitle="Overall progress"
          icon={<TrendingUp className="w-6 h-6 text-white" />}
          color="bg-gradient-to-r from-purple-500 to-pink-500"
          trend="+15% this month"
        />
        <ProgressCard
          title="Active Courses"
          value={totalEnrolled - completedCount}
          subtitle="Currently in progress"
          icon={<BookOpen className="w-6 h-6 text-white" />}
          color="bg-gradient-to-r from-orange-500 to-red-500"
        />
      </div>

      {/* Continue Learning Section */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-800">Continue Learning</h2>
          <Link
            to="/courses"
            className="flex items-center space-x-2 text-purple-600 hover:text-purple-700 font-medium"
          >
            <span>View all courses</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recentCourses.map((course) => (
            <CourseCard key={course.id} course={course} showProgress={true} />
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Actions</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Link
            to="/courses"
            className="flex flex-col items-center p-4 rounded-lg border border-gray-200 hover:border-purple-300 hover:bg-purple-50 transition-all duration-200"
          >
            <BookOpen className="w-8 h-8 text-purple-600 mb-2" />
            <span className="text-sm font-medium text-gray-700">Browse Courses</span>
          </Link>
          
          <Link
            to="/progress"
            className="flex flex-col items-center p-4 rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-200"
          >
            <TrendingUp className="w-8 h-8 text-blue-600 mb-2" />
            <span className="text-sm font-medium text-gray-700">View Progress</span>
          </Link>
          
          <Link
            to="/achievements"
            className="flex flex-col items-center p-4 rounded-lg border border-gray-200 hover:border-yellow-300 hover:bg-yellow-50 transition-all duration-200"
          >
            <Award className="w-8 h-8 text-yellow-600 mb-2" />
            <span className="text-sm font-medium text-gray-700">Achievements</span>
          </Link>
          
          <Link
            to="/profile"
            className="flex flex-col items-center p-4 rounded-lg border border-gray-200 hover:border-green-300 hover:bg-green-50 transition-all duration-200"
          >
            <Play className="w-8 h-8 text-green-600 mb-2" />
            <span className="text-sm font-medium text-gray-700">My Profile</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;