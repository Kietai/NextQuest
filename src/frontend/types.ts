export type TaskCategory = 'Exam' | 'Assignment' | 'Lab' | 'Project' | 'Reading' | 'Other';

export interface AcademicTask {
  id: string;
  title: string;
  category: TaskCategory;
  dueDate: string; // ISO format YYYY-MM-DD
  effortHours: number;
  completed: boolean;
  priorityScore: number;
}

/**
 * Calculates a priority score.
 * Lower score = Higher priority.
 * Formula concept: 
 * Score = (Days Until Due * WeightFactor) - EffortHours
 * If task is due today or overdue, it shoots to top priority.
 */
export function calculatePriority(dueDateStr: string, effortHours: number): number {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  const dueDate = new Date(dueDateStr);
  dueDate.setHours(0, 0, 0, 0);
  
  const diffTime = dueDate.getTime() - today.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  // Base day factor: each day away adds 24 points to the score
  const daysFactor = diffDays * 24; 
  
  // Effort offsets the score (more effort makes it slightly lower score = higher priority)
  // Multiplier depends. If something takes 10 hours, we want to start it earlier.
  // We'll subtract (effortHours * 2) from score.
  
  let score = daysFactor - (effortHours * 2);
  
  // If overdue, clamp it super low
  if (diffDays < 0) {
    score = -1000 + diffDays; 
  }
  
  // If due today, super high urgency
  if (diffDays === 0) {
    score = -500 - effortHours;
  }

  return score;
}

export function sortTasksByPriority(tasks: AcademicTask[]): AcademicTask[] {
  return [...tasks].sort((a, b) => a.priorityScore - b.priorityScore);
}
