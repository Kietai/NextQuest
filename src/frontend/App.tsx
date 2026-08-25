import { useState, useEffect } from 'react';
import type { FormEvent } from 'react';
import type { AcademicTask, TaskCategory } from './types';
import { calculatePriority, sortTasksByPriority } from './types';
import { fetchTasks, createTask, updateTaskCompletion, deleteTaskApi } from './api';

import { Header } from '../ui/components/Header';
import { StressMeter } from '../ui/components/StressMeter';
import { TaskForm } from '../ui/components/TaskForm';
import { TaskList } from '../ui/components/TaskList';

function App() {
  const [tasks, setTasks] = useState<AcademicTask[]>([]);
  const [activeTab, setActiveTab] = useState<'today' | 'all'>('today');

  // Form states
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState<TaskCategory>('Assignment');
  const [dueDate, setDueDate] = useState('');
  const [effortHours, setEffortHours] = useState('');

  // Initial load from local backend
  useEffect(() => {
    fetchTasks()
      .then(setTasks)
      .catch(err => console.error("Could not fetch network tasks (is json-server running?)", err));
  }, []);

  const handleAddTask = async (e: FormEvent) => {
    e.preventDefault();
    if (!title || !dueDate || !effortHours) return;

    const newTask: AcademicTask = {
      id: Date.now().toString() + Math.random().toString(36).substring(2, 9),
      title,
      category,
      dueDate,
      effortHours: parseFloat(effortHours),
      completed: false,
      priorityScore: calculatePriority(dueDate, parseFloat(effortHours))
    };

    // Optimistic UI update
    setTasks([...tasks, newTask]);
    setTitle('');
    setDueDate('');
    setEffortHours('');

    try {
      await createTask(newTask);
    } catch(err) {
      console.error("Failed to sync new task", err);
    }
  };

  const handleToggleCompletion = async (id: string) => {
    const task = tasks.find(t => t.id === id);
    if (!task) return;
    
    setTasks(tasks.map(t => 
      t.id === id ? { ...t, completed: !t.completed } : t
    ));

    try {
      await updateTaskCompletion(id, !task.completed);
    } catch(err) {
      console.error("Failed to sync task completion", err);
    }
  };

  const handleDeleteTask = async (id: string) => {
    setTasks(tasks.filter(t => t.id !== id));
    
    try {
      await deleteTaskApi(id);
    } catch (err) {
      console.error("Failed to delete task", err);
    }
  };

  const getPriorityClass = (task: AcademicTask) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const dueDateObj = new Date(task.dueDate);
    dueDateObj.setHours(0, 0, 0, 0);
    
    const diffDays = Math.ceil((dueDateObj.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));

    if (diffDays < 0) return 'urgent'; 
    if (diffDays <= 1 && task.effortHours >= 3) return 'urgent'; 
    if (diffDays <= 1) return 'high'; 
    if (diffDays <= 3) return 'high';
    if (diffDays <= 5 && task.effortHours >= 5) return 'high';

    return 'normal';
  };

  const sortedTasks = sortTasksByPriority(tasks.filter(t => !t.completed));
  // Today's priorities: top 3 most important or anything due <= 3 days
  const todayTasks = sortedTasks.filter((t, i) => {
    const diffDays = Math.ceil((new Date(t.dueDate).getTime() - new Date().setHours(0,0,0,0)) / (1000 * 60 * 60 * 24));
    return i < 3 || diffDays <= 3;
  });

  const displayTasks = activeTab === 'today' ? todayTasks : sortedTasks;

  return (
    <div className="app-container">
      <Header />

      <div className="main-layout">
        <div className="left-panel">
          <StressMeter tasks={tasks} />
          
          <TaskForm 
            title={title} setTitle={setTitle}
            category={category} setCategory={setCategory}
            dueDate={dueDate} setDueDate={setDueDate}
            effortHours={effortHours} setEffortHours={setEffortHours}
            onSubmit={handleAddTask}
          />
        </div>

        <TaskList 
          activeTab={activeTab} setActiveTab={setActiveTab}
          tasks={tasks} displayTasks={displayTasks}
          onToggleCompletion={handleToggleCompletion}
          onDelete={handleDeleteTask}
          getPriorityClass={getPriorityClass}
        />
      </div>
    </div>
  );
}

export default App;
