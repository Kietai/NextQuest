import type { AcademicTask } from '../../frontend/types';

export function StressMeter({ tasks }: { tasks: AcademicTask[] }) {
  const calculateStressLevel = (tasks: AcademicTask[]) => {
    const activeTasks = tasks.filter(t => !t.completed);
    if (activeTasks.length === 0) return 0;
  
    let score = 0;
    const today = new Date();
    today.setHours(0,0,0,0);
  
    activeTasks.forEach(t => {
      score += 5; // Base score per active task
      score += t.effortHours * 2.5; // Effort multiplier
      
      const dueDate = new Date(t.dueDate);
      dueDate.setHours(0,0,0,0);
      const diffDays = Math.ceil((dueDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
      
      if (diffDays < 0) score += 35; // Overdue
      else if (diffDays === 0) score += 25; // Due today
      else if (diffDays <= 2) score += 15; // Due very soon
      else if (diffDays <= 5) score += 5;
    });
  
    return Math.min(100, Math.max(0, score));
  };
  
  const stressLevel = calculateStressLevel(tasks);
  let stressText = "Zen Mode";
  let stressColor = "rgba(255,255,255,0.4)";
  if (stressLevel > 0) { stressText = "Manageable"; stressColor = "#10b981"; }
  if (stressLevel > 40) { stressText = "Elevated"; stressColor = "#f59e0b"; }
  if (stressLevel > 75) { stressText = "Critical"; stressColor = "#ef4444"; }

  return (
    <div className="card glass" style={{ padding: '1rem 1.25rem', marginBottom: '1rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', alignItems: 'center' }}>
        <h3 style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '1px' }}>Stress Level</h3>
        <span style={{ fontSize: '0.8rem', color: stressColor, fontWeight: 500, letterSpacing: '0.5px' }}>
          {stressText} ({Math.round(stressLevel)}%)
        </span>
      </div>
      <div style={{ height: '6px', background: 'rgba(255,255,255,0.1)', borderRadius: '3px', overflow: 'hidden' }}>
        <div style={{ 
          width: `${stressLevel}%`, 
          height: '100%', 
          background: stressColor, 
          transition: 'width 0.5s ease', 
          boxShadow: `0 0 10px ${stressColor}` 
        }} />
      </div>
    </div>
  );
}
