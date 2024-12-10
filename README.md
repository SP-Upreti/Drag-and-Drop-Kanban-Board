# Task Board App

A task management board to visually track tasks across different stages: **Started**, **In Progress**, and **Completed**. The app features drag-and-drop functionality for easy task organization.

---

## Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/task-board-app.git
cd task-board-app
2. Install Dependencies
Ensure Node.js is installed. If not, download and install it. Then, run:

bash
Copy code
npm install
3. Start the Development Server
To run the app locally:

bash
Copy code
npm start
Visit http://localhost:3000 in your browser.

4. Build for Production
To create an optimized production build:

bash
Copy code
npm run build
The build folder will contain the production-ready app, ready for deployment.

Technology Choices & Rationale
React
React is used for its simplicity, flexibility, and component-based architecture, which allows for reusable components and efficient rendering.

React Beautiful DnD
Provides seamless and customizable drag-and-drop functionality for organizing tasks.

LocalStorage
Tasks are stored locally on the browser using LocalStorage, enabling data persistence without a backend.

Tailwind CSS
Used for styling the app, Tailwind's utility-first approach allows for responsive and clean layouts with minimal custom CSS.

Known Limitations/Trade-Offs
No Authentication/Authorization

Task data is stored locally and not tied to a user account.
Clearing browser data or switching devices will result in loss of data.
Limited Data Persistence

LocalStorage has a 5MB capacity and does not share data across devices or browsers.
No Server-Side Storage

All task changes are stored on the client-side only.
Drag-and-Drop Performance

Performance may degrade with a large number of tasks (e.g., hundreds or thousands).
Future Improvements
Authentication & User Accounts

Implement user authentication to enable multi-device access to task boards.
Server-Side Storage

Integrate a backend (e.g., Node.js with MongoDB) for persistent, cross-device storage.
Collaboration Features

Add real-time collaboration using WebSockets or Firebase, allowing multiple users to work on the same board simultaneously.
Task Editing and Priority Management

Allow editing task details, adding priority levels, and categorizing tasks.
Better Error Handling

Improve error handling for LocalStorage issues, invalid data formats, and drag-and-drop errors.
Improved UI/UX

Enhance design with animations, transitions, and improved mobile responsiveness.
Search and Filtering

Add filters for tasks by due dates, tags, or priority, and implement sorting options.
Notifications

Notify users of task updates, movements, or approaching deadlines.
License
This project is licensed under the MIT License. See the LICENSE file for more details.