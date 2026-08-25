TITLE:
NEXTQUEST: A SMART ACADEMIC PRIORITY MANAGER & SYNC SYSTEM

Under the guidance of:
                                    Prof. Shaik Shabina

Submitted by:
 Akshaya – 23BCE20011 
 Kundana – 23BCE8767
 Likita Reddy – 23BCE8765 
 Sri Devi – 23BCE7400 
 Pravallika – 23BCE20278
 Divya – 23BCE9745
 Arshiya Shaik – 23BCE20241

<br>

### TEAM ROLES & RESPONSIBILITIES
| Team Member | Primary Responsibility |
|---|---|
| **Akshaya** | Core Frontend React Architecture & Application State Logic |
| **Kundana** | UI/UX Visual Design & Glassmorphism Component Implementation |
| **Likita Reddy** | Backend Network Connectivity & JSON-Server Local Synchronization |
| **Sri Devi** | Algorithmic Design (Stress Meter Computations & Priority Engine) |
| **Pravallika** | Project Documentation & System Verification Testing |
| **Divya** | Academic Report Generation & Formatting Structure |
| **Arshiya Shaik** | Final Presentation Layout, Media Assets, & Slide Documentation |

*(Note: Pravallika, Divya, and Arshiya Shaik served exclusively as the dedicated Documentation & Reporting team to finalize the academic write-up and presentation structures.)*

<br>

ABSTRACT
Academic burnout and procrastination caused by poor task management remain major concerns for students, contributing significantly to high stress and lower academic performance. Traditional task applications merely record workloads without analyzing effort density, leaving students without a clear sense of immediate priorities. The need for an effective, logical mechanism has led to the development of smart web systems that calculate task importance dynamically.
This project presents the design and implementation of NextQuest, a React-based algorithmic task management dashboard integrated with local network synchronization. The system utilizes a strict time-to-effort algorithmic engine to visually sort the student’s assignments. The application logic is processed by a Vite-powered React framework, serving as the system's central control interface.
If a detected task possesses a high effort duration but a very short deadline, the system automatically assigns it an "Urgent" status, thereby alerting the user via red glowing indicators. In addition, an algorithmic "Stress Meter" provides visual real-time feedback regarding the overall active workload. 
To further enhance accessibility, the system incorporates a JSON-Server backend to track the tasks in real-time across devices. Due to the limitations of isolated browser storage, a Wi-Fi-based network proxy approach is implemented instead of a conventional standalone cloud database. This ensures reliable data tracking and mobile syncing natively via local area networks.
The proposed system is highly responsive, distraction-free, and scalable for real-world academic applications. By combining task execution with automated effort analysis and location-independent syncing, the project aims to significantly reduce academic stress and improve student focus.


INDEX 
Introduction 
Background 
Problem Definition 
Objectives of Proposed Work 
Methodology / Procedure 
Results and Discussion 
Conclusion and Future Scope 
References 
Appendix

LIST OF FIGURES: 
Fig 1: Project Folder Architecture Diagram - pg:8
Fig 2: NextQuest Glassmorphism User Interface Overview - pg:9
Fig 3: Stress Meter Visual Mechanism - pg:9
Fig 4: Algorithmic Priority Task Cards - pg:10
Fig 5: Mobile Wi-Fi Sync Demonstration - pg:11

LIST OF TABLES
Table 1: Technologies & Modules Used – pg:6
Table 2: System Functions – pg:7

ABBREVIATIONS
API – Application Programming Interface 
DOM – Document Object Model 
JSON – JavaScript Object Notation 
UI – User Interface


1. INTRODUCTION 
Academic management is a critical concern in modern education, with unorganized workloads being one of the leading causes of student burnout worldwide. Among the various factors contributing to this, attempting to balance simultaneous exams, labs, and assignments is one of the most stressful challenges. Unmanaged tasks impair cognitive focus, reduce alertness, and induce anxiety, all of which are essential for academic success.
Despite the existence of digital checklists, procrastination continues to be a persistent issue due to a lack of actionable guidance. Traditional methods, such as agenda planners and basic phone notes, are limited in their effectiveness as they rely on manual prioritization and cannot dynamically compute shifting deadlines. Therefore, there is a growing need for automated algorithms that can detect approaching deadlines and take immediate visual action.
The advancement of modular web components and state-driven frameworks has enabled the development of intelligent productivity solutions. By integrating state managers, asynchronous data fetching, and visual algorithms, it is possible to design systems that monitor a student's workload in real time and respond accordingly.
This project focuses on the development of NextQuest, an active algorithmic task manager that strictly reorders an academic workload if a critical deadline is approaching. The system employs React for visual DOM manipulation, a Vite compiler for rapid processing, and a local server for network syncing. Additional modules, such as a localized Stress Meter and categorized tabs, enhance user interaction by providing instant status information.
Furthermore, the integration of a proxy server API allows for real-time syncing of the workload, which can be useful when moving between a laptop and a smartphone. The use of a Wi-Fi-based proxy demonstrates adaptability in environments without requiring paid cloud hosting.

2. BACKGROUND 
Procrastination and deadline mismanagement are major causes of academic stress, leading to poor grades and mental fatigue. Traditional methods such as physical planners and basic to-do lists are not always effective, as they depend on manual sorting and cannot provide a continuous sense of algorithmic priority.
With advancements in web architecture, automated task computation has become a practical solution. The React.js library is commonly used to detect data changes rapidly without refreshing the user interface. It works based on a virtual DOM mapping technique when exposed to state updates.
The Typescript language is widely used for such systems due to its strict typing interfaces and ability to handle complex data objects (like Tasks). Asynchronous fetch APIs are used to read and write database structures acting as communication protocols, while CSS glassmorphism effects provide modern aesthetic feedback.
In this project, a `json-server` is also integrated for network tracking. Since cloud hosting access is often unviable for local tools, a Wi-Fi-based proxy configuration was used. This ensures that the system remains perfectly synchronized across all devices operating on the identical network.

3. PROBLEM DEFINITION 
Poor task visibility continues to be a major academic issue, as students facing massive workloads are more likely to experience "analysis paralysis". Existing solutions mainly rely on the student to sort priority and do not provide an automated computation of importance based on effort vs. time.
There is a profound need for a system that can automatically calculate the urgency of a submission and enforce visual urgency without requiring manual user tags.
The problem addressed in this project is to design a system that:
- Records an academic task, deadline, and estimated hours of effort.
- Determines structurally if the deadline is overlapping with high effort.
- Prioritizes the task strictly by urgency status (Urgent, High, Normal).
- Provides visual stress metrics via a live Progress Bar.
- Enables synchronous data tracking for phone and computer via Wi-Fi.

4. OBJECTIVES OF PROPOSED WORK
The main objective of this project is to develop a system that enhances academic focus by prioritizing assignments using automated logic mechanisms.
The specific objectives are:
- To capture task requirements using modular React forms.
- To process task data strings and dates using Typescript logic.
- To store data permanently utilizing a Node.js JSON database.
- To provide visual alerts based on time-left calculations.
- To display real-time workload limits using a Stress Meter DOM element.
- To track data dynamically over local networks utilizing a Vite HTTP Proxy.
- To implement Wi-Fi phone-syncing constraints securely without HTTPS UUID generation.
- To design a highly scalable component-based architecture.

Table 1: Technologies & Modules Used 
S.No | Component Name | Quantity | Description
1 | React 18 | 1 | The core User Interface library used to process visual logic and manipulate DOM elements.
2 | Vite | 1 | A build tool providing blazing-fast hot module replacement and network proxying.
3 | TypeScript | 1 | Adds rigid typing architecture to ensure task objects are handled safely during execution.
4 | JSON-Server | 1 | Acts as a lightweight REST API backend database storing the workload arrays.
5 | React Hooks | As required | Utilizes `useState` and `useEffect` to manage application lifecycles.
6 | Fetch API | 1 | Built-in network protocol used to communicate asynchronously with the backend.
7 | CSS3 Variables | As required | Controls the global color scales and frosted glass designs.
8 | Lucide Icons | As required | Provides lightweight SVG vector graphics for UI elements.
9 | Node.js | 1 | Server environment executing the database operations running locally.

Table 2: System Functions 
S.No | Code Module | Function
1 | `App.tsx` | The centralized orchestration state controller connecting arrays to the UI.
2 | `api.ts` | Processes external HTTP protocols (GET, POST, PATCH, DELETE) communicating to `db.json`.
3 | `db.json` | Acts as the primary backend holding the arrays of the student's task structure.
4 | `StressMeter.tsx` | Produces algorithmic math visually translating active time and effort into a percentage bar.
5 | `Header.tsx` | Renders branding and navigation information statically.
6 | `TaskForm.tsx` | Generates a decoupled user form capturing title, deadline, constraint, and category data.
7 | `TaskList.tsx` | Iterates and maps over active datasets generating priority-colored CSS task cards.
8 | `Proxy Configuration`| Ensures phone browsers dynamically fetch data by routing `/api/` endpoints to the localhost.

5. METHODOLOGY / PROCEDURE 
System Overview
The system is based on an abstracted modular React architecture, which acts as the central execution layer. It receives input from the user form and distributes data simultaneously to the database server and the visual Priority engine.

<br>

<div align="center">
  <h3>[ INSERT FIG 1: PROJECT FOLDER ARCHITECTURE SCREENSHOT HERE ]</h3>
  <p><i>(Take a screenshot of your VS Code folder tree showing backend, src/frontend, src/ui)</i></p>
</div>

<br>

Working Principle
The algorithm maps tasks into mathematical variables, comparing the requested `dueDate` against real-time system clocks. The system computes this logic rapidly:
- If duration <= 1 day AND effort > 3 hours → Urgent (Red Border).
- If duration <= 3 days OR duration <= 5 days with massive effort → High (Yellow Border).
At the exact same time, the StressMeter summarizes all effort hours recursively and executes a penalty increment for overdue items.

<br>

<div align="center">
  <h3>[ INSERT FIG 2: NEXTQUEST HUD OVERVIEW IMAGE HERE ]</h3>
  <p><i>(Take a screenshot of the entire web application running in Chrome)</i></p>
</div>

<br>

Procedure
- Wi-Fi Host powers up the application servers via Vite and Node.js.
- System initiates an asynchronous HTTP GET request to `db.json`.
- `App.tsx` reads network JSON and parses the active tasks into state.
- React DOM processes data visually assigning color classes algorithmically.
- If a new task is added: 
  - API triggers an HTTP POST request.
  - StressMeter recalculates values and updates UI width incrementally.
- Mobile client queries local IP over identical Wi-Fi returning the updated database.

<br>

<div align="center">
  <h3>[ INSERT FIG 3: STRESS METER SCREENSHOT HERE ]</h3>
  <p><i>(Take a screenshot zooming in specifically on the glowing StressMeter component)</i></p>
</div>

<br>

6. RESULTS AND DISCUSSION
The developed system was successfully implemented and tested using a standalone component infrastructure. The decoupled HTTP API was able to read tasks flawlessly and provide reliable updates to multiple networked screens simultaneously.

<br>

<div align="center">
  <h3>[ INSERT FIG 4: ALGORITHMIC PRIORITY CARDS HERE ]</h3>
  <p><i>(Take a screenshot showing urgent RED tasks stacked vertically)</i></p>
</div>

<br>

During testing, the algorithmic logic engine responded accurately based on predefined system deadlines:
- When standard assignments were submitted far in advance, the `TaskList` engine correctly tagged them strictly as "Normal", allowing clear translucent visual UI states without anxiety loops.
- When an urgent 5-hour task due tomorrow was submitted, the `StressMeter` dynamically accelerated towards "Critical" (High Percentage) and the exact task was prioritized instantly at the top of the HUD wrapped in a red border.

Response times mapping state over local networks were minimal, ensuring asynchronous consistency across devices simulating cloud synchronizations effectively without requiring internet databases. The fallback non-encrypting ID generator operated excellently on unencrypted smartphone protocols bypassing the mobile web standard constraints.

<br>

<div align="center">
  <h3>[ INSERT FIG 5: MOBILE WI-FI HOSTING DEMONSTRATION HERE ]</h3>
  <p><i>(Take a screenshot of the NextQuest app running on your smartphone browser)</i></p>
</div>

<br>

Overall, the system demonstrated highly functional algorithmic priority mapping. The complete decoupling of the architecture operated flawlessly and scalable for real-time application loads.

7. CONCLUSION AND FUTURE SCOPE
Conclusion
The React-Based Smart Priority Manager with Network Proxy Syncing was successfully designed and integrated. The system effectively tracks task severity based on temporal mathematics and visualizes urgent conditions gracefully utilizing modern UI patterns.
By modularizing core elements such as `db.json`, Node API algorithms, and Vite framework engines, the project provides a highly scalable architecture. The use of a decentralized HTTP networking pipeline ensures offline viability across limited campus environments without demanding full cellular data dependence.
The platform is exceptionally robust, cost-effective, and functional, translating conventional embedded system workflow models directly into scalable software automation.

Future Scope
This architecture can be structurally extended utilizing several pipelines:
- Implementation of an authentic Cloud-based JWT Authentication environment (Firebase or Supabase).
- Integration of live Push Notifications mapping directly to smartphone browser APIs alerting for immediate uncompleted deadlines.
- Adding categorical sorting grids or calendar Heatmaps showing productive hours mapped over months.
- Data logging analytics for tracking how often a user successfully beats their estimated effort parameters.

8. REFERENCES
- React Documentation Fundamentals – https://reactjs.org
- Vite Developer Server and Proxy Routing Documentation 
- Modern UI Design Principles (Glassmorphism & Mathematical Gradients)
- MDN Architecture Docs on Secure Context `crypto` generation limitations

9. APPENDIX
Sample Abstracted API Logic (api.ts)

```typescript
import type { AcademicTask } from './types';
import { calculatePriority } from './types';

export async function fetchTasks(): Promise<AcademicTask[]> {
  const res = await fetch('/api/tasks');
  const data = await res.json();
  return data.map((t: AcademicTask) => ({
    ...t,
    priorityScore: calculatePriority(t.dueDate, t.effortHours)
  }));
}

export async function createTask(task: AcademicTask): Promise<void> {
  await fetch('/api/tasks', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(task)
  });
}
```

Stress Meter Algorithm

```typescript
  const calculateStressLevel = (tasks: AcademicTask[]) => {
    const activeTasks = tasks.filter(t => !t.completed);
    if (activeTasks.length === 0) return 0;
  
    let score = 0;
    const today = new Date();
    today.setHours(0,0,0,0);
  
    activeTasks.forEach(t => {
      score += 5; 
      score += t.effortHours * 2.5; 
      
      const dueDate = new Date(t.dueDate);
      dueDate.setHours(0,0,0,0);
      const diffDays = Math.ceil((dueDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
      
      if (diffDays < 0) score += 35; // Overdue Penalty
      else if (diffDays === 0) score += 25; 
      else if (diffDays <= 2) score += 15; 
      else if (diffDays <= 5) score += 5;
    });
  
    return Math.min(100, Math.max(0, score));
  };
```
