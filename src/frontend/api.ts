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

export async function updateTaskCompletion(id: string, completed: boolean): Promise<void> {
  await fetch(`/api/tasks/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ completed })
  });
}

export async function deleteTaskApi(id: string): Promise<void> {
  await fetch(`/api/tasks/${id}`, { method: 'DELETE' });
}
