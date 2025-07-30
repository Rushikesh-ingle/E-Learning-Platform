import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Play, 
  Clock, 
  Users, 
  Star, 
  CheckCircle, 
  PlayCircle,
  ArrowLeft,
  Download,
  Share2
} from 'lucide-react';
import { mockCourses } from '../data/mockData';

const CourseDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [activeModule, setActiveModule] = useState<string | null>(null);
  
  const course = mockCourses.find(c => c.id === id);

  if (!course) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-gray-800">Course not found</h2>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Breadcrumb */}
      <div className="flex items-center space-x-2 text-sm text-gray-600">
        <Link to="/courses" className="hover:text-purple-600">Courses</Link>
        <span>/</span>
        <span className="text-gray-800">{course.title}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Video Player */}
          <div className="bg-gray-900 rounded-xl overflow-hidden">
            <div className="aspect-video relative">
              <video
                controls
                className="w-full h-full object-cover"
                poster={course.thumbnail}
              >
                <source src={course.videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          {/* Course Info */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <span className="text-purple-600 font-medium text-sm">{course.category}</span>
                <h1 className="text-3xl font-bold text-gray-800 mt-1 mb-2">{course.title}</h1>
                <p className="text-gray-600">{course.description}</p>
              </div>
              <div className="flex items-center space-x-2 ml-4">
                <button className="p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg">
                  <Share2 className="w-5 h-5" />
                </button>
                <button className="p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg">
                  <Download className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="flex items-center space-x-6 text-sm text-gray-600 mb-6">
              <div className="flex items-center space-x-1">
                <Clock className="w-4 h-4" />
                <span>{course.duration}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Users className="w-4 h-4" />
                <span>{course.studentsEnrolled.toLocaleString()} students</span>
              </div>
              <div className="flex items-center space-x-1">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span>{course.rating} rating</span>
              </div>
            </div>

            <div className="border-t pt-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Instructor</h3>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold">
                    {course.instructor.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <p className="font-medium text-gray-800">{course.instructor}</p>
                  <p className="text-sm text-gray-600">Senior Developer & Instructor</p>
                </div>
              </div>
            </div>
          </div>

          {/* Course Modules */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Course Content</h3>
            <div className="space-y-3">
              {course.modules.map((module, index) => (
                <div
                  key={module.id}
                  className="border border-gray-200 rounded-lg overflow-hidden"
                >
                  <button
                    onClick={() => setActiveModule(activeModule === module.id ? null : module.id)}
                    className="w-full px-4 py-3 flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        module.completed ? 'bg-green-100' : 'bg-gray-100'
                      }`}>
                        {module.completed ? (
                          <CheckCircle className="w-4 h-4 text-green-600" />
                        ) : (
                          <PlayCircle className="w-4 h-4 text-gray-600" />
                        )}
                      </div>
                      <div className="text-left">
                        <p className="font-medium text-gray-800">{module.title}</p>
                        <p className="text-sm text-gray-600">{module.duration}</p>
                      </div>
                    </div>
                    <Play className="w-5 h-5 text-purple-600" />
                  </button>
                  
                  {activeModule === module.id && (
                    <div className="px-4 pb-4 border-t border-gray-100">
                      <p className="text-gray-600 text-sm mt-3">{module.description}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Enrollment Card */}
          <div className="bg-white rounded-xl p-6 shadow-sm sticky top-24">
            <div className="text-center mb-6">
              <div className="text-3xl font-bold text-gray-800 mb-1">${course.price}</div>
              <p className="text-gray-600">One-time purchase</p>
            </div>

            <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-200 mb-4">
              Enroll Now
            </button>

            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span>Lifetime access</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span>Certificate of completion</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span>30-day money back guarantee</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span>Access on mobile and desktop</span>
              </div>
            </div>
          </div>

          {/* Progress Card */}
          {course.progress !== undefined && (
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h4 className="font-semibold text-gray-800 mb-4">Your Progress</h4>
              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-600">Overall Progress</span>
                  <span className="text-sm font-medium text-gray-800">{course.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${course.progress}%` }}
                  ></div>
                </div>
              </div>
              <div className="text-sm text-gray-600">
                <p>{course.modules.filter(m => m.completed).length} of {course.modules.length} modules completed</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;