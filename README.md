# NextQuest

NextQuest is a local-first academic workload dashboard. It helps students decide what to work on next by combining task deadlines with estimated effort, then presenting the workload in a focused, low-distraction interface.

## What it does

- Adds academic tasks with a title, category, due date, and estimated effort in hours.
- Calculates a priority score from time remaining and effort. Lower scores appear first.
- Gives overdue and due-today tasks an urgency boost, while larger tasks are surfaced earlier.
- Shows a **Priority Focus** view containing the most urgent tasks and tasks due within three days.
- Shows an **All Tasks** view with active tasks and a separate completed section.
- Marks tasks complete or restores them to the active list.
- Deletes tasks.
- Calculates a workload stress level from active task count, effort, and deadline proximity.
- Persists task changes through a JSON Server REST API, allowing multiple devices on the same local network to use the same data when the server is exposed on that network.

## Tech stack

- React 19 and TypeScript
- Vite
- JSON Server for the local REST API
- `lucide-react` for interface icons
- CSS glassmorphism-style responsive UI

## Getting started

### Requirements

- Node.js and npm

### Install dependencies

```bash
npm install
```

### Start the API

In one terminal, from the project root:

```bash
npx json-server --watch db.json --port 5000 --host 0.0.0.0
```

The API is available at `http://localhost:5000`. The task endpoints are under `/tasks`.

### Start the frontend

In a second terminal:

```bash
npm run dev -- --host
```

Open the Vite URL shown in the terminal, usually `http://localhost:5173`.

Vite proxies frontend requests from `/api/*` to `http://localhost:5000/*`, so the browser calls `/api/tasks` while JSON Server serves `/tasks`.

## Available scripts

```bash
npm run dev       # Start the Vite development server
npm run build     # Type-check and create a production build
npm run lint      # Run ESLint
npm run preview   # Preview the production build locally
```

## Task priority

Each task receives a score using the number of days until its due date and its estimated effort:

```text
score = (days until due × 24) - (effort hours × 2)
```

Overdue tasks and tasks due today receive special urgency scores. The interface also applies visual priority classes based on deadline and effort, using urgent, high, and normal states.

## Stress meter

The stress meter considers only incomplete tasks. It increases with:

- The number of active tasks
- Estimated effort
- Tasks due within five days
- Tasks due today or already overdue

The result is capped at 100% and labelled **Zen Mode**, **Manageable**, **Elevated**, or **Critical**.

## Project structure

```text
src/
├── frontend/
│   ├── App.tsx       # Application state and task actions
│   ├── api.ts        # JSON Server requests
│   └── types.ts      # Task types and priority calculations
├── ui/
│   ├── components/   # Header, task form/list, and stress meter
│   └── styles/       # Responsive glass-style interface
└── main.tsx          # React entry point

db.json              # JSON Server data store
vite.config.ts       # React/Vite setup and /api proxy
```

## Current limitations

- Data is stored locally in JSON Server; there is no cloud authentication or hosted database.
- The frontend expects the API to be running on port `5000`.
- The interface uses optimistic updates, so a failed API request is logged to the browser console rather than shown as an in-app error.
- `npm run build` and `npm run lint` should be run locally before deployment; the current source fixes the previous type-only import errors.
- The current project has no automated test suite.

## License

No license has been specified for this project yet.
