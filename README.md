# Task Management App

## Project Setup
Hosted Link : https://the-regiment.vercel.app/
### Prerequisites
- Node.js (v14 or later)
- npm or yarn

### Installation
1. Clone the repository:
   ```sh
   git clone <repo-url>
   cd task-management-app
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm run dev
   ```

## Tech Stack
- **React** (with TypeScript)

## Features
- **Task Management:** Create, edit, update, delete tasks.
- **Task Details:** View detailed information about a task.
- **Status Filtering:** Filter tasks based on their status (All, Pending, Completed).
- **Routing:** Navigate between dashboard, task details, and add/edit task pages.
- **Responsive UI:** Styled using CSS for a clean and adaptive layout.

## Project Structure
```
├── src
│   ├── components        # Reusable UI components
│   ├── pages             # Page components for different routes
│   ├── routes            # Application routes
│   ├── styles            # Global styles
│   ├── App.tsx           # Main application component
│   ├── main.tsx          # Entry point
│   ├── types.ts          # TypeScript interfaces
│
├── public                # Static assets
├── package.json          # Dependencies and scripts
├── tsconfig.json         # TypeScript configuration
└── README.md             # Project documentation
```

## Available Scripts
- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm run lint` - Run linting checks

## TypeScript State Structure
```ts
interface Task {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  status: 'Pending' | 'In Progress' | 'Completed';
}
```

## Contributing
1. Fork the repository.
2. Create a feature branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Open a Pull Request.

## License
This project is licensed under the MIT License.

