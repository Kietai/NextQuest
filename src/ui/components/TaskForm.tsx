import type { FormEvent } from 'react';
import { Plus } from 'lucide-react';
import type { TaskCategory } from '../../frontend/types';

interface TaskFormProps {
  title: string;
  setTitle: (val: string) => void;
  category: TaskCategory;
  setCategory: (val: TaskCategory) => void;
  dueDate: string;
  setDueDate: (val: string) => void;
  effortHours: string;
  setEffortHours: (val: string) => void;
  onSubmit: (e: FormEvent) => void;
}

export function TaskForm({
  title, setTitle, category, setCategory, dueDate, setDueDate, effortHours, setEffortHours, onSubmit
}: TaskFormProps) {
  return (
    <div className="card glass">
      <h2 style={{ marginBottom: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>Add New Task</h2>
      <form onSubmit={onSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        
        <div className="form-group">
          <label>Task Title</label>
          <input 
            type="text" 
            placeholder="e.g., Physics Lab" 
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Category</label>
          <select value={category} onChange={e => setCategory(e.target.value as TaskCategory)}>
            <option value="Assignment">Assignment</option>
            <option value="Exam">Exam</option>
            <option value="Lab">Lab</option>
            <option value="Project">Project</option>
            <option value="Reading">Reading</option>
            <option value="Other">Other</option>
          </select>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          <div className="form-group">
            <label>Due Date</label>
            <input 
              type="date" 
              value={dueDate}
              onChange={e => setDueDate(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Effort (Hr)</label>
            <input 
              type="number" 
              min="0.5" step="0.5" 
              placeholder="1"
              value={effortHours}
              onChange={e => setEffortHours(e.target.value)}
            />
          </div>
        </div>

        <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '0.5rem' }}>
          <Plus size={18} style={{ marginRight: '0.5rem' }}/> Add to Workload
        </button>
      </form>
    </div>
  );
}
