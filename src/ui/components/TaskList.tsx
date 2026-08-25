import { Calendar, Clock, CheckCircle2, Circle, Trash2 } from 'lucide-react';
import type { AcademicTask } from '../../frontend/types';

interface TaskListProps {
  activeTab: 'today' | 'all';
  setActiveTab: (val: 'today' | 'all') => void;
  tasks: AcademicTask[];
  displayTasks: AcademicTask[];
  onToggleCompletion: (id: string) => void;
  onDelete: (id: string) => void;
  getPriorityClass: (task: AcademicTask) => string;
}

export function TaskList({
  activeTab, setActiveTab, tasks, displayTasks, onToggleCompletion, onDelete, getPriorityClass
}: TaskListProps) {
  return (
    <div className="right-panel">
      <div className="tabs" style={{ marginBottom: '1rem' }}>
        <button 
          className={`tab ${activeTab === 'today' ? 'active' : ''}`}
          onClick={() => setActiveTab('today')}
        >
          Priority Focus
        </button>
        <button 
          className={`tab ${activeTab === 'all' ? 'active' : ''}`}
          onClick={() => setActiveTab('all')}
        >
          All Tasks ({tasks.filter(t => !t.completed).length})
        </button>
      </div>

      <div className="task-scroll-area">
        <div className="task-list">
          {displayTasks.length === 0 ? (
            <div className="empty-state glass">
              <CheckCircle2 size={48} color="var(--primary-color)" />
              <h3>All caught up!</h3>
              <p>You have no urgent tasks to focus on.</p>
            </div>
          ) : (
            displayTasks.map(task => (
              <div key={task.id} className={`task-item glass ${getPriorityClass(task)}`}>
                <div className="task-item-content">
                  <div className="task-title">
                    {task.title}
                    <span className="task-badge">{task.category}</span>
                  </div>
                  <div className="task-meta">
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                      <Calendar size={14} /> 
                      {new Date(task.dueDate).toLocaleDateString(undefined, { month: 'short', day: 'numeric'})}
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                      <Clock size={14} /> 
                      {task.effortHours}h effort
                    </span>
                  </div>
                </div>

                <div className="task-actions">
                  <button 
                    className="btn-icon" 
                    onClick={() => onToggleCompletion(task.id)}
                    title="Mark Complete"
                  >
                    <Circle size={24} />
                  </button>
                  <button 
                    className="btn-icon delete-btn" 
                    onClick={() => onDelete(task.id)}
                    title="Delete Task"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
        
        {/* Show completed tasks separately if we are in 'all' view */}
        {activeTab === 'all' && tasks.filter(t => t.completed).length > 0 && (
          <div style={{ marginTop: '2rem' }}>
            <h3 style={{ fontSize: '1rem', color: 'var(--text-secondary)', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Completed</h3>
            <div className="task-list">
              {tasks.filter(t => t.completed).map(task => (
                <div key={task.id} className="task-item glass completed-task">
                  <div className="task-item-content">
                    <div className="task-title" style={{ textDecoration: 'line-through', opacity: 0.7 }}>
                      {task.title}
                      <span className="task-badge" style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.1)' }}>{task.category}</span>
                    </div>
                  </div>
                  <div className="task-actions">
                    <button className="btn-icon" onClick={() => onToggleCompletion(task.id)}>
                      <CheckCircle2 size={24} color="var(--primary-color)" />
                    </button>
                    <button className="btn-icon delete-btn" onClick={() => onDelete(task.id)}>
                      <Trash2 size={20} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
