export interface Course {
  id: string;
  title: string;
  instructor: string;
  description: string;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  category: string;
  rating: number;
  studentsEnrolled: number;
  price: number;
  thumbnail: string;
  videoUrl: string;
  progress?: number;
  completed?: boolean;
  modules: Module[];
}

export interface Module {
  id: string;
  title: string;
  duration: string;
  completed: boolean;
  videoUrl: string;
  description: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  enrolledCourses: string[];
  completedCourses: string[];
  totalWatchTime: number;
  joinDate: string;
}