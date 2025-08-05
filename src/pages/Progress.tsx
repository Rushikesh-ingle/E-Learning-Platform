import React from 'react';
import { Calendar, Clock, Trophy, TrendingUp, Target, Award } from 'lucide-react';
import ProgressCard from '../components/ProgressCard';
import CourseCard from '../components/CourseCard';
import { mockCourses, mockUser } from '../data/mockData';

const Progress: React.FC = () => {
  const enrolledCourses = mockCourses.filter(course => 
    mockUser.enrolledCourses.includes(course.id)
  );

  const completedCourses = enrolledCourses.filter(course => course.completed);
  const inProgressCourses = enrolledCourses.filter(course => !course.completed);

  const totalProgress = enrolledCourses.reduce((sum, course) => 
    sum + (course.progress || 0), 0
  ) / enrolledCourses.length;

  const weeklyData = [
    { day: 'Mon', hours: 2.5 },
    { day: 'Tue', hours: 1.8 },
    { day: 'Wed', hours: 3.2 },
    { day: 'Thu', hours: 2.1 },
    { day: 'Fri', hours: 2.8 },
    { day: 'Sat', hours: 4.2 },
    { day: 'Sun', hours: 1.5 },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-800">Learning Progress</h1>
        <p className="text-gray-600 mt-2">Track your learning journey and achievements</p>
      </div>

      {/* Progress Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <ProgressCard
          title="Overall Progress"
          value={`${Math.round(totalProgress)}%`}
          subtitle="Across all courses"
          icon={<Target className="w-6 h-6 text-white" />}
          color="bg-gradient-to-r from-purple-500 to-pink-500"
          trend="+12% this week"
        />
        <ProgressCard
          title="Courses Completed"
          value={completedCourses.length}
          subtitle="Total achievements"
          icon={<Award className="w-6 h-6 text-white" />}
          color="bg-gradient-to-r from-green-500 to-emerald-500"
          trend="+1 this month"
        />
        <ProgressCard
          title="Study Streak"
          value="12 days"
          subtitle="Current streak"
          icon={<Calendar className="w-6 h-6 text-white" />}
          color="bg-gradient-to-r from-orange-500 to-red-500"
          trend="Personal best!"
        />
        <ProgressCard
          title="This Week"
          value="18.1h"
          subtitle="Time studied"
          icon={<Clock className="w-6 h-6 text-white" />}
          color="bg-gradient-to-r from-blue-500 to-cyan-500"
          trend="+3.2h vs last week"
        />
      </div>

      {/* Weekly Activity Chart */}
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold text-gray-800">Weekly Activity</h3>
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Clock className="w-4 h-4" />
            <span>Hours studied per day</span>
          </div>
        </div>
        
        <div className="flex items-end justify-between space-x-2 h-64">
          {weeklyData.map((data, index) => (
            <div key={data.day} className="flex flex-col items-center flex-1">
              <div className="flex-1 flex items-end mb-2">
                <div
                  className="w-full bg-gradient-to-t from-purple-500 to-blue-500 rounded-t-lg min-h-[4px] transition-all duration-500 delay-100"
                  style={{ 
                    height: `${(data.hours / Math.max(...weeklyData.map(d => d.hours))) * 200}px`,
                    animationDelay: `${index * 100}ms`
                  }}
                ></div>
              </div>
              <div className="text-center">
                <div className="text-sm font-medium text-gray-800">{data.hours}h</div>
                <div className="text-xs text-gray-600">{data.day}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Courses in Progress */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-800">Courses in Progress</h2>
          <span className="text-gray-600">{inProgressCourses.length} active</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {inProgressCourses.map((course) => (
            <CourseCard key={course.id} course={course} showProgress={true} />
          ))}
        </div>
      </div>

      {/* Completed Courses */}
      {completedCourses.length > 0 && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-800">Completed Courses</h2>
            <span className="text-gray-600">{completedCourses.length} completed</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {completedCourses.map((course) => (
              <CourseCard key={course.id} course={course} showProgress={true} />
            ))}
          </div>
        </div>
      )}

      {/* Learning Goals */}
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <h3 className="text-xl font-semibold text-gray-800 mb-6">Learning Goals</h3>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-purple-50 rounded-lg border border-purple-200">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                <Trophy className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <h4 className="font-medium text-gray-800">Complete 3 courses this month</h4>
                <p className="text-sm text-gray-600">1 of 3 completed</p>
              </div>
            </div>
            <div className="text-right">
              <div className="w-24 bg-gray-200 rounded-full h-2 mb-1">
                <div className="bg-purple-500 h-2 rounded-full" style={{ width: '33%' }}></div>
              </div>
              <span className="text-sm text-gray-600">33%</span>
            </div>
          </div>

          <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg border border-blue-200">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <Clock className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h4 className="font-medium text-gray-800">Study 20 hours per week</h4>
                <p className="text-sm text-gray-600">18.1 of 20 hours this week</p>
              </div>
            </div>
            <div className="text-right">
              <div className="w-24 bg-gray-200 rounded-full h-2 mb-1">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: '90%' }}></div>
              </div>
              <span className="text-sm text-gray-600">90%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Progress;