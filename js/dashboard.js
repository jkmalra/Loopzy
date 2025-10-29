
const habits = [
  { id: 1, name: 'Morning Meditation', completed: true, streak: 5 },
  { id: 2, name: 'Read 20 Pages', completed: false, streak: 12 },
  { id: 3, name: 'Workout', completed: true, streak: 3 }
];

const tasks = [
  { id: 1, name: 'Prepare presentation', priority: 'high', completed: false },
  { id: 2, name: 'Email client', priority: 'medium', completed: true },
  { id: 3, name: 'Review code PR', priority: 'low', completed: false }
];

function renderItems() {
  const habitList = document.getElementById('habit-list');
  const taskList = document.getElementById('task-list');

  habits.forEach(h => {
    const li = document.createElement('li');
    li.innerHTML = \`
      <label><input type="checkbox" \${h.completed ? "checked" : ""} disabled> \${h.name}</label>
      <span>\${h.streak}🔥</span>
    \`;
    habitList.appendChild(li);
  });

  tasks.forEach(t => {
    const li = document.createElement('li');
    li.innerHTML = \`
      <label><input type="checkbox" \${t.completed ? "checked" : ""} disabled> \${t.name}</label>
      <span style="text-transform: capitalize;">\${t.priority}</span>
    \`;
    taskList.appendChild(li);
  });

  const total = habits.length + tasks.length;
  const done = habits.filter(h => h.completed).length + tasks.filter(t => t.completed).length;
  const percent = Math.round((done / total) * 100);
  document.getElementById('progress-percentage').textContent = percent + '%';
  document.getElementById('progress-bar').style.width = percent + '%';
}

function renderWeekOverview() {
  const container = document.getElementById('week-overview');
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  days.forEach((day, index) => {
    const div = document.createElement('div');
    const percent = index <= 2 ? '100%' : '0%';
    div.innerHTML = \`
      <div>\${day}</div>
      <div style="height: 8px; background: \${index <= 2 ? 'indigo' : '#e0e0e0'}; border-radius: 4px;"></div>
      <div>\${percent}</div>
    \`;
    container.appendChild(div);
  });
}

renderItems();
renderWeekOverview();
