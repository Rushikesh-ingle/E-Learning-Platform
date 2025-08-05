📚 E-Learning Platform (React + TypeScript + Vite)

COMPANY: CODTECH IT SOLUTIONS

NAME: RUSHIKESH INGLE

INTERN ID: CT08DF124

DOMAIN: FRONT END DEVELOPMENT

DURATION: 4 WEEEKS

MENTOR: NEELA SANTOSH



#This is a modern E-Learning Platform built using React, TypeScript, TailwindCSS, and Vite. It features a modular structure with routing, reusable components, mock data integration, and future extensibility.

🚀 Features
🧭 Routing: Built-in navigation using React Router DOM.

📊 Dashboard: Overview section showing learning stats and options.

📚 Courses: List of available courses with navigation to individual course details.

🎯 Course Detail: Detailed page for individual course information.

📈 Progress: Track progress across all enrolled courses.

🏆 Achievements & Schedule: Placeholder routes for upcoming features.

💬 Discussions: Placeholder for future student interaction.

📁 Folder Structure
csharp
Copy
Edit
project/
│
├── public/               # Static assets (if any)
├── src/
│   ├── components/       # Reusable UI components
│   ├── data/             # Mock data files
│   ├── pages/            # Page-level React components
│   ├── App.tsx           # Main routing structure
│   ├── main.tsx          # Entry point
│   └── index.css         # Tailwind + custom styles
│
├── index.html            # App root HTML
├── package.json          # Dependencies and scripts
├── tailwind.config.js    # Tailwind CSS configuration
├── vite.config.ts        # Vite configuration
└── tsconfig.json         # TypeScript configuration
🛠️ Tech Stack
Tool/Library	Purpose
React + TypeScript	UI & logic
Vite	Build tool for fast dev
TailwindCSS	Utility-first styling
React Router DOM	Routing between pages
Lucide-react	Icon support
ESLint	Code linting

📦 Installation
bash
Copy
Edit
# Clone the repository
git clone <your-repo-url>
cd project

# Install dependencies
npm install
▶️ Running the App
bash
Copy
Edit
npm run dev
The app will be available at http://localhost:5173/ (default Vite port).

📤 Build for Production
bash
Copy
Edit
npm run build
🧪 Lint the Code
bash
Copy
Edit
npm run lint
📍 Routes Overview
Route Path	Component	Description
/	Dashboard	Home dashboard with quick info
/courses	Courses	List of available courses
/course/:id	CourseDetail	View details of a selected course
/progress	Progress	Track user’s learning progress
/achievements	Placeholder	Coming soon
/schedule	Placeholder	Coming soon
/discussions	Placeholder	Coming soon

🔮 Future Enhancements
✅ Authentication system (Login/Signup)

✅ Interactive discussions/comments

✅ Admin panel for content upload

✅ Responsive design for mobile devices

✅ API integration with backend

👨‍💻 Developed With
React

TypeScript

TailwindCSS

Vite

Lucide Icons
