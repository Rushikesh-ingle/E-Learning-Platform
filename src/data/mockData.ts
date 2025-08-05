import { Course, User } from '../types';

export const mockUser: User = {
  id: '1',
  name: 'Sarah Johnson',
  email: 'sarah@example.com',
  avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2',
  enrolledCourses: ['1', '2', '3'],
  completedCourses: ['1'],
  totalWatchTime: 125,
  joinDate: '2024-01-15'
};

export const mockCourses: Course[] = [
  {
    id: '1',
    title: 'Complete React Development Course',
    instructor: 'John Mitchell',
    description: 'Master React.js with modern hooks, context API, and advanced patterns. Build real-world applications from scratch.',
    duration: '12 hours',
    level: 'Intermediate',
    category: 'Web Development',
    rating: 4.8,
    studentsEnrolled: 15420,
    price: 89.99,
    thumbnail: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    progress: 100,
    completed: true,
    modules: [
      {
        id: '1-1',
        title: 'Introduction to React',
        duration: '45 min',
        completed: true,
        videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
        description: 'Learn the fundamentals of React and its component-based architecture.'
      },
      {
        id: '1-2',
        title: 'Working with Components',
        duration: '60 min',
        completed: true,
        videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
        description: 'Deep dive into React components, props, and state management.'
      },
      {
        id: '1-3',
        title: 'React Hooks Mastery',
        duration: '75 min',
        completed: true,
        videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
        description: 'Master useState, useEffect, and custom hooks.'
      }
    ]
  },
  {
    id: '2',
    title: 'Advanced JavaScript & ES6+',
    instructor: 'Emily Chen',
    description: 'Deep dive into modern JavaScript features, async programming, and advanced concepts for professional development.',
    duration: '8 hours',
    level: 'Advanced',
    category: 'Programming',
    rating: 4.9,
    studentsEnrolled: 8750,
    price: 79.99,
    thumbnail: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    progress: 65,
    completed: false,
    modules: [
      {
        id: '2-1',
        title: 'ES6+ Features',
        duration: '50 min',
        completed: true,
        videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
        description: 'Explore arrow functions, destructuring, and template literals.'
      },
      {
        id: '2-2',
        title: 'Async JavaScript',
        duration: '65 min',
        completed: true,
        videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
        description: 'Master promises, async/await, and error handling.'
      },
      {
        id: '2-3',
        title: 'Advanced Patterns',
        duration: '70 min',
        completed: false,
        videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
        description: 'Learn closures, prototypes, and design patterns.'
      }
    ]
  },
  {
    id: '3',
    title: 'UI/UX Design Fundamentals',
    instructor: 'David Rodriguez',
    description: 'Learn design principles, user research, prototyping, and modern design tools to create stunning user experiences.',
    duration: '10 hours',
    level: 'Beginner',
    category: 'Design',
    rating: 4.7,
    studentsEnrolled: 12300,
    price: 69.99,
    thumbnail: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    progress: 30,
    completed: false,
    modules: [
      {
        id: '3-1',
        title: 'Design Principles',
        duration: '40 min',
        completed: true,
        videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
        description: 'Understand color theory, typography, and layout principles.'
      },
      {
        id: '3-2',
        title: 'User Research',
        duration: '55 min',
        completed: false,
        videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
        description: 'Learn user interviews, personas, and usability testing.'
      },
      {
        id: '3-3',
        title: 'Prototyping',
        duration: '60 min',
        completed: false,
        videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
        description: 'Create interactive prototypes with modern design tools.'
      }
    ]
  },
  {
    id: '4',
    title: 'Python for Data Science',
    instructor: 'Anna Williams',
    description: 'Complete guide to Python programming for data analysis, visualization, and machine learning applications.',
    duration: '15 hours',
    level: 'Intermediate',
    category: 'Data Science',
    rating: 4.6,
    studentsEnrolled: 9800,
    price: 99.99,
    thumbnail: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    progress: 0,
    completed: false,
    modules: [
      {
        id: '4-1',
        title: 'Python Basics',
        duration: '90 min',
        completed: false,
        videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
        description: 'Python syntax, data types, and control structures.'
      },
      {
        id: '4-2',
        title: 'NumPy & Pandas',
        duration: '120 min',
        completed: false,
        videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
        description: 'Data manipulation and analysis with NumPy and Pandas.'
      }
    ]
  }
];